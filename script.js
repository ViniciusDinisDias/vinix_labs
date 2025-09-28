// -------------------------------
// Carregar produtos de um arquivo JSON
// -------------------------------
let products = [];

fetch("products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    renderCatalog(products); // renderiza assim que os dados carregam
  })
  .catch(err => console.error("Erro ao carregar produtos:", err));

// Elementos principais
const catalog = document.getElementById("catalog");
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lightboxImg");
const lbTitle = document.getElementById("lightboxTitle");
const lbDesc = document.getElementById("lightboxDesc");
const lbPrice = document.getElementById("lightboxPrice");

// Renderizar catálogo
function renderCatalog(list){
  catalog.innerHTML = "";
  list.forEach(p=>{
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
  <div class="img-box">
    <img src="${p.img}" alt="${p.title}">
  </div>
  <h3>${p.title}</h3>
  <p>${p.desc}</p>
  <strong>${p.price}</strong>
`;
    card.addEventListener("click", ()=> openLightbox(p));
    catalog.appendChild(card);
  });
}
renderCatalog(products);

// Lightbox
function openLightbox(p){
  lbImg.src = p.img;
  lbTitle.textContent = p.title;
  lbDesc.textContent = p.desc + " — Categoria: " + p.tags[0];
  lbPrice.textContent = p.price;
  lightbox.classList.add("open");
}
document.getElementById("closeLightbox").onclick = ()=> lightbox.classList.remove("open");
lightbox.addEventListener("click", e=>{ if(e.target===lightbox) lightbox.classList.remove("open") });

// Busca
document.getElementById("q").addEventListener("input", e=>{
  const q = e.target.value.toLowerCase();
  const filtered = products.filter(p=>
    p.title.toLowerCase().includes(q) || 
    p.desc.toLowerCase().includes(q) ||
    p.tags.join(" ").toLowerCase().includes(q)
  );
  renderCatalog(filtered);
});

// Filtros
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    if(cat==="all") renderCatalog(products);
    else renderCatalog(products.filter(p=>p.tags.includes(cat)));
  });
});

// Tema (dark/light)
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", ()=>{
  if(toggle.checked){
    document.documentElement.style.setProperty("--bg","#f7f7f7");
    document.documentElement.style.setProperty("--card","#fff");
    document.documentElement.style.setProperty("--text","#111");
    document.documentElement.style.setProperty("--muted","#444");
  } else {
    document.documentElement.style.setProperty("--bg","#0b0b0b");
    document.documentElement.style.setProperty("--card","#121212");
    document.documentElement.style.setProperty("--text","#fff");
    document.documentElement.style.setProperty("--muted","#bfc3c6");
  }
});
