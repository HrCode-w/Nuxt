<template>
  <header class="app-header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <h1>我们的平台</h1>
        </div>
        <nav class="navigation">
          <ul>
            <li><a href="/">首页</a></li>
            <li><a href="/about">关于我们</a></li>
            <li><a href="/products/1">产品</a></li>
            <li><a href="/more">更多</a></li>
            <li><a href="/api-test">API测试</a></li>

          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// 头部组件逻辑
</script>

<style scoped>
.app-header {
  background: #34495e;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #ecf0f1;
}

.navigation ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.navigation a {
  color: #bdc3c7;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

.navigation a:hover {
  color: #3498db;
  background: rgba(52, 152, 219, 0.1);
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    gap: 1rem;
  }
  
  .navigation ul {
    gap: 1rem;
  }
  
  .navigation a {
    padding: 0.5rem;
  }
}
</style>