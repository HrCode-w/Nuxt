<template>
  <div class="product-detail">
    <!-- 顶部横幅 -->
    <section class="hero-banner">
      <div class="container">
        <h1 class="hero-title">{{ product.name }}</h1>
        <p class="hero-subtitle">{{ product.tagline }}</p>
      </div>
    </section>

    <!-- 产品主图与核心卖点 -->
    <section class="product-showcase">
      <div class="container grid-2">
        <div class="gallery">
          <img :src="product.images[activeImage]" :alt="product.name" class="main-img" />
          <div class="thumb-list">
            <img
              v-for="(img, idx) in product.images"
              :key="idx"
              :src="img"
              :alt="`thumb-${idx}`"
              @click="activeImage = idx"
              :class="{ active: activeImage === idx }"
            />
          </div>
        </div>

        <div class="info">
          <h2 class="info-title">{{ product.name }}</h2>
          <p class="info-model">Model: {{ product.model }}</p>
          <p class="info-desc">{{ product.description }}</p>

          <ul class="features">
            <li v-for="f in product.features" :key="f">{{ f }}</li>
          </ul>

          <div class="actions">
            <button class="btn-primary" @click="handleInquiry">立即询价</button>
            <button class="btn-secondary" @click="downloadCatalog">下载产品手册</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 规格参数 -->
    <section class="specs-section">
      <div class="container">
        <h3 class="section-title">技术规格</h3>
        <table class="spec-table">
          <tbody>
            <tr v-for="(val, key) in product.specs" :key="key">
              <td>{{ key }}</td>
              <td>{{ val }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 应用场景 -->
    <section class="applications">
      <div class="container">
        <h3 class="section-title">应用场景</h3>
        <div class="app-grid">
          <div v-for="app in product.applications" :key="app.title" class="app-card">
            <img :src="app.img" :alt="app.title" />
            <h4>{{ app.title }}</h4>
            <p>{{ app.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司优势 -->
    <section class="advantages">
      <div class="container">
        <h3 class="section-title">为什么选择我们</h3>
        <div class="adv-grid">
          <div v-for="a in advantages" :key="a.title" class="adv-item">
            <div class="icon">
              <img :src="a.icon" :alt="a.title" />
            </div>
            <h4>{{ a.title }}</h4>
            <p>{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 询盘弹窗 -->
    <InquiryModal v-model="showInquiry" :product="product" />
  </div>
</template>

<script setup>
// 获取动态路由参数
const route = useRoute()
// const productId = route.params.id


const product=ref({
    name: '高级3D打印机',
    tagline: '高精度，快速生产',
    model: 'AP-3000',
    description: '采用先进打印技术的最新一代3D打印机。',
    seoDesc: '具有工业级和医疗级应用的高级3D打印机，提供高精度打印功能。',
    images: [
      'https://picsum.photos/300/200?grayscale',
      'https://picsum.photos/600/401',
      'https://picsum.photos/600/402'
    ],
    features: ['高精度打印', '快速生产速度', '大打印区域'],
    specs: {
      '材料支持': 'ABS, PLA, PETG',
      '打印速度': '最高200mm/s',
      '打印区域': '200mm x 200mm x 200mm'
    },
    applications: [
      { title: '工业应用', img: 'https://picsum.photos/300/200?grayscale', desc: '在工厂中用于生产复杂零件。' },
      { title: '医疗应用', img: 'https://picsum.photos/300/201?grayscale', desc: '在医院中用于打印器官的3D模型。' }
    ],
    catalogPdf: '/catalogs/AP-3000.pdf',
})
// 本地状态
const activeImage = ref(0)
const showInquiry = ref(false)

// 公司优势静态数据
const advantages = [
  {
    icon: 'https://img.icons8.com/ios-filled/64/factory.png',
    title: 'OEM/ODM工厂',
    desc: '15年以上经验，20,000㎡车间，ISO/BSCI认证。'
  },
  {
    icon: 'https://img.icons8.com/ios-filled/64/checked.png',
    title: '严格质量控制',
    desc: '发货前100%检验，2年质保。'
  },
  {
    icon: 'https://img.icons8.com/ios-filled/64/checked.png',
    title: '快速交付',
    desc: '样品3-7天，批量订单25天。'
  },
  {
    icon: 'https://img.icons8.com/ios-filled/64/headset.png',
    title: '24/7服务',
    desc: '多语言销售团队，30分钟响应。'
  }
]

// 事件
function handleInquiry () {
  showInquiry.value = true
}

function downloadCatalog () {
  window.open(product.value.catalogPdf, '_blank')
}

// SEO
useSeoMeta({
  title: () => product.value?.name || 'Product Details',
  ogTitle: () => product.value?.name || 'Product Details',
  description: () => product.value?.seoDesc || product.value?.description || 'Product details page',
  ogDescription: () => product.value?.seoDesc || product.value?.description || 'Product details page',
  ogImage: () => product.value?.images?.[0] || '/images/default-product.jpg',
  twitterCard: 'summary_large_image'
})
// meta
definePageMeta({
  title: 'Product Details',
})
</script>

<style scoped>
/* 基础布局 */
.container { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }

/* 顶部横幅 */
.hero-banner { background: #f2f5f7; padding: 60px 0; text-align: center; }
.hero-title { font-size: 40px; font-weight: 700; color: #0a1f44; }
.hero-subtitle { font-size: 18px; color: #666; margin-top: 8px; }

/* 产品展示 */
.product-showcase { padding: 60px 0; }
.gallery .main-img { width: 100%; border-radius: 8px; }
.thumb-list { display: flex; gap: 8px; margin-top: 12px; }
.thumb-list img { width: 80px; height: 80px; object-fit: cover; border: 2px solid transparent; cursor: pointer; border-radius: 4px; }
.thumb-list img.active { border-color: #0052d9; }

.info-title { font-size: 32px; color: #0a1f44; }
.info-model { font-size: 16px; color: #888; margin-top: 4px; }
.info-desc { font-size: 16px; line-height: 1.6; margin: 16px 0; color: #333; }

.features { list-style: none; padding: 0; margin: 20px 0; }
.features li { position: relative; padding-left: 20px; margin-bottom: 8px; color: #444; }
.features li::before { content: '✓'; position: absolute; left: 0; color: #0052d9; font-weight: bold; }

.actions { display: flex; gap: 16px; margin-top: 24px; }
.btn-primary { background: #0052d9; color: #fff; border: none; padding: 12px 28px; border-radius: 4px; cursor: pointer; font-size: 16px; }
.btn-secondary { background: #fff; color: #0052d9; border: 1px solid #0052d9; padding: 12px 28px; border-radius: 4px; cursor: pointer; font-size: 16px; }

/* 规格 */
.specs-section { background: #fafbfc; padding: 60px 0; }
.section-title { font-size: 28px; font-weight: 600; text-align: center; margin-bottom: 40px; color: #0a1f44; }
.spec-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.05); }
.spec-table td { padding: 14px 20px; border-bottom: 1px solid #eee; }
.spec-table tr:last-child td { border: none; }
.spec-table td:first-child { width: 30%; background: #f5f7fa; font-weight: 600; color: #555; }

/* 应用场景 */
.applications { padding: 60px 0; }
.app-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; }
.app-card { background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,.05); text-align: center; padding-bottom: 20px; }
.app-card img { width: 100%; height: 160px; object-fit: cover; }
.app-card h4 { margin: 16px 0 8px; font-size: 18px; color: #0a1f44; }
.app-card p { font-size: 14px; color: #666; padding: 0 16px; line-height: 1.5; margin: 8px 0; }

/* 公司优势 */
.advantages { background: #fafbfc; padding: 60px 0; }
.adv-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 32px; }
.adv-item { text-align: center; }
.adv-item .icon { width: 64px; height: 64px; margin: 0 auto 16px; }
.adv-item .icon img { width: 100%; height: 100%; object-fit: contain; }
.adv-item h4 { font-size: 18px; color: #0a1f44; margin-bottom: 8px; }
.adv-item p { font-size: 14px; color: #666; line-height: 1.5; }

/* 响应式 */
@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; }
  .hero-title { font-size: 32px; }
  .info-title { font-size: 24px; }
  .section-title { font-size: 24px; }
  .actions { flex-direction: column; }
  .btn-primary, .btn-secondary { width: 100%; }
}
</style>
