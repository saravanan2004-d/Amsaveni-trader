/* =========================================================
   AMSAVENI TRADERS — Interactions & 3D
========================================================= */

/* ---------- Reusable SVG icon builders (grain identity system) ---------- */
function svgGrainCluster(color){
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <g fill="${color}">
      <ellipse cx="60" cy="66" rx="15" ry="24" transform="rotate(-8 60 66)"/>
      <ellipse cx="38" cy="72" rx="11" ry="18" transform="rotate(12 38 72)" opacity="0.85"/>
      <ellipse cx="82" cy="72" rx="11" ry="18" transform="rotate(-18 82 72)" opacity="0.85"/>
      <ellipse cx="48" cy="50" rx="9" ry="15" transform="rotate(-22 48 50)" opacity="0.7"/>
      <ellipse cx="72" cy="50" rx="9" ry="15" transform="rotate(20 72 50)" opacity="0.7"/>
    </g>
    <path d="M60 42 Q66 18 84 14" stroke="${color}" stroke-width="3.5" fill="none" stroke-linecap="round" opacity="0.9"/>
  </svg>`;
}
function svgBeanCluster(color){
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <g fill="${color}">
      <ellipse cx="46" cy="52" rx="16" ry="12" transform="rotate(-18 46 52)"/>
      <ellipse cx="72" cy="46" rx="16" ry="12" transform="rotate(14 72 46)" opacity="0.85"/>
      <ellipse cx="40" cy="76" rx="16" ry="12" transform="rotate(8 40 76)" opacity="0.8"/>
      <ellipse cx="68" cy="80" rx="16" ry="12" transform="rotate(-12 68 80)" opacity="0.9"/>
      <ellipse cx="88" cy="62" rx="14" ry="11" transform="rotate(20 88 62)" opacity="0.7"/>
    </g>
  </svg>`;
}
function svgSeedDots(color){
  let dots='';
  const pos=[[38,40],[58,32],[78,44],[30,62],[52,58],[74,66],[44,84],[66,88],[86,74],[26,86],[92,52],[60,74]];
  pos.forEach((p,i)=>{
    const r = 4 + (i%3);
    dots += `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${color}" opacity="${0.55+ (i%4)*0.12}"/>`;
  });
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">${dots}</svg>`;
}
function svgDisc(color){
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="34" fill="${color}" opacity="0.9"/>
    <circle cx="60" cy="60" r="34" fill="none" stroke="${color}" stroke-width="2" opacity="0.5"/>
    <g stroke="${color}" stroke-width="1.6" opacity="0.45">
      <circle cx="60" cy="60" r="24" fill="none"/>
      <circle cx="60" cy="60" r="14" fill="none"/>
    </g>
    <g fill="${color}" opacity="0.6">
      <circle cx="46" cy="48" r="2.4"/><circle cx="76" cy="52" r="2"/><circle cx="66" cy="76" r="2.6"/><circle cx="42" cy="72" r="1.8"/>
    </g>
  </svg>`;
}

function iconFor(kind,color){
  if(kind==='grain') return svgGrainCluster(color);
  if(kind==='pulse') return svgBeanCluster(color);
  if(kind==='seed') return svgSeedDots(color);
  if(kind==='fryum') return svgDisc(color);
  return svgGrainCluster(color);
}

/* ---------- Product data ---------- */
const PRODUCTS = [
  {name:'Maize/Corn', kind:'grain', image:'assets/images/maize.png', bg:'#FBF3DC',desc:'Golden, well-dried maize graded for both feed and food-grade bulk orders.'},

  {name:'Red-Sorghum', kind:'grain', image:'assets/images/Red Sorghum.png', bg:'#FBE6E1',desc:'Deep-red jowar sourced from local growers, cleaned and moisture-tested.'},

  {name:'Black-Gram(Urad Dal)', kind:'pulse', image:'assets/images/Black Gram.png',bg:'#EAE8E5', desc:'Whole and split urad, prized for its creamy texture in South Indian cooking.'},

  {name:'Green-Gram(Mung Bean)', kind:'pulse', image:'assets/images/GreenGram.png', bg:'#E9F1E0',desc:'Small, uniform mung beans — a staple pulse for sprouting and dal.'},

  {name:'Coriander-Seeds', kind:'seed', image:'assets/images/Coriander seeds.png', bg:'#F3F1DE',desc:'Aromatic dhania seeds, sun-dried and screened for size uniformity.'},

  {name:'Sun-dried-Fryums', kind:'fryum', image:'assets/images/sundriedfryums.png',bg:'#F6F0E6', desc:'Traditional sun-dried fryums, ready to fry — a household favourite.'},

  {name:'White-Sorghum', kind:'grain', image:'assets/images/WhiteSorghum.png',bg:'#F7F5ED', desc:'Pale, food-grade white jowar milled fine for flour and porridge.'},

  {name:'Sago-Fryums (Tapioca)', kind:'fryum', image:'assets/images/SagoFryums.png',bg:'#F9F8F2', desc:'Pearl-white tapioca fryums, cleaned and calibrated for consistent size.'},

  {name:'Foxtail-Millet', kind:'grain', image:'assets/images/Fortail.png', bg:'#FBF2DC',desc:'Thinai — a fine-grained millet rich in fibre, cleaned and de-husked.'},

  {name:'Barnyard-Millet', kind:'grain', image:'assets/images/barnyardmillet.png', bg:'#F7EEDD',desc:'Kuthiraivali millet, lightweight and quick-cooking, sourced fresh.'},

  {name:'Kodo-Millet', kind:'grain', image:'assets/images/Kodumillet.png', bg:'#F1E6D6', desc:'Varagu millet with its distinct earthy tone, cleaned and graded.'},

  {name:'Pearl-Millet', kind:'grain', image:'assets/images/PearlMillet.png',bg:'#EDEDD8', desc:'Kambu, a hardy staple millet, sourced in bulk from the dry belt.'},

  {name:'Chickpeas(Bengal-Gram)', kind:'pulse', image:'assets/images/Chickpeas.png', bg:'#FBF0D9',desc:'Kondakadalai in whole and split form, ideal for retail and bulk trade.'},

  {name:'Field-Beans/Hyacinth', kind:'pulse', image:'assets/images/FieldBeans.png', bg:'#EEE7F3',desc:'Mochai beans, a regional favourite pulse with a distinct nutty bite.'},

  {name:'Pigeon-Pea(Toor-Dal)', kind:'pulse', image:'assets/images/Pigeonpea.png',bg:'#FCEBD6', desc:'Split toor dal, the everyday staple pulse of the South Indian kitchen.'},

  {name:'Neem-Seeds', kind:'seed', image:'assets/images/NeemSeeds.png', bg:'#E7F0DF',desc:'Sun-dried neem seeds, traded for oil extraction and organic use.'},

  {name:'Sesame-Seeds', kind:'seed', image:'assets/images/SesameSeeds.png',bg:'#EDEAE3', desc:'Ellu seeds, cleaned white and black varieties for oil and confectionery.'},

  {name:'Cowpea(Black-eyed-Pea)', kind:'pulse', image:'assets/images/Cowpea.png', bg:'#F5F2E8',desc:'Karamani beans with their signature dark eye, sourced in bulk lots.'},
];

const KIND_LABEL = {grain:'Grain / Millet', pulse:'Pulse / Bean', seed:'Seed', fryum:'Fryum'};

/* ---------- Build product grid ---------- */
function buildProducts(){
  const grid = document.getElementById('productGrid');
  const swiperWrap = document.getElementById('featuredSwiperWrap');
  let gridHTML = '';
  let swiperHTML = '';

  PRODUCTS.forEach((p,i)=>{
    gridHTML += `
    <div class="product-card-outer" data-filter="${p.kind}">
      <div class="product-card">
        <div class="card-face card-front">
          <div class="card-visual" style="background:${p.bg}">
  <span class="card-tag">${KIND_LABEL[p.kind]}</span>
  <img src="${p.image}" alt="${p.name}" class="product-image">
</div>
          <div class="card-front-body">
            <h3>${p.name}</h3>
            <p class="flip-hint">Hover to view details →</p>
          </div>
        </div>
        <div class="card-face card-back" style="background:linear-gradient(155deg, var(--forest-dark), var(--forest-deep))">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <span class="card-back-foot">AMSAVENI TRADERS · ${KIND_LABEL[p.kind]}</span>
        </div>
      </div>
    </div>`;

    if(i < 8){
      swiperHTML += `
      <div class="swiper-slide">
        <div class="product-card-outer" data-filter="${p.kind}" style="height:300px">
          <div class="product-card">
            <div class="card-face card-front">
              <div class="card-visual" style="background:${p.bg}">
                <span class="card-tag">${KIND_LABEL[p.kind]}</span>
                <img src="${p.image}" alt="${p.name}" class="product-image">
              </div>
              <div class="card-front-body">
                <h3>${p.name}</h3>
                <p class="flip-hint">Hover to view details →</p>
              </div>
            </div>
            <div class="card-face card-back" style="background:linear-gradient(155deg, var(--forest-dark), var(--forest-deep))">
              <h3>${p.name}</h3>
              <p>${p.desc}</p>
              <span class="card-back-foot">AMSAVENI TRADERS</span>
            </div>
          </div>
        </div>
      </div>`;
    }
  });

  grid.innerHTML = gridHTML;
  swiperWrap.innerHTML = swiperHTML;
}

/* ---------- Product filter ---------- */
function initFilter(){
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip=>{
    chip.addEventListener('click', ()=>{
      chips.forEach(c=>c.classList.remove('active'));
      chip.classList.add('active');
      const f = chip.dataset.filter;
      document.querySelectorAll('.product-card-outer').forEach(card=>{
        if(f==='all' || card.dataset.filter===f){
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
}

/* ---------- Services data ---------- */
const SERVICES = [
  {title:'Agricultural Commission Services', desc:'Fair, transparent commission trading between farmers and merchants with honest weighment on every lot.', icon:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'},
  {title:'Wholesale Trading', desc:'Bulk stock of pulses, millets, seeds and grains, moved consistently to meet merchant demand.', icon:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h18v18H3z"/><path d="M3 9h18M9 21V9"/></svg>'},
  {title:'Bulk Purchase & Supply', desc:'Reliable sourcing at scale, with consistent grading across every consignment we supply.', icon:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7l-8-4-8 4m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>'},
  {title:'Farmer Support', desc:'Fair rates, prompt settlement, and guidance on grading and packing for a smoother sale.', icon:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z"/></svg>'},
  {title:'Quality Product Distribution', desc:'Every batch inspected before dispatch, ensuring merchants receive consistently graded produce.', icon:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>'},
  {title:'Storage & Logistics Support', desc:'Dry, well-ventilated storage and organised dispatch to keep produce market-ready.', icon:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21V9l9-6 9 6v12"/><path d="M9 21v-8h6v8"/></svg>'},
];

function buildServices(){
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = SERVICES.map(s=>`
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    </div>
  `).join('');
}

/* ---------- Gallery (illustrated, masonry) ---------- */
const GALLERY = [
  {
    image: "assets/images/Gallery-1.png",
    caption: "Premium Grain Warehouse"
  },
  {
    image: "assets/images/Gallery-2.png",
    caption: "Agricultural Products"
  },
  {
    image: "assets/images/Gallery-3.png",
    caption: "Bulk Grain Storage"
  },
  {
    image: "assets/images/Gallery-4.png",
    caption: "Quality Maize"
  },
  {
    image: "assets/images/Gallery-5.png",
    caption: "Premium Millets"
  },
  {
    image: "assets/images/Gallery-6.png",
    caption: "Fresh Pulses"
  },
  {
    image: "assets/images/Gallery-7.png",
    caption: "Sun-dried Fryums"
  },
  {
    image: "assets/images/Gallery-8.png",
    caption: "Sesame Seeds"
  }
];

function buildGallery() {
  const wrap = document.getElementById("masonryGallery");

  wrap.innerHTML = GALLERY.map(g => `
    <div class="masonry-item" data-caption="${g.caption}">
      <img src="${g.image}" alt="${g.caption}" class="gallery-image">
      <div class="masonry-overlay">
        <span>${g.caption}</span>
      </div>
    </div>
  `).join('');

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxInner = document.getElementById('lightboxInner');
  const lightboxCaption = document.getElementById('lightboxCaption');

  document.querySelectorAll('.masonry-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img').cloneNode(true);
      lightboxInner.innerHTML = "";
      lightboxInner.appendChild(img);
      lightboxCaption.textContent = item.dataset.caption;
      lightbox.classList.add('open');
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
    }
  });
}
/* ---------- Nav scroll state + active link + mobile menu ---------- */
function initNav(){
  const header = document.getElementById('siteHeader');
  const onScroll = ()=>{
    header.classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 700);
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  hamburger.addEventListener('click', ()=>{
    const open = nav.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click', ()=>{
      nav.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // active link on scroll
  const sections = ['home','about','products','services','gallery','contact'].map(id=>document.getElementById(id)).filter(Boolean);
  const navLinks = document.querySelectorAll('.nav-link');
  const spy = ()=>{
    let current = sections[0]?.id;
    sections.forEach(sec=>{
      if(window.scrollY + 140 >= sec.offsetTop) current = sec.id;
    });
    navLinks.forEach(l=>{
      l.classList.toggle('active', l.getAttribute('href') === '#'+current);
    });
  };
  window.addEventListener('scroll', spy, {passive:true});
  spy();

  document.getElementById('backToTop').addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior:'smooth'});
  });
}

/* ---------- Counters ---------- */
function initCounters(){
  const nums = document.querySelectorAll('.stat-num');
  let done = false;
  const run = ()=>{
    if(done) return; done = true;
    nums.forEach(el=>{
      const target = parseInt(el.dataset.count,10);
      const obj = {v:0};
      gsap.to(obj,{v:target, duration:1.8, ease:'power2.out', onUpdate:()=>{el.textContent = Math.round(obj.v);}});
    });
  };
  const hero = document.querySelector('.hero-stats');
  if(!hero) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting) run(); });
  }, {threshold:0.4});
  io.observe(hero);
}

/* ---------- Scroll reveal via IntersectionObserver ---------- */
function initReveal(){
  const items = document.querySelectorAll('.reveal-up');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, {threshold:0.15});
  items.forEach(i=>io.observe(i));
}

/* ---------- GSAP card / grid stagger (products, services, gallery) ---------- */
function initStaggerReveals(){
  if(typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.product-card-outer').forEach((card, i)=>{
    gsap.fromTo(card, {opacity:0, y:40, rotateX:8}, {
      opacity:1, y:0, rotateX:0, duration:0.7, ease:'power3.out',
      scrollTrigger:{trigger:card, start:'top 92%'},
      delay:(i%4)*0.06
    });
  });

  gsap.utils.toArray('.service-card').forEach((card, i)=>{
    gsap.fromTo(card, {opacity:0, y:30}, {
      opacity:1, y:0, duration:0.7, ease:'power3.out',
      scrollTrigger:{trigger:card, start:'top 92%'}, delay:(i%3)*0.08
    });
  });

  gsap.utils.toArray('.masonry-item').forEach((card, i)=>{
    gsap.fromTo(card, {opacity:0, scale:0.92}, {
      opacity:1, scale:1, duration:0.6, ease:'power2.out',
      scrollTrigger:{trigger:card, start:'top 95%'}, delay:(i%4)*0.05
    });
  });
}

/* ---------- Swiper init ---------- */
function initSwiper(){
  if(typeof Swiper === 'undefined') return;
  new Swiper('.productSwiper', {
    slidesPerView: 1.15,
    spaceBetween: 20,
    navigation:{ nextEl:'.product-next', prevEl:'.product-prev' },
    breakpoints:{
      560:{slidesPerView:2.1},
      900:{slidesPerView:3.1},
      1200:{slidesPerView:4.1},
    }
  });
}

/* ---------- Contact form (front-end only demo handling) ---------- */
function initForm(){
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const product = form.product.value.trim();
    const message = form.message.value.trim();

    const text = `Hello Amsaveni Traders, I'm ${name} (${phone}). I need: ${product}. ${message}`;

    note.textContent = 'Thank you — opening WhatsApp to send your enquiry...';

    const whatsappNumbers = [
      "917868998445",
      "919942138145"
      
    ];

    whatsappNumbers.forEach((number, index)=>{
      setTimeout(()=>{
        window.open(
          `https://wa.me/${number}?text=${encodeURIComponent(text)}`,
          '_blank'
        );
      }, index * 2000);
    });

    form.reset();
  });
}

/* ---------- THREE.js hero: rotating grain field ---------- */
function initHeroThree(){
  const canvas = document.getElementById('grainCanvas');
  if(!canvas || typeof THREE === 'undefined') return;

  const hero = document.querySelector('.hero');
  let width = hero.clientWidth, height = hero.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, width/height, 0.1, 100);
  camera.position.set(0, 0, 13);

  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);

  const group = new THREE.Group();
  scene.add(group);

  const goldMat = new THREE.MeshStandardMaterial({color:0xD4AF37, roughness:0.4, metalness:0.35});
  const creamMat = new THREE.MeshStandardMaterial({color:0xF4EFE3, roughness:0.5, metalness:0.1});
  const greenMat = new THREE.MeshStandardMaterial({color:0x2E7D32, roughness:0.45, metalness:0.15});
  const mats = [goldMat, creamMat, greenMat];

  const grainGeo = new THREE.SphereGeometry(1, 10, 10);
  grainGeo.scale(0.62, 1, 0.62);

  const COUNT = window.innerWidth < 700 ? 60 : 130;
  const grains = [];
  for(let i=0;i<COUNT;i++){
    const mesh = new THREE.Mesh(grainGeo, mats[i % mats.length]);
    const radius = 4.2 + Math.random()*3.6;
    const theta = Math.random()*Math.PI*2;
    const y = (Math.random()-0.5)*7.5;
    mesh.position.set(Math.cos(theta)*radius, y, Math.sin(theta)*radius);
    mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
    const scale = 0.35 + Math.random()*0.5;
    mesh.scale.setScalar(scale);
    mesh.userData = {radius, theta, y, speed: 0.06 + Math.random()*0.1, spin: (Math.random()-0.5)*0.02};
    group.add(mesh);
    grains.push(mesh);
  }

  const ambient = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffe9b0, 1.1);
  key.position.set(6, 8, 6);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x3a8c40, 0.6);
  rim.position.set(-6, -3, -4);
  scene.add(rim);

  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e)=>{
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  });

  const clock = new THREE.Clock();
  function animate(){
    const t = clock.getElapsedTime();
    grains.forEach(g=>{
      const d = g.userData;
      d.theta += d.speed * 0.01;
      g.position.x = Math.cos(d.theta) * d.radius;
      g.position.z = Math.sin(d.theta) * d.radius;
      g.position.y = d.y + Math.sin(t*0.5 + d.theta*3) * 0.25;
      g.rotation.x += d.spin;
      g.rotation.y += d.spin*1.3;
    });
    group.rotation.y = t*0.03 + mouseX*0.3;
    group.rotation.x = mouseY*0.15;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', ()=>{
    width = hero.clientWidth; height = hero.clientHeight;
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
}

/* ---------- init all ---------- */
window.addEventListener('DOMContentLoaded', ()=>{

  buildProducts();
  buildServices();
  buildGallery();
  initFilter();
  initNav();
  initCounters();
  initReveal();
  initForm();
  initSwiper();
  initHeroThree();

  document.getElementById('year').textContent = new Date().getFullYear();

  setTimeout(initStaggerReveals, 150);

  window.addEventListener('load', ()=>{
    document.getElementById('loader').classList.add('hide');
  });

  // fallback in case load event already fired
  setTimeout(()=>document.getElementById('loader').classList.add('hide'), 2200);

  // ==========================
  // Dark Mode
  // ==========================

  const toggle = document.getElementById("theme-toggle");

  if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
          localStorage.setItem("theme", "dark");
          toggle.textContent = "☀️";
      } else {
          localStorage.setItem("theme", "light");
          toggle.textContent = "🌙";
      }
  });

});