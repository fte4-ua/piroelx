// Categorías de productos
const CATEGORIES = [
    'Bombetas',
    'Bengalas',
    'Petardos',
    'Tracas',
    'Fuentes',
    'Cohetes',
    'Baterías',
    'Trueno',
    'Voladores',
    'Terrestres',
    'Humo',
    'Lotes'
];

// Estructura básica de productos
const products = [
    {
        name: 'Bombeta Granfes',
        price: 2,
        categories: ['Bombetas'],
        image: 'assets/images/bombetas/Bombeta_Granfes_50+10.jpg'
    },
    {
        name: 'Mini Bombetas',
        price: 1,
        categories: ['Bombetas'],
        image: 'assets/images/bombetas/Mini_bombetas.jpg'
    },
    // Añade más productos aquí
];

// Función para renderizar los productos
function renderProducts(selectedCategory = null) {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    const filteredProducts = selectedCategory
        ? products.filter(p => p.categories.includes(selectedCategory))
        : products;

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-categories">
                    ${product.categories.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                </div>
                <p class="product-price">€${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

// Función para crear los filtros de categoría
function createCategoryFilters() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'category-filters';
    
    // Botón para mostrar todos los productos
    const allButton = document.createElement('button');
    allButton.textContent = 'Todos';
    allButton.className = 'filter-button active';
    allButton.onclick = () => {
        setActiveFilter(allButton);
        renderProducts();
    };
    filterContainer.appendChild(allButton);

    // Botón para cada categoría
    CATEGORIES.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'filter-button';
        button.onclick = () => {
            setActiveFilter(button);
            renderProducts(category);
        };
        filterContainer.appendChild(button);
    });

    // Añadir filtros antes de la cuadrícula de productos
    const catalogSection = document.querySelector('.catalog-section');
    catalogSection.insertBefore(filterContainer, document.querySelector('.product-grid'));
}

// Función para marcar el filtro activo
function setActiveFilter(activeButton) {
    document.querySelectorAll('.filter-button').forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    createCategoryFilters();
    renderProducts();
});