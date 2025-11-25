<template>
  <div class="custom-layout">
    <!-- <AppHeader /> -->
    
    <div class="layout-container">
      <!-- 左侧边栏 -->
      <aside class="sidebar">
        <div class="sidebar-content">
          <h3>导航菜单</h3>
          <nav class="sidebar-nav">
            <ul>
              <li><a href="/">首页</a></li>
              <li><a href="/about">关于我们</a></li>
              <li><a href="/products">产品</a></li>
              <li><a href="/more">更多</a></li>
            </ul>
          </nav>
          
          <div class="sidebar-widget">
            <h4>快速链接</h4>
            <ul>
              <li><a href="/products/1">产品详情</a></li>
              <li><a href="/about">公司介绍</a></li>
              <li><a href="/more">联系我们</a></li>
            </ul>
          </div>
        </div>
      </aside>
      
      <!-- 右侧主内容区 -->
      <main class="main-content">
        <slot />

      </main>
    </div>
    
  </div>
</template>

<style scoped>
.custom-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 0;
  flex: 1;
  min-height: calc(100vh - 140px);
}

.sidebar {
  background: #f8f9fa;
  border-right: 1px solid #e9ecef;
  padding: 2rem 1.5rem;
  height: 100%;
  position: sticky;
  top: 80px;
  align-self: start;
}

.sidebar-content h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
}

.sidebar-nav li {
  margin-bottom: 0.5rem;
}

.sidebar-nav a {
  display: block;
  padding: 0.75rem 1rem;
  color: #495057;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.sidebar-nav a:hover {
  background: #e9ecef;
  color: #007bff;
}

.sidebar-widget {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.sidebar-widget h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.sidebar-widget ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-widget li {
  margin-bottom: 0.5rem;
}

.sidebar-widget a {
  color: #6c757d;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.sidebar-widget a:hover {
  color: #007bff;
}

.main-content {
  padding: 2rem;
  background: white;
  min-height: 100%;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .layout-container {
    grid-template-columns: 250px 1fr;
  }
  
  .sidebar {
    padding: 1.5rem 1rem;
  }
  
  .main-content {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .layout-container {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    position: static;
    border-right: none;
    border-bottom: 1px solid #e9ecef;
  }
  
  .sidebar-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .sidebar-nav ul {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .sidebar-nav li {
    margin-bottom: 0;
  }
}
</style>
