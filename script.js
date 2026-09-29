/* =====================================================
   LUPCALL
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   DATA
===================================================== */

const repairData = [

    {
        name: "Dirgantara Bengkel",
        location: "Jl. Sirojudin",
        price: "Rp 35.000 – Rp 150.000",
        service: "Servis ringan, oli, rem & ban",
        wa: "628123456701"
    },

    {
        name: "Aljeniro Engineer",
        location: "Ngesrep",
        price: "Rp 40.000 – Rp 175.000",
        service: "Servis motor & pengecekan mesin",
        wa: "628123456702"
    },

    {
        name: "Albob Machine",
        location: "Mulawarman",
        price: "Rp 35.000 – Rp 160.000",
        service: "Mesin, aki & servis ringan",
        wa: "628123456703"
    },

    {
        name: "Oscar Montir",
        location: "Gondang",
        price: "Rp 30.000 – Rp 145.000",
        service: "Servis motor & ganti oli",
        wa: "628123456704"
    },

    {
        name: "Teknisi Numair",
        location: "Banyumanik",
        price: "Rp 40.000 – Rp 180.000",
        service: "Servis darurat & mesin",
        wa: "628123456705"
    },

    {
        name: "Geovano Baskoro Bengkel",
        location: "Semarang",
        price: "Rp 35.000 – Rp 170.000",
        service: "Servis ringan & electrical",
        wa: "628123456706"
    }

];


const rideData = {

    temcy: [
        "Roman",
        "Sam",
        "Aldyan",
        "Bagas",
        "Altar",
        "Geovano",
        "Felix",
        "Adam",
        "Vano",
        "Valentina",
        "Mathilda",
        "Marsha",
        "Karina",
        "Kadita"
    ],

    timur: [
        "Edgar",
        "Julian",
        "Mathew",
        "Johan",
        "Altop",
        "Jaegar",
        "Pasha",
        "Raksal",
        "Aiden",
        "Piche",
        "Kaleb"
    ],

    barat: [
        "Jevano",
        "Mortiz",
        "Zidan",
        "Dzaky",
        "Kaira",
        "Sakael",
        "Sultan",
        "Zirga",
        "Teo",
        "Kalio",
        "Rexa",
        "Vinci",
        "Melda",
        "Teana",
        "Nolan"
    ]

};


const foodData = [

    {
        name: "Ikanin aja",
        owner: "by Rania",
        emoji: "🐟",
        menus: [
            ["Nasi Ikan Crispy", 18000],
            ["Ikan Sambal Matah", 22000],
            ["Ikan Saus Padang", 23000],
            ["Paket Hemat Ikan", 15000]
        ],
        wa: "628123456711"
    },

    {
        name: "D'Ayams",
        owner: "by Beya",
        emoji: "🍗",
        menus: [
            ["Ayam Geprek", 15000],
            ["Ayam Sambal Ijo", 17000],
            ["Ayam Crispy", 16000],
            ["Paket Ayam Hemat", 13000]
        ],
        wa: "628123456712"
    },

    {
        name: "Soto Mami",
        owner: "Yola",
        emoji: "🍲",
        menus: [
            ["Soto Ayam", 13000],
            ["Soto Komplit", 17000],
            ["Soto + Nasi", 15000],
            ["Sate Telur", 4000]
        ],
        wa: "628123456713"
    },

    {
        name: "Catering Onty",
        owner: "Luna",
        emoji: "🍱",
        menus: [
            ["Nasi Ayam", 18000],
            ["Nasi Beef", 22000],
            ["Paket Mingguan", 85000],
            ["Paket Anak Kost", 65000]
        ],
        wa: "628123456714"
    },

    {
        name: "Dapur Bunda",
        owner: "Bang Vano",
        emoji: "🍛",
        menus: [
            ["Nasi Telur", 10000],
            ["Nasi Ayam", 15000],
            ["Nasi Teri", 12000],
            ["Paket Komplit", 18000]
        ],
        wa: "628123456715"
    },

    {
        name: "Smash Chicken",
        owner: "Bang Yusuf",
        emoji: "🍗",
        menus: [
            ["Smash Chicken", 18000],
            ["Chicken Cheese", 22000],
            ["Chicken Rice", 17000],
            ["Combo Hemat", 25000]
        ],
        wa: "628123456716"
    },

    {
        name: "Nasi Kulit",
        owner: "by Kiano",
        emoji: "🍚",
        menus: [
            ["Nasi Kulit Original", 15000],
            ["Nasi Kulit Sambal", 17000],
            ["Kulit Crispy", 12000],
            ["Paket Hemat", 13000]
        ],
        wa: "628123456717"
    },

    {
        name: "Amora Bakery",
        owner: "",
        emoji: "🥐",
        menus: [
            ["Croissant", 12000],
            ["Choco Bun", 10000],
            ["Cheese Bread", 13000],
            ["Cinnamon Roll", 15000]
        ],
        wa: "628123456718"
    },

    {
        name: "Cheezy Matcha",
        owner: "",
        emoji: "🍵",
        menus: [
            ["Matcha Latte", 15000],
            ["Cheezy Matcha", 18000],
            ["Matcha Cream", 17000],
            ["Matcha Cookies", 12000]
        ],
        wa: "628123456719"
    }

];


/* =====================================================
   FASHION DATA
===================================================== */

const fashionData = [

    {
        name: "Noir Daily Shirt",
        category: "Kemeja",
        price: 89000,
        sizes: "S, M, L, XL",
        colors: "Black, White, Cream",
        emoji: "👔"
    },

    {
        name: "Room 17 Shirt",
        category: "Kemeja",
        price: 95000,
        sizes: "S, M, L",
        colors: "Navy, Grey, Brown",
        emoji: "👔"
    },

    {
        name: "Monday Office",
        category: "Kemeja",
        price: 99000,
        sizes: "S, M, L, XL",
        colors: "White, Blue, Black",
        emoji: "👔"
    },

    {
        name: "Campus Line",
        category: "Kemeja",
        price: 85000,
        sizes: "M, L, XL",
        colors: "Cream, Olive, Navy",
        emoji: "👔"
    },

    {
        name: "After Class Shirt",
        category: "Kemeja",
        price: 92000,
        sizes: "S, M, L",
        colors: "Grey, Black, Beige",
        emoji: "👔"
    },

    {
        name: "Monday Club",
        category: "Kaos",
        price: 59000,
        sizes: "S, M, L, XL",
        colors: "Black, White, Grey",
        emoji: "👕"
    },

    {
        name: "Late Again",
        category: "Kaos",
        price: 65000,
        sizes: "M, L, XL",
        colors: "Black, Navy, Maroon",
        emoji: "👕"
    },

    {
        name: "Kostmate Basic",
        category: "Kaos",
        price: 55000,
        sizes: "S, M, L, XL",
        colors: "White, Black, Beige",
        emoji: "👕"
    },

    {
        name: "Slow Morning",
        category: "Kaos",
        price: 62000,
        sizes: "S, M, L",
        colors: "Cream, Grey, Sage",
        emoji: "👕"
    },

    {
        name: "No Rush Club",
        category: "Kaos",
        price: 69000,
        sizes: "M, L, XL",
        colors: "Black, White, Brown",
        emoji: "👕"
    },

    {
        name: "Luna Knit",
        category: "Cardigan",
        price: 79000,
        sizes: "All Size",
        colors: "Cream, Mocha, Black",
        emoji: "🧥"
    },

    {
        name: "After Class Cardigan",
        category: "Cardigan",
        price: 85000,
        sizes: "M, L, XL",
        colors: "Grey, Charcoal, Navy",
        emoji: "🧥"
    },

    {
        name: "Sunday Knit",
        category: "Cardigan",
        price: 89000,
        sizes: "All Size",
        colors: "Brown, Cream, Sage",
        emoji: "🧥"
    },

    {
        name: "Soft Hour",
        category: "Cardigan",
        price: 95000,
        sizes: "S, M, L",
        colors: "Dusty Pink, Cream, Grey",
        emoji: "🧥"
    },

    {
        name: "Grey Matter",
        category: "Outer",
        price: 99000,
        sizes: "S, M, L, XL",
        colors: "Grey, Black, Olive",
        emoji: "🧥"
    },

    {
        name: "Kost Supply",
        category: "Outer",
        price: 109000,
        sizes: "M, L, XL",
        colors: "Black, Brown, Army",
        emoji: "🧥"
    },

    {
        name: "Night Shift Jacket",
        category: "Outer",
        price: 119000,
        sizes: "M, L, XL",
        colors: "Black, Navy, Grey",
        emoji: "🧥"
    },

    {
        name: "Weekend Utility",
        category: "Outer",
        price: 125000,
        sizes: "S, M, L, XL",
        colors: "Olive, Black, Khaki",
        emoji: "🧥"
    },

    {
        name: "Campus Bomber",
        category: "Outer",
        price: 135000,
        sizes: "M, L, XL",
        colors: "Black, Navy, Maroon",
        emoji: "🧥"
    },

    {
        name: "Daily Straight Pants",
        category: "Celana",
        price: 99000,
        sizes: "S, M, L, XL",
        colors: "Black, Beige, Grey",
        emoji: "👖"
    },

    {
        name: "Campus Cargo",
        category: "Celana",
        price: 115000,
        sizes: "S, M, L, XL",
        colors: "Black, Army, Khaki",
        emoji: "👖"
    },

    {
        name: "Relaxed Jeans",
        category: "Celana",
        price: 125000,
        sizes: "27, 28, 29, 30, 31, 32",
        colors: "Blue, Black",
        emoji: "👖"
    },

    {
        name: "Wide Leg Pants",
        category: "Celana",
        price: 109000,
        sizes: "S, M, L",
        colors: "Black, Cream, Brown",
        emoji: "👖"
    },

    {
        name: "Daily Pleated Skirt",
        category: "Rok",
        price: 89000,
        sizes: "S, M, L",
        colors: "Black, Grey, Cream",
        emoji: "👗"
    },

    {
        name: "Campus Midi Skirt",
        category: "Rok",
        price: 95000,
        sizes: "S, M, L",
        colors: "Black, Brown, Navy",
        emoji: "👗"
    },

    {
        name: "Soft Pleats",
        category: "Rok",
        price: 85000,
        sizes: "M, L",
        colors: "Cream, Sage, Black",
        emoji: "👗"
    },

    {
        name: "Sunday Dress",
        category: "Dress",
        price: 115000,
        sizes: "S, M, L",
        colors: "Black, Cream, Brown",
        emoji: "👗"
    },

    {
        name: "Little Coffee Dress",
        category: "Dress",
        price: 129000,
        sizes: "S, M, L",
        colors: "Mocha, Black, Olive",
        emoji: "👗"
    },

    {
        name: "Lazy Sunday Sweater",
        category: "Sweater",
        price: 99000,
        sizes: "M, L, XL",
        colors: "Grey, Cream, Navy",
        emoji: "🧶"
    },

    {
        name: "Cloud Knit",
        category: "Sweater",
        price: 109000,
        sizes: "All Size",
        colors: "Cream, Mocha, Sage",
        emoji: "🧶"
    }

];


/* =====================================================
   STORAGE
===================================================== */

let savings =
    Number(
        localStorage.getItem("lupcallSavings")
    ) || 850000;


/* =====================================================
   PAGE NAVIGATION
===================================================== */

function openPage(pageId) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const target =
        document.getElementById(pageId);

    if (target) {
        target.classList.add("active");
    }


    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {

        item.classList.remove("active");

        if (
            item.dataset.page === pageId
        ) {
            item.classList.add("active");
        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   FORMAT RUPIAH
===================================================== */

function formatRupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(number);

}


/* =====================================================
   TOAST
===================================================== */

let toastTimer;

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.querySelector("p").textContent =
        message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(function() {

            toast.classList.remove("show");

        }, 2500);

}


/* =====================================================
   BALANCE
===================================================== */

let balanceVisible = true;

function toggleBalance() {

    const balance =
        document.getElementById(
            "balanceAmount"
        );

    const eye =
        document.getElementById(
            "balanceEye"
        );


    if (balanceVisible) {

        balance.textContent =
            "Rp •••••••";

        eye.textContent = "○";

        balanceVisible = false;

    } else {

        balance.textContent =
            "Rp 1.250.000";

        eye.textContent = "◉";

        balanceVisible = true;

    }

}


/* =====================================================
   SAVINGS
===================================================== */

function updateSavings() {

    const savingAmount =
        document.getElementById(
            "savingAmount"
        );

    const homeSavings =
        document.getElementById(
            "homeSavings"
        );


    if (savingAmount) {

        savingAmount.textContent =
            formatRupiah(savings);

    }


    if (homeSavings) {

        homeSavings.textContent =
            formatRupiah(savings);

    }


    localStorage.setItem(
        "lupcallSavings",
        savings
    );

}


function setSaving(amount) {

    const input =
        document.getElementById(
            "savingInput"
        );

    input.value = amount;

    input.focus();

}


function addSaving() {

    const input =
        document.getElementById(
            "savingInput"
        );

    const amount =
        Number(input.value);


    if (!amount || amount <= 0) {

        showToast(
            "Masukkan nominal tabungan dulu."
        );

        return;
    }


    savings += amount;


    input.value = "";


    updateSavings();


    showToast(
        `${formatRupiah(amount)} berhasil ditambahkan ke tabungan.`
    );

}


/* =====================================================
   TOP UP
===================================================== */

function openTopUp() {

    openModal(`

        <h2>
            Top Up Balance
        </h2>

        <p>
            Fitur top up LupCall bisa kamu
            gunakan untuk menambahkan saldo.
        </p>

        <input
            id="topUpInput"
            type="number"
            placeholder="Masukkan nominal"
            style="
                width:100%;
                margin-top:15px;
                padding:12px;
                background:#101010;
                color:white;
                border:1px solid #303030;
                border-radius:10px;
                outline:none;
            "
        >

        <button
            class="modal-action"
            onclick="doTopUp()"
        >
            Add Balance
        </button>

    `);

}


function doTopUp() {

    const input =
        document.getElementById(
            "topUpInput"
        );

    const amount =
        Number(input.value);


    if (!amount || amount <= 0) {

        showToast(
            "Masukkan nominal top up."
        );

        return;
    }


    closeModal();


    showToast(
        `${formatRupiah(amount)} siap ditambahkan.`
    );

}


/* =====================================================
   REPAIR
===================================================== */

function renderRepair() {

    const container =
        document.getElementById(
            "repairList"
        );


    container.innerHTML = "";


    repairData.forEach(function(item) {

        container.innerHTML += `

            <div class="list-card">

                <div class="list-top">

                    <div>

                        <div class="list-title">
                            ${item.name}
                        </div>

                        <div class="list-subtitle">
                            📍 ${item.location}
                        </div>

                    </div>

                    <span class="status ready">
                        PELAJAR FRIENDLY
                    </span>

                </div>


                <div class="price">
                    ${item.price}
                </div>

                <div class="meta">
                    ${item.service}
                </div>


                <button
                    class="whatsapp-btn"
                    onclick="openWhatsApp(
                        '${item.wa}',
                        'Halo, saya pengguna LupCall. Saya ingin menanyakan servis motor.'
                    )"
                >
                    WhatsApp Me →
                </button>

            </div>

        `;

    });

}


/* =====================================================
   RIDE
===================================================== */

function showRideArea(area, button) {

    document
        .querySelectorAll(".area-tab")
        .forEach(function(tab) {

            tab.classList.remove("active");

        });


    button.classList.add("active");


    renderDrivers(area);

}


function renderDrivers(area) {

    const container =
        document.getElementById(
            "rideList"
        );


    container.innerHTML = "";


    const drivers =
        rideData[area];


    drivers.forEach(function(name, index) {

        /*
            Demo status.
            Sebagian READY,
            sebagian NOT READY.
        */

        const ready =
            index % 4 !== 1;


        const phone =
            "6281234567" +
            String(index + 21)
                .padStart(2, "0");


        container.innerHTML += `

            <div class="list-card">

                <div class="list-top">

                    <div>

                        <div class="list-title">
                            ${name}
                        </div>

                        <div class="list-subtitle">
                            Driver LupCall
                        </div>

                    </div>

                    <span class="status ${
                        ready
                            ? "ready"
                            : "not-ready"
                    }">

                        ${
                            ready
                                ? "READY"
                                : "NOT READY"
                        }

                    </span>

                </div>


                <div class="meta">
                    Antar jemput • ${
                        area === "temcy"
                            ? "Temcy"
                            : area === "timur"
                                ? "Semarang Timur"
                                : "Semarang Barat"
                    }
                </div>


                <button
                    class="whatsapp-btn"
                    ${
                        ready
                            ? ""
                            : "disabled"
                    }
                    onclick="${
                        ready
                            ? `openWhatsApp(
                                '${phone}',
                                'Halo ${name}, saya ingin menggunakan layanan antar jemput LupCall.'
                            )`
                            : `showToast('Driver sedang tidak tersedia.')`
                    }"
                >
                    WhatsApp Me →
                </button>

            </div>

        `;

    });

}


/* =====================================================
   FOOD
===================================================== */

function renderFood() {

    const container =
        document.getElementById(
            "eatList"
        );


    container.innerHTML = "";


    foodData.forEach(function(food) {

        let menusHTML = "";


        food.menus.forEach(function(menu) {

            menusHTML += `

                <div class="menu-item">

                    <span>
                        ${menu[0]}
                    </span>

                    <strong>
                        ${formatRupiah(menu[1])}
                    </strong>

                </div>

            `;

        });


        container.innerHTML += `

            <div class="food-card">

                <div class="food-header">

                    <div class="food-emoji">
                        ${food.emoji}
                    </div>

                    <div>

                        <h3>
                            ${food.name}
                        </h3>

                        <p>
                            ${food.owner || "Food partner LupCall"}
                        </p>

                    </div>

                </div>


                <div class="menu-list">

                    ${menusHTML}

                </div>


                <button
                    class="whatsapp-btn"
                    onclick="openWhatsApp(
                        '${food.wa}',
                        'Halo, saya pengguna LupCall. Saya ingin order makanan.'
                    )"
                >
                    WhatsApp Me →
                </button>

            </div>

        `;

    });

}


/* =====================================================
   FASHION
===================================================== */

function renderFashion(category = "Semua") {

    const container =
        document.getElementById(
            "fashionList"
        );


    container.innerHTML = "";


    const filtered =
        category === "Semua"
            ? fashionData
            : fashionData.filter(
                function(item) {
                    return item.category === category;
                }
            );


    filtered.forEach(function(item) {

        container.innerHTML += `

            <div class="fashion-card">

                <div class="fashion-image">
                    ${item.emoji}
                </div>

                <div class="fashion-info">

                    <span class="fashion-category">
                        ${item.category}
                    </span>

                    <h3>
                        ${item.name}
                    </h3>

                    <div class="fashion-price">
                        ${formatRupiah(item.price)}
                    </div>

                    <p>
                        Size: ${item.sizes}
                        <br>
                        Color: ${item.colors}
                    </p>

                </div>

            </div>

        `;

    });

}


/* =====================================================
   FASHION FILTER
===================================================== */

function setupFashionTabs() {

    const tabs =
        document.querySelectorAll(
            ".category-tab"
        );


    tabs.forEach(function(tab) {

        tab.addEventListener(
            "click",
            function() {

                tabs.forEach(
                    function(item) {
                        item.classList.remove(
                            "active"
                        );
                    }
                );


                tab.classList.add("active");


                renderFashion(
                    tab.dataset.fashion
                );

            }
        );

    });

}


/* =====================================================
   MIX & MATCH
===================================================== */

function getRandomItem(category) {

    const items =
        fashionData.filter(
            function(item) {
                return item.category === category;
            }
        );


    if (items.length === 0) {
        return null;
    }


    return items[
        Math.floor(
            Math.random() * items.length
        )
    ];

}


function generateOutfit() {

    const result =
        document.getElementById(
            "outfitResult"
        );


    const combinations = [

        {
            name: "Campus Casual",
            items: [
                ["TOP", "Kaos"],
                ["BOTTOM", "Celana"],
                ["OUTER", "Cardigan"]
            ]
        },

        {
            name: "Clean Campus",
            items: [
                ["TOP", "Kemeja"],
                ["BOTTOM", "Celana"],
                ["OUTER", "Outer"]
            ]
        },

        {
            name: "Soft Look",
            items: [
                ["TOP", "Cardigan"],
                ["BOTTOM", "Rok"],
                ["OUTER", "Outer"]
            ]
        },

        {
            name: "Simple & Chill",
            items: [
                ["TOP", "Kaos"],
                ["BOTTOM", "Celana"],
                ["OUTER", "Sweater"]
            ]
        },

        {
            name: "Coffee Date",
            items: [
                ["TOP", "Kemeja"],
                ["BOTTOM", "Rok"],
                ["OUTER", "Cardigan"]
            ]
        }

    ];


    const outfit =
        combinations[
            Math.floor(
                Math.random() *
                combinations.length
            )
        ];


    let total = 0;


    let html = "";


    outfit.items.forEach(
        function(item) {

            const product =
                getRandomItem(
                    item[1]
                );


            if (!product) {
                return;
            }


            total += product.price;


            html += `

                <div class="outfit-item">

                    <div class="outfit-item-icon">
                        ${product.emoji}
                    </div>

                    <small>
                        ${item[0]}
                    </small>

                    <h4>
                        ${product.name}
                    </h4>

                    <p>
                        ${product.colors}
                    </p>

                </div>

            `;

        }
    );


    result.innerHTML = `

        <div class="outfit-card">

            <div class="outfit-card-header">

                <div>

                    <span>
                        LUPSTYLE SUGGESTS
                    </span>

                    <h3>
                        ${outfit.name}
                    </h3>

                </div>

                <button
                    class="outfit-refresh"
                    onclick="generateOutfit()"
                >
                    ↻
                </button>

            </div>


            <div class="outfit-items">

                ${html}

            </div>


            <div class="outfit-total">

                <span>
                    ESTIMATED TOTAL
                </span>

                <strong>
                    ${formatRupiah(total)}
                </strong>

            </div>

        </div>

    `;


    result.classList.add("show");

}


/* =====================================================
   WHATSAPP
===================================================== */

function openWhatsApp(number, message) {

    const url =
        "https://wa.me/" +
        number +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   EMERGENCY CALL
===================================================== */

function openEmergency() {

    openModal(`

        <div style="
            text-align:center;
        ">

            <div style="
                font-size:45px;
                margin-bottom:12px;
            ">
                🐺
            </div>

            <h2>
                LupCall Emergency
            </h2>

            <p>
                Butuh bantuan sekarang?
                Pilih layanan yang kamu butuhkan.
            </p>

            <button
                class="modal-action"
                onclick="
                    closeModal();
                    openPage('repairPage');
                "
            >
                🔧 Bengkel Darurat
            </button>

            <button
                class="modal-action"
                onclick="
                    closeModal();
                    openPage('ridePage');
                "
            >
                🚗 Antar Jemput
            </button>

        </div>

    `);

}


/* =====================================================
   MODAL
===================================================== */

function openModal(content) {

    const overlay =
        document.getElementById(
            "modalOverlay"
        );

    const modalContent =
        document.getElementById(
            "modalContent"
        );


    modalContent.innerHTML =
        content;


    overlay.classList.add("show");

}


function closeModal(event) {

    if (
        event &&
        event.target !== event.currentTarget
    ) {
        return;
    }


    document
        .getElementById("modalOverlay")
        .classList.remove("show");

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateSavings();

        renderRepair();

        renderDrivers("temcy");

        renderFood();

        renderFashion();

        setupFashionTabs();

    }
);