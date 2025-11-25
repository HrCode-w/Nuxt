<template>
  <div class="api-test-container">
    <div class="header">
      <h1>API 接口测试</h1>
      <p>测试我们创建的RESTful API接口</p>
    </div>

    <div class="test-sections">
      <!-- 产品API测试 -->
      <div class="test-section">
        <h2>产品 API</h2>
        <div class="test-buttons">
          <button @click="testGetProducts" class="btn btn-primary">获取所有产品</button>
          <button @click="testGetProductById" class="btn btn-secondary">获取产品ID=1</button>
          <button @click="testSearchProducts" class="btn btn-info">搜索产品</button>
        </div>
        <div class="result" v-if="productsResult">
          <h3>结果：</h3>
          <pre>{{ JSON.stringify(productsResult, null, 2) }}</pre>
        </div>
      </div>

      <!-- 用户API测试 -->
      <div class="test-section">
        <h2>用户 API</h2>
        <div class="test-buttons">
          <button @click="testGetUsers" class="btn btn-primary">获取所有用户</button>
          <button @click="testGetUserById" class="btn btn-secondary">获取用户ID=1</button>
          <button @click="testCreateUser" class="btn btn-success">创建新用户</button>
        </div>
        <div class="result" v-if="usersResult">
          <h3>结果：</h3>
          <pre>{{ JSON.stringify(usersResult, null, 2) }}</pre>
        </div>
      </div>

      <!-- 认证API测试 -->
      <div class="test-section">
        <h2>认证 API</h2>
        <div class="auth-form">
          <div class="form-group">
            <label>用户名：</label>
            <input v-model="loginForm.username" type="text" placeholder="输入用户名">
          </div>
          <div class="form-group">
            <label>密码：</label>
            <input v-model="loginForm.password" type="password" placeholder="输入密码">
          </div>
        </div>
        <div class="test-buttons">
          <button @click="testLogin" class="btn btn-warning">登录</button>
          <button @click="testVerifyToken" class="btn btn-info">验证令牌</button>
          <button @click="testLogout" class="btn btn-danger">登出</button>
        </div>
        <div class="result" v-if="authResult">
          <h3>结果：</h3>
          <pre>{{ JSON.stringify(authResult, null, 2) }}</pre>
        </div>
      </div>

      <!-- 错误测试 -->
      <div class="test-section">
        <h2>错误处理测试</h2>
        <div class="test-buttons">
          <button @click="testNotFound" class="btn btn-danger">测试404错误</button>
          <button @click="testUnauthorized" class="btn btn-warning">测试401错误</button>
          <button @click="testValidationError" class="btn btn-secondary">测试验证错误</button>
        </div>
        <div class="result error" v-if="errorResult">
          <h3>错误结果：</h3>
          <pre>{{ JSON.stringify(errorResult, null, 2) }}</pre>
        </div>
      </div>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
      <p>正在加载...</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productsResult = ref(null)
const usersResult = ref(null)
const authResult = ref(null)
const errorResult = ref(null)
const loading = ref(false)
const authToken = ref('')

const loginForm = ref({
  username: 'admin',
  password: 'admin123'
})

// 产品API测试方法
const testGetProducts = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/products')
    productsResult.value = await response.json()
  } catch (error) {
    productsResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const testGetProductById = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/products?id=1')
    productsResult.value = await response.json()
  } catch (error) {
    productsResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const testSearchProducts = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/products?search=高性能')
    productsResult.value = await response.json()
  } catch (error) {
    productsResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

// 用户API测试方法
const testGetUsers = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/users')
    usersResult.value = await response.json()
  } catch (error) {
    usersResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const testGetUserById = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/users?id=1')
    usersResult.value = await response.json()
  } catch (error) {
    usersResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const testCreateUser = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'test_user',
        email: 'test@example.com',
        fullName: '测试用户',
        role: 'user'
      })
    })
    usersResult.value = await response.json()
  } catch (error) {
    usersResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

// 认证API测试方法
const testLogin = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginForm.value)
    })
    const result = await response.json()
    authResult.value = result
    
    if (result.success) {
      authToken.value = result.data.token
      // 保存令牌到localStorage
      localStorage.setItem('authToken', result.data.token)
    }
  } catch (error) {
    authResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const testVerifyToken = async () => {
  loading.value = true
  try {
    const token = authToken.value || localStorage.getItem('authToken')
    if (!token) {
      authResult.value = { error: '请先登录获取令牌' }
      return
    }
    
    const response = await fetch('/api/auth', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    authResult.value = await response.json()
  } catch (error) {
    authResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const testLogout = async () => {
  loading.value = true
  try {
    const token = authToken.value || localStorage.getItem('authToken')
    if (!token) {
      authResult.value = { error: '请先登录获取令牌' }
      return
    }
    
    const response = await fetch('/api/auth', {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    authResult.value = await response.json()
    
    // 清除令牌
    authToken.value = ''
    localStorage.removeItem('authToken')
  } catch (error) {
    authResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

// 错误测试方法
const testNotFound = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/products?id=999')
    if (!response.ok) {
      errorResult.value = {
        status: response.status,
        statusText: response.statusText,
        message: 'Product not found'
      }
    } else {
      errorResult.value = await response.json()
    }
  } catch (error) {
    errorResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const testUnauthorized = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/auth', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer invalid_token'
      }
    })
    if (!response.ok) {
      errorResult.value = {
        status: response.status,
        statusText: response.statusText,
        message: 'Invalid or expired token'
      }
    } else {
      errorResult.value = await response.json()
    }
  } catch (error) {
    errorResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

const testValidationError = async () => {
  loading.value = true
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // 缺少必需的字段
        fullName: '测试用户'
      })
    })
    if (!response.ok) {
      errorResult.value = {
        status: response.status,
        statusText: response.statusText,
        message: 'Username and email are required'
      }
    } else {
      errorResult.value = await response.json()
    }
  } catch (error) {
    errorResult.value = { error: error.message }
  } finally {
    loading.value = false
  }
}

// 页面元数据
definePageMeta({
  title: 'API 接口测试',
  description: '测试RESTful API接口功能'
})
</script>

<style scoped>
.api-test-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1.1rem;
  color: #7f8c8d;
}

.test-sections {
  display: grid;
  gap: 2rem;
}

.test-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
}

.test-section h2 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.test-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: #3498db;
  color: white;
}

.btn-primary:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #95a5a6;
  color: white;
}

.btn-secondary:hover {
  background: #7f8c8d;
  transform: translateY(-2px);
}

.btn-success {
  background: #27ae60;
  color: white;
}

.btn-success:hover {
  background: #229954;
  transform: translateY(-2px);
}

.btn-info {
  background: #16a085;
  color: white;
}

.btn-info:hover {
  background: #138d75;
  transform: translateY(-2px);
}

.btn-warning {
  background: #f39c12;
  color: white;
}

.btn-warning:hover {
  background: #e67e22;
  transform: translateY(-2px);
}

.btn-danger {
  background: #e74c3c;
  color: white;
}

.btn-danger:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.auth-form {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-group input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.result {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.result h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.result pre {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.9rem;
  line-height: 1.5;
}

.result.error pre {
  background: #e74c3c;
}

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-overlay p {
  color: white;
  font-size: 1.1rem;
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .api-test-container {
    padding: 1rem;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .test-section {
    padding: 1.5rem;
  }
  
  .test-buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
}
</style>