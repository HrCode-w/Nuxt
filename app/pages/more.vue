<template>
  <div class="more-page">
    <!-- 品牌介绍头部 -->
    <header class="brand-header">
      <div class="brand-background"></div>
      <div class="brand-content">
        <h1 class="brand-title">关于我们</h1>
        <p class="brand-subtitle">探索我们的品牌故事与使命</p>
      </div>
    </header>

    <!-- 品牌故事 -->
    <section class="brand-story">
      <div class="story-container">
        <div class="story-content">
          <h2 class="story-title">我们的故事</h2>
          <p class="story-text">
            我们是一家致力于创新与卓越的科技公司，成立于2018年。
            从最初的小团队发展到如今的行业领导者，我们始终坚持用户至上的理念，
            通过技术创新为用户创造价值。
          </p>
          <p class="story-text">
            我们的使命是让技术服务于生活，让创新改变世界。
            我们相信，通过不懈的努力和对品质的追求，
            我们能够为每一位用户提供最优质的产品和服务。
          </p>
        </div>
        <div class="story-image">
          <div class="image-placeholder">🏢</div>
        </div>
      </div>
    </section>

    <!-- 品牌价值 -->
    <section class="brand-values">
      <h2 class="values-title">我们的价值观</h2>
      <div class="values-grid">
        <div
          v-for="value in brandValues"
          :key="value.id"
          class="value-card"
          :style="{ borderLeftColor: value.color }"
        >
          <div class="value-icon" :style="{ color: value.color }">
            <component :is="value.icon" />
          </div>
          <h3 class="value-title">{{ value.title }}</h3>
          <p class="value-desc">{{ value.desc }}</p>
        </div>
      </div>
    </section>

    <!-- 团队介绍 -->
    <section class="team-section">
      <h2 class="team-title">我们的团队</h2>
      <div class="team-grid">
        <div
          v-for="member in teamMembers"
          :key="member.id"
          class="team-card"
        >
          <div class="member-avatar">
            <div class="avatar-placeholder">{{ member.avatar }}</div>
          </div>
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-role">{{ member.role }}</p>
            <p class="member-desc">{{ member.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系信息 -->
    <section class="contact-section">
      <h2 class="contact-title">联系我们</h2>
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-icon">📧</span>
          <span class="contact-text">contact@ourcompany.com</span>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <span class="contact-text">+86 400-123-4567</span>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <span class="contact-text">北京市朝阳区科技园区88号</span>
        </div>
      </div>
    </section>

    <!-- 底部信息 -->
    <footer class="footer">
      <div class="footer-content">
        <p class="footer-text">© 2024 我们的公司. 保留所有权利.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">隐私政策</a>
          <a href="#" class="footer-link">服务条款</a>
          <a href="#" class="footer-link">联系我们</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'

// 品牌价值观图标组件
const IconInnovation = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24', 
  class: 'w-6 h-6' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' 
  })
])

const IconQuality = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24', 
  class: 'w-6 h-6' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' 
  })
])

const IconTeamwork = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24', 
  class: 'w-6 h-6' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' 
  })
])

const IconCustomer = () => h('svg', { 
  fill: 'none', 
  stroke: 'currentColor', 
  viewBox: '0 0 24 24', 
  class: 'w-6 h-6' 
}, [
  h('path', { 
    'stroke-linecap': 'round', 
    'stroke-linejoin': 'round', 
    'stroke-width': 2, 
    d: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' 
  })
])
definePageMeta({
  name: 'MorePage',
  layout: 'default',
  // pageTransition: { name: 'slide-left' },
})
interface BrandValue {
  id: number
  title: string
  desc: string
  icon: any
  color: string
}

interface TeamMember {
  id: number
  name: string
  role: string
  desc: string
  avatar: string
}

const brandValues: BrandValue[] = [
  { 
    id: 1, 
    title: '创新', 
    desc: '持续探索新技术，推动行业进步', 
    icon: IconInnovation,
    color: '#3B82F6'
  },
  { 
    id: 2, 
    title: '品质', 
    desc: '追求卓越品质，确保用户满意', 
    icon: IconQuality,
    color: '#10B981'
  },
  { 
    id: 3, 
    title: '协作', 
    desc: '团队协作共赢，共同成长发展', 
    icon: IconTeamwork,
    color: '#F59E0B'
  },
  { 
    id: 4, 
    title: '用户至上', 
    desc: '以用户为中心，创造真正价值', 
    icon: IconCustomer,
    color: '#EF4444'
  }
]

const teamMembers: TeamMember[] = [
  { 
    id: 1, 
    name: '张明', 
    role: '创始人 & CEO', 
    desc: '拥有15年行业经验，致力于技术创新',
    avatar: '👨‍💼'
  },
  { 
    id: 2, 
    name: '李华', 
    role: '技术总监', 
    desc: '资深技术专家，带领团队攻克技术难题',
    avatar: '👩‍💻'
  },
  { 
    id: 3, 
    name: '王强', 
    role: '产品经理', 
    desc: '用户体验专家，专注于产品优化',
    avatar: '👨‍💼'
  },
  { 
    id: 4, 
    name: '赵丽', 
    role: '设计总监', 
    desc: '创意设计大师，打造精美视觉体验',
    avatar: '👩‍🎨'
  }
]



</script>

<style scoped>
.more-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
}

/* 品牌介绍头部 */
.brand-header {
  position: relative;
  padding: 80px 24px 60px;
  text-align: center;
  overflow: hidden;
}

.brand-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 300px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  z-index: 1;
}

.brand-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.brand-title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  letter-spacing: -0.5px;
}

.brand-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 16px 0 0;
  font-weight: 300;
  line-height: 1.5;
}

/* 品牌故事 */
.brand-story {
  padding: 80px 24px;
  background: white;
}

.story-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.story-content {
  padding-right: 40px;
}

.story-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 32px;
  line-height: 1.2;
}

.story-text {
  font-size: 1.1rem;
  color: #475569;
  margin: 0 0 24px;
  line-height: 1.8;
}

.story-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* 品牌价值 */
.brand-values {
  padding: 80px 24px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.values-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin: 0 0 60px;
}

.values-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.value-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  border-left: 4px solid;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.value-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
}

.value-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 12px;
}

.value-desc {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
}

/* 团队介绍 */
.team-section {
  padding: 80px 24px;
  background: white;
}

.team-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin: 0 0 60px;
}

.team-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.team-card {
  background: white;
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.member-avatar {
  margin-bottom: 20px;
}

.member-avatar .avatar-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  margin: 0 auto;
}

.member-name {
  font-size: 1.4rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 8px;
}

.member-role {
  font-size: 1rem;
  color: #3b82f6;
  font-weight: 500;
  margin: 0 0 16px;
}

.member-desc {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
}

/* 联系信息 */
.contact-section {
  padding: 80px 24px;
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
}

.contact-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 60px;
}

.contact-info {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: background 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.2);
}

.contact-icon {
  font-size: 1.5rem;
}

.contact-text {
  font-size: 1.1rem;
  font-weight: 500;
}

/* 底部信息 */
.footer {
  background: #1e293b;
  color: white;
  padding: 40px 24px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  color: #94a3b8;
  margin: 0 0 16px;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.footer-link {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #3b82f6;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .story-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .story-content {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .brand-header {
    padding: 60px 20px 40px;
  }
  
  .brand-title {
    font-size: 2.5rem;
  }
  
  .brand-subtitle {
    font-size: 1.1rem;
  }
  
  .brand-story,
  .brand-values,
  .team-section,
  .contact-section {
    padding: 60px 20px;
  }
  
  .story-title,
  .values-title,
  .team-title,
  .contact-title {
    font-size: 2rem;
  }
  
  .image-placeholder {
    width: 250px;
    height: 250px;
    font-size: 5rem;
  }
  
  .values-grid,
  .team-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .value-card,
  .team-card {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .brand-header {
    padding: 40px 16px 30px;
  }
  
  .brand-title {
    font-size: 2rem;
  }
  
  .brand-story,
  .brand-values,
  .team-section,
  .contact-section {
    padding: 40px 16px;
  }
  
  .story-title,
  .values-title,
  .team-title,
  .contact-title {
    font-size: 1.8rem;
    margin-bottom: 40px;
  }
  
  .image-placeholder {
    width: 200px;
    height: 200px;
    font-size: 4rem;
  }
  
  .contact-info {
    gap: 16px;
  }
  
  .contact-item {
    padding: 16px;
  }
  
  .footer {
    padding: 30px 16px;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 12px;
  }
}
</style>
