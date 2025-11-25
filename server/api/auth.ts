export default defineEventHandler(async (event) => {
  const method = event.node.req.method;
  
  try {
    switch (method) {
      case 'POST':
        return await handleLogin(event);
      case 'GET':
        return await handleVerifyToken(event);
      case 'DELETE':
        return await handleLogout(event);
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

// 模拟用户数据库
const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123', // 实际应用中应该使用哈希密码
    fullName: '管理员',
    role: 'admin',
    avatar: '/images/avatars/admin.jpg',
    isActive: true
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    password: 'user123',
    fullName: '普通用户',
    role: 'user',
    avatar: '/images/avatars/user1.jpg',
    isActive: true
  }
];

// 模拟会话存储
const sessions: Record<string, {
  userId: number;
  username: string;
  createdAt: string;
  expiresAt: string;
}> = {};

// 生成JWT令牌（简化版）
function generateToken(user: any): string {
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
    exp: Date.now() + 24 * 60 * 60 * 1000 // 24小时过期
  };
  
  // 简单的base64编码（实际应用中应该使用真正的JWT库）
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

// 验证JWT令牌
function verifyToken(token: string): any {
  try {
    const payload = JSON.parse(Buffer.from(token, 'base64').toString());
    
    // 检查过期时间
    if (payload.exp < Date.now()) {
      return null;
    }
    
    return payload;
  } catch (error) {
    return null;
  }
}

// 登录处理
async function handleLogin(event: any) {
  const body = await readBody(event);
  const { username, password } = body;
  
  if (!username || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Username and password are required'
    });
  }
  
  // 验证用户凭据
  const user = users.find(u => u.username === username);
  if (!user || user.password !== password) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    });
  }
  
  // 生成token
  const token = generateToken(user);
  
  // 更新会话
  sessions[token] = {
    userId: user.id,
    username: user.username,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24小时过期
  };
  
  return {
    success: true,
    data: {
      token,
      user: {
        id: user.id,
        username: user.username,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      }
    },
    message: 'Login successful'
  };
}

// token验证处理
async function handleVerifyToken(event: any) {
  const query = getQuery(event);
  const { token } = query;
  
  if (!token) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Token is required'
    });
  }
  
  const session = sessions[token as string];
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid token'
    });
  }
  
  // 检查token是否过期
  if (new Date() > new Date(session.expiresAt)) {
    delete sessions[token as string];
    throw createError({
      statusCode: 401,
      statusMessage: 'Token has expired'
    });
  }
  
  const user = users.find(u => u.id === session.userId);
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    });
  }
  
  return {
    success: true,
    data: {
      token,
      user: {
        id: user.id,
        username: user.username,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        avatar: user.avatar
      }
    },
    message: 'Token is valid'
  };
}

// 登出处理
async function handleLogout(event: any) {
  const body = await readBody(event);
  const { token } = body;
  
  if (!token) {
    const query = getQuery(event);
    const tokenFromQuery = query.token;
    if (tokenFromQuery) {
      delete sessions[tokenFromQuery as string];
      return {
        success: true,
        message: 'Logout successful'
      };
    }
    throw createError({
      statusCode: 400,
      statusMessage: 'Token is required'
    });
  }
  
  delete sessions[token];
  
  return {
    success: true,
    message: 'Logout successful'
  };
}