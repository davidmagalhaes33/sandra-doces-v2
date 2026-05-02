// Sandra Confeitaria — dados do cardápio
const bolos = [
  { tam: "15 cm redondo", serve: "10 a 15 fatias", simples: 115, pers: 140 },
  { tam: "20 cm redondo", serve: "20 a 24 fatias", simples: 185, pers: 210 },
  { tam: "25 cm redondo", serve: "30 a 40 fatias", simples: 225, pers: 255 },
  { tam: "30 cm redondo", serve: "50 a 60 fatias", simples: 295, pers: 325 },
  { tam: "35 cm redondo", serve: "80 a 100 fatias", simples: 405, pers: 445 },
];

const docesCento = ["Brigadeiro","Cajuzinho","Moranguinho","Beijinho","Brigadeiro de Coco","Brigadeiro Branco","Brigadeiro Ninho","Olho de Sogra","Ele/Ela"];
const gourmet = ["Brigadeiro Ninho com Nutella","Brigadeiro Paçoca","Brigadeiro Churros","Brigadeiro Limão","Palha Italiana","Tortinha de Limão"];
const bombons = ["Nutella","Morango","Uva","Nozes","Castanhas"];
const personalizados = [
  { nome: "Cupcakes", preco: "R$ 9,00" },
  { nome: "Pirulito", preco: "R$ 8,00" },
  { nome: "Maçã", preco: "R$ 12,50" },
  { nome: "Pão de Mel", preco: "R$ 9,00" },
  { nome: "Bolo no Palito", preco: "R$ 14,50" },
  { nome: "Porta Retrato", preco: "R$ 10,00" },
  { nome: "Pop Cake", preco: "R$ 7,00" },
  { nome: "Doce Modelado", preco: "R$ 6,00" },
  { nome: "Doce com Aplique", preco: "R$ 5,00" },
  { nome: "Bombons", preco: "R$ 6,50 a R$ 9,00" },
  { nome: "Cone", preco: "R$ 7,50" },
];

// Render bolos
const lb = document.getElementById("lista-bolos");
bolos.forEach(b => {
  const li = document.createElement("li");
  li.className = "bolo-item";
  li.innerHTML = `
    <div><span class="dot">●</span><span class="bolo-titulo">${b.tam}</span>
      <span class="bolo-serve">(serve ${b.serve})</span></div>
    <div class="bolo-precos row">
      <div class="col-sm-6">○ Simples: <span class="bolo-preco-val">R$ ${b.simples},00</span></div>
      <div class="col-sm-6">○ Personalizado: <span class="bolo-preco-val">R$ ${b.pers},00</span></div>
    </div>`;
  lb.appendChild(li);
});

// Listas simples
function renderLista(id, arr) {
  const el = document.getElementById(id);
  arr.forEach(nome => {
    const li = document.createElement("li");
    li.className = "col";
    li.innerHTML = `<span class="me-2 text-rose">•</span>${nome}`;
    el.appendChild(li);
  });
}
renderLista("lista-doces", docesCento);
renderLista("lista-gourmet", gourmet);
renderLista("lista-bombons", bombons);

// Personalizados
const lp = document.getElementById("lista-personalizados");
personalizados.forEach(p => {
  const li = document.createElement("li");
  li.className = "pers-row";
  li.innerHTML = `<span>${p.nome}</span><span class="preco">${p.preco}</span>`;
  lp.appendChild(li);
});

// WhatsApp
const wppNumero = "5531988041536";
const wppMsg = encodeURIComponent("Olá Sandra! Vi o cardápio e gostaria de fazer uma encomenda.");
document.getElementById("btn-wpp").href = `https://wa.me/${wppNumero}?text=${wppMsg}`;
