/* 
   INDIA: JOURNEY TO FREEDOM - 80TH INDEPENDENCE DAY
   TIMELINE INTERACTIONS (js/timeline.js)
*/

document.addEventListener('DOMContentLoaded', () => {
  initVerticalTimeline();
  initHorizontalTimeline();
});

/* --- 1. VERTICAL TIMELINE (1857 - 1947) --- */
function initVerticalTimeline() {
  const timelineCards = document.querySelectorAll('.timeline-card');
  
  if (timelineCards.length === 0) return;
  
  timelineCards.forEach(card => {
    // Add visual clue that card is clickable
    card.style.cursor = 'pointer';
    
    // Create and append an expand toggle indicator
    const indicator = document.createElement('div');
    indicator.className = 'timeline-expand-indicator';
    indicator.innerHTML = '<span style="font-size: 0.8rem; color: var(--gold); font-weight:600;">▼ Click for details</span>';
    indicator.style.marginTop = '10px';
    indicator.style.textAlign = 'right';
    indicator.style.transition = 'transform var(--transition-normal)';
    card.appendChild(indicator);
    
    card.addEventListener('click', (e) => {
      // Toggle detailed information panel
      const details = card.querySelector('.timeline-details');
      if (details) {
        const isVisible = details.classList.contains('timeline-details-visible');
        
        if (isVisible) {
          details.classList.remove('timeline-details-visible');
          indicator.innerHTML = '<span style="font-size: 0.8rem; color: var(--gold); font-weight:600;">▼ Click for details</span>';
        } else {
          details.classList.add('timeline-details-visible');
          indicator.innerHTML = '<span style="font-size: 0.8rem; color: var(--saffron); font-weight:600;">▲ Close details</span>';
        }
      }
    });
  });
}

/* --- 2. HORIZONTAL TIMELINE (1947 - 2047) --- */
function initHorizontalTimeline() {
  const timelineWrapper = document.querySelector('.horizontal-timeline-wrapper');
  const hItems = document.querySelectorAll('.h-timeline-item');
  const infoPanels = document.querySelectorAll('.journey-detail-panel');
  
  if (!timelineWrapper || hItems.length === 0) return;
  
  // Drag-to-scroll functionality for horizontal timeline
  let isDown = false;
  let startX;
  let scrollLeft;
  
  timelineWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    timelineWrapper.style.cursor = 'grabbing';
    startX = e.pageX - timelineWrapper.offsetLeft;
    scrollLeft = timelineWrapper.scrollLeft;
  });
  
  timelineWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    timelineWrapper.style.cursor = 'grab';
  });
  
  timelineWrapper.addEventListener('mouseup', () => {
    isDown = false;
    timelineWrapper.style.cursor = 'grab';
  });
  
  timelineWrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - timelineWrapper.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll-fast factor
    timelineWrapper.scrollLeft = scrollLeft - walk;
  });
  
  // Interactive nodes click handler
  hItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all items
      hItems.forEach(i => i.classList.remove('active'));
      // Add active class to clicked item
      item.classList.add('active');
      
      const targetYear = item.getAttribute('data-year');
      
      // Toggle corresponding detailed information panel below
      if (infoPanels.length > 0) {
        infoPanels.forEach(panel => {
          if (panel.getAttribute('id') === `panel-${targetYear}`) {
            panel.style.display = 'block';
            panel.classList.add('anim-fade-in');
          } else {
            panel.style.display = 'none';
            panel.classList.remove('anim-fade-in');
          }
        });
      }
    });
  });
}
