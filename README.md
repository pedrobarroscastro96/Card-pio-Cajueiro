# Cajueiro GastroPub — Cardápio Digital & Hub NFC 🍹🍽️

Projeto frontend de alta performance, mobile-first e com identidade visual gastronômica acolhedora para o gastrobar **Cajueiro GastroPub** (@cajueiro.gastropub), localizado em Lavras - MG.

Desenvolvido para ser acessado instantaneamente via placas **NFC e QR Code** nas mesas do salão, com integração em tempo real ao **Supabase REST**, persistência direta de Wi-Fi, upload para Supabase Storage, modais e componentes interativos.

---

## 🚀 Destaques da Experiência

1. **Hub NFC de Mesa (`index.html`)**:
   - Identificação automática da mesa via parâmetro de URL (ex: `?mesa=05`).
   - Selo visual de mesa conectada com status ativo pulsante.
   - **Ação Principal**: Acesso direto ao Cardápio Digital com preservação da mesa.
   - **Instagram Oficial**: Link direto para [@cajueiro.gastropub](https://www.instagram.com/cajueiro.gastropub/).
   - **Wi-Fi da Casa**: Modal interativo com nome da rede e botão de 1-toque "Copiar Senha" com toast de confirmação e sincronização automática via Supabase.

2. **Cardápio Digital Gastronômico (`cardapio.html`)**:
   - **Header Compacto Sticky**: Identidade oficial do Cajueiro, selo da mesa ativa e atalho para o Wi-Fi.
   - **Navegação por Categorias Horizontal**: Barra fixa com rolagem suave e *ScrollSpy* automático que destaca a categoria em foco (Entradas, Pratos Principais, Espetos e Combos, Caldos, Porções, Sobremesas, Bebidas, Drinks).
   - **Busca em Tempo Real**: Filtro instantâneo por nome do produto, descrição ou ingredientes.
   - **Bottom Drawer / Modal de Detalhes**:
     - Suporte nativo a foto em alta resolução ou vídeo curto no topo.
     - Fallback elegante com ícones SVG categorizados e tag oficial `CAJUEIRO GASTROPUB`.
     - Seleção de adicionais e acompanhamentos (molhos especiais, farofa, vinagrete, etc.).
   - **Painel Administrativo Embutido**:
     - Autenticação e gestão de produtos (criar, editar, pausar, excluir).
     - Upload direto para o bucket `products` do Supabase Storage.
     - Sincronização e edição das credenciais de Wi-Fi em tempo real.

3. **Performance & Design System**:
   - 100% HTML5 semântico, CSS3 moderno e Vanilla JavaScript.
   - Paleta gastronômica do Cajueiro: Tom Primário Laranja Caju / Terracota (`#D95B00`), hover `#B84A00`, fundo acolhedor `#FFF8F0`, cartões brancos e tipografia em marrom bistrô profundo (`#2D2319`).
   - Alvos de toque com no mínimo 44x44px (*touch-friendly*).
   - Imagens otimizadas com dimensões explícitas e `loading="lazy"` para evitar Cumulative Layout Shift (CLS).
   - Meta tags Open Graph completas para pré-visualização no WhatsApp.

---

## 📁 Estrutura do Projeto

```text
Cardapio-Cajueiro/
│
├── index.html                    # Hub NFC de entrada (Linktree da mesa)
├── cardapio.html                 # Cardápio digital interativo
├── README.md                     # Documentação de uso e manutenção
│
└── assets/
    ├── css/
    │   └── styles.css            # Design System, variáveis de tema e componentes
    ├── js/
    │   ├── products.js           # Base de dados desacoplada e catálogo mockado do Cajueiro
    │   ├── supabase.js           # Módulo REST API e Storage com Supabase
    │   └── app.js                # Lógica da aplicação, gestão de mesa, carrinho e ADM
    └── images/
        ├── logo.jpg              # Logotipo oficial do Cajueiro GastroPub
        └── products/             # Imagens em alta resolução dos itens do cardápio
```

---

## ⚙️ Como Testar Localmente

Por ser uma aplicação estática e otimizada:

1. **Abrir diretamente**: Abra `index.html` ou `cardapio.html` no seu navegador.
2. **Servidor Local (Recomendado para simular celular)**:
   ```bash
   npx serve .
   ```
   Em seguida, acesse no navegador:
   - Hub com mesa: `http://localhost:3000/index.html?mesa=05`
   - Cardápio direto: `http://localhost:3000/cardapio.html?mesa=05`
