/* ============================================
   Jenny Kao — i18n (Internationalization)
   ============================================ */

const translations = {
  zh: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cta': 'Let\'s Connect',
    'lang.switch': 'EN',

    // Hero
    'hero.title': 'Building <em>AI-Powered</em><br />Solutions for Global Markets',
    'hero.subtitle': '我是 Jenny Kao，專注於 AI 應用開發與跨境電商策略。<br />結合數據分析、自動化工具與 AI 技術，打造高效的商業解決方案。',
    'hero.cta': 'Explore My Work',

    // About
    'about.label': '—\u00a0 Who I Am',
    'about.title': 'Bridging AI Technology<br />with Business Strategy',
    'about.text': '擁有公共衛生與數據分析背景，目前任職於 Amazon，負責跨境電商市場拓展。熱衷於運用 AI 與自動化技術解決實際商業問題，從 LINE AI Agent 到市場情報自動化系統，持續探索 AI 在商業場景中的應用可能。',
    'about.cta': 'More About Me',

    // Stats
    'stats.projects': 'AI Projects Built',
    'stats.languages': 'Working Languages',
    'stats.hours': 'Hours Saved / Week',
    'stats.apis': 'APIs Integrated',

    // Projects
    'projects.label': '—\u00a0 AI Projects',
    'projects.title': 'Featured Work',
    'projects.subtitle': '結合 AI 技術與商業需求，打造實用的自動化解決方案',

    // Project 1 — Market News
    'project1.desc': '針對新興市場（澳洲、中東）資訊碎片化與語言落差等痛點所開發的全自動情報站。透過 AI 每日自動爬取並摘要物流、稅務、合規與地緣政治等關鍵動態，結合 GitHub Actions 實現 CI/CD 無伺服器自動部署。有效為業務團隊省下大量資料蒐集時間，精準掌握跨國市場脈動。',
    'project1.link': 'View Live Site <span>&rarr;</span>',

    // Project 2 — LINE Agents
    'project2.desc': '專為 B2B 跨境業務場景打造的 LINE 雙引擎應用：① AI 賣家小幫手 — 串接 ChatGPT API，24 小時自動回覆賣家常見的入駐與物流問題，有效過濾並攔截基礎提問。② 展會拓客掃描儀 — 掃描名片即可即時解析並同步至 Google Sheets，徹底告別展後繁瑣的建檔工作，讓業務團隊能將精力 100% 集中於高價值的客戶跟進上。',
    'project2.link': 'Add on LINE <span>&rarr;</span>',
    'line.phone1.title': 'Amazon 賣家小幫手',
    'line.phone2.title': '展會名片管理',
    'line.input.placeholder': '輸入訊息...',
    'line.chat1.q1': '請問 FBA 的費用怎麼計算？',
    'line.chat1.a1': 'FBA 費用主要包含配送費和倉儲費。配送費依商品尺寸和重量計算，倉儲費則按月計費。建議使用 Revenue Calculator 試算 📊',
    'line.chat1.q2': 'UAE 站點需要 VAT 嗎？',
    'line.chat1.a2': '是的，UAE 實施 5% VAT。賣家需在 FTA 註冊稅號，並確保發票符合電子發票規範 🇦🇪',
    'line.chat2.welcome': '👋 歡迎使用名片管理工具！拍照或輸入名片資訊即可記錄。',
    'line.chat2.q1': '新增：王大明 / TechBrew CEO / david@techbrew.com / +971-50-123-4567',
    'line.chat2.a1': '✅ 已新增至 Google Sheet！\n📋 王大明 — TechBrew CEO\n📧 david@techbrew.com\n📍 來源：Dubai Expo 2026',
    'line.chat2.q2': '查詢 TechBrew',
    'line.chat2.a2': '🔍 找到 1 筆：\n王大明 · TechBrew CEO\n狀態：待跟進 🟡',
    'line.feature1': 'ChatGPT API 智慧回覆',
    'line.feature2': 'Google Sheet 即時同步',
    'line.feature3': '展會現場即時更新',

    // Project 3 — WBR Dashboard
    'project3.desc': '專為高階營運會議 (WBR) 設計的自動化數據看板。取代傳統耗時的人工拉表，自動整合中東、歐洲與日本三大賽道的大數據。除了提供一目瞭然的宏觀表現 (Weekly Overview)，更能直接 Drill-down 挖掘個別賣家的行銷瓶頸。將每週報表準備時間極小化，讓團隊核心精力專注於「解決問題」而非「整理數據」。',
    'project3.link': 'View on GitHub <span>&rarr;</span>',
    'wbr.stat.latest': '最新週報',
    'wbr.stat.markets': '市場區域',
    'wbr.stat.updated': '每週更新',
    'wbr.feature1': 'AI 每週自動更新大數據',
    'wbr.feature2': 'Weekly Overview 一覽全局',
    'wbr.feature3': 'Deep Dive 行銷問題分析',

    // News showcase
    'news.ticker': '伊朗扣押兩艘貨輪升級海峽對峙 · Amazon FBA 3.5% 燃油附加費已生效 · 澳洲 Q1 CPI 下週公布預期飆至 4.8% · UAE 電子發票合規進入倒數 · Westpac 三週內二度調升固定利率 · 美國 $1,660 億關稅退還入口網站上線 ·\u00a0',
    'news.tag.logistics': '物流',
    'news.tag.geopolitics': '地緣政治',
    'news.tag.macro': '總經',
    'news.tag.tax': '稅務',
    'news.tag.trade': '貿易',
    'news.card1.title': '伊朗扣押兩艘貨輪升級海峽對峙：美伊「雙重封鎖」持續，油價維持 $100/桶',
    'news.card2.title': '澳洲 Q1 CPI 下週三公布：市場預期 headline 飆至 4.8%，NAB 預測 RBA 5 月升息',
    'news.card3.title': 'UAE/SA 電子發票合規倒數：不合規發票將直接喪失 VAT 抵扣權',
    'news.card4.title': '美國 $1,660 億關稅退還入口網站正式上線：IEEPA 關稅退款啟動',
    'news.stat.intel': '則情報',
    'news.stat.categories': '大分類',
    'news.stat.markets': '市場覆蓋',
    'news.stat.daily': '每日',
    'news.stat.autoupdate': '自動更新',

    // Experience
    'exp.label': '—\u00a0 Experience',
    'exp.title': 'Professional Journey',
    'exp.subtitle': '從公共衛生到跨境電商，持續跨領域探索與成長',
    'exp1.period': 'Current',
    'exp1.title': 'Amazon — Cross-Border E-Commerce',
    'exp1.desc': '負責 AU / MENA 市場拓展策略，建立自動化市場情報系統，運用 AI 工具提升團隊工作效率與決策品質。',
    'exp2.period': 'Side Projects',
    'exp2.title': 'AI Application Developer',
    'exp2.desc': '開發 LINE AI Agent、市場新聞自動化系統、數據儀表板等多項 AI 應用專案，持續探索 LLM、自動化與 AI Agent 的商業應用場景。',
    'exp3.period': 'Background',
    'exp3.title': 'Public Health & Data Analysis',
    'exp3.desc': '公共衛生學背景，具備紮實的數據分析與研究方法論基礎。曾參與疾管署、中經院等機構的研究專案與數據視覺化工作。',

    // Skills
    'skills.label': '—\u00a0 Skills & Tools',
    'skills.title': 'What I Work With',

    // Contact
    'contact.label': '—\u00a0 Get In Touch',
    'contact.title': 'Let\'s Build<br />Something Together',
    'contact.text': '對 AI 應用、跨境電商或任何合作機會有興趣？歡迎隨時聯繫我。',
    'form.name': 'Your Name',
    'form.email': 'Your Email',
    'form.message': 'Your Message',
    'form.submit': 'Send Message',

    // CRM
    'crm.count': '234 筆',
    'crm.tab.all': '全部',
    'crm.filter.all': '全部',
    'crm.filter.pending': '● 待處理 5',
    'crm.col.seller': '賣家',
    'crm.col.brand': '品牌',
    'crm.col.contact': '聯絡人',
    'crm.stat.pending': '待處理',
    'crm.stat.countries': '國家',
    'project4.desc': '用 AI 打造的跨境電商 CRM 管理系統，解決公司內部系統速度慢的痛點。核心特色：一眼區分同一客戶在不同國家（UAE / KSA / AU）的上線狀態，自動標記待處理事項，大幅提升日常管理效率。',
    'crm.feature1': '多國狀態一目瞭然',
    'crm.feature2': '待處理自動標記',
    'crm.feature3': '比公司系統快 10 倍',
  },

  en: {
    // Nav
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.cta': 'Let\'s Connect',
    'lang.switch': '中文',

    // Hero
    'hero.title': 'Building <em>AI-Powered</em><br />Solutions for Global Markets',
    'hero.subtitle': 'I\'m Jenny Kao — focused on AI application development and cross-border e-commerce strategy.<br />Combining data analytics, automation tools, and AI to build high-impact business solutions.',
    'hero.cta': 'Explore My Work',

    // About
    'about.label': '—\u00a0 Who I Am',
    'about.title': 'Bridging AI Technology<br />with Business Strategy',
    'about.text': 'With a background in public health and data analytics, I currently work at Amazon leading cross-border e-commerce market expansion. Passionate about leveraging AI and automation to solve real business problems — from LINE AI Agents to automated market intelligence systems, I continuously explore how AI can drive business value.',
    'about.cta': 'More About Me',

    // Stats
    'stats.projects': 'AI Projects Built',
    'stats.languages': 'Working Languages',
    'stats.hours': 'Hours Saved / Week',
    'stats.apis': 'APIs Integrated',

    // Projects
    'projects.label': '—\u00a0 AI Projects',
    'projects.title': 'Featured Work',
    'projects.subtitle': 'Practical AI solutions built at the intersection of technology and business needs',

    // Project 1 — Market News
    'project1.desc': 'A fully automated intelligence hub built to address information fragmentation and language barriers in emerging markets (Australia, Middle East). AI automatically crawls and summarizes key developments in logistics, tax, compliance, and geopolitics daily, with GitHub Actions enabling serverless CI/CD deployment. Saves the business team significant research time while keeping them precisely informed of cross-border market dynamics.',
    'project1.link': 'View Live Site <span>&rarr;</span>',

    // Project 2 — LINE Agents
    'project2.desc': 'A dual-engine LINE application built for B2B cross-border business scenarios: ① AI Seller Assistant — powered by ChatGPT API, providing 24/7 automated responses to common onboarding and logistics questions, effectively filtering and intercepting basic inquiries. ② Expo Lead Scanner — scans business cards for instant parsing and sync to Google Sheets, eliminating tedious post-expo data entry so the team can focus 100% on high-value follow-ups.',
    'project2.link': 'Add on LINE <span>&rarr;</span>',
    'line.phone1.title': 'Seller AI Assistant',
    'line.phone2.title': 'Expo Card Manager',
    'line.input.placeholder': 'Type a message...',
    'line.chat1.q1': 'How are FBA fees calculated?',
    'line.chat1.a1': 'FBA fees include fulfillment fees (based on size/weight) and monthly storage fees. Use the Revenue Calculator for estimates 📊',
    'line.chat1.q2': 'Does UAE require VAT?',
    'line.chat1.a2': 'Yes, UAE has 5% VAT. Sellers must register with FTA and ensure invoices comply with e-invoicing rules 🇦🇪',
    'line.chat2.welcome': '👋 Welcome to Card Manager! Snap a photo or type contact info to save.',
    'line.chat2.q1': 'Add: David Wang / TechBrew CEO / david@techbrew.com / +971-50-123-4567',
    'line.chat2.a1': '✅ Added to Google Sheet!\n📋 David Wang — TechBrew CEO\n📧 david@techbrew.com\n📍 Source: Dubai Expo 2026',
    'line.chat2.q2': 'Search TechBrew',
    'line.chat2.a2': '🔍 Found 1 result:\nDavid Wang · TechBrew CEO\nStatus: Follow-up 🟡',
    'line.feature1': 'ChatGPT API smart replies',
    'line.feature2': 'Google Sheet real-time sync',
    'line.feature3': 'On-site expo updates',

    // Project 3 — WBR Dashboard
    'project3.desc': 'An automated data dashboard designed for executive Weekly Business Reviews (WBR). Replaces time-consuming manual reporting by auto-integrating big data across Middle East, Europe, and Japan. Beyond providing a clear macro-level Weekly Overview, it enables direct Drill-down into individual seller marketing bottlenecks. Minimizes weekly report prep time so the team can focus on solving problems rather than organizing data.',
    'project3.link': 'View on GitHub <span>&rarr;</span>',
    'wbr.stat.latest': 'Latest Week',
    'wbr.stat.markets': 'Market Regions',
    'wbr.stat.updated': 'Weekly Updated',
    'wbr.feature1': 'AI auto-updates big data weekly',
    'wbr.feature2': 'Weekly Overview at a glance',
    'wbr.feature3': 'Deep Dive into marketing issues',

    // News showcase
    'news.ticker': 'Iran seizes two cargo ships escalating Strait standoff · Amazon FBA 3.5% fuel surcharge now in effect · Australia Q1 CPI expected to surge to 4.8% · UAE e-invoicing compliance countdown · Westpac raises fixed rates twice in 3 weeks · US $166B tariff refund portal goes live ·\u00a0',
    'news.tag.logistics': 'Logistics',
    'news.tag.geopolitics': 'Geopolitics',
    'news.tag.macro': 'Macro',
    'news.tag.tax': 'Tax',
    'news.tag.trade': 'Trade',
    'news.card1.title': 'Iran seizes two cargo ships escalating Strait standoff: US-Iran "dual blockade" continues, oil at $100/bbl',
    'news.card2.title': 'Australia Q1 CPI due next Wed: market expects headline to surge to 4.8%, NAB forecasts RBA May rate hike',
    'news.card3.title': 'UAE/SA e-invoicing compliance countdown: non-compliant invoices lose VAT deduction rights',
    'news.card4.title': 'US $166B tariff refund portal officially launches: IEEPA tariff refunds begin',
    'news.stat.intel': 'Intel Reports',
    'news.stat.categories': 'Categories',
    'news.stat.markets': 'Markets',
    'news.stat.daily': 'Daily',
    'news.stat.autoupdate': 'Auto-Updated',

    // Experience
    'exp.label': '—\u00a0 Experience',
    'exp.title': 'Professional Journey',
    'exp.subtitle': 'From public health to cross-border e-commerce — continuously exploring and growing across disciplines',
    'exp1.period': 'Current',
    'exp1.title': 'Amazon — Cross-Border E-Commerce',
    'exp1.desc': 'Leading AU / MENA market expansion strategy, building automated market intelligence systems, and leveraging AI tools to boost team efficiency and decision-making quality.',
    'exp2.period': 'Side Projects',
    'exp2.title': 'AI Application Developer',
    'exp2.desc': 'Developed LINE AI Agent, automated market news system, data dashboards, and more. Continuously exploring LLM, automation, and AI Agent applications in business contexts.',
    'exp3.period': 'Background',
    'exp3.title': 'Public Health & Data Analysis',
    'exp3.desc': 'Background in public health with solid foundations in data analysis and research methodology. Contributed to research projects and data visualization at Taiwan CDC and CIER.',

    // Skills
    'skills.label': '—\u00a0 Skills & Tools',
    'skills.title': 'What I Work With',

    // Contact
    'contact.label': '—\u00a0 Get In Touch',
    'contact.title': 'Let\'s Build<br />Something Together',
    'contact.text': 'Interested in AI applications, cross-border e-commerce, or any collaboration opportunities? Feel free to reach out.',
    'form.name': 'Your Name',
    'form.email': 'Your Email',
    'form.message': 'Your Message',
    'form.submit': 'Send Message',

    // CRM
    'crm.count': '234 Records',
    'crm.tab.all': 'All',
    'crm.filter.all': 'All',
    'crm.filter.pending': '● Pending 5',
    'crm.col.seller': 'Seller',
    'crm.col.brand': 'Brand',
    'crm.col.contact': 'Contact',
    'crm.stat.pending': 'Pending',
    'crm.stat.countries': 'Countries',
    'project4.desc': 'AI-built cross-border e-commerce CRM system, solving the pain point of slow internal tools. Key features: instantly see each seller\'s onboarding status across different countries (UAE / KSA / AU), auto-flag pending items, and dramatically improve daily pipeline management efficiency.',
    'crm.feature1': 'Multi-country status at a glance',
    'crm.feature2': 'Auto-flagged pending items',
    'crm.feature3': '10x faster than internal tools',
  }
};

// ---------- i18n ENGINE ----------
let currentLang = 'zh';

function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];
  if (!dict) return;

  // Update <html lang>
  document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';

  // data-i18n → textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      // For links with arrow spans, use innerHTML
      if (key.endsWith('.link')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // data-i18n-html → innerHTML (for elements with <br>, <em>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // data-i18n-placeholder → placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  // data-i18n-ticker → duplicate span for infinite scroll
  document.querySelectorAll('[data-i18n-ticker]').forEach(el => {
    const key = el.getAttribute('data-i18n-ticker');
    if (dict[key] !== undefined) {
      el.innerHTML = `<span>${dict[key]}</span><span>${dict[key]}</span>`;
    }
  });

  // Save preference
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
}

function toggleLanguage() {
  const next = currentLang === 'zh' ? 'en' : 'zh';
  setLanguage(next);
}

// ---------- INIT ----------
(function initI18n() {
  // Check saved preference
  try {
    const saved = localStorage.getItem('lang');
    if (saved && translations[saved]) {
      currentLang = saved;
    }
  } catch (e) { /* ignore */ }

  // Apply if not default
  if (currentLang !== 'zh') {
    // Wait for DOM
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));
    } else {
      setLanguage(currentLang);
    }
  }
})();
