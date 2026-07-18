// Multi-Category Electronics & Appliances Database
const database = {
    smartphones: {
        title: "สมาร์ตโฟน",
        defaultItems: ['galaxy-s26-ultra', 'galaxy-s26-plus', 'galaxy-s26'],
        specs: [
            { key: "chip", label: "ชิปเซ็ตประมวลผล" },
            { key: "cpuScore", label: "คะแนนประสิทธิภาพ CPU", isBar: true },
            { key: "camera", label: "ระบบกล้องหลัก" },
            { key: "zoom", label: "คุณสมบัติการซูม" },
            { key: "screen", label: "ขนาดและหน้าจอ" },
            { key: "screenDetail", label: "คุณลักษณะเด่นจอ" },
            { key: "battery", label: "ความจุแบตเตอรี่" },
            { key: "charge", label: "ระบบการชาร์จไฟ" }
        ],
        items: {
            'galaxy-s26-ultra': {
                id: 'galaxy-s26-ultra',
                name: 'Galaxy S26 Ultra',
                chip: 'Snapdragon® 8 Elite Gen 5 (3nm)',
                cpuScore: '100%',
                camera: '200MP + 50MP + 10MP + 12MP',
                zoom: 'Optical 3x / 5x / 10x, Space Zoom 100x',
                screen: '6.8" Privacy AMOLED 2X QHD+ (1-120Hz)',
                screenDetail: 'Corning® Gorilla® Armor, แผ่นกรอง Privacy',
                battery: '5,000 mAh',
                charge: 'ชาร์จเร็วพิเศษ 45W (PD 3.0)',
                basePrice: 46900,
                defaultImage: 'images/s26_ultra.jpg',
                colors: [
                    { name: 'Titanium Gray', hex: '#7c7d80', img: 'images/s26_ultra.jpg' },
                    { name: 'Titanium Black', hex: '#2b2c2e', img: 'images/s26_ultra.jpg' },
                    { name: 'Titanium Violet', hex: '#4f405c', img: 'images/s26_ultra.jpg' }
                ],
                storages: [
                    { size: '256 GB', diff: 0 },
                    { size: '512 GB', diff: 6000 },
                    { size: '1 TB', diff: 14000 }
                ]
            },
            'galaxy-s26-plus': {
                id: 'galaxy-s26-plus',
                name: 'Galaxy S26+',
                chip: 'Snapdragon® 8 Elite (3nm)',
                cpuScore: '88%',
                camera: '50MP + 10MP + 12MP (กล้องสามตัว)',
                zoom: 'ซูมออปติคัล 3x, Digital Zoom 30x',
                screen: '6.7" Dynamic AMOLED 2X QHD+ (1-120Hz)',
                screenDetail: 'กระจกหน้าจอสว่างสูงสุด 2600 nits สู้แดดเลิศ',
                battery: '4,900 mAh',
                charge: 'ชาร์จเร็วพิเศษ 45W',
                basePrice: 38900,
                defaultImage: 'images/s26_plus.jpg',
                colors: [
                    { name: 'Silver Shadow', hex: '#d0d1d4', img: 'images/s26_plus.jpg' },
                    { name: 'Onyx Black', hex: '#28292b', img: 'images/s26_plus.jpg' },
                    { name: 'Rose Gold', hex: '#e0b6b1', img: 'images/s26_pink.jpg' }
                ],
                storages: [
                    { size: '256 GB', diff: 0 },
                    { size: '512 GB', diff: 5000 }
                ]
            },
            'galaxy-s26': {
                id: 'galaxy-s26',
                name: 'Galaxy S26',
                chip: 'Snapdragon® 8 Elite (3nm)',
                cpuScore: '82%',
                camera: '50MP + 10MP + 12MP (กล้องสามตัว)',
                zoom: 'ซูมออปติคัล 3x, Digital Zoom 30x',
                screen: '6.2" Dynamic AMOLED 2X FHD+ (48-120Hz)',
                screenDetail: 'ดีไซน์ขอบบางเป็นพิเศษ ตัวเครื่องน้ำหนักเบา',
                battery: '4,000 mAh',
                charge: 'ชาร์จเร็วพิเศษ 25W',
                basePrice: 30900,
                defaultImage: 'images/s26_pink.jpg',
                colors: [
                    { name: 'Rose Gold', hex: '#e0b6b1', img: 'images/s26_pink.jpg' },
                    { name: 'Silver Shadow', hex: '#d0d1d4', img: 'images/s26_plus.jpg' },
                    { name: 'Onyx Black', hex: '#28292b', img: 'images/s26_pink.jpg' }
                ],
                storages: [
                    { size: '128 GB', diff: -2000 },
                    { size: '256 GB', diff: 0 },
                    { size: '512 GB', diff: 5000 }
                ]
            }
        }
    },
    laptops: {
        title: "แล็ปท็อป",
        defaultItems: ['galaxy-book5-ultra', 'galaxy-book5-pro-360', 'galaxy-book5-pro'],
        specs: [
            { key: "processor", label: "หน่วยประมวลผล (CPU)" },
            { key: "graphics", label: "การ์ดจอ (GPU)" },
            { key: "ram", label: "หน่วยความจำ (RAM)" },
            { key: "cpuScore", label: "คะแนนประสิทธิภาพกราฟิก", isBar: true },
            { key: "screen", label: "ขนาดและประเภทหน้าจอ" },
            { key: "weight", label: "น้ำหนักเครื่อง" },
            { key: "battery", label: "แบตเตอรี่ & ชาร์จไฟ" }
        ],
        items: {
            'galaxy-book5-ultra': {
                id: 'galaxy-book5-ultra',
                name: 'Galaxy Book5 Ultra',
                processor: 'Intel® Core™ Ultra 9 185H (16 Cores)',
                graphics: 'NVIDIA® GeForce RTX™ 4070 (8GB)',
                ram: '32 GB LPDDR5X (7467 Mbps)',
                cpuScore: '100%',
                screen: '16.0" Dynamic AMOLED 2X 3K (120Hz, Touch)',
                weight: '1.86 kg (ความหนา 16.5 มม.)',
                battery: '76 Wh, ชาร์จเร็ว USB-C 140W',
                basePrice: 89900,
                defaultImage: 'images/galaxy_book5.jpg',
                colors: [
                    { name: 'Titanium Gray', hex: '#7c7d80', img: 'images/galaxy_book5.jpg' }
                ],
                storages: [
                    { size: '1 TB SSD', diff: 0 },
                    { size: '2 TB SSD', diff: 12000 }
                ]
            },
            'galaxy-book5-pro-360': {
                id: 'galaxy-book5-pro-360',
                name: 'Galaxy Book5 Pro 360',
                processor: 'Intel® Core™ Ultra 7 155H (16 Cores)',
                graphics: 'Intel® Arc™ Graphics (Integrated)',
                ram: '16 GB LPDDR5X',
                cpuScore: '60%',
                screen: '16.0" Dynamic AMOLED 2X 3K (หมุนพับจอได้ 360°)',
                weight: '1.66 kg (ความหนา 12.8 มม.)',
                battery: '76 Wh, ชาร์จเร็ว USB-C 65W',
                basePrice: 62900,
                defaultImage: 'images/galaxy_book5.jpg',
                colors: [
                    { name: 'Silver Shadow', hex: '#d0d1d4', img: 'images/galaxy_book5.jpg' }
                ],
                storages: [
                    { size: '512 GB SSD', diff: 0 },
                    { size: '1 TB SSD', diff: 6000 }
                ]
            },
            'galaxy-book5-pro': {
                id: 'galaxy-book5-pro',
                name: 'Galaxy Book5 Pro',
                processor: 'Intel® Core™ Ultra 5 125H (14 Cores)',
                graphics: 'Intel® Arc™ Graphics (Integrated)',
                ram: '16 GB LPDDR5X',
                cpuScore: '48%',
                screen: '14.0" Dynamic AMOLED 2X 3K (120Hz, Touch)',
                weight: '1.23 kg (ความหนา 11.6 มม.)',
                battery: '63 Wh, ชาร์จเร็ว USB-C 65W',
                basePrice: 49900,
                defaultImage: 'images/galaxy_book5.jpg',
                colors: [
                    { name: 'Titanium Gray', hex: '#7c7d80', img: 'images/galaxy_book5.jpg' }
                ],
                storages: [
                    { size: '512 GB SSD', diff: 0 }
                ]
            }
        }
    },
    tablets: {
        title: "แท็บเล็ต",
        defaultItems: ['galaxy-tab-s10-ultra', 'galaxy-tab-s10-plus', 'galaxy-tab-s10-fe'],
        specs: [
            { key: "processor", label: "ชิปประมวลผลหลัก" },
            { key: "screen", label: "ขนาดและประเภทหน้าจอ" },
            { key: "spen", label: "การตอบสนองปากกา S Pen" },
            { key: "cpuScore", label: "คะแนนประสิทธิภาพประมวลผล", isBar: true },
            { key: "camera", label: "กล้องถ่ายภาพ" },
            { key: "weight", label: "น้ำหนักเครื่อง" },
            { key: "battery", label: "ความจุแบตเตอรี่" }
        ],
        items: {
            'galaxy-tab-s10-ultra': {
                id: 'galaxy-tab-s10-ultra',
                name: 'Galaxy Tab S10 Ultra',
                processor: 'MediaTek Dimensity 9300+ (4nm)',
                screen: '14.6" Dynamic AMOLED 2X (120Hz)',
                spen: 'รองรับระดับดีเยี่ยม (มี S Pen แถมฟรีในกล่อง)',
                cpuScore: '95%',
                camera: 'หลังคู่ 13MP+8MP / หน้าคู่ 12MP+12MP',
                weight: '718 กรัม (บางเพียง 5.4 มม.)',
                battery: '11,200 mAh (ชาร์จเร็ว 45W)',
                basePrice: 43900,
                defaultImage: 'images/galaxy_tab.jpg',
                colors: [
                    { name: 'Titanium Gray', hex: '#7c7d80', img: 'images/galaxy_tab.jpg' },
                    { name: 'Silver Shadow', hex: '#d0d1d4', img: 'images/galaxy_tab.jpg' }
                ],
                storages: [
                    { size: '256 GB (Wi-Fi)', diff: 0 },
                    { size: '512 GB (Wi-Fi)', diff: 6000 },
                    { size: '256 GB (5G)', diff: 6000 },
                    { size: '512 GB (5G)', diff: 12000 }
                ]
            },
            'galaxy-tab-s10-plus': {
                id: 'galaxy-tab-s10-plus',
                name: 'Galaxy Tab S10+',
                processor: 'MediaTek Dimensity 9300+ (4nm)',
                screen: '12.4" Dynamic AMOLED 2X (120Hz)',
                spen: 'รองรับดีเยี่ยม (มี S Pen แถมฟรีในกล่อง)',
                cpuScore: '90%',
                camera: 'หลังคู่ 13MP+8MP / หน้าเดี่ยว 12MP',
                weight: '571 กรัม (บาง 5.6 มม.)',
                battery: '10,090 mAh (ชาร์จเร็ว 45W)',
                basePrice: 36900,
                defaultImage: 'images/galaxy_tab.jpg',
                colors: [
                    { name: 'Titanium Gray', hex: '#7c7d80', img: 'images/galaxy_tab.jpg' }
                ],
                storages: [
                    { size: '256 GB (Wi-Fi)', diff: 0 },
                    { size: '256 GB (5G)', diff: 6000 }
                ]
            },
            'galaxy-tab-s10-fe': {
                id: 'galaxy-tab-s10-fe',
                name: 'Galaxy Tab S10 FE',
                processor: 'Exynos 1380 (5nm)',
                screen: '10.9" IPS LCD (90Hz)',
                spen: 'รองรับปกติ (มี S Pen แถมฟรีในกล่อง)',
                cpuScore: '55%',
                camera: 'หลังเดี่ยว 8MP / หน้าเดี่ยว 12MP',
                weight: '520 กรัม',
                battery: '8,000 mAh (ชาร์จเร็ว 15W)',
                basePrice: 19900,
                defaultImage: 'images/galaxy_tab.jpg',
                colors: [
                    { name: 'Silver Shadow', hex: '#d0d1d4', img: 'images/galaxy_tab.jpg' },
                    { name: 'Rose Gold', hex: '#e0b6b1', img: 'images/galaxy_tab.jpg' }
                ],
                storages: [
                    { size: '128 GB (Wi-Fi)', diff: 0 },
                    { size: '256 GB (Wi-Fi)', diff: 3500 },
                    { size: '128 GB (5G)', diff: 4000 }
                ]
            }
        }
    },
    appliances: {
        title: "เครื่องใช้ไฟฟ้า",
        defaultItems: ['galaxy-fridge', 'galaxy-washer', 'galaxy-tv'],
        specs: [
            { key: "capacity", label: "ความจุ / ขนาดจอ" },
            { key: "features", label: "ฟังก์ชันเด่นอัจฉริยะ" },
            { key: "energy", label: "การประหยัดพลังงาน" },
            { key: "cpuScore", label: "ดัชนีคะแนน Smart AI", isBar: true },
            { key: "dimensions", label: "ขนาดมิติตัวเครื่อง" },
            { key: "weight", label: "น้ำหนักเครื่อง" },
            { key: "warranty", label: "ระยะเวลารับประกัน" }
        ],
        items: {
            'galaxy-fridge': {
                id: 'galaxy-fridge',
                name: 'Family Hub Refrigerator',
                capacity: '22 คิว (615 ลิตร)',
                features: 'หน้าจอสัมผัส 32 นิ้ว, กล้องตรวจเช็คอาหารภายในตู้เย็น, จัดการโน้ตและสูตรอาหาร',
                energy: 'AI Energy Mode ประหยัดไฟขึ้น 15% (ประหยัดไฟเบอร์ 5 ระดับ 3 ดาว)',
                cpuScore: '96%',
                dimensions: '91.2 x 178 x 73 cm',
                weight: '142 kg',
                warranty: 'คอมเพรสเซอร์อินเวอร์เตอร์รับประกัน 20 ปี',
                basePrice: 59900,
                defaultImage: 'images/galaxy_fridge.jpg',
                colors: [
                    { name: 'Titanium Silver', hex: '#b8b9be', img: 'images/galaxy_fridge.jpg' }
                ],
                storages: [
                    { size: '22 คิว (2 ประตู)', diff: 0 },
                    { size: '28 คิว (4 ประตู)', diff: 18000 }
                ]
            },
            'galaxy-washer': {
                id: 'galaxy-washer',
                name: 'AI Ecobubble Washer',
                capacity: 'ซัก 12 kg / อบ 8 kg',
                features: 'AI Wash คำนวณปริมาณน้ำ & น้ำยาอัตโนมัติ, สั่งงานผ่าน SmartThings',
                energy: 'ประหยัดไฟเบอร์ 5 ระดับ 3 ดาว (ลดใช้พลังงานด้วย AI 70%)',
                cpuScore: '92%',
                dimensions: '60 x 85 x 65 cm',
                weight: '80 kg',
                warranty: 'มอเตอร์ DIT รับประกันนาน 20 ปี',
                basePrice: 28900,
                defaultImage: 'images/galaxy_washer.jpg',
                colors: [
                    { name: 'Charcoal Gray', hex: '#3a3c42', img: 'images/galaxy_washer.jpg' },
                    { name: 'Classic White', hex: '#f0f0f2', img: 'images/galaxy_washer.jpg' }
                ],
                storages: [
                    { size: 'ซัก 12kg / อบ 8kg', diff: 0 },
                    { size: 'ซัก 16kg / อบ 10kg', diff: 7000 }
                ]
            },
            'galaxy-tv': {
                id: 'galaxy-tv',
                name: 'Neo QLED 8K Smart TV',
                capacity: '75 นิ้ว (เฉลียงหน้าจอ)',
                features: 'ความละเอียด 8K, ชิป NQ8 AI Gen 3, ระบบเสียง Dolby Atmos 3D',
                energy: 'Eco Sensor ปรับลดแสงจออัจฉริยะเพื่อประหยัดไฟ',
                cpuScore: '98%',
                dimensions: '166.8 x 95.5 x 1.7 cm',
                weight: '43 kg',
                warranty: 'รับประกันแผงหน้าจอและตัวเครื่อง 3 ปี',
                basePrice: 79900,
                defaultImage: 'images/galaxy_tv.jpg',
                colors: [
                    { name: 'Titanium Silver', hex: '#b8b9be', img: 'images/galaxy_tv.jpg' }
                ],
                storages: [
                    { size: '65 นิ้ว', diff: -15000 },
                    { size: '75 นิ้ว', diff: 0 },
                    { size: '85 นิ้ว', diff: 30000 }
                ]
            }
        }
    }
};

// Current active category
let currentCategory = 'smartphones';

// Initial state of comparison columns for the active category
const comparisonState = {
    1: '',
    2: '',
    3: ''
};

// Colors selected for each column
const selectedColors = {
    1: '',
    2: '',
    3: ''
};

// Page load initialization
window.addEventListener('DOMContentLoaded', () => {
    // Switch to default category to populate all values
    switchCategory('smartphones');

    // Initial Zoom/Angle sliders setup
    handleZoomSlider(1);
    handleAngleSlider(0);

    // Setup 3D viewer interactive dragging
    setup3DInteraction();
    select3DProduct('fridge');
});

// Switch Category (Smartphones, Laptops, Tablets, Appliances)
function switchCategory(catId) {
    if (!database[catId]) return;
    
    currentCategory = catId;

    // Update Category Selector Buttons
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.getElementById(`tab-${catId}`);
    if (activeTab) activeTab.classList.add('active');

    // Set Default Items for this category
    comparisonState[1] = database[catId].defaultItems[0];
    comparisonState[2] = database[catId].defaultItems[1];
    comparisonState[3] = database[catId].defaultItems[2];

    // Populate dropdowns with current category items
    populateDropdowns();

    // Select the values in select elements
    document.getElementById('select-device-1').value = comparisonState[1];
    document.getElementById('select-device-2').value = comparisonState[2];
    document.getElementById('select-device-3').value = comparisonState[3];

    // Re-render Dynamic Specs Table structure
    renderSpecsTable();

    // Trigger update for each column to populate data
    updateComparison(1);
    updateComparison(2);
    updateComparison(3);

    // Update Hero section preview based on category
    updateHeroPreview(catId);
}

// Populate Select Dropdowns based on active category
function populateDropdowns() {
    const selects = [
        document.getElementById('select-device-1'),
        document.getElementById('select-device-2'),
        document.getElementById('select-device-3')
    ];

    selects.forEach((select) => {
        select.innerHTML = '';
        Object.values(database[currentCategory].items).forEach((device) => {
            const option = document.createElement('option');
            option.value = device.id;
            option.textContent = device.name;
            select.appendChild(option);
        });
    });
}

// Re-render specs rows in comparative table dynamically
function renderSpecsTable() {
    const container = document.getElementById('spec-table-container');
    if (!container) return;

    container.innerHTML = '';
    const specs = database[currentCategory].specs;

    specs.forEach((spec) => {
        const row = document.createElement('div');
        row.className = 'spec-row';
        if (spec.isBar) {
            row.classList.add('performance-row');
        }

        // Add Label Column
        const label = document.createElement('div');
        label.className = 'spec-label';
        label.textContent = spec.label;
        row.appendChild(label);

        // Add 3 Value Columns
        for (let i = 1; i <= 3; i++) {
            const valDiv = document.createElement('div');
            valDiv.className = 'spec-val';
            
            if (spec.isBar) {
                valDiv.innerHTML = `
                    <div class="perf-bar-wrapper">
                        <span id="perf-${spec.key}-num-${i}">0%</span>
                        <div class="perf-bar"><div class="perf-bar-fill" id="perf-${spec.key}-bar-${i}"></div></div>
                    </div>
                `;
            } else {
                valDiv.id = `spec-${spec.key}-${i}`;
            }
            row.appendChild(valDiv);
        }

        container.appendChild(row);
    });
}

// Update Hero image and texts based on active category
function updateHeroPreview(catId) {
    const heroImg = document.getElementById('hero-showcase-img');
    const heroLabel = document.getElementById('hero-showcase-label');
    if (!heroImg || !heroLabel) return;

    if (catId === 'smartphones') {
        heroImg.src = 'images/s26_ultra.jpg';
        heroLabel.textContent = 'Galaxy S26 Ultra';
    } else if (catId === 'laptops') {
        heroImg.src = 'images/galaxy_book5.jpg';
        heroLabel.textContent = 'Galaxy Book5 Ultra';
    } else if (catId === 'tablets') {
        heroImg.src = 'images/galaxy_tab.jpg';
        heroLabel.textContent = 'Galaxy Tab S10 Ultra';
    } else if (catId === 'appliances') {
        heroImg.src = 'images/galaxy_fridge.jpg';
        heroLabel.textContent = 'Family Hub Refrigerator';
    }
}

// Update compare column details
function updateComparison(colNum) {
    const select = document.getElementById(`select-device-${colNum}`);
    const deviceId = select.value;
    comparisonState[colNum] = deviceId;

    const device = database[currentCategory].items[deviceId];
    if (!device) return;

    // Set default color
    selectedColors[colNum] = device.colors[0].name;

    // Update Heading Name & Price
    document.getElementById(`name-device-${colNum}`).textContent = device.name;
    document.getElementById(`price-device-${colNum}`).textContent = formatPrice(device.basePrice);

    // Update Image Preview
    const imgEl = document.getElementById(`img-device-${colNum}`);
    imgEl.src = device.defaultImage;
    imgEl.alt = device.name;

    // Update Color Swatches
    const swatchContainer = document.getElementById(`swatches-device-${colNum}`);
    swatchContainer.innerHTML = '';
    device.colors.forEach((color, idx) => {
        const swatch = document.createElement('div');
        swatch.className = `swatch ${idx === 0 ? 'active' : ''}`;
        swatch.style.backgroundColor = color.hex;
        swatch.title = color.name;
        swatch.onclick = () => {
            swatchContainer.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            imgEl.src = color.img;
            selectedColors[colNum] = color.name;
        };
        swatchContainer.appendChild(swatch);
    });

    // Populate Dynamic Specs Rows values
    const specs = database[currentCategory].specs;
    specs.forEach((spec) => {
        if (spec.isBar) {
            // Animate performance bar
            const bar = document.getElementById(`perf-${spec.key}-bar-${colNum}`);
            const num = document.getElementById(`perf-${spec.key}-num-${colNum}`);
            if (bar && num) {
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = device[spec.key];
                    num.textContent = device[spec.key];
                }, 50);
            }
        } else {
            // Standard Text spec
            const el = document.getElementById(`spec-${spec.key}-${colNum}`);
            if (el) {
                el.textContent = device[spec.key] || '-';
            }
        }
    });
}

// Utility function to format numbers to Thai Baht Currency
function formatPrice(number) {
    return '฿' + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/* Buy Configurator Modal Control */
let activeModalDeviceId = '';
let activeModalColor = '';
let activeModalStorage = null; // object {size, diff}

function openBuyModal(deviceId) {
    activeModalDeviceId = deviceId;
    
    // Find device in current category
    let device = database[currentCategory].items[deviceId];
    
    // Fallback: search all categories if not found
    if (!device) {
        Object.values(database).forEach(cat => {
            if (cat.items && cat.items[deviceId]) {
                device = cat.items[deviceId];
            }
        });
    }
    
    if (!device) return;

    // Setup modal elements
    document.getElementById('modal-product-name').textContent = device.name;
    
    // Description: show processor/chip/features
    document.getElementById('modal-product-desc').textContent = device.chip || device.processor || device.features || '';
    
    // Set default image and values
    document.getElementById('modal-product-img').src = device.defaultImage;
    activeModalColor = device.colors[0].name;
    document.getElementById('modal-color-name').textContent = activeModalColor;

    // Build Colors Swatch Grid in Modal
    const colorGrid = document.getElementById('modal-color-options');
    colorGrid.innerHTML = '';
    device.colors.forEach((color, idx) => {
        const swatch = document.createElement('div');
        swatch.className = `modal-color-swatch ${idx === 0 ? 'active' : ''}`;
        swatch.style.backgroundColor = color.hex;
        swatch.onclick = () => {
            colorGrid.querySelectorAll('.modal-color-swatch').forEach(s => s.classList.remove('active'));
            swatch.classList.add('active');
            activeModalColor = color.name;
            document.getElementById('modal-color-name').textContent = color.name;
            document.getElementById('modal-product-img').src = color.img;
        };
        colorGrid.appendChild(swatch);
    });

    // Build Storage Options
    const storageGrid = document.getElementById('modal-storage-options');
    storageGrid.innerHTML = '';
    activeModalStorage = device.storages[0];

    device.storages.forEach((storage, idx) => {
        const btn = document.createElement('button');
        btn.className = `btn-storage ${idx === 0 ? 'active' : ''}`;
        
        let diffText = '';
        if (storage.diff > 0) {
            diffText = `+${formatPrice(storage.diff)}`;
        } else if (storage.diff < 0) {
            diffText = `-${formatPrice(Math.abs(storage.diff))}`;
        } else {
            diffText = 'ราคาปกติ';
        }

        btn.innerHTML = `
            <span class="storage-size">${storage.size}</span>
            <span class="storage-diff">${diffText}</span>
        `;
        btn.onclick = () => {
            storageGrid.querySelectorAll('.btn-storage').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeModalStorage = storage;
            calculateTotalPrice();
        };
        storageGrid.appendChild(btn);
    });

    // Build Addons list dynamically based on category
    populateAddonsList();

    // Display modal
    const modal = document.getElementById('buy-modal');
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
    
    calculateTotalPrice();
}

function populateAddonsList() {
    const container = document.getElementById('modal-addons-list');
    if (!container) return;

    container.innerHTML = '';

    // Smart-render addons based on category
    if (currentCategory === 'smartphones') {
        container.innerHTML = `
            <label class="addon-item">
                <input type="checkbox" id="addon-1" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">Samsung Care+ 1 ปี (+฿2,990)</span>
                    <span class="addon-desc">ประกันครอบคลุมตัวเครื่องและหน้าจอแตกทั่วโลก</span>
                </div>
            </label>
            <label class="addon-item">
                <input type="checkbox" id="addon-2" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">นำเครื่องเก่ามาแลกเครื่องใหม่ (Trade-in) ลดเพิ่ม ฿10,000</span>
                    <span class="addon-desc">ลดค่าเครื่องทันทีเมื่อนำมือถือเครื่องเก่าส่งคืนตามระบบ</span>
                </div>
            </label>
            <label class="addon-item checked-disabled">
                <input type="checkbox" checked disabled>
                <div class="addon-details">
                    <span class="addon-title">ของแถมหัวชาร์จเร็ว Power Adapter 45W (ฟรี)</span>
                    <span class="addon-desc">สิทธิพิเศษสำหรับสั่งช้อปปิ้งออนไลน์ที่นี่</span>
                </div>
            </label>
        `;
    } else if (currentCategory === 'laptops') {
        container.innerHTML = `
            <label class="addon-item">
                <input type="checkbox" id="addon-1" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">ขยายระยะเวลาคุ้มครองตัวเครื่องเพิ่มเป็น 2 ปี (+฿4,990)</span>
                    <span class="addon-desc">รับประกันอะไหล่ภายในและตัวเครื่องครอบคลุมกรณีอุบัติเหตุ</span>
                </div>
            </label>
            <label class="addon-item">
                <input type="checkbox" id="addon-2" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">นำแล็ปท็อปเก่ามาเทรดแลกใหม่ (Trade-in) ลดเพิ่ม ฿15,000</span>
                    <span class="addon-desc">รับส่วนลดเพิ่มจากการตรวจรับเครื่องคอมพิวเตอร์เครื่องเดิม</span>
                </div>
            </label>
            <label class="addon-item">
                <input type="checkbox" id="addon-3" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">ชุดซอฟต์แวร์ Microsoft Office 365 Personal (+฿1,990)</span>
                    <span class="addon-desc">สิทธิ์การใช้งาน Word, Excel, PowerPoint แท้นาน 1 ปี</span>
                </div>
            </label>
        `;
    } else if (currentCategory === 'tablets') {
        container.innerHTML = `
            <label class="addon-item">
                <input type="checkbox" id="addon-1" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">Samsung Care+ ประกันเครื่อง 1 ปี (+฿1,990)</span>
                    <span class="addon-desc">ปกป้องหน้าจอแท็บเล็ตขนาดใหญ่อย่างไร้กังวล</span>
                </div>
            </label>
            <label class="addon-item">
                <input type="checkbox" id="addon-2" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">เคสฝาพับพร้อมคีย์บอร์ดเรืองแสง Cover Keyboard (+฿3,990)</span>
                    <span class="addon-desc">เปลี่ยนแท็บเล็ตให้ใช้งานได้สะดวกราวคอมพิวเตอร์</span>
                </div>
            </label>
            <label class="addon-item checked-disabled">
                <input type="checkbox" checked disabled>
                <div class="addon-details">
                    <span class="addon-title">ปากกาเขียนจอ S Pen แถมฟรีในกล่อง</span>
                    <span class="addon-desc">ปากกาอัจฉริยะสำหรับสรรค์สร้างผลงานและจดโน้ต</span>
                </div>
            </label>
        `;
    } else if (currentCategory === 'appliances') {
        container.innerHTML = `
            <label class="addon-item">
                <input type="checkbox" id="addon-1" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">ขยายระยะเวลาการรับประกันสินค้าเพิ่มเป็น 3 ปี (+฿2,990)</span>
                    <span class="addon-desc">คุ้มครองค่าอะไหล่และค่าแรงช่างบริการตรวจซ่อมถึงบ้าน</span>
                </div>
            </label>
            <label class="addon-item">
                <input type="checkbox" id="addon-2" onchange="calculateTotalPrice()">
                <div class="addon-details">
                    <span class="addon-title">บริการขนส่ง ติดตั้งฟรี และเชื่อมต่อแอป SmartThings (+฿1,290)</span>
                    <span class="addon-desc">บริการจากช่างผู้เชี่ยวชาญเพื่อความสะดวกสูงสุด</span>
                </div>
            </label>
            <label class="addon-item checked-disabled">
                <input type="checkbox" checked disabled>
                <div class="addon-details">
                    <span class="addon-title">การรับประกันมอเตอร์ / คอมเพรสเซอร์ อินเวอร์เตอร์ 20 ปี (ฟรี)</span>
                    <span class="addon-desc">รับประกันความทนทานของหัวใจหลักเครื่องใช้ไฟฟ้ายาวนานที่สุด</span>
                </div>
            </label>
        `;
    }
}

function closeBuyModal() {
    const modal = document.getElementById('buy-modal');
    modal.classList.remove('active');
    setTimeout(() => modal.style.display = 'none', 300);
}

// Buy button inside columns trigger this
function buySelectedDevice(colNum) {
    const deviceId = comparisonState[colNum];
    openBuyModal(deviceId);
}

// Calculate Total Price dynamically
function calculateTotalPrice() {
    // Locate device in active category or anywhere in DB
    let device = database[currentCategory].items[activeModalDeviceId];
    if (!device) {
        Object.values(database).forEach(cat => {
            if (cat.items && cat.items[activeModalDeviceId]) {
                device = cat.items[activeModalDeviceId];
            }
        });
    }

    if (!device || !activeModalStorage) return;

    let basePrice = device.basePrice;
    let storageDiff = activeModalStorage.diff;
    let addonsCost = 0;

    const addon1Checked = document.getElementById('addon-1') ? document.getElementById('addon-1').checked : false;
    const addon2Checked = document.getElementById('addon-2') ? document.getElementById('addon-2').checked : false;
    const addon3Checked = document.getElementById('addon-3') ? document.getElementById('addon-3').checked : false;

    // Reset rows display
    const careRow = document.getElementById('summary-care-row');
    const carePriceEl = document.getElementById('summary-care-price');
    const tradeinRow = document.getElementById('summary-tradein-row');

    careRow.style.display = 'none';
    tradeinRow.style.display = 'none';

    // Smartphones Calculations
    if (currentCategory === 'smartphones') {
        if (addon1Checked) {
            addonsCost += 2990;
            careRow.style.display = 'flex';
            carePriceEl.textContent = '+฿2,990.00';
        }
        if (addon2Checked) {
            addonsCost -= 10000;
            tradeinRow.style.display = 'flex';
        }
    } 
    // Laptops Calculations
    else if (currentCategory === 'laptops') {
        let carePrice = 0;
        if (addon1Checked) {
            carePrice += 4990;
        }
        if (addon3Checked) {
            carePrice += 1990;
        }
        
        if (carePrice > 0) {
            addonsCost += carePrice;
            careRow.style.display = 'flex';
            carePriceEl.textContent = `+${formatPrice(carePrice)}`;
        }
        
        if (addon2Checked) {
            addonsCost -= 15000;
            tradeinRow.style.display = 'flex';
            tradeinRow.querySelector('.discount').textContent = '-฿15,000.00';
        }
    }
    // Tablets Calculations
    else if (currentCategory === 'tablets') {
        let carePrice = 0;
        if (addon1Checked) {
            carePrice += 1990;
        }
        if (addon2Checked) {
            carePrice += 3990;
        }

        if (carePrice > 0) {
            addonsCost += carePrice;
            careRow.style.display = 'flex';
            carePriceEl.textContent = `+${formatPrice(carePrice)}`;
        }
    }
    // Appliances Calculations
    else if (currentCategory === 'appliances') {
        let carePrice = 0;
        if (addon1Checked) {
            carePrice += 2990;
        }
        if (addon2Checked) {
            carePrice += 1290;
        }

        if (carePrice > 0) {
            addonsCost += carePrice;
            careRow.style.display = 'flex';
            carePriceEl.textContent = `+${formatPrice(carePrice)}`;
        }
    }

    const totalPrice = basePrice + storageDiff + addonsCost;
    
    // Update labels in summary
    document.getElementById('summary-base-price').textContent = formatPrice(basePrice + storageDiff);
    document.getElementById('summary-total-price').textContent = formatPrice(totalPrice);

    // Monthly installment calculation
    const monthlyPay = Math.round(totalPrice / 10);
    document.getElementById('summary-monthly-pay').textContent = formatPrice(monthlyPay);
}

function submitOrder() {
    let device = database[currentCategory].items[activeModalDeviceId];
    if (!device) {
        Object.values(database).forEach(cat => {
            if (cat.items && cat.items[activeModalDeviceId]) {
                device = cat.items[activeModalDeviceId];
            }
        });
    }

    alert(`🎉 สั่งซื้อเสร็จสมบูรณ์!\nรุ่น: ${device.name}\nความจุ/ขนาด: ${activeModalStorage.size}\nสี: ${activeModalColor}\nราคาจ่ายสุทธิ: ${document.getElementById('summary-total-price').textContent}\nขอบคุณสำหรับคำสั่งซื้อจำลองของคุณ!`);
    closeBuyModal();
}

/* Space Zoom Simulator */
function handleZoomSlider(val) {
    const img = document.getElementById('zoom-bg-img');
    const badge = document.getElementById('zoom-badge');
    if (!img || !badge) return;

    badge.textContent = `${val}.0x`;

    const scale = 1 + (val - 1) * 0.15;
    img.style.transform = `scale(${scale})`;

    // Simulate focus box tracking behavior
    const focusBox = document.querySelector('.viewfinder-focus-box');
    if (val >= 95) {
        img.style.filter = 'blur(0px) contrast(1.05)';
        if (focusBox) focusBox.style.borderColor = '#10b981';
    } else if (val > 40) {
        const blurAmt = Math.min(2.5, (val - 40) * 0.05);
        img.style.filter = `blur(${blurAmt}px) contrast(0.95)`;
        if (focusBox) focusBox.style.borderColor = 'yellow';
    } else {
        img.style.filter = 'blur(0px)';
        if (focusBox) focusBox.style.borderColor = 'var(--accent-cyan)';
    }
}

function setZoom(val) {
    const slider = document.getElementById('zoom-range');
    if (slider) {
        slider.value = val;
        handleZoomSlider(val);
    }
}

/* Privacy Display Simulator */
function handleAngleSlider(val) {
    const phone = document.getElementById('phone-3d');
    const overlay = document.getElementById('privacy-overlay');
    const textVal = document.getElementById('angle-value');
    if (!phone || !overlay || !textVal) return;

    textVal.textContent = `${val}°`;
    phone.style.transform = `rotateY(${val}deg)`;

    const absVal = Math.abs(val);
    
    let opacity = 0;
    if (absVal > 15) {
        opacity = Math.min(0.98, (absVal - 15) / 40);
    }
    
    overlay.style.opacity = opacity;
}

/* FAQ Accordion Toggle */
function toggleFaq(btn) {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-answer');
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = '0px';
    });

    if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
    }
}

/* 3D Product Showcase Simulator Logic */
let active3DProduct = 'fridge';
let rotY = 0;
let rotX = 0;

const products3D = {
    fridge: {
        title: "ตู้เย็นอัจฉริยะ Family Hub",
        desc: "ตู้เย็นขนาดใหญ่สีเงิน Titanium Silver ที่โดดเด่นด้วยหน้าจอทัชสกรีนอัจฉริยะขนาด 32 นิ้วด้านหน้าตัวเครื่องสำหรับจัดการสิ่งของภายในตู้และแอปพลิเคชันควบคุมในบ้าน หมุนเพื่อชมแผงข้างโลหะและประตูขอบด้านหลัง"
    },
    washer: {
        title: "เครื่องซักผ้า AI Ecobubble",
        desc: "เครื่องซักผ้าและอบผ้าแบบฝาหน้า ดีไซน์ทันสมัยสี Charcoal Grey โดดเด่นด้วยประตูถังซักกระจกทรงกลมขนาดใหญ่และแผงควบคุมระบบสัมผัส LED พร้อมระบบหมุนถังซักและขอบมิติตัวเครื่องด้านล่าง"
    },
    tv: {
        title: "สมาร์ตทีวี Neo QLED 8K",
        desc: "สมาร์ตทีวีขนาดยักษ์ 75 นิ้ว ที่มีความบางของกรอบหน้าจอและตัวเครื่องเพียง 1.7 เซนติเมตร (Infinity One Design) หมุนเพื่อตรวจสอบความบางเฉียบของสกรีน ดีไซน์ขาตั้งโลหะ และการจัดวางช่องแผงพอร์ตด้านหลังเครื่อง"
    }
};

function select3DProduct(prodId) {
    if (!products3D[prodId]) return;
    
    active3DProduct = prodId;

    // Update active button state
    document.querySelectorAll('.btn-select-3d').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`btn-3d-${prodId}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Update titles and description texts
    document.getElementById('showcase-3d-title').textContent = products3D[prodId].title;
    document.getElementById('showcase-3d-desc').textContent = products3D[prodId].desc;

    // Reset rotation sliders and variables
    rotY = 0;
    rotX = 0;
    document.getElementById('rot-y').value = 0;
    document.getElementById('rot-x').value = 0;
    document.getElementById('rot-y-val').textContent = '0°';
    document.getElementById('rot-x-val').textContent = '0°';

    // Restructure 3D Model box container
    const box = document.getElementById('model-3d-box');
    box.className = `model-3d ${prodId}`;

    // Populate dynamic inner face structures for 3D simulation
    const frontFace = document.getElementById('face-front');
    frontFace.innerHTML = '';

    if (prodId === 'fridge') {
        frontFace.innerHTML = `
            <div class="fridge-door-gap"></div>
            <div class="fridge-bottom-gap"></div>
            <div class="fridge-screen-mock">
                <div class="fridge-screen-header">SmartThings</div>
                <div class="fridge-screen-content">
                    <i data-lucide="cloud-sun"></i>
                    <span>24°C Sunny<br>Recipes Ready!</span>
                </div>
                <div class="fridge-screen-footer">10:09 AM</div>
            </div>
            <div class="fridge-door-handle"></div>
        `;
        lucide.createIcons();
    } else if (prodId === 'washer') {
        frontFace.innerHTML = `
            <div class="washer-panel">
                <div class="washer-dial"></div>
                <div class="washer-screen">AI WASH 0:42</div>
            </div>
            <div class="washer-door">
                <div class="washer-door-inner"></div>
            </div>
        `;
    } else if (prodId === 'tv') {
        frontFace.innerHTML = `<div class="tv-glowing-screen"></div>`;
    }

    // Trigger update
    rotate3DModel();
}

function rotate3DModel() {
    const box = document.getElementById('model-3d-box');
    const yVal = document.getElementById('rot-y').value;
    const xVal = document.getElementById('rot-x').value;

    document.getElementById('rot-y-val').textContent = `${yVal}°`;
    document.getElementById('rot-x-val').textContent = `${xVal}°`;

    rotY = yVal;
    rotX = xVal;

    box.style.transform = `rotateX(${-rotX}deg) rotateY(${rotY}deg)`;
}

/* Mouse and Touch Drag to Rotate 3D Model directly in Viewport */
function setup3DInteraction() {
    const viewport = document.getElementById('viewport-3d');
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let baseRotY = 0;
    let baseRotX = 0;

    // Mouse events
    viewport.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        baseRotY = parseInt(document.getElementById('rot-y').value);
        baseRotX = parseInt(document.getElementById('rot-x').value);
        viewport.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        // Calculate Y rotation (move horizontally -> Y rotation)
        // Dragging full width of viewport (~500px) corresponds to 180deg change
        let newRotY = baseRotY + (deltaX / 2.5);
        // Clamp Y rotation to -180 to 180 degrees
        if (newRotY > 180) newRotY -= 360;
        if (newRotY < -180) newRotY += 360;

        // Calculate X rotation (move vertically -> X rotation)
        let newRotX = baseRotX + (deltaY / 3);
        // Clamp X rotation to -45 to 45 degrees
        newRotX = Math.max(-45, Math.min(45, newRotX));

        // Update range inputs
        document.getElementById('rot-y').value = Math.round(newRotY);
        document.getElementById('rot-x').value = Math.round(newRotX);

        rotate3DModel();
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            viewport.style.cursor = 'grab';
        }
    });

    // Touch events for mobile support
    viewport.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        baseRotY = parseInt(document.getElementById('rot-y').value);
        baseRotX = parseInt(document.getElementById('rot-x').value);
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;

        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;

        let newRotY = baseRotY + (deltaX / 2.5);
        if (newRotY > 180) newRotY -= 360;
        if (newRotY < -180) newRotY += 360;

        let newRotX = baseRotX + (deltaY / 3);
        newRotX = Math.max(-45, Math.min(45, newRotX));

        document.getElementById('rot-y').value = Math.round(newRotY);
        document.getElementById('rot-x').value = Math.round(newRotX);

        rotate3DModel();
        e.preventDefault(); // prevent scrolling while rotating
    }, { passive: false });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
}
