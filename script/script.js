// Creëer een GSAP-timeline met standaardinstellingen
const timeline = gsap.timeline({ defaults: { duration: 1 } });
/**
 * Navigatieletters animatie
 * @description Laat de navigatiebalk eerst verschijnen met een bounce-effect.
 */
timeline.from('.nav-links a', {
    opacity: 0, // Start met volledig transparant
    y: 20, // Start 20px onder de oorspronkelijke positie
    duration: 1, // Duurt 1 seconde per link
    stagger: 0.2, // Laat elke link 0.2 seconden na de vorige verschijnen
    ease: 'bounce.out' // Voegt een bounce-effect toe
});


/**
 * Subheading fade-in
 * @description Laat de welkomsttekst (subheading) verschijnen als tweede.
 */
timeline.from('.welcome-text', {
    opacity: 0, // Start met volledig transparant
    y: 20, // Start 20px onder de oorspronkelijke positie
    duration: 1, // Duurt 1 seconde
    ease: 'power2.out' // Voegt een zachte uitgaande overgang toe
});

/**
 * Logo-tekst animatie
 * @description Laat de letters van de logo-tekst als derde omhoog schuiven en verschijnen.
 */
timeline.from('.logo-text .key', {
    y: 50, // Start 50px onder de oorspronkelijke positie
    opacity: 0, // Start met volledig transparant
    duration: 1, // Duur per animatie
    stagger: 0.1, // Tussenruimte van 0.1 seconde tussen elke letter
    ease: 'bounce.out' // Geeft een stuiterend effect
});

/**
 * Knop-animatie
 * @description Laat de knoppen-container als vierde verschijnen.
 */
timeline.fromTo('.buttons-container .button', {
    opacity: 0, // Start met volledig transparant
    scale: 0, // Start volledig verkleind
    rotation: 720 // Start met 720 graden rotatie
}, {
    opacity: 1, // Wordt volledig zichtbaar
    scale: 1, // Groeit naar de normale grootte
    rotation: 0, // Draait terug naar de originele positie
    duration: 1.5, // Duurt 1.5 seconde
    ease: 'back.out(1.7)' // Voeg een uitgaande veereffect toe
});

/**
 * Afbeelding van beneden naar boven animatie
 * @description Laat de afbeelding als laatste verschijnen.
 */
timeline.from('.image img', {
    y: 100, // Start 100px onder de oorspronkelijke positie
    opacity: 0, // Start met volledig transparant
    duration: 2, // Duurt 2 seconden
    ease: 'power2.out' // Voegt een zachte overgang toe aan de beweging
});

/**
 * Mouse-hover-effect voor navigatielinks
 * @description Vergroot een navigatielink subtiel wanneer de muis eroverheen beweegt en herstelt de grootte wanneer de muis wegglijdt.
 */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.3, ease: 'power1.out' }); // Vergroot de link lichtjes
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.3, ease: 'power1.out' }); // Herstelt de originele grootte
    });
});
