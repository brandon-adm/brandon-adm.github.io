var categories = [];
    var products = [];

    var productloading = document.getElementById("productloading");
    var maincontainer = document.getElementById("maincontainer");

    const getAllCategories = async () => {
      fetch(
          '../A06/BE/categories.php',
          )
        .then(response => response.json())
        .then(data => {
          categories = data;
          loadCategories();
        });
    }

    const getAllProducts = async (categoryID) => {
      const categoryData = {
        categoryID: categoryID
      };

      maincontainer.innerHTML = "";

      fetch(
          '../A06/BE/product.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoryData)
          })
        .then(response => response.json())
        .then(data => {
          products = data;
          loadProducts();
        });
    }

    getAllCategories();

    var total = 0;

    function loadCategories() {
      var categoriesContainer = document.getElementById("categories");
      categoriesContainer.innerHTML = "";

      categories.forEach((category) => {
        categoriesContainer.innerHTML += `
          <div onclick="getAllProducts('` + category.categoryID + `')" class="card mx-1 custom-button p-3 text-center">
            <small>` + category.name + `</small>
          </div>
        `;
      });
    }

function loadProducts(categoryID) {
  maincontainer.innerHTML = "";

  products.forEach(product => {
    const isDisabled = !product.isAvailable;

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
          ? `onclick="addToReceipt('${product.price}','${product.code}')"`
          : ""
      }>
        <img src="${product.image}" class="img-fluid mb-2" alt="${product.name}" style="height: 250px; object-fit: contain;">
        <small>${product.name}${isDisabled ? " (Unavailable)" : ""}</small>
      </div>
    `;
  });
}

    function addToReceipt(price, code) {
      var receiptContainer = document.getElementById("receipt");
      total = parseFloat(total) + parseFloat(price);

      totalValueElement = document.getElementById("totalValue");
      totalValueElement.innerHTML = total;

      receiptContainer.innerHTML += `
        <div class="d-flex flex-row justify-content-between">
          <div><small>` + code + `</small></div>
          <div><small>` + price + `</small></div>
        </div>
      `;
    }