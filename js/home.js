/* 
   INDIA: JOURNEY TO FREEDOM - 80TH INDEPENDENCE DAY
   HOMEPAGE LOGIC (js/home.js)
*/

document.addEventListener('DOMContentLoaded', () => {
  initMilestoneTransition();
  initParticleCanvas();
  initMathAnimation();
});

/* --- 1. MILESTONE TRANSITION COUNTER EFFECT --- */
function initMilestoneTransition() {
  const container = document.querySelector('.transition-container');
  const completedEl = document.getElementById('anim-completed');
  const celebrationEl = document.getElementById('anim-celebration');
  
  if (!container || !completedEl || !celebrationEl) return;
  
  const currentYear = new Date().getFullYear();
  const targetCompleted = currentYear - 1947; // 79 for 2026
  const targetCelebration = currentYear - 1946; // 80 for 2026
  
  // Custom count up animation function
  const animateValue = (element, start, end, duration, callback) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const val = Math.floor(progress * (end - start) + start);
      element.textContent = val;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = end;
        if (callback) callback();
      }
    };
    window.requestAnimationFrame(step);
  };
  
  // Staggered trigger: completed years first, then celebration year rolls up!
  animateValue(completedEl, 0, targetCompleted, 1200, () => {
    // When completed years finishes, start the celebration count-up
    animateValue(celebrationEl, targetCompleted, targetCelebration, 800, () => {
      // Glow container when complete
      container.classList.add('glow-transition');
      // Spawn tricolour celebration particles
      createConfettiExplosion(container);
    });
  });
}

function createConfettiExplosion(parent) {
  const colors = ['#ff9933', '#ffffff', '#138808', '#d4af37'];
  for (let i = 0; i < 24; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.borderRadius = '50%';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = '50%';
    particle.style.top = '50%';
    particle.style.transform = 'translate(-50%, -50%)';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '10';
    particle.style.transition = 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1.2s';
    
    parent.style.position = 'relative';
    parent.appendChild(particle);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 140 + 50;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;
    
    // Force layout reflow
    particle.offsetHeight;
    
    particle.style.transform = `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(${Math.random() * 1.5 + 0.5})`;
    particle.style.opacity = '0';
    
    setTimeout(() => {
      particle.remove();
    }, 1200);
  }
}

/* --- 2. CINEMATIC PARTICLE BACKGROUND --- */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  
  // Disable canvas animation if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }
  
  const ctx = canvas.getContext('2d');
  let particlesArray = [];
  const colors = [
    'rgba(255, 153, 51, 0.45)', // Saffron
    'rgba(255, 255, 255, 0.5)',  // White
    'rgba(19, 136, 8, 0.45)'    // Green
  ];
  
  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100;
      this.size = Math.random() * 3 + 1;
      this.speedY = Math.random() * 0.8 + 0.2;
      this.speedX = Math.random() * 0.4 - 0.2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.opacity = Math.random() * 0.5 + 0.3;
    }
    
    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      
      // Reset particle if it drifts off top or sides
      if (this.y < 0) {
        this.y = canvas.height;
        this.x = Math.random() * canvas.width;
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }
  
  function initParticles() {
    particlesArray = [];
    const count = Math.min(60, Math.floor(canvas.width / 20));
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
      particlesArray[i].draw();
    }
    
    requestAnimationFrame(animate);
  }
  
  initParticles();
  animate();
}

/* --- 3. MATH EXPLANATION ANIMATION --- */
function initMathAnimation() {
  const mathItems = document.querySelectorAll('.math-item');
  if (mathItems.length === 0) return;
  
  // Use Intersection Observer to animate items when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Set staggered delay
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, idx * 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  mathItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    observer.observe(item);
  });
}
