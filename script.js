(function () {
  const STORAGE_KEY = "slingbags_cart_v1";

  const cartIcon = document.getElementById("cartIcon");
  const cartCountEl = document.getElementById("cartCount");
  const viewCartBtn = document.getElementById("viewCartBtn");
  const viewCartCountEl = document.getElementById("viewCartCount");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  const cartModal = document.getElementById("cartModal");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("checkoutBtn");

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    updateBadge(cart);
  }

  function formatMoney(n) {
    const num = Number(n) || 0;
    return "$" + num.toFixed(2);
  }

  function updateBadge(cart) {
  const count = cart.reduce((sum, item) => sum + (Number(item.qty) || 0), 0);

  // top-right cart icon badge
  cartCountEl.textContent = String(count);
  cartCountEl.style.display = count > 0 ? "inline-flex" : "none";

  // View Cart button badge
  if (viewCartCountEl) {
    viewCartCountEl.textContent = String(count);
    viewCartCountEl.style.display = count > 0 ? "inline-flex" : "none";
  }
}

  const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

  function openCart() {
    cartModal.style.display = "flex";
    cartModal.setAttribute("aria-hidden", "false");
    renderCart();
    const firstFocusable = cartModal.querySelector(FOCUSABLE);
    if (firstFocusable) firstFocusable.focus();
  }

  function closeCart() {
    cartModal.style.display = "none";
    cartModal.setAttribute("aria-hidden", "true");
    cartIcon.focus();
  }

  function trapFocus(e) {
    if (cartModal.style.display !== "flex") return;
    const focusable = Array.from(cartModal.querySelectorAll(FOCUSABLE));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  function toggleMobileNav() {
    const isOpen = mobileNav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  }

  function closeMobileNav() {
    mobileNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
  }

  function addToCart(item) {
    const cart = loadCart();
    const existing = cart.find((x) => x.sku === item.sku);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    saveCart(cart);
  }

  function removeOne(sku) {
    const cart = loadCart();
    const idx = cart.findIndex((x) => x.sku === sku);
    if (idx === -1) return;

    cart[idx].qty -= 1;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);

    saveCart(cart);
    renderCart();
  }

  function renderCart() {
    const cart = loadCart();

    if (!cart.length) {
      cartItemsEl.innerHTML = "<p>Your cart is empty.</p>";
      cartTotalEl.textContent = formatMoney(0);
      return;
    }

    let total = 0;
    const lines = cart
      .map((item) => {
        const price = Number(item.price) || 0;
        const qty = Number(item.qty) || 0;
        total += price * qty;

        return `
          <div class="cart-row">
            <div class="cart-row-left">
              <p class="cart-title"><strong>${item.name}</strong></p>
              <p class="cart-sub">${formatMoney(price)} × ${qty}</p>
            </div>
            <button class="remove-one" data-sku="${item.sku}">Remove</button>
          </div>
        `;
      })
      .join("");

    cartItemsEl.innerHTML = lines;
    cartTotalEl.textContent = formatMoney(total);

    cartItemsEl.querySelectorAll(".remove-one").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const sku = e.currentTarget.getAttribute("data-sku");
        removeOne(sku);
      });
    });
  }

  function animateAdded(buttonEl) {
    // prevent stacking animations if spam-clicked
    if (buttonEl.dataset.animating === "true") return;

    const originalText = buttonEl.textContent;
    buttonEl.dataset.animating = "true";

    buttonEl.classList.add("added");
    buttonEl.textContent = "Added to Cart";

    window.setTimeout(() => {
      buttonEl.classList.remove("added");
      buttonEl.textContent = originalText;
      buttonEl.dataset.animating = "false";
    }, 900);
  }

  // Wire product buttons
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const button = e.currentTarget;
      const card = button.closest(".product-card");
      if (!card) return;

      const sku = card.getAttribute("data-sku");
      const name = card.getAttribute("data-name");
      const price = card.getAttribute("data-price");

      addToCart({ sku, name, price: Number(price) });
      animateAdded(button);
    });
  });

  // Open/close cart
  cartIcon.addEventListener("click", openCart);
  viewCartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);

  // click outside modal closes
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) closeCart();
  });

  // Focus trap + Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (cartModal.style.display === "flex") closeCart();
      if (mobileNav.classList.contains("open")) closeMobileNav();
    }
    trapFocus(e);
  });

  // Hamburger menu
  menuBtn.addEventListener("click", toggleMobileNav);
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  // checkout popup + reset
  checkoutBtn.addEventListener("click", () => {
    alert("Thank you for ordering! But this is not a real store...");
    saveCart([]);
    renderCart();
    closeCart();
  });
window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("show", window.scrollY > 300);
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
  // initialize
  document.getElementById("copyrightYear").textContent = new Date().getFullYear();
  const initialCart = loadCart();
  updateBadge(initialCart);
  renderCart();
})();
