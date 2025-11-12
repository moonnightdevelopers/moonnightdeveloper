// navbar.js - Global Navbar Styles and Functionality

// Navbar Styles
const navbarStyles = `
/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #1C1B1F;
    background-color: #fef2f2;
    font-size: 16px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Main content area */
.main-content {
    flex: 1;
    padding: 40px 20px;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
}

/* Blog specific styles */
.blog-container {
    background: white;
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

.blog-title {
    font-size: 2.5rem;
    color: #1c3974;
    margin-bottom: 20px;
    text-align: center;
}

.blog-content {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
}

.blog-content p {
    margin-bottom: 20px;
}

/* Header Styles */
.header {
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 20;
    padding: 12px 0;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.creator-info {
    display: flex;
    align-items: center;
    gap: 16px;
}

.logo {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background: linear-gradient(135deg, #1c3974, #4a74c7);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    color: white;
    font-size: 18px;
}

.creator-name {
    font-size: 20px;
    font-weight: 700;
}

.creator-name a {
    color: inherit;
    text-decoration: none;
}

.supporter-count {
    font-size: 14px;
    color: #717171;
}

.tabs {
    display: flex;
    gap: 20px;
}

.tab {
    font-size: 14px;
    font-weight: 500;
    padding: 8px;
    color: #1C1B1F;
    text-decoration: none;
    position: relative;
    transition: color 0.2s;
    white-space: nowrap;
}

.tab:hover {
    color: #1c3974;
}

.tab.active {
    color: #1c3974;
}

.tab.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #1c3974;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 16px;
}

.auth-buttons {
    display: flex;
    gap: 12px;
}

.login-btn {
    font-size: 14px;
    color: #1C1B1F;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;
    padding: 8px 16px;
    border-radius: 4px;
}

.login-btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.signup-btn {
    font-size: 14px;
    background-color: #1c3974;
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.signup-btn:hover {
    background-color: #4a74c7;
}

/* Footer Styles */
.footer {
    background-color: #1c3974;
    color: white;
    padding: 40px 0 20px;
    margin-top: auto;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
}

.footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 20px;
}

.footer-link {
    color: white;
    text-decoration: none;
    font-size: 14px;
    transition: opacity 0.2s;
}

.footer-link:hover {
    opacity: 0.8;
}

.footer-divider {
    width: 1px;
    height: 16px;
    background-color: rgba(255, 255, 255, 0.3);
}

.footer-cta h5 {
    font-size: 14px;
    font-weight: 400;
    opacity: 0.8;
}

/* Mobile Menu Toggle */
.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
}

.menu-toggle span {
    display: block;
    height: 3px;
    width: 100%;
    background-color: #1c3974;
    border-radius: 3px;
    transition: all 0.3s ease;
}

/* Menu toggle animation */
.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
}

/* Responsive Styles */
@media (max-width: 1024px) {
    .tabs {
        gap: 15px;
    }
    
    .tab {
        font-size: 13px;
        padding: 6px;
    }
}

@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
    
    .header-container {
        flex-wrap: wrap;
        gap: 16px;
    }

    .creator-info {
        flex: 1;
    }

    .menu-toggle {
        display: flex;
    }

    .tabs {
        display: none;
        flex-direction: column;
        width: 100%;
        background: white;
        position: absolute;
        top: 100%;
        left: 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        padding: 16px 0;
        gap: 0;
    }

    .tabs.active {
        display: flex;
    }

    .tab {
        padding: 12px 20px;
        width: 100%;
        border-bottom: 1px solid #f0f0f0;
    }

    .tab:last-child {
        border-bottom: none;
    }

    .tab.active::after {
        display: none;
    }

    .tab.active {
        background-color: #f0f4ff;
    }

    .auth-buttons {
        display: none;
    }

    .main-content {
        padding: 20px 15px;
    }

    .blog-container {
        padding: 25px;
        margin-top: 10px;
    }

    .blog-title {
        font-size: 2rem;
    }

    .footer-links {
        flex-direction: column;
        gap: 10px;
    }

    .footer-divider {
        display: none;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    body {
        font-size: 16px;
    }
}

@media (min-width: 1025px) {
    body {
        font-size: 18px;
    }
}
`;

// Function to detect current page
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    // Map file names to page keys
    const pageMap = {
        'index.html': 'home',
        'home.html': 'home',
        'about.html': 'about',
        'services.html': 'services',
        'project.html': 'project',
        'blog.html': 'blog',
        'contact.html': 'contact'
    };

    return pageMap[page] || 'home';
}

// Navbar HTML Structure
function createNavbarHTML(currentPage = null) {
    // If no current page provided, detect it automatically
    if (!currentPage) {
        currentPage = getCurrentPage();
    }

    const pages = {
        'home': 'Home',
        'about': 'About',
        'services': 'Services',
        'project': 'Project',
        'blog': 'Blog',
        'contact': 'Contact'
    };

    let tabsHTML = '';
    for (const [key, value] of Object.entries(pages)) {
        const isActive = key === currentPage ? 'active' : '';
        tabsHTML += `<a href="${key === 'home' ? 'index.html' : key + '.html'}" class="tab ${isActive}">${value}</a>`;
    }

    return `
    <header class="header">
        <div class="header-container">
            <div class="creator-info">
                <div class="logo">MND</div>
                <div>
                    <h1 class="creator-name"><a href="index.html">MND</a></h1>
                    <p class="supporter-count">Development</p>
                </div>
            </div>

            <button class="menu-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="tabs">
                ${tabsHTML}
            </nav>

            <div class="auth-buttons">
                <a href="#" class="login-btn">Log in</a>
                <a href="#" class="signup-btn">Sign up</a>
            </div>
        </div>
    </header>
    `;
}

// Navbar Functionality
function initializeNavbar() {
    // Add styles to document
    const styleSheet = document.createElement('style');
    styleSheet.textContent = navbarStyles;
    document.head.appendChild(styleSheet);

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const tabs = document.querySelector('.tabs');

    if (menuToggle && tabs) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            tabs.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.header-container')) {
                tabs.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        // Close mobile menu when clicking on a tab
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', function () {
                tabs.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Handle login/signup buttons
    document.querySelectorAll('.login-btn, .signup-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const isLogin = this.classList.contains('login-btn');
            alert(`This would open the ${isLogin ? 'login' : 'signup'} modal`);
        });
    });

    // Update active tab based on current page
    updateActiveTab();
}

// Function to update active tab
function updateActiveTab() {
    const currentPage = getCurrentPage();
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.classList.remove('active');
        const href = tab.getAttribute('href');
        const tabPage = href.replace('.html', '').replace('index', 'home');

        if (tabPage === currentPage || (currentPage === 'home' && tabPage === 'home')) {
            tab.classList.add('active');
        }
    });
}

// Complete layout setup
function setupPageLayout(currentPage = null) {
    // Add navbar
    const navbarHTML = createNavbarHTML(currentPage);
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);

    // Create main content area if it doesn't exist
    if (!document.querySelector('.main-content')) {
        const mainContent = document.createElement('main');
        mainContent.className = 'main-content';

        // Move existing body content into main content area
        while (document.body.firstChild) {
            mainContent.appendChild(document.body.firstChild);
        }
        document.body.appendChild(mainContent);
    }

    // Add footer
    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-links">
                <a href="services.html" class="footer-link">Services</a>
                <div class="footer-divider"></div>
                <a href="team.html" class="footer-link">Our Team</a>
                <div class="footer-divider"></div>
                <a href="privacy.html" class="footer-link">Privacy Policy</a>
                <div class="footer-divider"></div>
                <a href="terms.html" class="footer-link">Terms of Service</a>
            </div>
            <div class="footer-cta">
                <h5>© Copyright 2025 by MND. All rights reserved!</h5>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Initialize functionality
    initializeNavbar();
}

// Setup blog content function
function setupBlogContent() {
    const blogContainer = document.querySelector('.blog-container');
    if (blogContainer && !blogContainer.innerHTML.trim()) {
        blogContainer.innerHTML = `
            <h1 class="blog-title">Welcome to Our Blog</h1>
            <div class="blog-content">
                <p>This is a sample blog post. Add your content here.</p>
                <p>You can customize this section with your own blog posts, articles, and updates.</p>
            </div>
        `;
    }
}

// Security features - Modified to be less restrictive
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
    // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
    if (
        e.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    ) {
        console.log('Developer tools are disabled on this page');
        return false;
    }
};

// Zoom prevention functionality
class NoZoom {
    constructor() {
        this.init();
    }

    init() {
        this.disableZoom();
        this.addViewportMeta();
    }

    disableZoom() {
        // Prevent zoom on double tap
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (e) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 500) {
                e.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });

        // Prevent zoom on pinch
        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    addViewportMeta() {
        let viewport = document.querySelector('meta[name="viewport"]');
        if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            document.head.appendChild(viewport);
        }
        viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    }
}

function preventZoomEverywhere() {
    document.addEventListener('gesturestart', (e) => e.preventDefault());
    document.addEventListener('gesturechange', (e) => e.preventDefault());
    document.addEventListener('gestureend', (e) => e.preventDefault());
}

function enableMobileZoomPrevention() {
    // Disable elastic scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Force no zoom on load
    setTimeout(() => {
        document.body.style.zoom = "1";
        document.documentElement.style.zoom = "1";
    }, 100);

    // Prevent pull-to-refresh
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // iOS specific fixes
    if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
        enableIOSZoomPrevention();
    }
}

function enableIOSZoomPrevention() {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
        viewport.setAttribute('content',
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover'
        );
    }

    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 500) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    setupPageLayout();
    setupBlogContent();

    // Initialize zoom prevention
    new NoZoom();
    preventZoomEverywhere();

    // Additional mobile-specific fixes
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        enableMobileZoomPrevention();
    }

    // Debug: Log current page for verification
    console.log('Current page detected:', getCurrentPage());
});