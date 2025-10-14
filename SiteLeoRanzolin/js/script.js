// ============================================
// CARROSSEL DE IMAGENS
// ============================================
let currentSlideIndex = 1;

// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    showSlide(currentSlideIndex);
    
    // Inicia o auto-play (troca a cada 5 segundos)
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});

// Função para avançar/retroceder slides
function moveSlide(n) {
    showSlide(currentSlideIndex += n);
}

// Função para ir para um slide específico
function currentSlide(n) {
    showSlide(currentSlideIndex = n);
}

// Função principal do carrossel
function showSlide(n) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    // Verifica se os slides existem
    if (!slides || slides.length === 0) {
        console.error('Nenhum slide encontrado! Verifique se as imagens estão na pasta images/');
        return;
    }
    
    // Controla o loop do carrossel
    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }
    
    // Remove a classe active de todos os slides e dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Adiciona active no slide e dot atual
    if (slides[currentSlideIndex - 1]) {
        slides[currentSlideIndex - 1].classList.add('active');
    }
    if (dots[currentSlideIndex - 1]) {
        dots[currentSlideIndex - 1].classList.add('active');
    }
}

// ============================================
// CONTROLE DE TECLADO PARA O CARROSSEL
// ============================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        moveSlide(-1);
    } else if (e.key === 'ArrowRight') {
        moveSlide(1);
    }
});

// ============================================
// NAVEGAÇÃO SUAVE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerOffset = 70; // Altura do header fixo
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// FORMULÁRIO DE NEWSLETTER
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            // Validação básica de email
            if (validarEmail(email)) {
                alert(`✅ Obrigado por se inscrever!\n\nEmail: ${email}\n\nVocê receberá nossas novidades em breve!`);
                emailInput.value = ''; // Limpa o campo
            } else {
                alert('❌ Por favor, insira um email válido!');
            }
        });
    }

    // Efeito visual no campo de email
    if (emailInput) {
        emailInput.addEventListener('focus', function() {
            this.style.borderColor = '#ffc107';
        });
        
        emailInput.addEventListener('blur', function() {
            this.style.borderColor = 'rgba(255,255,255,0.3)';
        });
    }
});

// ============================================
// VALIDAÇÃO DE EMAIL
// ============================================
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ============================================
// EFEITO DE SCROLL NO HEADER
// ============================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset;
    
    if (header) {
        // Adiciona sombra mais forte quando rolar a página
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        }
    }
    
    lastScroll = currentScroll;
});

// ============================================
// ANIMAÇÃO DE ENTRADA DOS CARDS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observa os cards de notícias para animação
    document.querySelectorAll('.noticia-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // Observa os cards informativos também
    document.querySelectorAll('.info-card').forEach(card => {
        observer.observe(card);
    });
});

// ============================================
// DESTAQUE DO LINK ATIVO NO MENU
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// ANIMAÇÃO DOS ÍCONES SOCIAIS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) rotate(360deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
});

// ============================================
// PREVENÇÃO DE SCROLL HORIZONTAL
// ============================================
document.body.style.overflowX = 'hidden';

// ============================================
// LOADING DA PÁGINA
// ============================================
window.addEventListener('load', () => {
    console.log('🏕️ Site Desbravadores Léo Ranzoolin carregado com sucesso!');
    console.log('📍 Desenvolvido para inspirar e formar jovens com valores eternos');
    console.log('✅ Carrossel funcionando perfeitamente!');
    console.log('🎯 Botões das setas totalmente clicáveis!');
    
    // Adiciona classe para indicar que a página foi carregada
    document.body.classList.add('loaded');
});

// ============================================
// FUNÇÃO PARA SCROLL SUAVE AO TOPO
// ============================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// TRATAMENTO DE ERROS GLOBAL
// ============================================
window.addEventListener('error', (e) => {
    console.error('⚠️ Erro detectado:', e.message);
});

// ============================================
// MENU MOBILE (PREPARADO PARA FUTURAS MELHORIAS)
// ============================================
// Quando você quiser adicionar um menu hamburguer para mobile:
/*
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.createElement('button');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '☰';
    menuToggle.style.display = 'none';

    // Adiciona o botão ao nav
    const nav = document.querySelector('nav');
    if (nav) {
        nav.prepend(menuToggle);
    }

    // Função para toggle do menu
    menuToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });

    // Mostra o botão em telas pequenas
    function checkMenuToggle() {
        if (window.innerWidth <= 768) {
            menuToggle.style.display = 'block';
        } else {
            menuToggle.style.display = 'none';
        }
    }

    checkMenuToggle();
    window.addEventListener('resize', checkMenuToggle);
});
*/

// ============================================
// PERFORMANCE - LAZY LOADING DE IMAGENS
// ============================================
// Quando você adicionar mais imagens, use este código:
/*
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});
*/

// ============================================
// FIM DO SCRIPT
// ============================================
console.log('📜 Script carregado e pronto para uso!');