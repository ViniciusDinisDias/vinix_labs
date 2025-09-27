// Defina manualmente seus produtos
const products = [
  {
    id: "p1",
    title: "Boneco Batman",
    price: "",
    img: "img/batman.jpg",
    desc: "Boneco Batman colécionavel.",
    tags: ["Boneco"]
  },
  {
    id: "p2",
    title: "Decoração de Pai e Filho",
    price: "",
    img: "img/pai_filho_decoracao.png",
    desc: "Escultura decorativa paternal.",
    tags: ["Decoração"]
  },
  {
    id: "p3",
    title: "Boneco Freeza Tricô",
    price: "",
    img: "img/freeza_croche.jpg",
    desc: "Boneco colecionável frezza com pintura detalhada.",
    tags: ["Boneco"]
  },
  {
    id: "p4",
    title: "Logo Barbie Decorativo",
    price: "",
    img: "img/barbie_decoracao.jpg",
    desc: "Logo Barbie para decoração.",
    tags: ["Decoração"]
  },
  {
    id: "p5",
    title: "Boneco batman Full Black",
    price: "",
    img: "img/batman_boneco_todo_preto.jpg",
    desc: "Boneco colecionável batman com pintura all black.",
    tags: ["Boneco"]
  },
  {
    id: "p6",
    title: "Bonecos articulados RoundSix",
    price: "",
    img: "img/bonecos_roundsix.jpg",
    desc: "Boneco colecionável RoundSix articulado.",
    tags: ["Boneco"]
  },
   {
    id: "p7",
    title: "Bulbassaur",
    price: "",
    img: "img/bulbassaur.jpg",
    desc: "Pokémon bulbassaur colecionável.",
    tags: ["Boneco"]
  }, 
  {
    id: "p8",
    title: "Cabeça Deadpool",
    price: "",
    img: "img/cabeca_deadpool.jpeg",
    desc: "Cabeça Deadpool colecionável decorativa.",
    tags: ["Decoração"]
  },
  {
    id: "p9",
    title: "Cabeça Wolverine",
    price: "",
    img: "img/cabeca_wolverine.jpg",
    desc: "Cabeça Wolverine colecionável decorativa.",
    tags: ["Decoração"]
  },
   {
    id: "p10",
    title: "Boneco Baby Groot 'Rilex'",
    price: "",
    img: "img/gru_vidaloka.jpg",
    desc: "Boneco Groot Guardidões da Galáxia decorativo.",
    tags: ["Decoração"]
  },
   {
    id: "p11",
    title: "Cruz sem borda",
    price: "",
    img: "img/cruz_maispadoquepumba.jpg",
    desc: "Cruz de parede decorativa com oração em inglês.",
    tags: ["Decoração"]
  },
   {
    id: "p12",
    title: "Cruz com borda",
    price: "",
    img: "img/cruz_suporte_preto.jpg",
    desc: "Cruz de parede decorativa com oração em inglês.",
    tags: ["Decoração"]
  },
  {
    id: "p13",
    title: "Castelo Halloween",
    price: "",
    img: "img/decoracao_castelo_hallowen.jpeg",
    desc: "Castelo para decoração do halloween.",
    tags: ["Decoração"]
  },
  {
    id: "p14",
    title: "Elefrante tricô",
    price: "",
    img: "img/elefante_trico_decoracao.png",
    desc: "Elefante decorativo com pintura detalhada.",
    tags: ["Decoração"]
  },
  {
    id: "p15",
    title: "Urban Skeleton",
    price: "",
    img: "img/esqueleto_mini_com_roupa.jpg",
    desc: "Bonecos esqueletos vestidos.",
    tags: ["Boneco"]
  },
  {
    id: "p16",
    title: "Urban Skeleton Nike",
    price: "",
    img: "img/esqueleto_mini_roupa_nike.jpg",
    desc: "Bonecos esqueletos com roupa Nike.",
    tags: ["Boneco"]
  },
  {
    id: "p17",
    title: "Fantasma Tricô",
    price: "",
    img: "img/fantasma_com_coracao_trico.jpg",
    desc: "Boneco fantasma com coração na mão.",
    tags: ["Boneco"]
  },
  {
    id: "p18",
    title: "Cachorros Decorativos",
    price: "",
    img: "img/cachorros_decoracao.png",
    desc: "Cachorros para decoração.",
    tags: ["Decoração"]
  },
  {
    id: "p19",
    title: "Garfield",
    price: "",
    img: "img/garfield.jpg",
    desc: "Boneco garfield colecionável.",
    tags: ["Boneco"]
  },
  {
    id: "p20",
    title: "Gengar Tricô",
    price: "",
    img: "img/gengar_trico.jpg",
    desc: "Decoração Pokémon Gengar com pintura detalhada.",
    tags: ["Decoração"]
  },
  {
    id: "p21",
    title: "Gengar",
    price: "",
    img: "img/gengar.jpg",
    desc: "Boneco Pokémon Gengar.",
    tags: ["Boneco"]
  },
  {
    id: "p22",
    title: "Decoração Goku",
    price: "",
    img: "img/goku_decoration.jpg",
    desc: "Silhueta goku decorativa.",
    tags: ["Decoração"]
  },
  {
    id: "p23",
    title: "Hello Kitty Dark",
    price: "",
    img: "img/hellokitty_dark.JPEG",
    desc: "Boneca Hello Kitty Dark.",
    tags: ["Boneco"]
  },
  {
    id: "p24",
    title: "Miniverse Hello Kitty",
    price: "",
    img: "img/hellokity_miniverse.jpeg",
    desc: "Decoração da Hello Kitty Miniverse.",
    tags: ["Decoração"]
  },
  {
    id: "p25",
    title: "Boneco Jake",
    price: "",
    img: "img/jake_horadeaventura.jpg",
    desc: "Boneco Jake Hora de Aventura.",
    tags: ["Boneco"]
  },
  {
    id: "p26",
    title: "Jesus com Cruz",
    price: "",
    img: "img/jesus_carregando_cruz.jpeg",
    desc: "Silhueta de Jesus com cruz decorativa.",
    tags: ["Decoração"]
  },
  {
    id: "p27",
    title: "Labubu",
    price: "",
    img: "img/labubu.jpg",
    desc: "Bonequinhos Labubu.",
    tags: ["Boneco"]
  },
  {
    id: "p28",
    title: "LEGO Deadpool",
    price: "",
    img: "img/lego_deadpool_com_armas.jpg",
    desc: "Boneco LEGO Deadpool com armas.",
    tags: ["Boneco"]
  },
  {
    id: "p29",
    title: "LEGO Flash",
    price: "",
    img: "img/lego_flash.jpg",
    desc: "Boneco LEGO flash com capacete móvel.",
    tags: ["Boneco"]
  },
  {
    id: "p30",
    title: "Mascara Crash",
    price: "",
    img: "img/mascara_crash.jpg",
    desc: "Marcara do Crash Decorativa.",
    tags: ["Decoração"]
  },
  {
    id: "p31",
    title: "Meninas Superpoderosas",
    price: "",
    img: "img/meninas_superpoderosas.jpg",
    desc: "Bonecas das Meninas Suporpoderosas.",
    tags: ["Decoração"]
  },
  {
    id: "p33",
    title: "Bart Simpson",
    price: "",
    img: "img/mini_bart_simpson.png",
    desc: "Boneco Bart Simpson colecionável.",
    tags: ["Boneco"]
  },
  {
    id: "p34",
    title: "Charizard",
    price: "",
    img: "img/mini_charizard.jpeg",
    desc: "Pokémon Charizard colecionável.",
    tags: ["Boneco"]
  },
  {
    id: "p35",
    title: "Goku",
    price: "",
    img: "img/mini_goku.jpg",
    desc: "Boneco Goku com suporte colecionável.",
    tags: ["Boneco"]
  },
  {
    id: "p36",
    title: "Groot",
    price: "",
    img: "img/mini_grud.jpg",
    desc: "Boneco Baby Groot colecionável.",
    tags: ["Boneco"]
  },
  {
    id: "p37",
    title: "Patapim",
    price: "",
    img: "img/patampim.jpg",
    desc: "Boneco Patampim colecionável.",
    tags: ["Boneco"]
  },
  {
    id: "p38",
    title: "Pikachu",
    price: "",
    img: "img/pikachu_cabecudo.JPG",
    desc: "Boneco Pokémon Pikachu.",
    tags: ["Boneco"]
  },
  {
    id: "p39",
    title: "Pikachu Com Raios",
    price: "",
    img: "img/pikachu_chidori.JPEG",
    desc: "Boneco Pokémon Pikachu lançando raios.",
    tags: ["Boneco"]
  },
  {
    id: "p40",
    title: "Placa Ayrton Senna",
    price: "",
    img: "img/placa_senna_decoracao.jpeg",
    desc: "Placa decorativa do Ayrton Senna.",
    tags: ["Decoração"]
  },
  {
    id: "p41",
    title: "Pokebola Charizard",
    price: "",
    img: "img/pokebola_charizard.JPG",
    desc: "Pokebola Pokémon Charizard decorativa.",
    tags: ["Decoração"]
  },
  {
    id: "p42",
    title: "Pokebola Dragon Ball",
    price: "",
    img: "img/pokebola_dragonball.jpeg",
    desc: "Pokebola decorativa inspirada no Dragon Ball.",
    tags: ["Decoração"]
  },
  {
    id: "p43",
    title: "Pokebola Gengar",
    price: "",
    img: "img/pokebola_gengar.jpg",
    desc: "Pokebola Pokémon Gnegar decorativa.",
    tags: ["Decoração"]
  },
  {
    id: "p44",
    title: "Porta Jogos Consoles",
    price: "",
    img: "img/porta_jogos.png",
    desc: "Porta jogos Xbox e PlayStations.",
    tags: ["Decoração"]
  },
  {
    id: "p45",
    title: "Rexagon",
    price: "",
    img: "img/rexagon_articulado.png",
    desc: "Boneco Rexagon articulado.",
    tags: ["Boneco"]
  },
  {
    id: "p46",
    title: "Decoração Rick Sanchez",
    price: "",
    img: "img/rick_decoracao.jpg",
    desc: "Decoração Rick Sanchez FuckYou.",
    tags: ["Decoração"]
  },
  {
    id: "p47",
    title: "Shadow",
    price: "",
    img: "img/shadow_com_perola_na_mao.jpg",
    desc: "Boneco Shadow com pérola na mão.",
    tags: ["Boneco"]
  },
  {
    id: "p48",
    title: "Suporte de Chaves BMW",
    price: "",
    img: "img/suporte_chave_bmw.jpg",
    desc: "Suporte para chaves da BMW.",
    tags: ["Suporte"]
  },
  {
    id: "p49",
    title: "Suporte Controle Diamante",
    price: "",
    img: "img/suporte_diamante_vermelho.jpg",
    desc: "Suporte para controle console diamante vermelho.",
    tags: ["Suporte"]
  },
  {
    id: "p50",
    title: "Suporte Celular F1",
    price: "",
    img: "img/suporte_f1_para_celular.jpeg",
    desc: "Suporte da fórmula 1 para celular.",
    tags: ["Suporte"]
  },
  {
    id: "p51",
    title: "Suporte Fone Groot",
    price: "",
    img: "img/suporte_fone_grud.jpg",
    desc: "Suporte para Headset Groot.",
    tags: ["Suporte"]
  },
  {
    id: "p52",
    title: "Suporte Laço Controle",
    price: "",
    img: "img/suporte_orochimaru.jpg",
    desc: "Suporte para controle de console.",
    tags: ["Suporte"]
  },
  {
    id: "p53",
    title: "Mulher Grávida",
    price: "",
    img: "img/ultrassom_gravida.jpg",
    desc: "Decoração para ultrassom de gravidez.",
    tags: ["Decoração"]
  },
  {
    id: "p54",
    title: "Suporte Controle TV",
    price: "",
    img: "img/suporte_para_controle_tv.jpg",
    desc: "Suporte para controles de televisão.",
    tags: ["Decoração"]
  },
  {
    id: "p55",
    title: "Vasos Familia",
    price: "",
    img: "img/vaso_familia.png",
    desc: "Vasos decorativos para família.",
    tags: ["Decoração"]
  },
  {
    id: "p56",
    title: "Vaso Planta Mario",
    price: "",
    img: "img/vaso_mario.jpg",
    desc: "Vaso de planta de Mario para decoração.",
    tags: ["Decoração"]
  },
  {
    id: "p57",
    title: "Venom",
    price: "",
    img: "img/venom_decoracao.jpg",
    desc: "Boneco Venom colecionável.",
    tags: ["Boneco"]
  },
  
];



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
