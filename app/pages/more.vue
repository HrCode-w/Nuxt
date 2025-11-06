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
  },
  { 
    id: 2, 
    title: '喜欢', 
    desc: '浏览你喜欢的内容', 
    icon: IconHeart,
    color: '#ff6b6b'
  },
  { 
    id: 3, 
    title: '设置', 
    desc: '管理账户与偏好', 
    icon: IconCog,
    color: '#4ecdc4'
  },
  { 
    id: 4, 
    title: '帮助中心', 
    desc: '常见问题与客服', 
    icon: IconQuestion,
    color: '#45b7d1'
  },
  { 
    id: 5, 
    title: '隐私安全', 
    desc: '查看隐私设置与安全', 
    icon: IconShield,
    color: '#96ceb4'
  }
]

const quickActions: QuickAction[] = [
  { id: 1, icon: '📱', text: '下载App', action: 'download' },
  { id: 2, icon: '🔔', text: '通知设置', action: 'notifications' },
  { id: 3, icon: '🌙', text: '深色模式', action: 'darkMode' },
  { id: 4, icon: '🔒', text: '隐私设置', action: 'privacy' }
]

const handleCardClick = (item: CardItem) => {
  activeCard.value = item.id
  console.log('点击卡片:', item.title)
  
  // 模拟点击效果，2秒后重置
  setTimeout(() => {
    activeCard.value = null
  }, 200)
  
  // 可扩展：跳转或弹窗
  // if (item.path) {
  //   router.push(item.path)
  // }
}

const handleActionClick = (action: QuickAction) => {
  console.log('快速操作:', action.text)
  // 根据action类型执行不同操作
  switch (action.action) {
    case 'download':
      // 下载App逻辑
      break
    case 'notifications':
      // 通知设置逻辑
      break
    case 'darkMode':
      // 深色模式切换逻辑
      break
    case 'privacy':
      // 隐私设置逻辑
      break
  }
}
</script>

<style scoped>
.more-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 顶部标题 */
.header {
  position: relative;
  padding: 60px 24px 40px;
  text-align: center;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 12px 0 0;
  font-weight: 300;
}

/* 卡片列表 */
.card-list {
  flex: 1;
  padding: 0 20px 20px;
  z-index: 2;
  position: relative;
}

.card {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-active {
  transform: scale(0.98);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-weight: bold;
}

.card-content {
  flex: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 4px;
}

.card-desc {
  font-size: 0.9rem;
  color: #718096;
  margin: 0;
  line-height: 1.4;
}

.card-arrow {
  color: #a0aec0;
  transition: transform 0.3s ease;
}

.card:hover .card-arrow {
  transform: translateX(4px);
  color: #667eea;
}

/* 用户信息卡片 */
.user-section {
  padding: 0 20px 20px;
}

.user-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  align-items: center;
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.user-card:hover {
  transform: translateY(-2px);
}

.user-avatar {
  margin-right: 16px;
}

.avatar-placeholder {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0 0 4px;
}

.user-status {
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
}

.user-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* 快速操作 */
.quick-actions {
  padding: 0 20px 30px;
}

.section-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 16px;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.action-btn {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.action-btn:hover {
  border-color: #667eea;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.action-icon {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.action-text {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a5568;
}

/* 底部信息 */
.footer {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding: 30px 20px;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  color: #718096;
  margin: 0 0 12px;
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-link {
  color: #667eea;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #764ba2;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    padding: 40px 20px 30px;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .card {
    padding: 16px;
  }
  
  .card-icon {
    width: 45px;
    height: 45px;
    margin-right: 12px;
  }
  
  .user-card {
    padding: 20px;
  }
  
  .avatar-placeholder {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .actions-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 30px 16px 20px;
  }
  
  .title {
    font-size: 1.8rem;
  }
  
  .card-list {
    padding: 0 16px 16px;
  }
  
  .user-section,
  .quick-actions {
    padding: 0 16px 20px;
  }
  
  .footer {
    padding: 20px 16px;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
