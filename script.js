// Language translations
const translations = {
  en: {
    hero_h1: "HOW MUCH MONEY ARE YOU LOSING ON IRRIGATION THAT DOESN'T WORK?",
    hero_h2: "We enable agriculture in impossible places.",
    cta_primary: "Calculate My Losses",
    nav_about: "Who we are",
    nav_features: "Solutions",
    nav_cta: "Get Started",
    nav_contact: "Contact",
    about_title: "Who we are",
    about_copy: "At UltraCropCare®, we design, manufacture, and integrate our own robotics, software, and irrigation modules built to operate where conventional solutions fail. We've reinvented irrigation to be 10× more durable, portable, and cost-effective in extreme environments.",
    about_bullet1: "+40% profitability per hectare.",
    about_bullet2: "↓ 70% irrigation failures vs. traditional systems.",
    about_bullet3: "↓ 90% infrastructure required.",
    about_bullet4: "12-month return on investment.",
    features_title: "How Can We Help?",
    feature1_title: "Immediate Diagnosis",
    feature1_desc: "We go on-site, capture live data, and show you exactly how much you're losing today.",
    feature2_title: "Smart Irrigation without Infrastructure",
    feature2_desc: "Mobile, feather-light, resilient components — no grid power, no connectivity needed.",
    feature3_title: "Total Control & Customized Reports",
    feature3_desc: "Clear dashboards that guide daily operations and management decisions.",
    cta_title: "We Are Looking for You",
    cta_copy: "If you keep struggling with your irrigation, you're losing money every day. Do you want to know how much you're losing by not having ARES? We'll show it to you — no strings attached.",
    cta_subcopy: "New productions • Pilot productions • Research centres • Desert farmers • Intensive cultivation in hydroponics, greenhouses, open fields.",
    cta_button: "Book My Free Diagnosis",
    contact_title: "Let's talk.",
    contact_name: "Patricia Arias Acosta",
    contact_phone: "📞 +56 9 9580 0313 (WhatsApp)",
    contact_email: "✉️ patricio.arias@ultracropcare.com",
    contact_website: "🌐 www.ultracropcare.com",
    footer_copyright: "Copyright UltraCropCare® 2025",
    footer_privacy: "Privacy",
    footer_imprint: "Imprint",
    whatsapp_tooltip: "Chat now",
    language_switch: "🇪🇸 Español",
    meta_title: "ARES — Agricultural Resilient Systems by UltraCropCare®",
    meta_description: "10× more durable smart irrigation for extreme environments. Diagnose your losses in minutes and farm where others can't."
  },
  es: {
    hero_h1: "¿CUÁNTO DINERO PIERDES EN UN RIEGO QUE NO FUNCIONA?",
    hero_h2: "Hacemos posible la agricultura en lugares imposibles.",
    cta_primary: "Calcula tus Pérdidas",
    nav_about: "Quiénes somos",
    nav_features: "Soluciones",
    nav_cta: "Comenzar",
    nav_contact: "Contacto",
    about_title: "Quiénes somos",
    about_copy: "En UltraCropCare®, diseñamos, fabricamos e integramos nuestra propia robótica, software y módulos de riego construidos para operar donde las soluciones convencionales fallan. Hemos reinventado el riego para que sea 10 veces más duradero, portátil y rentable en entornos extremos.",
    about_bullet1: "+40% de rentabilidad por hectárea.",
    about_bullet2: "↓ 70% fallos de riego vs. sistemas tradicionales.",
    about_bullet3: "↓ 90% infraestructura requerida.",
    about_bullet4: "Retorno de inversión en 12 meses.",
    features_title: "¿Cómo podemos ayudarte?",
    feature1_title: "Diagnóstico Inmediato",
    feature1_desc: "Vamos al sitio, capturamos datos en vivo y te mostramos exactamente cuánto estás perdiendo hoy.",
    feature2_title: "Riego Inteligente sin Infraestructura",
    feature2_desc: "Componentes móviles, ultraligeros y resistentes — sin necesidad de energía de red ni conectividad.",
    feature3_title: "Control Total e Informes Personalizados",
    feature3_desc: "Paneles claros que guían las operaciones diarias y las decisiones de gestión.",
    cta_title: "Te estamos buscando",
    cta_copy: "Si sigues luchando con tu riego, estás perdiendo dinero cada día. ¿Quieres saber cuánto estás perdiendo por no tener ARES? Te lo mostraremos — sin compromiso.",
    cta_subcopy: "Nuevas producciones • Producciones piloto • Centros de investigación • Agricultores del desierto • Cultivo intensivo en hidroponía, invernaderos, campos abiertos.",
    cta_button: "Reserva Mi Diagnóstico Gratuito",
    contact_title: "Hablemos.",
    contact_name: "Patricia Arias Acosta",
    contact_phone: "📞 +56 9 9580 0313 (WhatsApp)",
    contact_email: "✉️ patricio.arias@ultracropcare.com",
    contact_website: "🌐 www.ultracropcare.com",
    footer_copyright: "Copyright UltraCropCare® 2025",
    footer_privacy: "Privacidad",
    footer_imprint: "Aviso Legal",
    whatsapp_tooltip: "Chatear ahora",
    language_switch: "🇬🇧 English",
    meta_title: "ARES — Sistemas Agrícolas Resilientes por UltraCropCare®",
    meta_description: "Riego inteligente 10 veces más duradero para entornos extremos. Diagnostica tus pérdidas en minutos y cultiva donde otros no pueden."
  }
};

// DOM Elements
const languageButton = document.getElementById('language-button');
const navbar = document.querySelector('.navbar');
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const sections = document.querySelectorAll('section');

// Current language
let currentLanguage = 'en';

// Function to change language
function changeLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  
  // Update language button text
  languageButton.textContent = translations[currentLanguage].language_switch;
  
  // Update page title and meta description
  document.title = translations[currentLanguage].meta_title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', translations[currentLanguage].meta_description);
  }
  
  // Update all text elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // Update specific elements
  document.querySelector('.hero-title').textContent = translations[currentLanguage].hero_h1;
  document.querySelector('.hero-subtitle').textContent = translations[currentLanguage].hero_h2;
  document.querySelector('.cta-button').textContent = translations[currentLanguage].cta_primary;
  
  // Navigation links
  document.querySelectorAll('.nav-link')[0].textContent = translations[currentLanguage].nav_about;
  document.querySelectorAll('.nav-link')[1].textContent = translations[currentLanguage].nav_features;
  document.querySelectorAll('.nav-link')[2].textContent = translations[currentLanguage].nav_cta;
  document.querySelectorAll('.nav-link')[3].textContent = translations[currentLanguage].nav_contact;
  
  // Mobile navigation links
  document.querySelectorAll('.mobile-link')[0].textContent = translations[currentLanguage].nav_about;
  document.querySelectorAll('.mobile-link')[1].textContent = translations[currentLanguage].nav_features;
  document.querySelectorAll('.mobile-link')[2].textContent = translations[currentLanguage].nav_cta;
  document.querySelectorAll('.mobile-link')[3].textContent = translations[currentLanguage].nav_contact;
  
  // About section
  document.querySelector('#about .section-title').textContent = translations[currentLanguage].about_title;
  document.querySelector('.about-description').textContent = translations[currentLanguage].about_copy;
  document.querySelectorAll('.value-list li')[0].innerHTML = `<span class="check-icon">✓</span> ${translations[currentLanguage].about_bullet1}`;
  document.querySelectorAll('.value-list li')[1].innerHTML = `<span class="check-icon">✓</span> ${translations[currentLanguage].about_bullet2}`;
  document.querySelectorAll('.value-list li')[2].innerHTML = `<span class="check-icon">✓</span> ${translations[currentLanguage].about_bullet3}`;
  document.querySelectorAll('.value-list li')[3].innerHTML = `<span class="check-icon">✓</span> ${translations[currentLanguage].about_bullet4}`;
  
  // Features section
  document.querySelector('#features .section-title').textContent = translations[currentLanguage].features_title;
  document.querySelectorAll('.feature-title')[0].textContent = translations[currentLanguage].feature1_title;
  document.querySelectorAll('.feature-description')[0].textContent = translations[currentLanguage].feature1_desc;
  document.querySelectorAll('.feature-title')[1].textContent = translations[currentLanguage].feature2_title;
  document.querySelectorAll('.feature-description')[1].textContent = translations[currentLanguage].feature2_desc;
  document.querySelectorAll('.feature-title')[2].textContent = translations[currentLanguage].feature3_title;
  document.querySelectorAll('.feature-description')[2].textContent = translations[currentLanguage].feature3_desc;
  
  // CTA section
  document.querySelector('#cta .section-title').textContent = translations[currentLanguage].cta_title;
  document.querySelector('.cta-text').innerHTML = translations[currentLanguage].cta_copy.replace(
    /\*\*(.*?)\*\*/g, 
    '<strong class="highlight">$1</strong>'
  );
  document.querySelector('.cta-subcopy').textContent = translations[currentLanguage].cta_subcopy;
  document.querySelector('.cta-button-large').textContent = translations[currentLanguage].cta_button;
  
  // Contact section
  document.querySelector('#contact .section-title').textContent = translations[currentLanguage].contact_title;
  document.querySelector('.contact-name').textContent = translations[currentLanguage].contact_name;
  document.querySelectorAll('.contact-item')[0].textContent = translations[currentLanguage].contact_phone;
  document.querySelectorAll('.contact-item')[1].textContent = translations[currentLanguage].contact_email;
  document.querySelectorAll('.contact-item')[2].textContent = translations[currentLanguage].contact_website;
  
  // Footer
  document.querySelector('.copyright').textContent = translations[currentLanguage].footer_copyright;
  document.querySelectorAll('.footer-link')[0].textContent = translations[currentLanguage].footer_privacy;
  document.querySelectorAll('.footer-link')[1].textContent = translations[currentLanguage].footer_imprint;
  
  // WhatsApp tooltip
  document.querySelector('.tooltip').textContent = translations[currentLanguage].whatsapp_tooltip;
  
  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', currentLanguage);
}

// Event Listeners
if (languageButton) {
  languageButton.addEventListener('click', changeLanguage);
}

// Mobile menu toggle
if (mobileMenuButton) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    // Animate hamburger to X
    const spans = mobileMenuButton.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    const spans = mobileMenuButton.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  });
});

// Add fade-up animation to sections
function checkScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (sectionTop < windowHeight * 0.75) {
      section.classList.add('fade-up');
    }
  });
}

// Initial check on page load
window.addEventListener('load', () => {
  checkScroll();
  
  // Add data-i18n attributes to elements
  const elementsToTranslate = document.querySelectorAll('[data-i18n]');
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
});

// Check on scroll
window.addEventListener('scroll', checkScroll);
