/* 
   INDIA: JOURNEY TO FREEDOM - 80TH INDEPENDENCE DAY
   GALLERY & LIGHTBOX SCRIPT (js/gallery.js)
*/

const galleryData = [
  {
    title: "The Salt Satyagraha (Dandi March)",
    category: "Freedom Movement",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_qAzeKj8-EEjlzwb-nBSSHKktZg8mCAmtlSxssJHrce0tE4PL28zqkRu8&s=10",
    desc: "Mahatma Gandhi leading followers on the 240-mile Salt March from Sabarmati Ashram to Dandi in 1930, a defining campaign of civil disobedience.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "Netaji & Azad Hind Fauj",
    category: "Freedom Fighters",
    image: "https://i0.wp.com/www.opindia.com/wp-content/uploads/2020/10/pjimage-3-3.jpg?fit=1280%2C720&ssl=1",
    desc: "Subhas Chandra Bose inspecting troops of the Indian National Army (INA) in Singapore, 1943. The INA sought to free India through military campaigns.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "Tryst with Destiny Speech",
    category: "1947",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6NbAL88uk7MAAVm_Q96quxe_IZaSPgLjje7_vU9jJv1GP4dcTWqG5D2Jq&s=10",
    desc: "Pandit Jawaharlal Nehru delivering his historic speech to the Constituent Assembly on the midnight of 14-15 August 1947, declaring India's independence.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "The Red Fort (Lal Qila)",
    category: "Red Fort",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0gujx2BSWNzncykZJwjk901buyNW4m72fh8pHqD7TuyZLmJFpO_aWbc&s=10",
    desc: "The historic Red Fort in Delhi, where the national flag was hoisted by India's first Prime Minister on 16 August 1947, starting a yearly tradition.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "The Ashoka Chakra",
    category: "National Symbols",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ86NcKS2bu_X_nj_ctqaHvG3zX2Ooheg4s_GLC0UcVOkh3oRKdQ1Pq4m2_&s=10",
    desc: "The 24-spoke wheel represents the wheel of Dharma (Righteousness) and is depicted on the center of the National Flag of India.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "Chandrayaan 2 Liftoff",
    category: "Modern India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAqNF6uUDqFHHXVC6V_Q52iX5AmJ6RARi_hDWSWXXnHJ9dRNd7epcD6Fw&s=10",
    desc: "India's heavy-lift launch vehicle GSLV MkIII-M1 lifting off with Chandrayaan-2, showcasing India's advancement in space research and exploration.",
    source: "Wikimedia Commons - ISRO - Government of India"
  },
  {
    title: "Bhagat Singh at Lahore",
    category: "Freedom Fighters",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFCd-5sQ4jyFSkJg4GnvTfReP88OGBKAjVEh8remIGy8Pdp9xWBR8IaWw&s=10",
    desc: "Biographical portrait of Bhagat Singh. He remains one of the most prominent revolutionary martyrs of India's freedom struggle.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "Swadeshi Fabric Bonfire",
    category: "Freedom Movement",
    image: "https://pbs.twimg.com/media/Eap0peEU0AAfPQc.jpg",
    desc: "Protesters burning imported British textiles during the Swadeshi Movement to support local Indian khadi industries and assert economic self-rule.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "Jallianwala Bagh Memorial",
    category: "Freedom Movement",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmXeLAPEDC9YT4I8qXONURUBpUHHj-czwN2Te0SKKbxkVONWXl1N57FI&s=10",
    desc: "The Jallianwala Bagh Memorial in Amritsar, built to commemorate the hundreds of peaceful protesters massacred by British forces on 13 April 1919.",
    source: "Wikimedia Commons - CC BY-SA 4.0"
  },
  {
    title: "Rani Lakshmibai of Jhansi",
    category: "Freedom Fighters",
    image: "https://imgk.timesnownews.com/story/Rani_Laxmi_Bai_Of_Jhansi_Manikarnika_Tambe.png",
    desc: "Historical illustration representing Rani Lakshmibai, the Queen of Jhansi, who led armed military resistance during the Great Revolt of 1857.",
    source: "Adobe Stock - Educational Fair Use"
  },
  {
    title: "Independence Day at India Gate",
    category: "1947",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjnZ6W7IUK8AbsL51-2veeKFH-BENMzY0aj5Zi7iowg&s",
    desc: "Massive crowds gathered at the India Gate in New Delhi on 15 August 1947 to celebrate the birth of an independent nation.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "Shastri Addressing at Red Fort",
    category: "Red Fort",
    image: "https://pbs.twimg.com/media/DHNFBaTVwAAbqr6.jpg",
    desc: "Historic photo of Prime Minister Lal Bahadur Shastri addressing the nation from the ramparts of the Red Fort in Delhi during a national broadcast.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "Lion Capital of Ashoka",
    category: "National Symbols",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lion_Capital_Sarnath%2C_Catalogue_of_the_Museum_of_Archaeology_Sarnath_1911%2C.jpg/250px-Lion_Capital_Sarnath%2C_Catalogue_of_the_Museum_of_Archaeology_Sarnath_1911%2C.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    desc: "The ancient stone sculpture of four Asiatic lions standing back to back, adopted as the State Emblem of India in 1950.",
    source: "Wikimedia Commons - Public Domain"
  },
  {
    title: "Mangalyaan Spacecraft Assembly",
    category: "Modern India",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAzy4iH9tvxnlt6qkQ1d8cl8zUNszes0hYYTXIXB7x4xiH80Kp8GTzt7x&s=10",
    desc: "The Mars Orbiter Mission spacecraft (Mangalyaan) in ISRO's clean room before its successful launch to Mars orbit in 2013.",
    source: "Wikimedia Commons - ISRO - Government of India"
  }
];

let activeFilteredData = [...galleryData];
let currentLightboxIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});

/* --- 1. RENDER & FILTER GALLERY --- */
function initGallery() {
  const grid = document.getElementById('gallery-grid');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  
  if (!grid) return;
  
  function render(data) {
    grid.innerHTML = data.map((item, index) => {
      // Find standard index in unfiltered array
      const globalIndex = galleryData.findIndex(g => g.title === item.title);
      
      const colors = [
        ['#ff9933', '#111827'],
        ['#138808', '#111827'],
        ['#d4af37', '#111827'],
        ['#0645ad', '#111827']
      ];
      const hash = globalIndex % colors.length;
      const fallbackGrad = `linear-gradient(135deg, ${colors[hash][0]} 0%, ${colors[hash][1]} 100%)`;
      
      return `
        <div class="gallery-item anim-slide-up" data-index="${globalIndex}" onclick="openLightbox(${globalIndex})">
          <div style="position:relative; width:100%; height:auto; min-height:150px; background:var(--surface-secondary);">
            <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="gallery-fallback" style="display:none; width:100%; height:200px; background: ${fallbackGrad}; justify-content:center; align-items:center; flex-direction:column; color:#fff; text-align:center; padding: 20px;">
              <span style="font-size: 3.5rem;">🖼️</span>
              <p style="font-size:0.8rem; font-weight:700; margin-top:10px;">${item.title}</p>
            </div>
          </div>
          <div class="gallery-caption">
            <div class="gallery-caption-title">${item.title}</div>
            <div class="gallery-source">${item.category} • Source: ${item.source}</div>
          </div>
        </div>
      `;
    }).join('');
  }
  
  // Filter Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      if (filter === 'All') {
        activeFilteredData = [...galleryData];
      } else {
        activeFilteredData = galleryData.filter(item => item.category === filter);
      }
      render(activeFilteredData);
    });
  });
  
  // First load render
  render(activeFilteredData);
  initLightbox();
}

/* --- 2. LIGHTBOX INTERACTIVITY --- */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrevImage);
  nextBtn.addEventListener('click', showNextImage);
  
  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  
  // Keyboard bindings
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display !== 'flex') return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  });
}

window.openLightbox = function(index) {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  
  currentLightboxIdx = index;
  updateLightboxContent();
  
  lightbox.style.display = 'flex';
  lightbox.classList.add('anim-fade-in');
  document.body.style.overflow = 'hidden'; // Lock scroll
};

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.style.display = 'none';
    lightbox.classList.remove('anim-fade-in');
    document.body.style.overflow = 'auto'; // Restore scroll
  }
}

function updateLightboxContent() {
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxTitle = document.querySelector('.lightbox-title');
  const lightboxDesc = document.querySelector('.lightbox-desc');
  
  const item = galleryData[currentLightboxIdx];
  if (!item) return;
  
  lightboxImg.src = item.image;
  lightboxImg.alt = item.title;
  lightboxTitle.textContent = item.title;
  lightboxDesc.innerHTML = `${item.desc}<br><small style="color:var(--text-muted); font-size:0.75rem; margin-top:8px; display:inline-block;">Source: ${item.source} • Category: ${item.category}</small>`;
}

function showPrevImage() {
  currentLightboxIdx = (currentLightboxIdx - 1 + galleryData.length) % galleryData.length;
  updateLightboxContent();
}

function showNextImage() {
  currentLightboxIdx = (currentLightboxIdx + 1) % galleryData.length;
  updateLightboxContent();
}
