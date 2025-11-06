<!-- 简约美观的关于页面 -->
<template>
  <div class="about-container">
    <!-- 页面头部 -->
    <header class="about-header">
      <div class="header-content">
        <h1 class="title">关于我们</h1>
        <p class="subtitle">探索我们的故事与使命</p>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="about-main">
      <div class="content-grid">
        <!-- 公司介绍 -->
        <section class="intro-section">
          <div class="section-header">
            <h2>我们的故事</h2>
            <div class="divider"></div>
          </div>
          <div class="intro-content">
            <p>我们是一家致力于创新与技术发展的团队，成立于2020年。我们的使命是通过先进的技术解决方案，为客户创造真正的价值。</p>
            <p>凭借多年的行业经验和专业的技术实力，我们不断突破创新，为客户提供最优质的服务。</p>
          </div>
        </section>

        <!-- 核心价值 -->
        <section class="values-section">
          <div class="section-header">
            <h2>核心价值</h2>
            <div class="divider"></div>
          </div>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">💡</div>
              <h3>创新</h3>
              <p>持续探索新技术，推动行业进步</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🤝</div>
              <h3>合作</h3>
              <p>与客户建立长期共赢的合作关系</p>
            </div>
            <div class="value-card">
              <div class="value-icon">🎯</div>
              <h3>专注</h3>
              <p>专注于提供最优质的解决方案</p>
            </div>
          </div>
        </section>

        <!-- 团队介绍 -->
        <section class="team-section">
          <div class="section-header">
            <h2>我们的团队</h2>
            <div class="divider"></div>
          </div>
          <div class="team-content">
            <p>我们拥有一支经验丰富、充满激情的专业团队。团队成员来自不同领域，具备多元化的技能和背景。</p>
            <div class="team-stats">
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">专业成员</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">5</span>
                <span class="stat-label">年经验</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">100+</span>
                <span class="stat-label">成功项目</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <!-- 页脚 -->
    <footer class="about-footer">
      <div class="footer-content">
        <p>© 2024 我们的公司. 保留所有权利.</p>
        <div class="contact-info">
          <span>联系我们: info@example.com</span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts" setup >
definePageMeta({
  name: 'AboutPage',
  layout: 'default',
})

</script>
<style scoped>
.about-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* 头部样式 */
.about-header {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 80px 20px;
  text-align: center;
  color: white;
}

.header-content .title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-content .subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
}

/* 主要内容样式 */
.about-main {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  gap: 60px;
}

/* 区块样式 */
.intro-section,
.values-section,
.team-section {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  margin: 0 auto;
  border-radius: 2px;
}

.intro-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
  text-align: center;
  margin-bottom: 1rem;
}

/* 价值卡片样式 */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.value-card {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.value-card p {
  color: #666;
  line-height: 1.6;
}

/* 团队统计样式 */
.team-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 15px;
  color: white;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

/* 页脚样式 */
.about-footer {
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-info {
  opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header-content .title {
    font-size: 2rem;
  }
  
  .header-content .subtitle {
    font-size: 1rem;
  }
  
  .about-main {
    padding: 40px 20px;
  }
  
  .intro-section,
  .values-section,
  .team-section {
    padding: 30px 20px;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .team-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .about-header {
    padding: 60px 20px;
  }
  
  .header-content .title {
    font-size: 1.8rem;
  }
  
  .intro-content p {
    font-size: 1rem;
  }
}
</style>
