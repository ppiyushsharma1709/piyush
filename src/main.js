/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import stylesheet to bundle it with Vite
import './index.css';

import victoria_hero from './assets/images/regenerated_image_1779505789059.jpg';
import honey_branding from './assets/images/honey_branding_1779504630745.png';
import cafe_branding from './assets/images/cafe_branding_1779504649553.png';
import wellness_campaign from './assets/images/wellness_campaign_1779504674443.png';

// -----------------------------------------------------------------
// 1. ASSETS RESOLUTION
// -----------------------------------------------------------------
// Map our high-fidelity generated images
const ASSETS = {
  victoria_hero,
  honey_branding,
  cafe_branding,
  wellness_campaign
};

// Initialize static images
document.addEventListener('DOMContentLoaded', () => {
  const heroImg = document.getElementById('hero-portrait-img');
  const honeyImg = document.getElementById('img-nectar');
  const cafeImg = document.getElementById('img-bloom-cafe');
  const wellnessImg = document.getElementById('img-wellness');

  if (heroImg) heroImg.src = ASSETS.victoria_hero;
  if (honeyImg) honeyImg.src = ASSETS.honey_branding;
  if (cafeImg) cafeImg.src = ASSETS.cafe_branding;
  if (wellnessImg) wellnessImg.src = ASSETS.wellness_campaign;

  // Initialize all our custom dynamic SVGs
  renderCustomSVGIcons();
  
  // Initialize states
  initThemeManager();
  initSoftwareToolkit();
  initProjectFilters();
  initFoodAppSimulator();
  initStickerStudio();
  initContactForm();
});

// -----------------------------------------------------------------
// 2. VECTOR ICON UTILITY (HUMBLE & INDEPENDENT)
// -----------------------------------------------------------------
const SVG_ICONS = {
  crown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c-.8.8-2 1.2-3 1c-1.2-.3-2-1.1-2-2.4V4h-6v2c0 1.2-.8 2.1-2 2.4-1 .2-2.2-.2-3-1C2.7 6.1 2 4 2 4l3 13h14l3-13z"/><path d="M5 17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  compass: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
  'book-open': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z"/><path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z"/></svg>`,
  'arrow-right': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  cpu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 15h3"/><path d="M1 9h3"/><path d="M1 15h3"/></svg>`,
  palette: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.01445 19.1559 5.0974 19.3751 5.08152 19.5932C5.03405 20.2449 5.176 20.9416 5.56754 21.4654C6.01289 22.061 6.74542 22 7.5 22C8.01538 22 8.52077 21.8247 8.9443 21.5036C9.28169 21.2476 9.71233 21.1444 10.1264 21.2291C10.7423 21.3551 11.3653 21.439 12 22Z"/><circle cx="7.5" cy="10.5" r="1.5"/><circle cx="11.5" cy="7.5" r="1.5"/><circle cx="16.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="14.5" r="1.5"/></svg>`,
  'check-circle': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  'shopping-bag': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  'shopping-cart': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  signal: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h.01"/><path d="M7 20v-4"/><path d="M12 20v-8"/><path d="M17 20V8"/><path d="M22 20V4"/></svg>`,
  image: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  navigation: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
  copy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`
};

function renderCustomSVGIcons() {
  document.querySelectorAll('[data-lucide]').forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    if (SVG_ICONS[iconName]) {
      // Retain classes on outer element, load inner markup
      el.innerHTML = SVG_ICONS[iconName];
      // Unwrap standard inline elements if needed to render beautifully
      const innerSvg = el.querySelector('svg');
      if (innerSvg) {
        innerSvg.setAttribute('class', el.getAttribute('class') || '');
      }
    }
  });
}

// -----------------------------------------------------------------
// 3. THEME MANAGER & PALETTE SWAPPER
// -----------------------------------------------------------------
const THEMES = {
  yellow: { // Terracotta & Warm Sand (Main Editorial)
    primary: 'text-art-blue',
    accentBg: 'bg-art-blue',
    hoverBg: 'hover:bg-art-blue',
    borderCol: 'border-art-blue',
    logo: 'text-art-blue',
    bodyBg: 'bg-art-cream',
    cssVars: {
      '--color-art-cream': '#F5F2ED',
      '--color-art-blue': '#C25B40',
      '--color-art-orange': '#1A1A1A',
      '--color-art-yellow': '#E89E7E',
      '--main-text-color': '#1A1A1A'
    }
  },
  blue: { // Sage Olive & Muted Silk
    primary: 'text-art-blue',
    accentBg: 'bg-art-blue',
    hoverBg: 'hover:bg-art-blue',
    borderCol: 'border-art-blue',
    logo: 'text-art-blue',
    bodyBg: 'bg-art-cream',
    cssVars: {
      '--color-art-cream': '#EFEFE9',
      '--color-art-blue': '#5F6F52',
      '--color-art-orange': '#2B3324',
      '--color-art-yellow': '#8E9D83',
      '--main-text-color': '#2B3324'
    }
  },
  orange: { // Editorial Charcoal & Bright Ice White
    primary: 'text-art-blue',
    accentBg: 'bg-art-blue',
    hoverBg: 'hover:bg-art-blue',
    borderCol: 'border-art-blue',
    logo: 'text-art-blue',
    bodyBg: 'bg-art-cream',
    cssVars: {
      '--color-art-cream': '#FAF9F6',
      '--color-art-blue': '#1A1A1A',
      '--color-art-orange': '#333333',
      '--color-art-yellow': '#777777',
      '--main-text-color': '#1A1A1A'
    }
  },
  slate: { // Sophisticated Crimson & Wheat
    primary: 'text-art-blue',
    accentBg: 'bg-art-blue',
    hoverBg: 'hover:bg-art-blue',
    borderCol: 'border-art-blue',
    logo: 'text-art-blue',
    bodyBg: 'bg-art-cream',
    cssVars: {
      '--color-art-cream': '#FAF6F0',
      '--color-art-blue': '#8C3037',
      '--color-art-orange': '#3F1418',
      '--color-art-yellow': '#BFA295',
      '--main-text-color': '#3F1418'
    }
  }
};

function initThemeManager() {
  const buttons = document.querySelectorAll('#palette-swapper button');
  const navLogo = document.querySelector('#nav-logo span:first-child');
  const badgeDot = document.querySelector('#badge-container span:first-child');
  const heroAccentStar = document.querySelector('#hero-info span');
  const borderBar = document.querySelector('#hero-info .border-l-4');
  const ctaBtn = document.getElementById('cta-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const themeKey = btn.getAttribute('data-theme');
      const theme = THEMES[themeKey];
      if (!theme) return;

      // Update Dynamic CSS Variables in real-time
      if (theme.cssVars) {
        Object.entries(theme.cssVars).forEach(([property, value]) => {
          document.documentElement.style.setProperty(property, value);
        });
      }

      // Update Body Background gently
      document.body.className = `bg-art-cream text-slate-900 font-sans antialiased selection:bg-art-yellow/40 transition-colors duration-500`;

      // Reset dynamic highlights on core parts
      if (navLogo) {
        navLogo.className = `transition-colors duration-300 ${theme.primary}`;
      }
      if (badgeDot) {
        badgeDot.className = `w-1.5 h-1.5 rounded-none animate-pulse ${theme.accentBg}`;
      }
      if (heroAccentStar) {
        heroAccentStar.className = `transition-colors duration-300 ${theme.primary} inline-block hover:scale-105 transition-transform cursor-pointer`;
      }
      if (borderBar) {
        borderBar.style.borderColor = theme.cssVars['--color-art-blue'];
      }
      if (ctaBtn) {
        ctaBtn.className = `px-4 py-2 text-white rounded-none font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#1A1A1A] transition-all ${theme.accentBg}`;
      }

      // Add feedback border to the active palette button
      buttons.forEach(b => b.classList.remove('scale-125', 'ring-2', 'ring-slate-900'));
      btn.classList.add('scale-125', 'ring-2', 'ring-slate-900');
    });
  });

  // Default theme trigger visually in picker
  const defBtn = document.querySelector('[data-theme="yellow"]');
  if (defBtn) defBtn.classList.add('scale-125', 'ring-2', 'ring-slate-900');
}

// -----------------------------------------------------------------
// 4. SOFTWARE TOOLKIT CONTROLS (INTERACTIVE SANDBOX)
// -----------------------------------------------------------------
const TOOL_BASE_LEVELS = {
  fig: 95,
  ai: 90,
  ps: 92,
  id: 82
};

function initSoftwareToolkit() {
  const slider = document.getElementById('experience-slider');
  const label = document.getElementById('experience-label');
  
  const barElements = {
    fig: document.getElementById('bar-fig'),
    ai: document.getElementById('bar-ai'),
    ps: document.getElementById('bar-ps'),
    id: document.getElementById('bar-id')
  };

  const textElements = {
    fig: document.getElementById('level-fig'),
    ai: document.getElementById('level-ai'),
    ps: document.getElementById('level-ps'),
    id: document.getElementById('level-id')
  };

  const experienceLabels = [
    "Fresh Layouts", 
    "Agency Pro", 
    "Creative Lead", 
    "Senior Principal", 
    "Portfolio Guru"
  ];

  if (!slider) return;

  // React on slider adjust to boost values
  slider.addEventListener('input', (e) => {
    const multiplier = parseFloat(e.target.value);
    label.innerText = experienceLabels[multiplier - 1];

    // Compute and animate adjustments
    Object.keys(TOOL_BASE_LEVELS).forEach(key => {
      const base = TOOL_BASE_LEVELS[key];
      // Compute modified skill rating up to 100 max
      let amplified = Math.min(100, Math.round(base - (5 - multiplier) * 3));
      
      if (barElements[key]) {
        barElements[key].style.width = `${amplified}%`;
      }
      if (textElements[key]) {
        textElements[key].innerText = `${amplified}%`;
      }
    });
  });

  // logo highlighting workflow: Clicking a bar highlights the project using it
  const softBars = document.querySelectorAll('#software-bars-container > div');
  softBars.forEach(bar => {
    bar.addEventListener('click', () => {
      const toolId = bar.id.replace('logo-', ''); // fig, ai, ps, id
      
      // Temporarily highlight projects using this tool
      const projects = document.querySelectorAll('#projects-target-grid > div');
      projects.forEach(proj => {
        const toolsUsed = proj.getAttribute('data-tools')?.split(',') || [];
        if (toolsUsed.includes(toolId)) {
          proj.classList.remove('opacity-40', 'scale-95');
          proj.classList.add('ring-4', 'ring-art-yellow/60', 'scale-102');
        } else {
          proj.classList.remove('ring-4', 'ring-art-yellow/60', 'scale-102');
          proj.classList.add('opacity-40', 'scale-95');
        }
      });

      // Show clicking escape notification or tap again to clear
      let cancelBtn = document.getElementById('clear-filter-notif');
      if (!cancelBtn) {
        cancelBtn = document.createElement('div');
        cancelBtn.id = 'clear-filter-notif';
        cancelBtn.className = 'fixed bottom-4 right-4 bg-slate-900 text-white px-4 py-2.5 rounded-lg text-xs font-mono border border-slate-700 shadow-xl z-50 flex items-center gap-2 cursor-pointer';
        cancelBtn.innerHTML = `<span>Filtered by Software! Click to reset</span> <span class="bg-art-yellow text-slate-900 font-bold px-1.5 py-0.5 rounded-xs">X</span>`;
        document.body.appendChild(cancelBtn);

        cancelBtn.addEventListener('click', () => {
          projects.forEach(p => {
            p.classList.remove('opacity-40', 'scale-95', 'ring-4', 'ring-art-yellow/60', 'scale-102');
          });
          cancelBtn.remove();
        });
      }
    });
  });
}

// -----------------------------------------------------------------
// 5. LANDING PROJECTS FILTER
// -----------------------------------------------------------------
function initProjectFilters() {
  const tabs = document.querySelectorAll('#project-filter-tabs button');
  const projectCards = document.querySelectorAll('#projects-target-grid > div');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filterValue = tab.getAttribute('data-filter');

      // Update Active Tab Styles
      tabs.forEach(t => {
        t.className = "px-4 py-2 rounded-full font-display text-xs font-medium text-slate-600 hover:text-slate-900 transition-all cursor-pointer";
      });
      tab.className = "px-5 py-2 rounded-full font-display text-xs font-bold transition-all bg-white text-slate-900 shadow-xs cursor-pointer";

      // Toggle grid elements
      projectCards.forEach(card => {
        const cat = card.getAttribute('data-project-category');
        if (filterValue === 'all' || cat === filterValue) {
          card.style.display = 'flex';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// -----------------------------------------------------------------
// 6. SMARTPHONE SIMULATOR MODULE
// -----------------------------------------------------------------
const APP_IDENTITIES = {
  bloom: {
    brand: "Hydroponics Node",
    slogan: "Automated Botanical Irrigation",
    color: "#ec4899", // Pink-500
    themeBg: "gradient-to-br from-pink-500/10 via-slate-900 to-rose-500/10",
    headerClass: "border-pink-500/20",
    avatarInitial: "🌸",
    btnColor: "bg-pink-500 hover:bg-pink-600"
  },
  modi: {
    brand: "Rover Controller",
    slogan: "Precise Distance Calibration",
    color: "#0284c7", // Sky-600
    themeBg: "gradient-to-br from-indigo-900 via-slate-950 to-blue-900",
    headerClass: "border-sky-500/20",
    avatarInitial: "📐",
    btnColor: "bg-sky-600 hover:bg-sky-700"
  },
  nectar: {
    brand: "IoT Smart Hive",
    slogan: "Hive Temperature Telemetry",
    color: "#f59e0b", // Amber-500
    themeBg: "gradient-to-br from-amber-500/20 via-slate-950 to-amber-900/10",
    headerClass: "border-amber-500/20",
    avatarInitial: "🐝",
    btnColor: "bg-amber-500 hover:bg-amber-600"
  }
};

const FOOD_PRODUCTS = [
  { id: 'f1', name: 'Arduino Circuit Core', desc: 'Atmega328P based main controller node', price: 11.50, emoji: '⚙️' },
  { id: 'f2', name: 'Ultrasonic Sound Sweep', desc: '40KHz echo transceiver feedback sensor', price: 18.00, emoji: '📡' },
  { id: 'f3', name: 'I2C Telemetry Screen', desc: 'OLED custom layout feedback monitor', price: 14.90, emoji: '📟' },
  { id: 'f4', name: 'Brushed DC Gearmotor', desc: 'High torque servo alignment wheels', price: 6.50, emoji: '🔌' }
];

let cartList = [];
let currentAppIdentity = 'bloom';

function initFoodAppSimulator() {
  const brandName = document.getElementById('app-brand-name');
  const appSlogan = document.getElementById('phone-slogan');
  const avatarInit = document.getElementById('app-avatar-initial');
  const screenBg = document.getElementById('phone-screen');
  const categoryHeader = document.querySelector('#food-categories span');
  
  // App switcher triggers
  const btnBloom = document.getElementById('sim-id-bloom');
  const btnModi = document.getElementById('sim-id-modi');
  const btnNectar = document.getElementById('sim-id-nectar');

  // Cart DOM parts
  const cartBadge = document.getElementById('phone-cart-badge');
  const cartTrigger = document.getElementById('phone-app-cart-trigger');
  const cartPanel = document.getElementById('phone-cart-panel');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const checkoutBtn = document.getElementById('checkout-simulate-btn');
  const orderSuccessScreen = document.getElementById('phone-order-success-screen');
  const resetBtn = document.getElementById('reset-sim-btn');

  // 1. Identity Applicator function
  function applyAppIdentity(key) {
    const idObj = APP_IDENTITIES[key];
    if (!idObj) return;
    
    currentAppIdentity = key;
    brandName.innerText = idObj.brand;
    appSlogan.innerText = idObj.slogan;
    avatarInit.innerText = idObj.avatarInitial;
    
    // Smooth text theme adjustments
    categoryHeader.style.backgroundColor = idObj.color;
    
    // Refresh product buttons styling
    renderSimulatorProducts(idObj.btnColor);
  }

  // 2. Button Ident triggers
  btnBloom.addEventListener('click', () => applyAppIdentity('bloom'));
  btnModi.addEventListener('click', () => applyAppIdentity('modi'));
  btnNectar.addEventListener('click', () => applyAppIdentity('nectar'));

  // 3. Populate initial items
  function renderSimulatorProducts(btnClass) {
    const target = document.getElementById('sim-product-list');
    if (!target) return;
    
    target.innerHTML = '';
    FOOD_PRODUCTS.forEach(item => {
      const el = document.createElement('div');
      el.className = 'p-2.5 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between hover:bg-white/10 transition-colors gap-3';
      el.innerHTML = `
        <div class="flex items-center gap-2 max-w-[150px]">
          <span class="text-xl shrink-0">${item.emoji}</span>
          <div class="leading-tight">
            <span class="block text-[9px] font-bold text-white truncate">${item.name}</span>
            <span class="text-[7px] text-slate-400 block truncate">${item.desc}</span>
          </div>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="text-[9px] font-mono text-slate-300 font-bold">$${item.price.toFixed(2)}</span>
          <button data-prod-id="${item.id}" class="py-1 px-2 ${btnClass || 'bg-art-blue hover:bg-blue-600'} text-white font-mono text-[7px] font-black rounded-md transition-all active:scale-90 cursor-pointer">
            + ADD
          </button>
        </div>
      `;
      target.appendChild(el);
    });

    // Wire up events
    target.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const pId = btn.getAttribute('data-prod-id');
        addToSimulatorCart(pId);
      });
    });
  }

  // Add Item
  function addToSimulatorCart(id) {
    const item = FOOD_PRODUCTS.find(p => p.id === id);
    if (!item) return;

    const existing = cartList.find(c => c.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cartList.push({ ...item, quantity: 1 });
    }

    updateCartMetrics();
    
    // Dynamic pop animation on basket badge
    if (cartBadge) {
      cartBadge.classList.add('scale-150', 'bg-emerald-400');
      setTimeout(() => {
        cartBadge.classList.remove('scale-150', 'bg-emerald-400');
      }, 300);
    }
  }

  // Update Cart state
  function updateCartMetrics() {
    const totalCount = cartList.reduce((acc, c) => acc + c.quantity, 0);
    cartBadge.innerText = totalCount;

    // Redraw Panel HTML
    const container = document.getElementById('phone-cart-items-container');
    const emptyText = document.getElementById('empty-cart-text');
    
    if (cartList.length === 0) {
      emptyText.style.display = 'block';
      container.innerHTML = '';
    } else {
      emptyText.style.display = 'none';
      container.innerHTML = '';
      
      cartList.forEach(ct => {
        const row = document.createElement('div');
        row.className = 'flex items-center justify-between border-b border-white/5 py-1.5 text-[9px] text-white';
        row.innerHTML = `
          <div class="flex items-center gap-1.5 max-w-[130px]">
            <span>${ct.emoji}</span>
            <span class="truncate block font-semibold">${ct.name}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-mono bg-white/10 px-1.5 py-0.5 rounded-sm">x${ct.quantity}</span>
            <span class="font-mono text-art-yellow font-bold">$${(ct.price * ct.quantity).toFixed(2)}</span>
            <button data-remove-id="${ct.id}" class="text-rose-500 font-bold hover:text-rose-400 cursor-pointer text-[10px] px-1">×</button>
          </div>
        `;
        container.appendChild(row);
      });

      // Bind remove buttons
      container.querySelectorAll('[data-remove-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          const remId = btn.getAttribute('data-remove-id');
          cartList = cartList.filter(c => c.id !== remId);
          updateCartMetrics();
        });
      });
    }

    // Maths update
    const sub = cartList.reduce((acc, c) => acc + (c.price * c.quantity), 0);
    const tax = sub > 0 ? 1.50 : 0.00;
    const gTotal = sub + tax;

    document.getElementById('cart-val-sub').innerText = `$${sub.toFixed(2)}`;
    document.getElementById('cart-val-tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('cart-val-total').innerText = `$${gTotal.toFixed(2)}`;
  }

  // Trigger Slide Panel
  cartTrigger.addEventListener('click', () => {
    cartPanel.classList.remove('translate-y-full');
  });

  closeCartBtn.addEventListener('click', () => {
    cartPanel.classList.add('translate-y-full');
  });

  // Perform Simulated Payment Mock
  checkoutBtn.addEventListener('click', () => {
    if (cartList.length === 0) {
      alert("Uh oh, add some avocado bowls first!");
      return;
    }

    checkoutBtn.innerText = "Processing Transmissions...";
    checkoutBtn.disabled = true;

    setTimeout(() => {
      // Setup secure success info
      document.getElementById('success-order-id').innerText = '#' + Math.floor(Math.random() * 89999 + 10000);
      document.getElementById('success-brand-identity').innerText = APP_IDENTITIES[currentAppIdentity].brand;

      // Animate Screen Frame in
      orderSuccessScreen.classList.remove('scale-0');
      orderSuccessScreen.classList.add('scale-100');

      // Clear basket memory
      cartList = [];
      updateCartMetrics();
      checkoutBtn.innerText = "Confirm Secure Payment";
      checkoutBtn.disabled = false;
    }, 1500);
  });

  resetBtn.addEventListener('click', () => {
    orderSuccessScreen.classList.remove('scale-100');
    orderSuccessScreen.classList.add('scale-0');
    cartPanel.classList.add('translate-y-full');
  });

  // Default initiation render
  applyAppIdentity('bloom');
}

// -----------------------------------------------------------------
// 7. ENGINEERING BADGE STUDIO (CREATIVE SANDBOX)
// -----------------------------------------------------------------
const STICKER_THEMES = {
  sunset: {
    bg: '#FF9F1C',
    color: '#011627',
    emoji: '⚙️',
    header: 'CALIBRATED GEAR PERMIT // CLASS 9 D'
  },
  matcha: {
    bg: '#A7F3D0',
    color: '#064E3B',
    emoji: '⚡',
    header: 'CIRCUIT TELEMETRY ID // CODE LAB'
  },
  blossom: {
    bg: '#FECDD3',
    color: '#881337',
    emoji: '🔬',
    header: 'SOLID MECHANICAL SYSTEM SCHEMATICS'
  }
};


const STAMP_EMOJIS = {
  coffee: '⚙️',
  heart: '⚡',
  plant: '🔬'
};

function initStickerStudio() {
  const textBox = document.getElementById('sticker-text');
  const dispText = document.getElementById('sticker-display-text');
  const emojiCtn = document.getElementById('sticker-emoji-container');
  const boardCanvas = document.getElementById('sticker-output-canvas');
  const metaHeader = document.getElementById('sticker-meta-header');
  const copyBtn = document.getElementById('copy-poster-slug-btn');

  const themeButtons = document.querySelectorAll('#sticker-theme-selector button');
  const stampButtons = document.querySelectorAll('#sticker-sidebar button, #sticker-graphic-selector button');

  if (!textBox || !dispText) return;

  // React on typing triggers
  textBox.addEventListener('input', (e) => {
    dispText.innerText = `"${e.target.value}"` || '"No limits found"';
  });

  // React to canvas color switches
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const themeKey = btn.getAttribute('data-sticker-theme');
      const theme = STICKER_THEMES[themeKey];
      if (!theme) return;

      boardCanvas.style.backgroundColor = theme.bg;
      dispText.style.color = theme.color;
      metaHeader.innerText = theme.header;
      metaHeader.style.color = theme.bg;
      metaHeader.style.backgroundColor = theme.color;

      themeButtons.forEach(b => b.classList.remove('ring-2', 'ring-white'));
      btn.classList.add('ring-2', 'ring-white');
    });
  });

  // React to stamp shifts
  stampButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const stampKey = btn.getAttribute('data-sticker-stamp');
      const icon = STAMP_EMOJIS[stampKey];
      if (!icon) return;

      emojiCtn.innerHTML = icon;
      
      // Rotate active state style
      stampButtons.forEach(b => b.classList.remove('border-art-orange', 'text-white', 'font-black'));
      btn.classList.add('border-art-orange', 'text-white', 'font-black');
      
      // Temporary cute rotation jump in preview stamp
      emojiCtn.classList.add('rotate-360', 'scale-125');
      setTimeout(() => {
        emojiCtn.classList.remove('rotate-360', 'scale-125');
      }, 500);
    });
  });

  // Clipboard copies
  copyBtn.addEventListener('click', () => {
    const textToCopy = `"${textBox.value}" — Custom Engineering Badge designed dynamically on Piyush Sharma's Class 9 D STEM Sandbox!`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      copyBtn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-400"></i> <span class="text-emerald-400 font-bold">Badge Copied!</span>`;
      renderCustomSVGIcons();

      setTimeout(() => {
        copyBtn.innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i> <span>Copy Badge Permit</span>`;
        renderCustomSVGIcons();
      }, 2000);
    });
  });
}

// -----------------------------------------------------------------
// 8. CONTACT FORM SUBMISSION INTERCEPT
// -----------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const alertPanel = document.getElementById('form-success-alert');
  const submitBtn = document.getElementById('form-submit-btn');
  const pills = document.querySelectorAll('#scope-pills-container button');

  // Pill visual selector
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('bg-art-blue', 'text-white', 'border-art-blue'));
      pill.classList.add('bg-art-blue', 'text-white', 'border-art-blue');
    });
  });

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Change visual buttons loading
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>TRANSMITTING SPECIFICATIONS TO PIYUSH...</span> <span class="animate-spin inline-block">⚙️</span>`;

    setTimeout(() => {
      // Clear values safely
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>TRANSMIT BRIEF DETAILS</span> <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>`;

      // Fade alert banner in
      if (alertPanel) {
        alertPanel.classList.remove('hidden');
        alertPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        setTimeout(() => {
          alertPanel.classList.add('hidden');
        }, 8000);
      }
    }, 1800);
  });
}
