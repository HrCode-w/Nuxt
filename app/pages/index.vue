<!-- 现代化首页 -->
<template>
  <div class="home-container">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            欢迎来到
            <span class="gradient-text">我们的平台</span>
          </h1>
          <p class="hero-subtitle">
            探索无限可能，体验卓越服务。我们致力于为您提供最优质的解决方案，
            让技术与创新为您的生活带来更多便利。
          </p>
          <div class="hero-actions">
            <button class="btn-primary" @click="navigateToMore">
              了解更多
            </button>
            <button class="btn-secondary" @click="scrollToFeatures">
              查看特色
            </button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floating-cards">
            <div class="card card-1">💡</div>
            <div class="card card-2">🚀</div>
            <div class="card card-3">🌟</div>
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>向下滚动</span>
        <div class="arrow">↓</div>
      </div>
    </section>

    <!-- 特色功能区域 -->
    <section class="features-section" ref="featuresSection">
      <div class="container">
        <div class="section-header">
          <h2>核心特色</h2>
          <p>探索我们提供的卓越功能</p>
          <div class="divider"></div>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3>高性能</h3>
            <p>优化的架构设计，确保系统运行流畅，响应迅速</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>安全可靠</h3>
            <p>多层安全防护机制，保障您的数据安全与隐私</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3>跨平台</h3>
            <p>支持多种设备和平台，随时随地享受服务</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3>持续更新</h3>
            <p>定期功能更新和技术优化，保持领先地位</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 统计数据区域 -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number" data-count="1000">0</div>
            <div class="stat-label">满意客户</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="500">0</div>
            <div class="stat-label">成功项目</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="99">0</div>
            <div class="stat-label">正常运行率</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-count="24">0</div>
            <div class="stat-label">小时支持</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 行动号召区域 -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>准备好开始了吗？</h2>
          <p>立即加入我们，体验卓越的服务</p>
          <button class="btn-primary large" @click="navigateToAbout">
            立即开始
          </button>
        </div>
      </div>
    </section>

    <!-- 警告信息 -->
    <div class="alert-container">
      <Alert message="欢迎访问我们的网站！如有任何问题，请随时联系我们。" type="info" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const featuresSection = ref<HTMLElement>()

definePageMeta({
  name: 'IndexPage',
  layout: 'default',
})

const navigateToAbout = () => {
  router.push('/about')
}
const navigateToMore=()=>{
    router.push('/more')
}

const scrollToFeatures = () => {
  if (featuresSection.value) {
    featuresSection.value.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  console.log('首页组件挂载完成')
  
  // 数字动画效果
  const animateNumbers = () => {
    const counters = document.querySelectorAll('.stat-number')
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count') || '0')
      const increment = target / 100
      let current = 0
      
      const updateCounter = () => {
        if (current < target) {
          current += increment
          if (current > target) current = target
          counter.textContent = Math.floor(current).toString()
          setTimeout(updateCounter, 20)
        }
      }
      
      updateCounter()
    })
  }
  
  // 使用Intersection Observer来触发数字动画
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumbers()
        observer.unobserve(entry.target)
      }
    })
  })
  
  const statsSection = document.querySelector('.stats-section')
  if (statsSection) {
    observer.observe(statsSection)
  }
})
</script>

<style scoped>
.home-container {
  min-height: 100vh;
}

/* 英雄区域样式 */
.hero-section {
  min-height: 100vh;
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  background-image: url('/assets/1.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-text {
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(45deg, #ffd89b, #19547b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 12px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(45deg, #ffd89b, #19547b);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.btn-primary.large {
  padding: 15px 40px;
  font-size: 1.2rem;
}

/* 英雄区域视觉元素 */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-cards {
  position: relative;
  width: 300px;
  height: 300px;
}

.card {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  animation: float 3s ease-in-out infinite;
}

.card-1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.card-2 {
  bottom: 50px;
  left: 0;
  animation-delay: 1s;
}

.card-3 {
  bottom: 0;
  right: 0;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* 滚动指示器 */
.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  text-align: center;
  opacity: 0.7;
  animation: bounce 2s infinite;
}

.scroll-indicator span {
  display: block;
  margin-bottom: 5px;
  font-size: 0.9rem;
}

.arrow {
  font-size: 1.5rem;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-10px) translateX(-50%); }
  60% { transform: translateY(-5px) translateX(-50%); }
}

/* 特色区域样式 */
.features-section {
  padding: 100px 20px;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-header h2 {
  font-size: 2.8rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.section-header p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  margin: 0 auto;
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.feature-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 统计数据区域 */
.stats-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, #2c3e50, #3498db);
  color: white;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #ffd89b, #19547b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* 行动号召区域 */
.cta-section {
  padding: 100px 20px;
  background: #f8f9fa;
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 600;
}

.cta-content p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2.5rem;
}

/* 警告信息容器 */
.alert-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .floating-cards {
    width: 250px;
    height: 250px;
  }
  
  .card {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 2.2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .stat-number {
    font-size: 2.8rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-primary, .btn-secondary {
    width: 200px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
