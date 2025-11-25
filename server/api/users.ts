export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  
  try {
    switch (method) {
      case 'GET':
        return await handleGet(event);
      case 'POST':
        return await handlePost(event);
      case 'PUT':
        return await handlePut(event);
      case 'DELETE':
        return await handleDelete(event);
      default:
        throw createError({
          statusCode: 405,
          statusMessage: 'Method Not Allowed'
        });
    }
  } catch (error: any) {
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.message || 'Internal Server Error'
    });
  }
});

// 模拟用户数据
const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    fullName: '管理员',
    role: 'admin',
    avatar: '/images/avatars/admin.jpg',
    isActive: true,
    createdAt: '2024-01-01T00:00:00Z',
    lastLogin: '2024-01-15T10:30:00Z',
    profile: {
      bio: '系统管理员',
      location: '北京',
      website: 'https://example.com',
      socialLinks: {
        twitter: '@admin',
        github: 'admin'
      }
    }
  },
  {
    id: 2,
    username: 'john_doe',
    email: 'john@example.com',
    fullName: 'John Doe',
    role: 'user',
    avatar: '/images/avatars/john.jpg',
    isActive: true,
    createdAt: '2024-01-05T00:00:00Z',
    lastLogin: '2024-01-14T15:45:00Z',
    profile: {
      bio: '前端开发工程师',
      location: '上海',
      website: 'https://johndoe.com',
      socialLinks: {
        twitter: '@johndoe',
        github: 'johndoe'
      }
    }
  },
  {
    id: 3,
    username: 'jane_smith',
    email: 'jane@example.com',
    fullName: 'Jane Smith',
    role: 'editor',
    avatar: '/images/avatars/jane.jpg',
    isActive: false,
    createdAt: '2024-01-10T00:00:00Z',
    lastLogin: '2024-01-12T09:20:00Z',
    profile: {
      bio: '内容编辑',
      location: '广州',
      website: 'https://janesmith.com',
      socialLinks: {
        twitter: '@janesmith',
        github: 'janesmith'
      }
    }
  }
];

// GET 请求处理
async function handleGet(event: any) {
  const query = getQuery(event);
  const { id, username, role, search, page = 1, limit = 10 } = query;
  
  let result = [...users];
  
  // 根据ID查询单个用户
  if (id) {
    const user = users.find(u => u.id === parseInt(id as string));
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found'
      });
    }
    return {
      success: true,
      data: user,
      message: 'User retrieved successfully'
    };
  }
  
  // 根据用户名查询
  if (username) {
    result = result.filter(u => u.username.toLowerCase().includes((username as string).toLowerCase()));
  }
  
  // 根据角色筛选
  if (role) {
    result = result.filter(u => u.role === role);
  }
  
  // 根据搜索关键词筛选
  if (search) {
    const searchTerm = (search as string).toLowerCase();
    result = result.filter(u => 
      u.username.toLowerCase().includes(searchTerm) ||
      u.fullName.toLowerCase().includes(searchTerm) ||
      u.email.toLowerCase().includes(searchTerm)
    );
  }
  
  // 分页处理
  const pageNum = parseInt(page as string);
  const limitNum = parseInt(limit as string);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;
  const paginatedUsers = result.slice(startIndex, endIndex);
  
  return {
    success: true,
    data: {
      users: paginatedUsers,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: result.length,
        pages: Math.ceil(result.length / limitNum)
      }
    },
    message: 'Users retrieved successfully'
  };
}

// POST 请求处理
async function handlePost(event: any) {
  const body = await readBody(event);
  
  if (!body.username || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username and email are required'
    });
  }
  
  // 检查用户名是否已存在
  const existingUser = users.find(u => u.username === body.username);
  if (existingUser) {
    throw createError({
      statusCode: 409,
      statusMessage: 'Username already exists'
    });
  }
  
  const newUser = {
    id: users.length + 1,
    username: body.username,
    email: body.email,
    fullName: body.fullName || body.username,
    role: body.role || 'user',
    avatar: body.avatar || '/images/avatars/default.jpg',
    isActive: body.isActive !== undefined ? body.isActive : true,
    createdAt: new Date().toISOString(),
    lastLogin: null as string | null,
    profile: {
      bio: body.bio || '',
      location: body.location || '',
      website: body.website || '',
      socialLinks: body.socialLinks || {}
    }
  };
  
  // 确保 users 数组存在且为数组类型
  if (!Array.isArray(users)) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error: users data corrupted'
    });
  }
  // users.push(newUser);
  
  return {
    success: true,
    data: newUser,
    message: 'User created successfully'
  };
}

// PUT 请求处理
async function handlePut(event: any) {
  const query = getQuery(event);
  const { id } = query;
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required'
    });
  }
  
  const body = await readBody(event);
  const userIndex = users.findIndex(u => u.id === parseInt(id as string));
  
  if (userIndex === -1) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    });
  }
  
  const existingUser = users[userIndex];
  const updatedUser = {
    ...existingUser,
    ...body,
    id: existingUser.id,
    createdAt: existingUser.createdAt,
    lastLogin: existingUser.lastLogin
  };
  
  users[userIndex] = updatedUser;
  
  return {
    success: true,
    data: updatedUser,
    message: 'User updated successfully'
  };
}

// DELETE 请求处理
async function handleDelete(event: any) {
  const query = getQuery(event);
  const { id } = query;
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required'
    });
  }
  
  const userIndex = users.findIndex(u => u.id === parseInt(id as string));
  
  if (userIndex === -1) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    });
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  
  return {
    success: true,
    data: deletedUser,
    message: 'User deleted successfully'
  };
}