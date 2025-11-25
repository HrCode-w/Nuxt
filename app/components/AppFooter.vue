<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>关于我们</h3>
          <p>我们致力于提供最优质的服务和产品，让技术与创新为您的生活带来更多便利。</p>
        </div>
        <div class="footer-section">
          <h3>联系方式</h3>
          <p>邮箱: contact@example.com</p>
          <p>电话: +86 123-4567-8900</p>
        </div>
        <div class="footer-section">
          <h3>快速链接</h3>
          <ul>
            <li><a href="/">首页</a></li>
            <li><a href="/about">关于我们</a></li>
            <li><a href="/products">产品</a></li>
            <li><a href="/more">更多</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 我们的平台. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 页脚组件逻辑
</script>

<style scoped>
.app-footer {
  background: #2c3e50;
  color: white;
  padding: 40px 0 20px;
  margin-top: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
}

.footer-section h3 {
  margin-bottom: 15px;
  color: #ecf0f1;
}

.footer-section p {
  line-height: 1.6;
  color: #bdc3c7;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #3498db;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 20px;
  text-align: center;
  color: #95a5a6;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .app-footer {
    padding: 30px 0 15px;
  }
}
</style>