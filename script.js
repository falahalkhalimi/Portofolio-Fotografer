

// ============================================== 
// 1. LOADING ANIMATION
// ============================================== 
window.addEventListener('load', function() {
    setTimeout(function() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }, 1000);
});

// ============================================== 
// 2. PORTFOLIO FILTER FUNCTION
// ============================================== 
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter items with animation
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// ============================================== 
// 3. FORM VALIDATION AND SUBMIT HANDLER
// ============================================== 
function handleSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    let isValid = true;
    
    // Validate Name (minimum 3 characters)
    if (name.length < 3) {
        document.getElementById('name').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('name').classList.remove('is-invalid');
        document.getElementById('name').classList.add('is-valid');
    }
    
    // Validate Email (email pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('is-invalid');
        document.getElementById('email').classList.add('is-valid');
    }
    
    // Validate Phone (minimum 10 digits)
    if (phone.length < 10) {
        document.getElementById('phone').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('phone').classList.remove('is-invalid');
        document.getElementById('phone').classList.add('is-valid');
    }
    
    // Validate Message (minimum 10 characters)
    if (message.length < 10) {
        document.getElementById('message').classList.add('is-invalid');
        isValid = false;
    } else {
        document.getElementById('message').classList.remove('is-invalid');
        document.getElementById('message').classList.add('is-valid');
    }
    
    // If all valid, show success message
    if (isValid) {
        alert('Terima kasih ' + name + '! Pesan Anda telah terkirim.\n\nDetail:\n- Email: ' + email + '\n- Phone: ' + phone + '\n- Layanan: ' + service + '\n\nKami akan menghubungi Anda segera.');
        form.reset();
        // Remove validation classes after submit
        document.querySelectorAll('.is-valid').forEach(el => el.classList.remove('is-valid'));
    } else {
        alert('Mohon lengkapi form dengan benar!');
    }
    
    return false;
}

// ============================================== 
// 4. SMOOTH SCROLL TO TOP
// ============================================== 
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// ============================================== 
// 5. PARALLAX EFFECT ON HERO SECTION
// ============================================== 
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-section');
    
    if (parallax) {
        parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    }
});

// ============================================== 
// 6. NAVBAR ACTIVE LINK HIGHLIGHT
// ============================================== 
document.addEventListener('DOMContentLoaded', function() {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Get all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Remove all active classes and add to current page
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ============================================== 
// 7. ADD ANIMATION ON SCROLL (Fade In Effect)
// ============================================== 
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .portfolio-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Check if element is in viewport
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.card, .portfolio-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Run once on load
    animateOnScroll();
});

// ============================================== 
// 8. REAL-TIME FORM VALIDATION
// ============================================== 
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Real-time validation for name
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            if (this.value.length >= 3) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
            }
        });
    }
    
    // Real-time validation for email
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(this.value)) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
            }
        });
    }
    
    // Real-time validation for phone
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            // Remove non-numeric characters
            this.value = this.value.replace(/[^0-9]/g, '');
            
            if (this.value.length >= 10) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
            }
        });
    }
    
    // Real-time validation for message
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            if (this.value.length >= 10) {
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
            } else {
                this.classList.remove('is-valid');
            }
        });
    }
});

// ============================================== 
// 9. IMAGE LAZY LOADING ENHANCEMENT
// ============================================== 
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });
});

// ============================================== 
// 10. MOBILE MENU AUTO CLOSE
// ============================================== 
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});

// ============================================== 
// 11. CONSOLE LOG - Developer Info
// ============================================== 
console.log('%c Portfolio Fotografer ', 'background: #667eea; color: white; font-size: 20px; padding: 10px;');
console.log('%c Dibuat dengan ❤️ menggunakan HTML, CSS, Bootstrap & JavaScript ', 'background: #34495e; color: white; font-size: 12px; padding: 5px;');