/* ===== KANANTA SAYUR SEGAR - JAVASCRIPT ===== */

// ===== Products Data =====
const products = [
    // Sayuran Segar - Cabe & Wortel
    { id: 1, name: "Cabe Rawit Merah", category: "sayuran", unit: "1 kg", price: 65000, emoji: "🌶️", image: "assets/images/sayuran/caberawitmerah.jpg", badge: "Pedas" },
    { id: 2, name: "Cabe Rawit Hijau", category: "sayuran", unit: "1 kg", price: 40000, emoji: "🌶️", image: "assets/images/sayuran/caberawithijau.jpg", badge: "" },
    { id: 3, name: "Cabe Tampar", category: "sayuran", unit: "1 kg", price: 60000, emoji: "🌶️", image: "assets/images/sayuran/cabetampar.jpg", badge: "" },
    { id: 4, name: "Wortel Manis", category: "sayuran", unit: "1 kg", price: 24000, emoji: "🥕", image: "assets/images/sayuran/wortelmanis.jpg", badge: "Best" },
    { id: 5, name: "Wortel Biasa", category: "sayuran", unit: "1 kg", price: 14000, emoji: "🥕", image: "assets/images/sayuran/wortelbiasa.jpg", badge: "" },

    // Sayuran Segar - Lainnya
    { id: 18, name: "Kentang", category: "sayuran", unit: "1 kg", price: 17000, emoji: "🥔", image: "assets/images/sayuran/kentang.jpg", badge: "" },
    { id: 19, name: "Brokoli", category: "sayuran", unit: "1 kg", price: 40000, emoji: "🥦", image: "assets/images/sayuran/brokoli.jpg", badge: "Premium" },
    { id: 20, name: "Bunga Kol", category: "sayuran", unit: "1 kg", price: 25000, emoji: "🥬", image: "assets/images/sayuran/bungakol.jpg", badge: "" },
    { id: 21, name: "Sawi Putih", category: "sayuran", unit: "1 kg", price: 11000, emoji: "🥬", image: "assets/images/sayuran/sawiputih.jpg", badge: "" },
    { id: 22, name: "Kobis", category: "sayuran", unit: "1 kg", price: 8000, emoji: "🥬", image: "assets/images/sayuran/kobis.jpg", badge: "Murah" },
    { id: 23, name: "Timun", category: "sayuran", unit: "1 kg", price: 7000, emoji: "🥒", image: "assets/images/sayuran/timun.jpg", badge: "" },
    { id: 24, name: "Terong", category: "sayuran", unit: "1 kg", price: 9000, emoji: "🍆", image: "assets/images/sayuran/terong.jpg", badge: "" },
    { id: 25, name: "Terong Lalap", category: "sayuran", unit: "1 kg", price: 10000, emoji: "🍆", image: "assets/images/sayuran/teronglalap.jpg", badge: "" },
    { id: 26, name: "Gambas", category: "sayuran", unit: "1 kg", price: 10000, emoji: "🥒", image: "assets/images/sayuran/gambas.jpg", badge: "" },
    { id: 27, name: "Pare", category: "sayuran", unit: "1 kg", price: 8000, emoji: "🥒", image: "assets/images/sayuran/pare.jpg", badge: "" },
    { id: 28, name: "Selada", category: "sayuran", unit: "1 kg", price: 25000, emoji: "🥗", image: "assets/images/sayuran/selada.jpg", badge: "" },
    { id: 29, name: "Tomat", category: "sayuran", unit: "1 kg", price: 10000, emoji: "🍅", image: "assets/images/sayuran/tomat.jpg", badge: "" },
    { id: 30, name: "Jipan / Labu Siam", category: "sayuran", unit: "1 kg", price: 7000, emoji: "🥬", image: "assets/images/sayuran/jipan.jpg", badge: "" },
    { id: 31, name: "Daun Bawang / Pre", category: "sayuran", unit: "1 kg", price: 20000, emoji: "🧅", image: "assets/images/sayuran/daunbawang.jpg", badge: "" },
    { id: 32, name: "Seledri", category: "sayuran", unit: "1 kg", price: 35000, emoji: "🌿", image: "assets/images/sayuran/seledri.jpg", badge: "" },

    // Sayur Ikat & Kemasan
    { id: 6, name: "Sayur Sop-sopan", category: "ikat", unit: "1 bungkus", price: 5000, emoji: "🥬", image: "assets/images/sayur_ikat/sayursop-sopan.jpg", badge: "" },
    { id: 7, name: "Bayam", category: "ikat", unit: "1 ikat", price: 2000, emoji: "🥗", image: "assets/images/sayur_ikat/bayam.jpg", badge: "Murah" },
    { id: 8, name: "Kangkung", category: "ikat", unit: "1 ikat", price: 2000, emoji: "🥗", image: "assets/images/sayur_ikat/kangkung.jpg", badge: "" },
    { id: 9, name: "Daun Ketela", category: "ikat", unit: "1 ikat", price: 3000, emoji: "🌿", image: "assets/images/sayur_ikat/daunketela.jpg", badge: "" },

    // Bumbu Dapur & Rempah
    { id: 10, name: "Bawang Merah", category: "bumbu", unit: "1 kg", price: 45000, emoji: "🧅", image: "assets/images/bumbu/bawangmerah.jpg", badge: "" },
    { id: 11, name: "Bawang Putih", category: "bumbu", unit: "1 kg", price: 36000, emoji: "🧄", image: "assets/images/bumbu/bawangputih.jpg", badge: "" },
    { id: 12, name: "Kencur", category: "bumbu", unit: "1 kg", price: 60000, emoji: "🌱", image: "assets/images/bumbu/kencur.jpg", badge: "" },
    { id: 13, name: "Jahe", category: "bumbu", unit: "1 kg", price: 35000, emoji: "🫚", image: "assets/images/bumbu/jahe.jpg", badge: "" },
    { id: 33, name: "Kunci", category: "bumbu", unit: "1 kg", price: 23000, emoji: "🌱", image: "assets/images/bumbu/kunci.jpg", badge: "" },
    { id: 34, name: "Kunyit", category: "bumbu", unit: "1 kg", price: 15000, emoji: "🌱", image: "assets/images/bumbu/kunyit.jpg", badge: "" },
    { id: 35, name: "Sereh", category: "bumbu", unit: "1 kg", price: 12000, emoji: "🌿", image: "assets/images/bumbu/sereh.jpg", badge: "" },
    { id: 36, name: "Kemiri", category: "bumbu", unit: "1 plastik", price: 3000, emoji: "🥜", image: "assets/images/bumbu/kemiri.jpg", badge: "" },

    // Bumbu Masak & Bahan Pokok
    { id: 14, name: "Royco/Masako Ayam/Sapi", category: "pokok", unit: "1 renteng", price: 5000, emoji: "📦", image: "assets/images/bahan_pokok/roycomasako.jpg", badge: "" },
    { id: 15, name: "Ketumbar Bubuk", category: "pokok", unit: "1 renteng", price: 10000, emoji: "📦", image: "assets/images/bahan_pokok/kunyitbubuk.jpg", badge: "" },
    { id: 16, name: "Lada Bubuk", category: "pokok", unit: "1 bungkus", price: 5000, emoji: "📦", image: "assets/images/bahan_pokok/marinasibubuk.jpg", badge: "" },
    { id: 17, name: "Minyak Goreng", category: "pokok", unit: "1 liter", price: 18000, emoji: "🫙", image: "assets/images/bahan_pokok/minyakgoreng.jpg", badge: "Pokok" },
    { id: 37, name: "Tepung Terigu", category: "pokok", unit: "1 kg", price: 8000, emoji: "🌾", image: "assets/images/bahan_pokok/tepungterigu.jpg", badge: "" },
    { id: 38, name: "Tepung Kanji", category: "pokok", unit: "1 kg", price: 10000, emoji: "🌾", image: "assets/images/bahan_pokok/tepungkanji.jpg", badge: "" },
    { id: 39, name: "Tepung Panir", category: "pokok", unit: "1 kg", price: 14000, emoji: "🌾", image: "assets/images/bahan_pokok/tepungpanir.jpg", badge: "" },
    { id: 40, name: "Saos Bantal Tomat", category: "pokok", unit: "1 bungkus", price: 4000, emoji: "🍅", image: "assets/images/bahan_pokok/saosbantal.jpg", badge: "" },
    { id: 41, name: "Saos Bantal Cabai", category: "pokok", unit: "1 bungkus", price: 4000, emoji: "🌶️", image: "assets/images/bahan_pokok/saosbantal.jpg", badge: "" },
    { id: 42, name: "Mie Daraku Kecil", category: "pokok", unit: "1 bungkus", price: 16000, emoji: "🍜", image: "assets/images/bahan_pokok/miedaraku.jpg", badge: "" },
    { id: 43, name: "Mie Daraku Besar", category: "pokok", unit: "1 bungkus", price: 36000, emoji: "🍜", image: "assets/images/bahan_pokok/miedaraku.jpg", badge: "" },
    { id: 44, name: "Mie Kenduri", category: "pokok", unit: "1 bungkus", price: 11000, emoji: "🍜", image: "assets/images/bahan_pokok/miekenduri.jpg", badge: "" }
];




// ===== Cart Management =====
let cart = JSON.parse(localStorage.getItem('kanantaCart')) || [];

function saveCart() {
    localStorage.setItem('kanantaCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'flex' : 'none';
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    saveCart();
    showToast(`${product.name} ditambahkan ke keranjang!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    if (typeof renderCart === 'function') renderCart();
}

function updateQty(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += change;
    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        if (typeof renderCart === 'function') renderCart();
    }
}

function clearCart() {
    if (confirm('Yakin ingin mengosongkan keranjang?')) {
        cart = [];
        saveCart();
        if (typeof renderCart === 'function') renderCart();
        showToast('Keranjang dikosongkan', 'success');
    }
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

// ===== Toast Notification =====
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== Format Currency =====
function formatRupiah(num) {
    return 'Rp ' + num.toLocaleString('id-ID');
}

// ===== Mobile Menu =====
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            menu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                menu.classList.remove('active');
            });
        });
    }
}

// ===== Header Scroll Effect =====
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }
}

// ===== Scroll To Top =====
function initScrollTop() {
    const btn = document.querySelector('.scroll-top');
    if (btn) {
        window.addEventListener('scroll', () => {
            btn.classList.toggle('show', window.scrollY > 300);
        });
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// ===== Render Products =====
// ===== Render Products =====
function renderProducts(category = 'all') {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    const filtered = category === 'all'
        ? products
        : products.filter(p => p.category === category);

    grid.innerHTML = filtered.map((p, index) => `
        <div class="product-card animate-on-scroll fade-up" data-product="${p.id}" style="transition-delay: ${(index % 4) * 0.1}s">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            <div class="product-image">
                ${p.image
            ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                       <span class="emoji-fallback" style="display:none;">${p.emoji}</span>`
            : `<span>${p.emoji}</span>`
        }
            </div>
            <div class="product-info">
                <span class="product-category">${getCategoryName(p.category)}</span>
                <h4 class="product-name">${p.name}</h4>
                <p class="product-unit">${p.unit}</p>
                <div class="product-footer">
                    <span class="product-price">${formatRupiah(p.price)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${p.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Observe newly rendered items
    if (scrollObserver) {
        grid.querySelectorAll('.animate-on-scroll').forEach(el => scrollObserver.observe(el));
    }
}

function getCategoryName(cat) {
    const names = {
        sayuran: 'Sayuran Segar',
        ikat: 'Sayur Ikat',
        bumbu: 'Bumbu Rempah',
        pokok: 'Bahan Pokok'
    };
    return names[cat] || cat;
}

// ===== Category Tabs =====
function initCategoryTabs() {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderProducts(tab.dataset.category);
        });
    });
}

// ===== WhatsApp Checkout =====
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast('Keranjang masih kosong!', 'error');
        return;
    }

    const notes = document.querySelector('#order-notes')?.value || '';
    const phoneNumber = '6285806844758';

    let message = '🛒 *PESANAN BARU - KANANTA SAYUR SEGAR*\n';
    message += '━━━━━━━━━━━━━━━━━━━━\n\n';

    cart.forEach((item, i) => {
        message += `${i + 1}. ${item.name}\n`;
        message += `   ${item.qty} x ${formatRupiah(item.price)} = ${formatRupiah(item.price * item.qty)}\n\n`;
    });

    message += '━━━━━━━━━━━━━━━━━━━━\n';
    message += `💰 *TOTAL: ${formatRupiah(getCartTotal())}*\n\n`;

    if (notes) {
        message += `📝 *Catatan:*\n${notes}\n\n`;
    }

    message += '📍 Mohon konfirmasi alamat pengiriman.\n';
    message += 'Terima kasih! 🙏';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
// ===== Scroll Animation =====
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Animasi hanya berjalan sekali
            }
        });
    }, observerOptions);

    // Amati elemen statis
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Kembalikan observer agar bisa digunakan untuk elemen dinamis
    return observer;
}

// Global variable untuk observer
let scrollObserver;

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    initMobileMenu();
    initHeaderScroll();
    initScrollTop();
    initCategoryTabs();
    renderProducts();

    // Inisialisasi animasi scroll
    scrollObserver = initScrollAnimation();
});
