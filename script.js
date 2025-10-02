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

const closeLightboxBtn = document.getElementById("closeLightbox");
const lbBuy = document.getElementById("lbBuy");
const lbContact = document.getElementById("lbContact");

// Renderizar catálogo
function renderCatalog(list){
  catalog.innerHTML = "";
  if(!list || list.length === 0){
    catalog.innerHTML = `<p style="color:var(--muted); grid-column:1/-1; text-align:center;">Nenhum produto encontrado.</p>`;
    return;
  }

  list.forEach(p=>{
    const card = document.createElement("div");
    card.className = "card";

    const price = p.price ? `<strong>${p.price}</strong>` : `<strong>R$ --</strong>`;

    card.innerHTML = `
      <div class="img-box">
        <img src="${p.img}" alt="${p.title}">
      </div>
      <h3>${p.title}</h3>
      <p>${p.desc}</p>

      <div class="meta-row">
        ${price}
        <div class="card-actions">
          <button class="btn-primary btn-buy" aria-label="Comprar ${escapeHtml(p.title)}">Comprar</button>
          <button class="btn-outline btn-details" aria-label="Ver detalhes de ${escapeHtml(p.title)}">Ver detalhes</button>
        </div>
      </div>
    `;

    // abrir lightbox ao clicar no card (exceto quando clicar nos botões)
    card.addEventListener("click", ()=> openLightbox(p));

    // impedir que os botões acionem o clique do card
    const btnBuy = card.querySelector(".btn-buy");
    const btnDetails = card.querySelector(".btn-details");

    btnBuy.addEventListener("click", (e)=>{
      e.stopPropagation();
      // Ação de compra — aqui você pode integrar com sistema, forma de pagamento, ou encaminhar para WhatsApp
      window.open(`https://wa.me/message/HZGG7UJUJ45JG1?text=Ol%C3%A1%2C+gostaria+de+comprar:+${encodeURIComponent(p.title)}`, "_blank");
    });

    btnDetails.addEventListener("click", (e)=>{
      e.stopPropagation();
      openLightbox(p); // abrir o lightbox com detalhes
    });

    catalog.appendChild(card);
  });
}
renderCatalog(products);

// Lightbox
function openLightbox(p){
  lbImg.src = p.img;
  lbImg.alt = p.title;
  lbTitle.textContent = p.title;
  lbDesc.textContent = p.desc + (p.tags && p.tags.length ? " — Categoria: " + p.tags[0] : "");
  lbPrice.textContent = p.price || "R$ --";

  // configurar ações do lightbox (comprar/contato)
  lbBuy.onclick = ()=> {
    // abrir WhatsApp com título do produto
    window.open(`https://wa.me/message/HZGG7UJUJ45JG1?text=Quero+comprar:+${encodeURIComponent(p.title)}`, "_blank");
  };
  lbContact.onclick = ()=> {
    window.open(`https://wa.me/message/HZGG7UJUJ45JG1?text=Olá,+preciso+de+mais+informações+sobre:+${encodeURIComponent(p.title)}`, "_blank");
  };

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}
closeLightboxBtn.onclick = ()=> {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
};
lightbox.addEventListener("click", e=>{ if(e.target===lightbox) { lightbox.classList.remove("open"); lightbox.setAttribute("aria-hidden","true"); } });

// Busca
document.getElementById("q").addEventListener("input", e=>{
  const q = e.target.value.toLowerCase();
  const filtered = products.filter(p=>
    (p.title && p.title.toLowerCase().includes(q)) ||
    (p.desc && p.desc.toLowerCase().includes(q)) ||
    (p.tags && p.tags.join(" ").toLowerCase().includes(q))
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
    else renderCatalog(products.filter(p=> p.tags && p.tags.includes(cat)));
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

/* Pequena função utilitária para evitar XSS ao inserir texto em aria-labels */
function escapeHtml(str){
  if(!str) return "";
  return String(str).replace(/[&<>"'`=\/]/g, function (s) {
    return ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/':'&#x2F;',
      '`':'&#x60;',
      '=':'&#x3D;'
    })[s];
  });
}
