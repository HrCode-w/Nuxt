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

// 模拟产品数据
const products = [
  {
    id: 1,
    name: '高性能产品A',
    description: '这是一个高性能的工业产品，具有优异的性能表现',
    price: 999.99,
    category: '工业设备',
    image: '/images/product1.jpg',
    inStock: true,
    rating: 4.5,
    specifications: {
      material: '铝合金',
      weight: '2.5kg',
      dimensions: '200x150x80mm',
      power: '100W'
    },
    applications: ['制造业', '自动化', '精密加工'],
    advantages: ['高精度', '长寿命', '低能耗']
  },
  {
    id: 2,
    name: '智能产品B',
    description: '智能化产品，集成了先进的AI技术',
    price: 1599.99,
    category: '智能设备',
    image: '/images/product2.jpg',
    inStock: true,
    rating: 4.8,
    specifications: {
      material: '不锈钢',
      weight: '3.2kg',
      dimensions: '250x200x100mm',
      power: '150W'
    },
    applications: ['智能制造', '物联网', '自动化控制'],
    advantages: ['智能化', '自适应', '远程控制']
  },
  {
    id: 3,
    name: '环保产品C',
    description: '环保节能产品，符合绿色制造标准',
    price: 799.99,
    category: '环保设备',
    image: '/images/product3.jpg',
    inStock: false,
    rating: 4.3,
    specifications: {
      material: '可回收材料',
      weight: '1.8kg',
      dimensions: '180x120x60mm',
      power: '80W'
    },
    applications: ['环保产业', '清洁能源', '节能减排'],
    advantages: ['环保材料', '低能耗', '可循环']
  }
];

// GET 请求处理
async function handleGet(event: any) {
  const query = getQuery(event);
  const { id, category, search, page = 1, limit = 10 } = query;
  
  let result = [...products];
  
  // 根据ID查询单个产品
  if (id) {
    const product = products.find(p => p.id === parseInt(id as string));
    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found'
      });
    }
    return {
      success: true,
      data: product,
      message: 'Product retrieved successfully'
    };
  }
  
  // 根据分类筛选
  if (category) {
    result = result.filter(p => p.category.toLowerCase().includes((category as string).toLowerCase()));
  }
  
  // 根据搜索关键词筛选
  if (search) {
    const searchTerm = (search as string).toLowerCase();
    result = result.filter(p => 
      p.name.toLowerCase().includes(searchTerm) ||
      p.description.toLowerCase().includes(searchTerm) ||
      p.category.toLowerCase().includes(searchTerm)
    );
  }
  
  // 分页处理
  const pageNum = parseInt(page as string);
  const limitNum = parseInt(limit as string);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;
  const paginatedProducts = result.slice(startIndex, endIndex);
  
  return {
    success: true,
    data: {
      products: paginatedProducts,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: result.length,
        pages: Math.ceil(result.length / limitNum)
      }
    },
    message: 'Products retrieved successfully'
  };
}

// POST 请求处理
async function handlePost(event: any) {
  const body = await readBody(event);
  
  if (!body.name || !body.price) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and price are required'
    });
  }
  
  const newProduct = {
    id: products.length + 1,
    name: body.name,
    description: body.description || '',
    price: parseFloat(body.price),
    category: body.category || '其他',
    image: body.image || '/images/default.jpg',
    inStock: body.inStock !== undefined ? body.inStock : true,
    rating: body.rating || 0,
    specifications: body.specifications || {},
    applications: body.applications || [],
    advantages: body.advantages || []
  };
  
  products.push(newProduct);
  
  return {
    success: true,
    data: newProduct,
    message: 'Product created successfully'
  };
}

// PUT 请求处理
async function handlePut(event: any) {
  const query = getQuery(event);
  const { id } = query;
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Product ID is required'
    });
  }
  
  const body = await readBody(event);
  const productIndex = products.findIndex(p => p.id === parseInt(id as string));
  
  if (productIndex === -1) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    });
  }
  
  const updatedProduct = {
    ...products[productIndex],
    ...body,
    id: parseInt(id as string)
  };
  
  products[productIndex] = updatedProduct;
  
  return {
    success: true,
    data: updatedProduct,
    message: 'Product updated successfully'
  };
}

// DELETE 请求处理
async function handleDelete(event: any) {
  const query = getQuery(event);
  const { id } = query;
  
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Product ID is required'
    });
  }
  
  const productIndex = products.findIndex(p => p.id === parseInt(id as string));
  
  if (productIndex === -1) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found'
    });
  }
  
  const deletedProduct = products.splice(productIndex, 1)[0];
  
  return {
    success: true,
    data: deletedProduct,
    message: 'Product deleted successfully'
  };
}