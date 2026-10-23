/**
 * Hamburgueria Texas
 * Estrutura de dados desacoplada do cardápio digital
 */

/**
 * Catálogo Oficial de Adicionais
 */
const addonItems = {
  "aneis-cebola": { id: "aneis-cebola", name: "Anéis de Cebola", price: 6.00 },
  "bacon": { id: "bacon", name: "Bacon", price: 6.00 },
  "catupiry": { id: "catupiry", name: "Catupiry", price: 7.00 },
  "cheddar": { id: "cheddar", name: "Cheddar", price: 7.00 },
  "hamburguer-110g": { id: "hamburguer-110g", name: "Hambúrguer 110g", price: 8.00 },
  "mussarela": { id: "mussarela", name: "Mussarela", price: 3.50 },
  "ovo": { id: "ovo", name: "Ovo", price: 2.00 },
  "queijo-empanado": { id: "queijo-empanado", name: "Queijo Empanado", price: 8.00 },
  "salada": { id: "salada", name: "Salada", price: 2.00 }
};

if (typeof window !== 'undefined') {
  window.addonItems = addonItems;
}

const menuData = {
  restaurant: {
    name: "Hamburgueria Texas",
    handle: "@hamburgueriatexas_",
    city: "Lavras / Nepomuceno - MG",
    address: "Av. Silvio Menicucci, 64, Vila Ester, Lavras - MG",
    wifi: {
      ssid: "",
      password: ""
    }
  },
  categories: [
    { id: "combos", name: "Combos", icon: "zap" },
    { id: "lanches-premium", name: "Linha Premium", icon: "award" },
    { id: "lanches-classicos", name: "Linha Clássicos", icon: "disc" },
    { id: "lanches-empanados", name: "Linha Empanados", icon: "feather" },
    { id: "lanches-recheados", name: "Hambúrgueres Recheados", icon: "layers" },
    { id: "lanches-texanos", name: "Linha Texanos (Duplos)", icon: "shield" },
    { id: "lanches-especiais", name: "Linha Especiais", icon: "star" },
    { id: "lanches-tradicionais", name: "Linha Tradicionais", icon: "check" },
    { id: "lanches-kids", name: "Linha Kids", icon: "smile" },
    { id: "pizzas-tradicionais", name: "Pizzas Tradicionais", icon: "pie-chart" },
    { id: "pizzas-especiais", name: "Pizzas Especiais", icon: "target" },
    { id: "pizzas-doces", name: "Pizzas Doces", icon: "heart" },
    { id: "complementos", name: "Complementos", icon: "box" },
    { id: "bebidas", name: "Bebidas", icon: "coffee" },
    { id: "doces", name: "Doces", icon: "gift" }
  ],
  products: [
    /* ================= COMBOS ================= */
    {
      id: "combo-01",
      categoryId: "combos",
      name: "Combo 1: Texas Holliday",
      price: 40.50,
      description: "Hambúrguer bovino, queijo prato, tomate, alface, molho especial e bacon + Batata Frita + Refri 200ml.",
      ingredients: ["Hambúrguer bovino", "Queijo prato", "Tomate", "Alface", "Molho especial", "Bacon", "Batata frita", "Refri 200ml"],
      featured: true
    },
    {
      id: "combo-02",
      categoryId: "combos",
      name: "Combo 2: Especial Frango",
      price: 40.00,
      description: "Hambúrguer de frango 140g, ovo, queijo, presunto, milho, tomate, alface, batata palha, molho especial + 1 opcional + Batata frita ou anéis + Refri 200ml.",
      ingredients: ["Hambúrguer de frango 140g", "Ovo", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial"]
    },
    {
      id: "combo-03",
      categoryId: "combos",
      name: "Combo 3: Texas Dallas",
      price: 40.50,
      description: "Frango empanado 200g, 2 queijos prato, catupiry, tomate, alface, cebola roxa, ketchup e molho especial + Batata frita + Refri 200ml.",
      ingredients: ["Frango empanado 200g", "2 queijos prato", "Catupiry", "Tomate", "Alface", "Cebola roxa", "Ketchup", "Molho especial", "Batata frita", "Guaraná 200ml"]
    },
    {
      id: "combo-04",
      categoryId: "combos",
      name: "Combo 4: Texas Katy",
      price: 42.00,
      description: "Frango empanado 200g, 2 queijos prato, bacon, tomate, alface, cebola roxa, ketchup e molho especial + Batata frita + Refri 200ml.",
      ingredients: ["Frango empanado 200g", "2 queijos prato", "Bacon", "Tomate", "Alface", "Cebola roxa", "Ketchup", "Molho especial", "Batata frita", "Guaraná 200ml"]
    },
    {
      id: "combo-05",
      categoryId: "combos",
      name: "Combo 5: Texas Billy",
      price: 42.00,
      description: "Hambúrguer bovino, queijo prato, cheddar, tomate, alface e molho especial + Batata frita + Refri 200ml.",
      ingredients: ["Hambúrguer bovino", "Queijo prato", "Cheddar", "Tomate", "Alface", "Molho especial", "Batata frita", "Guaraná 200ml"]
    },
    {
      id: "combo-06",
      categoryId: "combos",
      name: "Combo 6: Texas Charlie",
      price: 39.50,
      description: "Hambúrguer bovino, queijo prato, catupiry, tomate, alface e molho especial + Batata frita + Refri 200ml.",
      ingredients: ["Hambúrguer bovino", "Queijo prato", "Catupiry", "Tomate", "Alface", "Molho especial", "Batata frita", "Guaraná 200ml"]
    },
    {
      id: "combo-07",
      categoryId: "combos",
      name: "Combo 7: Especial Fraldinha Bacon Catupiry",
      price: 39.50,
      description: "Hambúrguer de fraldinha 140g, ovo, queijo, presunto, milho, tomate, alface, batata palha e molho especial + Batata frita + Refri 200ml.",
      ingredients: ["Hambúrguer fraldinha 140g", "Ovo", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial", "Batata frita", "Guaraná 200ml"]
    },

    /* ================= LINHA PREMIUM ================= */
    {
      id: "prem-jessie",
      categoryId: "lanches-premium",
      name: "Texas Jessie",
      price: 28.40,
      description: "Hambúrguer bovino, queijo prato, alface, tomate, molho especial e cream cheese.",
      ingredients: ["Pão", "Hambúrguer bovino", "Queijo prato", "Alface", "Tomate", "Molho especial", "Cream cheese"]
    },
    {
      id: "prem-billy",
      categoryId: "lanches-premium",
      name: "Texas Billy",
      price: 28.40,
      description: "Hambúrguer bovino, queijo prato, tomate, alface, molho especial e cheddar.",
      ingredients: ["Pão", "Hambúrguer bovino", "Queijo prato", "Tomate", "Alface", "Molho especial", "Cheddar"]
    },
    {
      id: "prem-big-roy",
      categoryId: "lanches-premium",
      name: "Texas Big Roy",
      price: 33.40,
      description: "2 Hambúrgueres bovinos, 2 queijos prato, tomate, alface, molho especial, cream cheese e bacon.",
      ingredients: ["Pão", "2 Hambúrgueres bovinos", "2 Queijos prato", "Tomate", "Alface", "Molho especial", "Cream cheese", "Bacon"],
      featured: true
    },
    {
      id: "prem-burguer",
      categoryId: "lanches-premium",
      name: "Texas Burguer",
      price: 19.90,
      description: "Pão, carne 140g, molho especial Texas e queijo prato.",
      ingredients: ["Pão", "Carne 140g", "Molho especial Texas", "Queijo prato"]
    },
    {
      id: "prem-holliday",
      categoryId: "lanches-premium",
      name: "Texas Holliday",
      price: 28.40,
      description: "Hambúrguer bovino, queijo prato, tomate, alface, molho especial e bacon.",
      ingredients: ["Pão", "Hambúrguer bovino", "Queijo prato", "Tomate", "Alface", "Molho especial", "Bacon"]
    },
    {
      id: "prem-charlie",
      categoryId: "lanches-premium",
      name: "Texas Charlie",
      price: 28.40,
      description: "Hambúrguer bovino, queijo prato, tomate, alface, molho especial e catupiry.",
      ingredients: ["Pão", "Hambúrguer bovino", "Queijo prato", "Tomate", "Alface", "Molho especial", "Catupiry"]
    },

    /* ================= LINHA CLÁSSICOS ================= */
    {
      id: "class-cactus",
      categoryId: "lanches-classicos",
      name: "Texas Cactus",
      price: 31.50,
      description: "Pão, hambúrguer bovino 200g, catupiry, alface, tomate, ketchup, cebola roxa, 2 queijos prato e molho especial.",
      ingredients: ["Pão", "Hambúrguer 200g", "Catupiry", "Alface", "Tomate", "Ketchup", "Cebola roxa", "2 Queijos prato", "Molho especial"]
    },
    {
      id: "class-denton",
      categoryId: "lanches-classicos",
      name: "Texas Denton",
      price: 31.50,
      description: "Pão, hambúrguer bovino 200g, cream cheese, alface, tomate, ketchup, cebola roxa, 2 queijos prato e molho especial.",
      ingredients: ["Pão", "Hambúrguer 200g", "Cream cheese", "Alface", "Tomate", "Ketchup", "Cebola roxa", "2 Queijos prato", "Molho especial"]
    },
    {
      id: "class-cooper",
      categoryId: "lanches-classicos",
      name: "Texas Cooper",
      price: 31.50,
      description: "Pão, hambúrguer bovino 200g, cheddar cremoso, alface, tomate, ketchup, cebola roxa, 2 queijos prato e molho especial.",
      ingredients: ["Pão", "Hambúrguer 200g", "Cheddar cremoso", "Alface", "Tomate", "Ketchup", "Cebola roxa", "2 Queijos prato", "Molho especial"]
    },
    {
      id: "class-austin",
      categoryId: "lanches-classicos",
      name: "Texas Austin",
      price: 31.50,
      description: "Pão, hambúrguer bovino 200g, bacon, alface, tomate, ketchup, cebola roxa, 2 queijos prato e molho especial.",
      ingredients: ["Pão", "Hambúrguer 200g", "Bacon", "Alface", "Tomate", "Ketchup", "Cebola roxa", "2 Queijos prato", "Molho especial"]
    },

    /* ================= LINHA EMPANADOS ================= */
    {
      id: "emp-dallas",
      categoryId: "lanches-empanados",
      name: "Texas Dallas",
      price: 31.50,
      description: "Pão, frango empanado 200g, catupiry, alface, tomate, ketchup, cebola roxa, 2 queijos prato e molho especial.",
      ingredients: ["Pão", "Frango empanado 200g", "Catupiry", "Alface", "Tomate", "Ketchup", "Cebola roxa", "2 Queijos prato", "Molho especial"]
    },
    {
      id: "emp-houston",
      categoryId: "lanches-empanados",
      name: "Texas Houston",
      price: 31.50,
      description: "Pão, frango empanado 200g, cream cheese, alface, tomate, ketchup, cebola roxa, 2 queijos prato e molho especial.",
      ingredients: ["Pão", "Frango empanado 200g", "Cream cheese", "Alface", "Tomate", "Ketchup", "Cebola roxa", "2 Queijos prato", "Molho especial"]
    },
    {
      id: "emp-amarillo",
      categoryId: "lanches-empanados",
      name: "Texas Amarillo",
      price: 31.50,
      description: "Pão, frango empanado 200g, cheddar cremoso, alface, tomate, ketchup, cebola roxa, 2 queijos prato e molho especial.",
      ingredients: ["Pão", "Frango empanado 200g", "Cheddar cremoso", "Alface", "Tomate", "Ketchup", "Cebola roxa", "2 Queijos prato", "Molho especial"]
    },
    {
      id: "emp-katy",
      categoryId: "lanches-empanados",
      name: "Texas Katy",
      price: 31.50,
      description: "Pão, hambúrguer empanado 200g, bacon, alface, tomate, ketchup, cebola roxa, 2 queijos prato e molho especial.",
      ingredients: ["Pão", "Hambúrguer empanado 200g", "Bacon", "Alface", "Tomate", "Ketchup", "Cebola roxa", "2 Queijos prato", "Molho especial"]
    },

    /* ================= RECHEADOS ================= */
    {
      id: "rech-frango",
      categoryId: "lanches-recheados",
      name: "Recheado de Frango",
      price: 32.50,
      description: "Hambúrguer de frango recheado (140g), queijo, cebola, bacon, alface + 1 opcional (ou 1/2 e 1/2).",
      ingredients: ["Hambúrguer frango 140g", "Queijo", "Cebola", "Bacon", "Alface", "1 Opcional à escolha"]
    },
    {
      id: "rech-pernil",
      categoryId: "lanches-recheados",
      name: "Recheado de Pernil",
      price: 33.50,
      description: "Hambúrguer de pernil recheado (140g), queijo, cebola, bacon, alface + 1 opcional (ou 1/2 e 1/2).",
      ingredients: ["Hambúrguer pernil 140g", "Queijo", "Cebola", "Bacon", "Alface", "1 Opcional à escolha"]
    },
    {
      id: "rech-fraldinha",
      categoryId: "lanches-recheados",
      name: "Recheado de Fraldinha",
      price: 34.50,
      description: "Hambúrguer de fraldinha recheado (140g), queijo, cebola, bacon, alface + 1 opcional (ou 1/2 e 1/2).",
      ingredients: ["Hambúrguer fraldinha 140g", "Queijo", "Cebola", "Bacon", "Alface", "1 Opcional à escolha"]
    },
    {
      id: "rech-picanha",
      categoryId: "lanches-recheados",
      name: "Recheado de Picanha",
      price: 35.50,
      description: "Hambúrguer de picanha recheado (140g), queijo, cebola, bacon, alface + 1 opcional (ou 1/2 e 1/2).",
      ingredients: ["Hambúrguer picanha 140g", "Queijo", "Cebola", "Bacon", "Alface", "1 Opcional à escolha"]
    },

    /* ================= TEXANOS (Duplos) ================= */
    {
      id: "tex-frango",
      categoryId: "lanches-texanos",
      name: "Texano Duplo Frango",
      price: 44.00,
      description: "2 Hambúrgueres frango (140g cada), 2 ovos, 2 queijos, 2 presuntos, milho, tomate, 2 alfaces americanas, batata palha, 2 molhos especiais e 2 opcionais.",
      ingredients: ["2 Hambúrgueres frango 140g", "2 Ovos", "2 Queijos", "2 Presuntos", "Milho", "Tomate", "Alface", "Batata palha", "2 Opcionais"]
    },
    {
      id: "tex-pernil",
      categoryId: "lanches-texanos",
      name: "Texano Duplo Pernil",
      price: 44.00,
      description: "2 Hambúrgueres pernil (140g cada), 2 ovos, 2 queijos, 2 presuntos, milho, tomate, 2 alfaces americanas, batata palha, 2 molhos especiais e 2 opcionais.",
      ingredients: ["2 Hambúrgueres pernil 140g", "2 Ovos", "2 Queijos", "2 Presuntos", "Milho", "Tomate", "Alface", "Batata palha", "2 Opcionais"]
    },
    {
      id: "tex-fraldinha",
      categoryId: "lanches-texanos",
      name: "Texano Duplo Fraldinha",
      price: 45.00,
      description: "2 Hambúrgueres fraldinha (140g cada), 2 ovos, 2 queijos, 2 presuntos, milho, tomate, 2 alfaces americanas, batata palha, 2 molhos especiais e 2 opcionais.",
      ingredients: ["2 Hambúrgueres fraldinha 140g", "2 Ovos", "2 Queijos", "2 Presuntos", "Milho", "Tomate", "Alface", "Batata palha", "2 Opcionais"]
    },
    {
      id: "tex-picanha",
      categoryId: "lanches-texanos",
      name: "Texano Duplo Picanha",
      price: 46.00,
      description: "2 Hambúrgueres picanha (140g cada), 2 ovos, 2 queijos, 2 presuntos, milho, tomate, 2 alfaces americanas, batata palha, 2 molhos especiais e 2 opcionais.",
      ingredients: ["2 Hambúrgueres picanha 140g", "2 Ovos", "2 Queijos", "2 Presuntos", "Milho", "Tomate", "Alface", "Batata palha", "2 Opcionais"]
    },
    {
      id: "tex-empanado",
      categoryId: "lanches-texanos",
      name: "Texano Duplo Empanado",
      price: 46.00,
      description: "2 Hambúrgueres empanados (140g cada), 2 ovos, 2 queijos, 2 presuntos, milho, tomate, 2 alfaces americanas, batata palha, 2 molhos especiais e 2 opcionais.",
      ingredients: ["2 Hambúrgueres empanados", "2 Ovos", "2 Queijos", "2 Presuntos", "Milho", "Tomate", "Alface", "Batata palha", "2 Opcionais"]
    },

    /* ================= ESPECIAIS ================= */
    {
      id: "esp-frango",
      categoryId: "lanches-especiais",
      name: "Especial de Frango",
      price: 29.00,
      description: "Hambúrguer (140g), ovo, queijo, presunto, milho, tomate, alface americana, batata palha, molho especial + 1 opcional.",
      ingredients: ["Hambúrguer frango 140g", "Ovo", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial", "1 Opcional"]
    },
    {
      id: "esp-pernil",
      categoryId: "lanches-especiais",
      name: "Especial de Pernil",
      price: 29.50,
      description: "Hambúrguer pernil (140g), ovo, queijo, presunto, milho, tomate, alface americana, batata palha, molho especial + 1 opcional.",
      ingredients: ["Hambúrguer pernil 140g", "Ovo", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial", "1 Opcional"]
    },
    {
      id: "esp-fraldinha",
      categoryId: "lanches-especiais",
      name: "Especial de Fraldinha",
      price: 31.00,
      description: "Hambúrguer fraldinha (140g), ovo, queijo, presunto, milho, tomate, alface americana, batata palha, molho especial + 1 opcional.",
      ingredients: ["Hambúrguer fraldinha 140g", "Ovo", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial", "1 Opcional"]
    },
    {
      id: "esp-picanha",
      categoryId: "lanches-especiais",
      name: "Especial de Picanha",
      price: 31.50,
      description: "Hambúrguer picanha (140g), ovo, queijo, presunto, milho, tomate, alface americana, batata palha, molho especial + 1 opcional.",
      ingredients: ["Hambúrguer picanha 140g", "Ovo", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial", "1 Opcional"]
    },
    {
      id: "esp-vegetariano",
      categoryId: "lanches-especiais",
      name: "Especial Vegetariano",
      price: 26.50,
      description: "Alface, tomate, batata palha, milho, molho especial, queijo mussarela, ovo + 2 opcionais (Provolone, cheddar, catupiry, azeitona, palmito ou cream cheese).",
      ingredients: ["Alface", "Tomate", "Batata palha", "Milho", "Molho especial", "Mussarela", "Ovo", "2 Opcionais"]
    },

    /* ================= TRADICIONAIS ================= */
    {
      id: "trad-pernil",
      categoryId: "lanches-tradicionais",
      name: "Tradicional de Pernil",
      price: 26.50,
      description: "Hambúrguer pernil (140g), queijo, presunto, milho, tomate, alface, batata palha e molho especial.",
      ingredients: ["Hambúrguer pernil 140g", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial"]
    },
    {
      id: "trad-frango",
      categoryId: "lanches-tradicionais",
      name: "Tradicional de Frango",
      price: 27.50,
      description: "Hambúrguer frango (140g), queijo, presunto, milho, tomate, alface, batata palha e molho especial.",
      ingredients: ["Hambúrguer frango 140g", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial"]
    },
    {
      id: "trad-fraldinha",
      categoryId: "lanches-tradicionais",
      name: "Tradicional de Fraldinha",
      price: 27.50,
      description: "Hambúrguer fraldinha (140g), queijo, presunto, milho, tomate, alface, batata palha e molho especial.",
      ingredients: ["Hambúrguer fraldinha 140g", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial"]
    },
    {
      id: "trad-picanha",
      categoryId: "lanches-tradicionais",
      name: "Tradicional de Picanha",
      price: 28.00,
      description: "Hambúrguer picanha (140g), queijo, presunto, milho, tomate, alface, batata palha e molho especial.",
      ingredients: ["Hambúrguer picanha 140g", "Queijo", "Presunto", "Milho", "Tomate", "Alface", "Batata palha", "Molho especial"]
    },

    /* ================= KIDS ================= */
    {
      id: "kids-smash",
      categoryId: "lanches-kids",
      name: "Smash Kids",
      price: 22.40,
      description: "Pão, molho, hambúrguer bovino e cheddar cremoso.",
      ingredients: ["Pão", "Molho", "Hambúrguer bovino", "Cheddar cremoso"]
    },
    {
      id: "kids-empanado",
      categoryId: "lanches-kids",
      name: "Frango Empanado Kids",
      price: 24.90,
      description: "Pão, molho especial, ketchup, hambúrguer empanado de frango e mussarela.",
      ingredients: ["Pão", "Molho especial", "Ketchup", "Frango empanado", "Mussarela"]
    },
    {
      id: "kids-combo-1",
      categoryId: "lanches-kids",
      name: "Texas Kids 1 (com Batata e Refri)",
      price: 35.00,
      description: "Hambúrguer bovino, 2 fatias de queijo mussarela e ketchup + Batata e Refri.",
      ingredients: ["Pão", "Hambúrguer bovino", "2 Mussarela", "Ketchup", "Batata frita", "Refrigerante"]
    },
    {
      id: "kids-combo-2",
      categoryId: "lanches-kids",
      name: "Texas Kids 2 (com Batata e Refri)",
      price: 35.00,
      description: "Pão, molho especial, ketchup, hambúrguer de frango empanado e queijo mussarela + Batata e Refri.",
      ingredients: ["Pão", "Molho especial", "Ketchup", "Frango empanado", "Mussarela", "Batata frita", "Refrigerante"]
    },

    /* ================= PIZZAS TRADICIONAIS ================= */
    {
      id: "pz-trad-01",
      categoryId: "pizzas-tradicionais",
      name: "01 - Texas Napolitana",
      price: 53.00,
      description: "Molho de tomate, presunto, mussarela, tomate, azeitona e orégano. (4 pedaços: R$ 53,00 | 8 pedaços: R$ 72,00)",
      ingredients: ["Molho de tomate", "Presunto", "Mussarela", "Tomate", "Azeitona", "Orégano"]
    },
    {
      id: "pz-trad-04",
      categoryId: "pizzas-tradicionais",
      name: "04 - Texas 4 Queijos",
      price: 53.00,
      description: "Molho de tomate, mussarela, provolone, cheddar, catupiry, azeitona e orégano.",
      ingredients: ["Molho de tomate", "Mussarela", "Provolone", "Cheddar", "Catupiry", "Azeitona", "Orégano"],
      featured: true
    },
    {
      id: "pz-trad-12",
      categoryId: "pizzas-tradicionais",
      name: "12 - Texas Calabresa",
      price: 53.00,
      description: "Molho de tomate, calabresa fatiada, mussarela, cebola, azeitona e orégano.",
      ingredients: ["Molho de tomate", "Calabresa fatiada", "Mussarela", "Cebola", "Azeitona", "Orégano"]
    },
    {
      id: "pz-trad-19",
      categoryId: "pizzas-tradicionais",
      name: "19 - Texas Portuguesa",
      price: 53.00,
      description: "Molho de tomate, presunto, mussarela, ovo, cebola, azeitona e orégano.",
      ingredients: ["Molho de tomate", "Presunto", "Mussarela", "Ovo", "Cebola", "Azeitona", "Orégano"]
    },

    /* ================= PIZZAS ESPECIAIS ================= */
    {
      id: "pz-esp-21",
      categoryId: "pizzas-especiais",
      name: "21 - Texana Frango Catupiry",
      price: 54.00,
      description: "Molho de tomate, frango, mussarela, presunto, milho, catupiry e azeitona. (4 pedaços: R$ 54,00 | 8 pedaços: R$ 73,00)",
      ingredients: ["Molho de tomate", "Frango", "Mussarela", "Presunto", "Milho", "Catupiry", "Azeitona"],
      featured: true
    },
    {
      id: "pz-esp-26",
      categoryId: "pizzas-especiais",
      name: "26 - Texana Catubacon",
      price: 54.00,
      description: "Molho de tomate, presunto, mussarela, bacon, catupiry, azeitona e orégano.",
      ingredients: ["Molho de tomate", "Presunto", "Mussarela", "Bacon", "Catupiry", "Azeitona", "Orégano"]
    },
    {
      id: "pz-esp-43",
      categoryId: "pizzas-especiais",
      name: "43 - Texana Especial",
      price: 54.00,
      description: "Molho de tomate, presunto, mussarela, lombinho, calabresa, bacon, palmito, milho, cebola e azeitona fatiada.",
      ingredients: ["Molho de tomate", "Presunto", "Mussarela", "Lombinho", "Calabresa", "Bacon", "Palmito", "Milho", "Cebola", "Azeitona"]
    },

    /* ================= PIZZAS DOCES ================= */
    {
      id: "pz-doce-47",
      categoryId: "pizzas-doces",
      name: "47 - Churros",
      price: 53.00,
      description: "Leve fatia de mussarela, coberta de doce de leite e canela em pó. (4 pedaços: R$ 53,00 | 8 pedaços: R$ 72,00)",
      ingredients: ["Mussarela", "Doce de leite", "Canela em pó"]
    },
    {
      id: "pz-doce-49",
      categoryId: "pizzas-doces",
      name: "49 - Texana Brigadeiro",
      price: 53.00,
      description: "Leve fatia de mussarela, chocolate preto e chocolate granulado.",
      ingredients: ["Mussarela", "Chocolate preto", "Chocolate granulado"]
    },

    /* ================= COMPLEMENTOS ================= */
    {
      id: "comp-batata",
      categoryId: "complementos",
      name: "Batata Frita",
      price: 12.00,
      description: "Porção individual crocante de batata frita.",
      ingredients: ["Batata frita"]
    },
    {
      id: "comp-aneis",
      categoryId: "complementos",
      name: "Anéis de Cebola",
      price: 13.00,
      description: "Porção de anéis de cebola empanados e crocantes.",
      ingredients: ["Anéis de cebola"]
    },

    /* ================= BEBIDAS ================= */
    { id: "beb-guarana-200", categoryId: "bebidas", name: "Guaraná 200ml", price: 3.50, description: "Garrafinha 200ml gelada.", ingredients: ["Refrigerante"] },
    { id: "beb-coca-lata", categoryId: "bebidas", name: "Coca-Cola Lata", price: 7.50, description: "Lata 350ml tradicional.", ingredients: ["Refrigerante"] },
    { id: "beb-coca-zero-lata", categoryId: "bebidas", name: "Coca-Cola Zero Lata", price: 7.50, description: "Lata 350ml sem açúcar.", ingredients: ["Refrigerante"] },
    { id: "beb-coca-2l", categoryId: "bebidas", name: "Coca-Cola 2L", price: 18.00, description: "Garrafa família 2 litros.", ingredients: ["Refrigerante"] },
    { id: "beb-guarana-2l", categoryId: "bebidas", name: "Guaraná Antarctica 2L", price: 16.00, description: "Garrafa família 2 litros.", ingredients: ["Refrigerante"] },
    { id: "beb-heineken", categoryId: "bebidas", name: "Heineken Long Neck", price: 10.00, description: "Cerveja Long Neck 330ml.", ingredients: ["Cerveja"] },
    { id: "beb-budweiser", categoryId: "bebidas", name: "Budweiser Long Neck", price: 10.00, description: "Cerveja Long Neck 330ml.", ingredients: ["Cerveja"] }
  ]
};

menuData.addonItems = addonItems;
if (typeof window !== 'undefined') {
  window.menuData = menuData;
  window.addonItems = addonItems;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { menuData, addonItems };
};