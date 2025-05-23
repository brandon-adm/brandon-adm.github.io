// Food Menu Data
var categories = [];
var products = [
  {
    category: "PIZZAS",
    contents: [
      {
        isAvailable: true,
        name: "Pepperoni Pizza (RG)",
        code: "PEP-RG",
        image: "img/pizzas/pepperoni.png",
        price: 150,
      },
      {
        isAvailable: true,
        name: "Pepperoni Pizza (MD)",
        code: "PEP-MD",
        image: "img/pizzas/pepperoni.png",
        price: 200,
      },
      {
        isAvailable: true,
        name: "Pepperoni Pizza (LG)",
        code: "PEP-LG",
        image: "img/pizzas/pepperoni.png",
        price: 250,
      },

      {
        isAvailable: true,
        name: "Hawaiian Pizza (RG)",
        code: "HWN-RG",
        image: "img/pizzas/hawaiian.png",
        price: 180,
      },
      {
        isAvailable: true,
        name: "Hawaiian Pizza (MD)",
        code: "HWN-MD",
        image: "img/pizzas/hawaiian.png",
        price: 240,
      },
      {
        isAvailable: true,
        name: "Hawaiian Pizza (LG)",
        code: "HWN-LG",
        image: "img/pizzas/hawaiian.png",
        price: 280,
      },

      {
        isAvailable: true,
        name: "5 Cheese Pizza (RG)",
        code: "FVCHZ-RG",
        image: "img/pizzas/5cheese.png",
        price: 150,
      },
      {
        isAvailable: true,
        name: "5 Cheese Pizza (MD)",
        code: "FVCHZ-MD",
        image: "img/pizzas/5cheese.png",
        price: 200,
      },
      {
        isAvailable: true,
        name: "5 Cheese Pizza (LG)",
        code: "FVCHZ-LG",
        image: "img/pizzas/5cheese.png",
        price: 250,
      },

      {
        isAvailable: true,
        name: "Ham & Mushroom Pizza (RG)",
        code: "HNM-RG",
        image: "img/pizzas/hamnmushroom.png",
        price: 200,
      },
      {
        isAvailable: true,
        name: "Ham & Mushroom Pizza (MD)",
        code: "HNM-MD",
        image: "img/pizzas/hamnmushroom.png",
        price: 250,
      },
      {
        isAvailable: true,
        name: "Ham & Mushroom Pizza (LG)",
        code: "HNM-LG",
        image: "img/pizzas/hamnmushroom.png",
        price: 300,
      },

      {
        isAvailable: false,
        name: "Meatzza (RG)",
        code: "MZZA-RG",
        image: "img/pizzas/meatzza.png",
        price: 170,
      },
      {
        isAvailable: false,
        name: "Meatzza (MD)",
        code: "MZZA-MD",
        image: "img/pizzas/meatzza.png",
        price: 200,
      },
      {
        isAvailable: false,
        name: "Meatzza (LG)",
        code: "MZZA-LG",
        image: "img/pizzas/meatzza.png",
        price: 230,
      },
    ],
  },

  {
    category: "DRINKS",
    contents: [
      {
        isAvailable: true,
        name: "Coke (RG)",
        code: "CK-RG",
        image: "img/drinks/coke.png",
        price: 25,
      },
      {
        isAvailable: true,
        name: "Coke (MD)",
        code: "CK-MD",
        image: "img/drinks/coke.png",
        price: 35,
      },
      {
        isAvailable: true,
        name: "Coke (LG)",
        code: "CK-LG",
        image: "img/drinks/coke.png",
        price: 40,
      },

      {
        isAvailable: true,
        name: "Coke Zero (RG)",
        code: "CKZ-RG",
        image: "img/drinks/cokezero.png",
        price: 25,
      },
      {
        isAvailable: true,
        name: "Coke Zero (MD)",
        code: "CKZ-MD",
        image: "img/drinks/cokezero.png",
        price: 35,
      },
      {
        isAvailable: true,
        name: "Coke Zero (LG)",
        code: "CKZ-LG",
        image: "img/drinks/cokezero.png",
        price: 40,
      },

      {
        isAvailable: true,
        name: "Sprite (RG)",
        code: "SPRT-RG",
        image: "img/drinks/sprite.png",
        price: 25,
      },
      {
        isAvailable: true,
        name: "Sprite (MD)",
        code: "SPRT-MD",
        image: "img/drinks/sprite.png",
        price: 35,
      },
      {
        isAvailable: true,
        name: "Sprite (LG)",
        code: "SPRT-LG",
        image: "img/drinks/sprite.png",
        price: 40,
      },

      {
        isAvailable: true,
        name: "Iced Tea (RG)",
        code: "ICT-RG",
        image: "img/drinks/icedtea.png",
        price: 15,
      },
      {
        isAvailable: true,
        name: "Iced Tea (MD)",
        code: "ICT-MD",
        image: "img/drinks/icedtea.png",
        price: 25,
      },
      {
        isAvailable: true,
        name: "Iced Tea (LG)",
        code: "ICT-LG",
        image: "img/drinks/icedtea.png",
        price: 35,
      },
    ],
  },

  {
    category: "SIDES",
    contents: [
      {
        isAvailable: true,
        name: "Chicken Popcorn (150g)",
        code: "CHKP",
        image: "img/sides/chickenpopcorn.png",
        price: 100,
      },

      {
        isAvailable: true,
        name: "Chicken Wings BBQ (8 pcs)",
        code: "CHWBBQ",
        image: "img/sides/chickenwingsbbq.png",
        price: 150,
      },

      {
        isAvailable: true,
        name: "Chicken Wings (8 pcs)",
        code: "CHW",
        image: "img/sides/chickenwings.png",
        price: 130,
      },

      {
        isAvailable: true,
        name: "Cheesy Bread Bacon Jalapeno",
        code: "CBBJ",
        image: "img/sides/CBBJ.png",
        price: 90,
      },
      {
        isAvailable: true,
        name: "Cheesy Bread",
        code: "CB",
        image: "img/sides/cheesybread.png",
        price: 85,
      },
      {
        isAvailable: true,
        name: "Garlic Bread Sticks",
        code: "GBS",
        image: "img/sides/garlicbreadstix.png",
        price: 85,
      },
      {
        isAvailable: true,
        name: "French Fries Bacon and Cheese",
        code: "FFBC",
        image: "img/sides/frenchfriesbaconcheese.png",
        price: 120,
      },
      {
        isAvailable: true,
        name: "French Fries Cheese",
        code: "FFC",
        image: "img/sides/frenchfriescheese.png",
        price: 100,
      },
      {
        isAvailable: true,
        name: "French Fries",
        code: "FF",
        image: "img/sides/frenchfries.png",
        price: 85,
      },
      {
        isAvailable: true,
        name: "Potato Wedges",
        code: "PW",
        image: "img/sides/potatowedge.png",
        price: 85,
      },
      {
        isAvailable: true,
        name: "Chicken Nuggets (6 pcs)",
        code: "CHKNUG",
        image: "img/sides/chickennuggets.png",
        price: 120,
      },
      {
        isAvailable: true,
        name: "Kids Pizza Meal",
        code: "KPM",
        image: "img/sides/kidspizzameal.png",
        price: 110,
      },
      {
        isAvailable: true,
        name: "Kids Chicken Nuggets Meal",
        code: "KCNM",
        image: "img/sides/kidsnuggetsmeal.png",
        price: 110,
      },
      {
        isAvailable: true,
        name: "Kids Cheesy Bread Meal",
        code: "KCBM",
        image: "img/sides/kidscheesybread.png",
        price: 100,
      },
    ],
  },

  {
    category: "DESSERTS",
    contents: [
      {
        isAvailable: true,
        name: "Cinnamon Sticks",
        code: "CNMSTK",
        image: "img/desserts/cinnamonsticks.png",
        price: 100,
      },

      {
        isAvailable: true,
        name: "Cream Cheese Rolls",
        code: "CCRLS",
        image: "img/desserts/creamcheeseroll.png",
        price: 100,
      },

      {
        isAvailable: true,
        name: "Lava Cake",
        code: "LAVCAK",
        image: "img/desserts/lavacake.png",
        price: 75,
      },
    ],
  },

  {
    category: "DIPS",
    contents: [
      {
        isAvailable: true,
        name: "Garlic Dip",
        code: "GARLDIP",
        image: "img/dips/garlicdip.png",
        price: 25,
      },

      {
        isAvailable: true,
        name: "Ketchup",
        code: "KETCHUP",
        image: "img/dips/ketchup.png",
        price: 25,
      },

      {
        isAvailable: true,
        name: "Sweet and Sour Dip",
        code: "SWTSR",
        image: "img/dips/sweetnsourdip.png",
        price: 25,
      },
    ],
  },
];


// Initialize data
var total = 0;

function loadCategories() {
  var categoriesContainer = document.getElementById("categories");

  products.forEach((product, index) => {
    categoriesContainer.innerHTML +=
      `
<div onclick="loadProducts('` +
      index +
      `')" class="card mx-1 custom-button p-3 text-center">
<small>` +
      product.category +
      `</small>
</div>
`;
  });
}

function loadProducts(categoryIndex) {
  var maincontainer = document.getElementById("maincontainer");
  maincontainer.innerHTML = "";

  products[categoryIndex].contents.forEach((content) => {
    if (content.sizes) {
      content.sizes.forEach((size) => {
        const isDisabled = !content.isAvailable;
        maincontainer.innerHTML += `
        <div class="card mx-2 my-2 custom-button content text-center p-2 ${
          isDisabled ? "bg-secondary text-white opacity-50" : ""
        }" 
             style="width: 250px; ${
               isDisabled
                 ? "pointer-events: none; cursor: not-allowed;"
                 : "cursor: pointer;"
             }"
             ${
               !isDisabled
                 ? `onclick="addToReceipt('${size.price}','${
                     content.code + size.code
                   }')"`
                 : ""
             }>
            <img src="${content.image}" class="img-fluid mb-2" alt="${
          content.name
        }" style="height: 250px; object-fit: contain;">
            <small>${content.name} ${size.code}${
          isDisabled ? " (Unavailable)" : ""
        }</small>
        </div>
    `;
      });
    } else {
      const isDisabled = !content.isAvailable;
      maincontainer.innerHTML += `
    <div class="card mx-2 my-2 custom-button content text-center p-2 ${
      isDisabled ? "bg-secondary text-white opacity-50" : ""
    }" 
         style="width: 250px; ${
           isDisabled
             ? "pointer-events: none; cursor: not-allowed;"
             : "cursor: pointer;"
         }"
         ${
           !isDisabled
             ? `onclick="addToReceipt('${content.price}','${content.code}')"`
             : ""
         }>
        <img src="${content.image}" class="img-fluid mb-2" alt="${
        content.name
      }" style="height: 250px; object-fit: contain;">
        <small>${content.name}${isDisabled ? " (Unavailable)" : ""}</small>
    </div>
`;
    }
  });
}
function addToReceipt(price, code) {
  var receiptContainer = document.getElementById("receipt");
  total = parseFloat(total) + parseFloat(price);

  let itemId = "item-" + Date.now();

  totalValueElement = document.getElementById("totalValue");
  totalValueElement.innerHTML = total.toFixed(2);

  receiptContainer.innerHTML += `
<div class="d-flex flex-row justify-content-between align-items-center my-1" id="${itemId}">
<div><small>${code}</small></div>
<div class="d-flex align-items-center gap-2">
    <small>${price}</small>
    <button class="btn btn-sm btn-outline-danger p-1 px-2" onclick="removeItem('${itemId}', ${price})"><i class="fi fi-bs-trash"></i></button>
</div>
</div>
`;
}

function removeItem(id, price) {
  var item = document.getElementById(id);
  if (item) {
    item.remove();
    total -= parseFloat(price);
    document.getElementById("totalValue").innerHTML = total.toFixed(2);
  }
}

function clearReceipt() {
  document.getElementById("receipt").innerHTML = "";
  total = 0;
  document.getElementById("totalValue").innerHTML = total.toFixed(2);
  alert("Order placed!");
}

loadCategories();
