// Configuration du site Great THUG
// Modifiez ces valeurs pour personnaliser votre site

const SITE_CONFIG = {
    // Informations personnelles
    title: "Great THUG",
    citation: "I don't seek power - I am power.",
    
    // Couleurs principales (format hexadécimal)
    colors: {
        primary: "#e23535",      // Rouge principal
        secondary: "#ff4d4d",    // Rouge secondaire
        accent: "#ff6b6b",       // Rouge accent
        white: "#ffffff",        // Blanc
        black: "#000000"         // Noir
    },
    
    // Liens sociaux
    socialLinks: {
        github: "https://github.com/paulafredo",
        tiktok: "https://www.tiktok.com/@thug.4ff",
        youtube: "https://www.youtube.com/@thug.4ff",
        discord: "https://discord.gg/BhQk4q3JGJ",
        telegram: "https://t.me/thug4ff"
    },
    
    // Configuration audio
    audio: {
        volume: 0.15,            // Volume par défaut (0.0 à 1.0)
        autoplay: true,          // Lecture automatique
        loop: true               // Lecture en boucle
    },
    
    // Configuration vidéo
    video: {
        autoplay: true,          // Lecture automatique
        muted: true,             // Muet par défaut
        loop: true,              // Lecture en boucle
        playsinline: true        // Lecture inline sur mobile
    },
    
    // Configuration des animations
    animations: {
        enabled: true,           // Activer les animations
        particleCount: 50,       // Nombre de particules
        particleSpeed: 300,      // Vitesse des particules (ms)
        titleAnimationSpeed: 200, // Vitesse d'animation du titre (ms)
        typingSpeed: 100         // Vitesse de frappe (ms)
    },
    
    // Configuration responsive
    responsive: {
        mobileBreakpoint: 768,   // Point de rupture mobile (px)
        tabletBreakpoint: 1024   // Point de rupture tablette (px)
    },
    
    // Messages personnalisés
    messages: {
        intro: "Click to enter",
        loading: "Chargement...",
        errorVideo: "Your browser does not support HTML5 video.",
        errorAudio: "Your browser does not support the audio element."
    },
    
    // Configuration des effets visuels
    effects: {
        scanlines: true,         // Effet de scanlines
        vignette: true,          // Effet de vignette
        distortion: true,        // Effet de distorsion
        particles: true,         // Particules flottantes
        fireParticles: true,     // Particules de feu
        parallax: true,          // Effet de parallaxe
        shockwave: true          // Ondes de choc au clic
    },
    
    // Configuration des animations de texte
    textAnimations: {
        holographic: true,       // Animation holographique
        glitch: true,            // Effet de glitch
        neon: true,              // Effet néon
        typing: true,            // Effet de frappe
        shine: true,             // Effet brillant
        pulse: true              // Effet de pulsation
    }
};

// Fonction pour appliquer la configuration
function applyConfig() {
    // Application du titre
    document.title = SITE_CONFIG.title;
    
    // Application de la citation
    const citationElement = document.getElementById("citation-text");
    if (citationElement) {
        citationElement.textContent = SITE_CONFIG.citation;
    }
    
    // Application du titre principal
    const titleElement = document.getElementById("main-title");
    if (titleElement) {
        titleElement.textContent = SITE_CONFIG.title;
    }
    
    // Application du message d'intro
    const introElement = document.querySelector(".intro-text");
    if (introElement) {
        introElement.textContent = SITE_CONFIG.messages.intro;
    }
    
    // Configuration audio
    const audio = document.getElementById("audio");
    if (audio) {
        audio.volume = SITE_CONFIG.audio.volume;
        audio.loop = SITE_CONFIG.audio.loop;
    }
    
    // Configuration vidéo
    const video = document.getElementById("background");
    if (video) {
        video.autoplay = SITE_CONFIG.video.autoplay;
        video.muted = SITE_CONFIG.video.muted;
        video.loop = SITE_CONFIG.video.loop;
        video.playsinline = SITE_CONFIG.video.playsinline;
    }
    
    // Mise à jour des liens sociaux
    updateSocialLinks();
}

// Fonction pour mettre à jour les liens sociaux
function updateSocialLinks() {
    const socialLinks = {
        'github': document.querySelector('a[href*="github.com"]'),
        'tiktok': document.querySelector('a[href*="tiktok.com"]'),
        'youtube': document.querySelector('a[href*="youtube.com"]'),
        'discord': document.querySelector('a[href*="discord.gg"]'),
        'telegram': document.querySelector('a[href*="t.me"]')
    };
    
    for (const [platform, element] of Object.entries(socialLinks)) {
        if (element && SITE_CONFIG.socialLinks[platform]) {
            element.href = SITE_CONFIG.socialLinks[platform];
        }
    }
}

// Fonction pour activer/désactiver les effets
function toggleEffect(effectName, enabled) {
    if (SITE_CONFIG.effects[effectName] !== undefined) {
        SITE_CONFIG.effects[effectName] = enabled;
        
        // Application immédiate pour certains effets
        if (effectName === 'scanlines') {
            const scanlines = document.querySelector('.scanlines');
            if (scanlines) {
                scanlines.style.display = enabled ? 'block' : 'none';
            }
        }
        
        if (effectName === 'vignette') {
            const vignette = document.querySelector('.vignette');
            if (vignette) {
                vignette.style.display = enabled ? 'block' : 'none';
            }
        }
        
        if (effectName === 'distortion') {
            const distortion = document.querySelector('.screen-distortion');
            if (distortion) {
                distortion.style.display = enabled ? 'block' : 'none';
            }
        }
    }
}

// Fonction pour changer les couleurs
function updateColors(newColors) {
    Object.assign(SITE_CONFIG.colors, newColors);
    
    // Mise à jour des variables CSS
    const root = document.documentElement;
    root.style.setProperty('--primary-color', SITE_CONFIG.colors.primary);
    root.style.setProperty('--secondary-color', SITE_CONFIG.colors.secondary);
    root.style.setProperty('--accent-color', SITE_CONFIG.colors.accent);
}

// Fonction pour obtenir la configuration
function getConfig() {
    return SITE_CONFIG;
}

// Export pour utilisation dans d'autres fichiers
window.SITE_CONFIG = SITE_CONFIG;
window.applyConfig = applyConfig;
window.toggleEffect = toggleEffect;
window.updateColors = updateColors;
window.getConfig = getConfig;

// Application automatique de la configuration au chargement
document.addEventListener('DOMContentLoaded', applyConfig);
