/**
 * Cajueiro GastroPub (Lavras - MG)
 * Estrutura de dados desacoplada do cardápio digital
 */

/**
 * Catálogo Oficial de Adicionais
 */
const addonItems = {
  "molho-abacaxi-pimenta": { id: "molho-abacaxi-pimenta", name: "Molho Abacaxi e Pimenta", price: 4.00 },
  "maionese-defumada": { id: "maionese-defumada", name: "Maionese Defumada", price: 4.00 },
  "maionese-verde": { id: "maionese-verde", name: "Maionese Verde", price: 4.00 },
  "mostarda-mel": { id: "mostarda-mel", name: "Mostarda e Mel", price: 4.00 },
  "farofa-casa": { id: "farofa-casa", name: "Farofa da Casa", price: 3.50 },
  "vinagrete": { id: "vinagrete", name: "Vinagrete Especial", price: 3.50 },
  "queijo-coalho": { id: "queijo-coalho", name: "Queijo Coalho Extra", price: 6.00 }
};

if (typeof window !== 'undefined') {
  window.addonItems = addonItems;
}

const menuData = {
  restaurant: {
    name: "Cajueiro GastroPub",
    handle: "@cajueiro.gastropub",
    city: "Lavras - MG",
    hours: "Quarta a sábado, das 19h à 00h",
    address: "Lavras - MG",
    instagram: "https://www.instagram.com/cajueiro.gastropub/",
    wifi: {
      ssid: "",
      password: ""
    }
  },
  categories: [
    { id: "entradas", name: "Entradas", icon: "box", order: 1 },
    { id: "pratos-principais", name: "Pratos Principais", icon: "disc", order: 2 },
    { id: "espetos", name: "Espetos e Combos", icon: "layers", order: 3 },
    { id: "caldos", name: "Caldos", icon: "coffee", order: 4 },
    { id: "porcoes", name: "Porções", icon: "zap", order: 5 },
    { id: "sobremesas", name: "Sobremesas", icon: "heart", order: 6 },
    { id: "bebidas", name: "Bebidas", icon: "award", order: 7 },
    { id: "drinks", name: "Drinks", icon: "star", order: 8 }
  ],
  products: [
    {
        "id": "ent-bolinho-macaxeira",
        "categoryId": "entradas",
        "name": "Bolinho de Macaxeira Crocante",
        "price": 29.9,
        "description": "Bolinhos de macaxeira recheado com queijo coalho, acompanhados dos molhos especiais da casa (10 unid)",
        "ingredients": [],
        "imageUrl": "assets/images/products/Bolinho de Macaxeira com carne seca ou queijo.webp",
        "featured": true,
        "badge": "Mais Pedido"
    },
    {
        "id": "ent-coalho-dourado",
        "categoryId": "entradas",
        "name": "Coalho Dourado",
        "price": 34.9,
        "description": "Queijo Coalho na brasa com mel (3 unid)",
        "ingredients": [],
        "imageUrl": "assets/images/products/Coalho Dourado.webp"
    },
    {
        "id": "ent-dadinho-tapioca",
        "categoryId": "entradas",
        "name": "Dadinho de Tapioca",
        "price": 24.9,
        "description": "Dadinhos de Tapioca acompanhados dos molhos especiais da casa (10 unid)",
        "ingredients": [],
        "imageUrl": "assets/images/products/Dadinho de tapioca.webp"
    },
    {
        "id": "prat-cuscuz-recheado",
        "categoryId": "pratos-principais",
        "name": "Cuscuz Recheado",
        "price": 19.9,
        "description": "Opções: Frango com catupiry, Calabresa com catupiry ou Carne seca com queijo coalho. Molho: Béchamel ou Cheddar (Acompanhado com vinagrete)",
        "ingredients": [],
        "imageUrl": "assets/images/products/cuscuz-recheado.webp",
        "featured": true,
        "badge": "Mais Pedido"
    },
    {
        "id": "prat-cuscuz-simples",
        "categoryId": "pratos-principais",
        "name": "Cuscuz Simples",
        "price": 14.9,
        "description": "Cuscuz na manteiga acompanhado com vinagrete.",
        "ingredients": []
    },
    {
        "id": "prat-tap-caprese",
        "categoryId": "pratos-principais",
        "name": "Tapioca Caprese do Sertão",
        "price": 24.9,
        "description": "Queijo coalho, tomate, orégano, manjericão e fio de azeite",
        "ingredients": []
    },
    {
        "id": "prat-tap-mandacaru",
        "categoryId": "pratos-principais",
        "name": "Tapioca Flor de Mandacaru",
        "price": 29.9,
        "description": "Cenoura, cogumelos grelhados, azeite e ervas",
        "ingredients": []
    },
    {
        "id": "prat-tap-suassuna",
        "categoryId": "pratos-principais",
        "name": "Tapioca Suassuna",
        "price": 39.9,
        "description": "Carne de sol desfiada, queijo coalho, tostada na manteiga",
        "ingredients": []
    },
    {
        "id": "esp-combo-padrao",
        "categoryId": "espetos",
        "name": "Combo Padrão",
        "price": 29.9,
        "description": "Espeto simples + Cuscuz recheado acompanhado com vinagrete",
        "ingredients": []
    },
    {
        "id": "esp-combo-plus",
        "categoryId": "espetos",
        "name": "Combo Plus",
        "price": 34.9,
        "description": "Espeto premium + Cuscuz recheado acompanhados com vinagrete e um molho a sua escolha",
        "ingredients": []
    },
    {
        "id": "esp-combo-premium",
        "categoryId": "espetos",
        "name": "Combo Premium",
        "price": 24.9,
        "description": "Espeto premium + Cuscuz simples acompanhados com vinagrete e um molho a sua escolha",
        "ingredients": []
    },
    {
        "id": "esp-combo-simples",
        "categoryId": "espetos",
        "name": "Combo Simples",
        "price": 24.9,
        "description": "Espeto simples + Cuscuz simples acompanhados com vinagrete",
        "ingredients": []
    },
    {
        "id": "esp-premium",
        "categoryId": "espetos",
        "name": "Espeto Premium",
        "price": 24.9,
        "description": "Bovino, suíno ou frango, acompanhado de com queijo coalho, molho a sua escolha (Abacaxi e Pimenta, Maionese Defumada, Maionese Verde ou Mostarda e Mel), farofa e vinagrete.",
        "ingredients": []
    },
    {
        "id": "esp-simples",
        "categoryId": "espetos",
        "name": "Espeto Simples",
        "price": 11.9,
        "description": "Bovino, Suíno ou Frango. Acompanhado de farofa e vinagrete",
        "ingredients": []
    },
    {
        "id": "cald-feijao",
        "categoryId": "caldos",
        "name": "Delícia de Feijão",
        "price": 19.9,
        "description": "Caldo de feijão encorpado e bem temperado, com toque defumado e finalização cremosa. Acompanhados com bacon e calabresa",
        "ingredients": [],
        "imageUrl": "assets/images/products/Caldo de feijão.webp"
    },
    {
        "id": "cald-macaxeira",
        "categoryId": "caldos",
        "name": "Delícia de Macaxeira",
        "price": 24.9,
        "description": "Caldo de mandioca cremoso, tempero caseiro e sabor marcante. Acompanhados de bacon e calabresa",
        "ingredients": []
    },
    {
        "id": "porc-combo-porcoes",
        "categoryId": "porcoes",
        "name": "Combo Porções",
        "price": 68.9,
        "description": "400g de frango dourado + 500g de Fritas com queijo ou Macaxeira Frita. Acompanhados com dois molhos",
        "ingredients": []
    },
    {
        "id": "porc-frango-crocante",
        "categoryId": "porcoes",
        "name": "Frango Crocante do Cajueiro",
        "price": 49.9,
        "description": "400g de frango dourado, temperado e crocante por fora, suculento por dentro. Acompanha dois molhos a sua escolha",
        "ingredients": [],
        "imageUrl": "assets/images/products/frango-frito.webp",
        "featured": true,
        "badge": "Mais Pedido"
    },
    {
        "id": "porc-fritas-queijo",
        "categoryId": "porcoes",
        "name": "Fritas com Queijo",
        "price": 39.9,
        "description": "400g de batata frita crocantes acompanhado com queijo mussarela. Acompanha dois molhos a sua escolha",
        "ingredients": []
    },
    {
        "id": "porc-macaxeira-frita",
        "categoryId": "porcoes",
        "name": "Macaxeira Frita",
        "price": 29.9,
        "description": "400g de mandioca crocante por fora e suculenta por dentro. Acompanha dois molhos a sua escolha",
        "ingredients": [],
        "imageUrl": "assets/images/products/Carne seca frita com macaxeira.webp"
    },
    {
        "id": "sob-beiju-mainha",
        "categoryId": "sobremesas",
        "name": "Beijú de Mainha",
        "price": 19.9,
        "description": "Tapioca granulada, leite condensado, leite de coco, coco ralado",
        "ingredients": [],
        "imageUrl": "assets/images/products/Beijú de Mãinha.webp"
    },
    {
        "id": "sob-lampiao-maria",
        "categoryId": "sobremesas",
        "name": "Lampião e Maria Bonita",
        "price": 14.9,
        "description": "Queijo coalho com goiabada cascão grelhados",
        "ingredients": []
    },
    {
        "id": "sob-xamego-doce",
        "categoryId": "sobremesas",
        "name": "Xamego Doce",
        "price": 24.9,
        "description": "Bolo de rolo acompanhado com sorvete de creme",
        "ingredients": [],
        "imageUrl": "assets/images/products/Xamego Doce.webp"
    },
    {
        "id": "beb-agua",
        "categoryId": "bebidas",
        "name": "Água",
        "price": 3.9,
        "description": "Água mineral sem gás",
        "ingredients": []
    },
    {
        "id": "beb-agua-gas",
        "categoryId": "bebidas",
        "name": "Água com gás",
        "price": 4.9,
        "description": "Água mineral com gás",
        "ingredients": []
    },
    {
        "id": "beb-cerveja-600",
        "categoryId": "bebidas",
        "name": "Cerveja de 600ml",
        "price": 14.9,
        "description": "Garrafa 600ml gelada",
        "ingredients": []
    },
    {
        "id": "beb-chopp-350",
        "categoryId": "bebidas",
        "name": "Chopp 350ml",
        "price": 8.9,
        "description": "Chopp artesanal na tulipa",
        "ingredients": []
    },
    {
        "id": "beb-chopp-500",
        "categoryId": "bebidas",
        "name": "Chopp 500ml",
        "price": 13.9,
        "description": "Chopp artesanal na caneca",
        "ingredients": []
    },
    {
        "id": "beb-long-neck",
        "categoryId": "bebidas",
        "name": "Long Neck",
        "price": 10.9,
        "description": "Cerveja long neck",
        "ingredients": []
    },
    {
        "id": "beb-refrigerante",
        "categoryId": "bebidas",
        "name": "Refrigerante 350ml",
        "price": 6.9,
        "description": "Lata 350ml",
        "ingredients": []
    },
    {
        "id": "beb-suco-natural",
        "categoryId": "bebidas",
        "name": "Suco Natural",
        "price": 9.9,
        "description": "Sabores: Maracujá, Laranja, Cajú",
        "ingredients": []
    },
    {
        "id": "drk-caipirinha",
        "categoryId": "drinks",
        "name": "Caipirinha",
        "price": 15.9,
        "description": "Cachaça, limão, açúcar",
        "ingredients": []
    },
    {
        "id": "drk-cajugin",
        "categoryId": "drinks",
        "name": "Cajúgin",
        "price": 29.9,
        "description": "Gin, água tônica, xarope de cajú, açúcar, limão",
        "ingredients": [],
        "imageUrl": "assets/images/products/Cajugin (Drinks).webp",
        "featured": true,
        "badge": "Mais Pedido"
    },
    {
        "id": "drk-emige",
        "categoryId": "drinks",
        "name": "Emigê",
        "price": 35.9,
        "description": "Vodka, licor de doce de leite, café expresso, cacau em pó",
        "ingredients": [],
        "imageUrl": "assets/images/products/Emigê (Drinks).webp"
    },
    {
        "id": "drk-jorge-amado",
        "categoryId": "drinks",
        "name": "Jorge Amado",
        "price": 26.9,
        "description": "Cachaça, maracujá, limão, licor cravo e canela",
        "ingredients": [],
        "imageUrl": "assets/images/products/Jorge amado (Drinks).webp"
    },
    {
        "id": "drk-morena-flor",
        "categoryId": "drinks",
        "name": "Morena Flor",
        "price": 24.9,
        "description": "Sorbet de frutas vermelhas, xarope de pêssego, vodka e água com gás",
        "ingredients": [],
        "imageUrl": "assets/images/products/Morena flor.webp"
    },
    {
        "id": "drk-tropicana",
        "categoryId": "drinks",
        "name": "Tropicana",
        "price": 24.9,
        "description": "Cachaça, suco de laranja e aperol",
        "ingredients": [],
        "imageUrl": "assets/images/products/Tropicana (Drinks).webp"
    }
]
};

menuData.addonItems = addonItems;
if (typeof window !== 'undefined') {
  window.menuData = menuData;
  window.addonItems = addonItems;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { menuData, addonItems };
}
