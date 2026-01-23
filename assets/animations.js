// Animations avancées pour Great THUG

class AdvancedAnimations {
    constructor() {
        this.particles = [];
        this.fireParticles = [];
        this.isActive = false;
        this.init();
    }

    init() {
        this.createScanlines();
        this.createVignette();
        this.createScreenDistortion();
        this.setupEventListeners();
    }

    // Création des scanlines
    createScanlines() {
        const scanlines = document.createElement('div');
        scanlines.className = 'scanlines';
        document.body.appendChild(scanlines);
    }

    // Création de la vignette
    createVignette() {
        const vignette = document.createElement('div');
        vignette.className = 'vignette';
        document.body.appendChild(vignette);
    }

    // Création de la distorsion d'écran
    createScreenDistortion() {
        const distortion = document.createElement('div');
        distortion.className = 'screen-distortion';
        document.body.appendChild(distortion);
    }

    // Configuration des écouteurs d'événements
    setupEventListeners() {
        // Effet de parallaxe au mouvement de la souris
        document.addEventListener('mousemove', (e) => {
            this.handleMouseMove(e);
        });

        // Effet de clic avec onde de choc
        document.addEventListener('click', (e) => {
            this.createShockwave(e);
        });

        // Effet de frappe au clavier
        document.addEventListener('keydown', (e) => {
            this.handleKeyPress(e);
        });
    }

    // Gestion du mouvement de la souris
    handleMouseMove(e) {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (clientX - centerX) / centerX * 10;
        const moveY = (clientY - centerY) / centerY * 10;

        // Effet de parallaxe sur le contenu
        const content = document.querySelector('.content');
        if (content) {
            content.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }

        // Création de particules de traînée
        this.createTrailParticle(clientX, clientY);
    }

    // Création de particules de traînée
    createTrailParticle(x, y) {
        if (!this.isActive) return;

        const particle = document.createElement('div');
        particle.className = 'advanced-particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.animationDuration = (Math.random() * 2 + 1) + 's';
        
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 3000);
    }

    // Création d'onde de choc
    createShockwave(e) {
        const shockwave = document.createElement('div');
        shockwave.style.position = 'fixed';
        shockwave.style.left = e.clientX + 'px';
        shockwave.style.top = e.clientY + 'px';
        shockwave.style.width = '0px';
        shockwave.style.height = '0px';
        shockwave.style.border = '2px solid rgba(255, 77, 77, 0.8)';
        shockwave.style.borderRadius = '50%';
        shockwave.style.pointerEvents = 'none';
        shockwave.style.zIndex = '9999';
        shockwave.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(shockwave);

        // Animation de l'onde de choc
        let size = 0;
        const animate = () => {
            size += 5;
            shockwave.style.width = size + 'px';
            shockwave.style.height = size + 'px';
            shockwave.style.opacity = 1 - (size / 200);

            if (size < 200) {
                requestAnimationFrame(animate);
            } else {
                shockwave.remove();
            }
        };
        animate();
    }

    // Gestion des frappes de clavier
    handleKeyPress(e) {
        // Effet de vibration sur les touches importantes
        if (['Enter', 'Space', 'Escape'].includes(e.code)) {
            document.body.classList.add('vibrate');
            setTimeout(() => {
                document.body.classList.remove('vibrate');
            }, 300);
        }
    }

    // Démarrage du système de particules de feu
    startFireParticles() {
        this.isActive = true;
        setInterval(() => {
            this.createFireParticle();
        }, 200);
    }

    // Création de particules de feu
    createFireParticle() {
        if (!this.isActive) return;

        const particle = document.createElement('div');
        particle.className = 'fire-particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.animationDuration = (Math.random() * 2 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 4000);
    }

    // Animation de texte holographique
    animateHolographicText(element) {
        element.classList.add('holographic');
        setTimeout(() => {
            element.classList.remove('holographic');
        }, 3000);
    }

    // Animation de glitch
    animateGlitch(element) {
        element.classList.add('glitch');
        element.setAttribute('data-text', element.textContent);
        setTimeout(() => {
            element.classList.remove('glitch');
        }, 2000);
    }

    // Animation de néon
    animateNeon(element) {
        element.classList.add('neon-text');
        setTimeout(() => {
            element.classList.remove('neon-text');
        }, 3000);
    }

    // Animation de texte 3D
    animate3DText(element) {
        element.classList.add('text-3d');
        setTimeout(() => {
            element.classList.remove('text-3d');
        }, 2000);
    }

    // Animation de morphing
    animateMorphing(element) {
        element.classList.add('morph-button');
        setTimeout(() => {
            element.classList.remove('morph-button');
        }, 1000);
    }

    // Animation de distorsion au survol
    animateDistortion(element) {
        element.classList.add('distort-on-hover');
    }

    // Animation de pulsation importante
    animatePulseImportant(element) {
        element.classList.add('pulse-important');
        setTimeout(() => {
            element.classList.remove('pulse-important');
        }, 2000);
    }

    // Animation de texte qui brille
    animateShineText(element) {
        element.classList.add('shine-text');
        setTimeout(() => {
            element.classList.remove('shine-text');
        }, 1500);
    }

    // Animation de glassmorphism
    animateGlass(element) {
        element.classList.add('glass');
        setTimeout(() => {
            element.classList.remove('glass');
        }, 2000);
    }

    // Animation de texte qui tape
    animateTypingEffect(element) {
        element.classList.add('typing-effect');
        setTimeout(() => {
            element.classList.remove('typing-effect');
        }, 3000);
    }

    // Arrêt de toutes les animations
    stopAllAnimations() {
        this.isActive = false;
        this.particles.forEach(particle => particle.remove());
        this.fireParticles.forEach(particle => particle.remove());
        this.particles = [];
        this.fireParticles = [];
    }

    // Animation de séquence complète
    playFullSequence() {
        const title = document.getElementById('main-title');
        const citation = document.getElementById('citation-text');
        const avatar = document.querySelector('.avatar');

        if (title) {
            setTimeout(() => this.animateHolographicText(title), 1000);
            setTimeout(() => this.animateGlitch(title), 4000);
            setTimeout(() => this.animateNeon(title), 7000);
        }

        if (citation) {
            setTimeout(() => this.animateShineText(citation), 2000);
            setTimeout(() => this.animate3DText(citation), 5000);
        }

        if (avatar) {
            setTimeout(() => this.animatePulseImportant(avatar), 3000);
        }

        // Démarrage des particules de feu
        setTimeout(() => {
            this.startFireParticles();
        }, 2000);
    }
}

// Initialisation des animations avancées
let advancedAnimations;

// Fonction d'initialisation
function initAdvancedAnimations() {
    advancedAnimations = new AdvancedAnimations();
}

// Fonction pour démarrer les animations
function startAdvancedAnimations() {
    if (advancedAnimations) {
        advancedAnimations.playFullSequence();
    }
}

// Fonction pour arrêter les animations
function stopAdvancedAnimations() {
    if (advancedAnimations) {
        advancedAnimations.stopAllAnimations();
    }
}

// Export pour utilisation dans le HTML principal
window.AdvancedAnimations = AdvancedAnimations;
window.initAdvancedAnimations = initAdvancedAnimations;
window.startAdvancedAnimations = startAdvancedAnimations;
window.stopAdvancedAnimations = stopAdvancedAnimations;
