/* 
   INDIA: JOURNEY TO FREEDOM - 80TH INDEPENDENCE DAY
   GLOBAL JAVASCRIPT (js/main.js)
*/

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initDynamicCalculations();
  initScrollEffects();
  initGlobalShareAndCopy();
});

/* --- 1. DARK / LIGHT THEME --- */
function initTheme() {
  const themeToggle = document.querySelector('.theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      localStorage.setItem('theme', theme);
    });
  }
}

/* --- 2. MOBILE NAVIGATION --- */
function initNavigation() {
  const hamburger = document.querySelector('.hamburger-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navLinks.classList.toggle('active');
      const expanded = navLinks.classList.contains('active');
      hamburger.setAttribute('aria-expanded', expanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu when clicking navigation link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --- 3. DYNAMIC CALCULATIONS --- */
function initDynamicCalculations() {
  const currentYear = new Date().getFullYear();
  const celebrationNumber = currentYear - 1946;
  const completedYears = currentYear - 1947;
  
  // Format numbers with ordinals (e.g. 80th, 81st)
  const getOrdinalSuffix = (num) => {
    const j = num % 10, k = num % 100;
    if (j === 1 && k !== 11) return num + 'th'; // India officially refers to "80th", "75th" etc. Usually standard th.
    if (j === 2 && k !== 12) return num + 'nd';
    if (j === 3 && k !== 13) return num + 'rd';
    return num + 'th';
  };
  
  const celebrationOrdinal = getOrdinalSuffix(celebrationNumber);
  
  // Update elements
  document.querySelectorAll('.dynamic-year').forEach(el => el.textContent = currentYear);
  document.querySelectorAll('.dynamic-celebration').forEach(el => el.textContent = celebrationOrdinal);
  document.querySelectorAll('.dynamic-celebration-raw').forEach(el => el.textContent = celebrationNumber);
  document.querySelectorAll('.dynamic-completed').forEach(el => el.textContent = completedYears);
}

/* --- 4. SCROLL & PROGRESS EFFECTS --- */
function initScrollEffects() {
  const header = document.querySelector('header');
  const backToTop = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    // Update scroll progress bar
    document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
    
    // Header background change
    if (scrollTop > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Back to top visibility
    if (scrollTop > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  // Back to top click handler
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* --- 5. SHARE & COPY UTILITIES --- */
function initGlobalShareAndCopy() {
  // Share Button
  document.querySelectorAll('.share-page-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const shareData = {
        title: document.title,
        text: 'Explore India: Journey to Freedom digital archive.',
        url: window.location.href
      };
      
      try {
        if (navigator.share) {
          await navigator.share(shareData);
        } else {
          await navigator.clipboard.writeText(window.location.href);
          showToast('Link copied to clipboard!');
        }
      } catch (err) {
        console.log('Share error:', err);
      }
    });
  });
  
  // Sourced Quote Copy
  window.copyQuote = function(quoteText, author) {
    const fullText = `"${quoteText}" — ${author}`;
    navigator.clipboard.writeText(fullText)
      .then(() => {
        showToast('Quote copied with source citation!');
      })
      .catch(err => {
        console.error('Failed to copy quote: ', err);
      });
  };
}

/* Helper to show toast messages */
function showToast(message) {
  let toast = document.querySelector('.global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'global-toast';
    // Style toast on the fly or rely on styles
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    toast.style.backgroundColor = 'var(--surface-primary)';
    toast.style.border = '1px solid var(--saffron)';
    toast.style.color = 'var(--text-primary)';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = 'var(--border-radius-md)';
    toast.style.boxShadow = 'var(--box-shadow)';
    toast.style.zIndex = '9999';
    toast.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s';
    toast.style.opacity = '0';
    toast.style.pointerEvents = 'none';
    toast.style.fontSize = '0.9rem';
    toast.style.fontWeight = '500';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(100px)';
  }, 3000);
}
