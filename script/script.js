// Creëer een GSAP-timeline met standaardinstellingen
const timeline = gsap.timeline({ defaults: { duration: 2 } }); // Verhoog de standaardduur naar 2 seconden

/**
 * Navigatieletters animatie
 * @description Laat de navigatie-items één voor één verschijnen met een tragere fade-in en scale-up effect.
 */
timeline.from('.nav-links a', {
    opacity: 0, // Start met volledig transparant
    scale: 0.8, // Start iets verkleind
    duration: 2, // Duurt 2 seconden per link (trager)
    stagger: 0.6, // Laat elke link 0.6 seconden na de vorige verschijnen
    ease: 'power2.out' // Voegt een vloeiende overgang toe
});

/**
 * Subheading fade-in
 * @description Laat de welkomsttekst (subheading) verschijnen als tweede.
 */
timeline.from('.welcome-text', {
    opacity: 0, // Start met volledig transparant
    y: 30, // Start 30px onder de oorspronkelijke positie
    duration: 2, // Duurt 2 seconden
    ease: 'power2.out' // Voegt een zachte uitgaande overgang toe
}, "+=0.5"); // Wacht 0.5 seconden na de vorige animatie

/**
 * Logo-tekst animatie
 * @description Laat de letters van de logo-tekst als derde omhoog schuiven en verschijnen.
 */
timeline.from('.logo-text .key', {
    y: 70, // Start 70px onder de oorspronkelijke positie
    opacity: 0, // Start met volledig transparant
    duration: 2, // Duur per animatie
    stagger: 0.2, // Tussenruimte van 0.2 seconde tussen elke letter
    ease: 'bounce.out' // Geeft een stuiterend effect
}, "+=0.5"); // Wacht 0.5 seconden na de vorige animatie

/**
 * Button-animatie
 * @description Laat de knop verschijnen door te vergroten, te draaien en zichtbaar te worden.
 */
timeline.fromTo('.buttons-container .button', {
    opacity: 0, // Start met volledig transparant
    scale: 0, // Start volledig verkleind
    rotation: 720 // Start met 720 graden rotatie
}, {
    opacity: 1, // Wordt volledig zichtbaar
    scale: 1, // Groeit naar de normale grootte
    rotation: 0, // Draait terug naar de originele positie
    duration: 2, // Duurt 2 seconden
    ease: 'back.out(1.7)' // Voeg een uitgaande veereffect toe
}, "+=0.5"); // Wacht 0.5 seconden na de vorige animatie

/**
 * Afbeelding van beneden naar boven animatie
 * @description Laat de afbeelding als laatste verschijnen.
 */
timeline.from('.image img', {
    y: 150, // Start 150px onder de oorspronkelijke positie
    opacity: 0, // Start met volledig transparant
    duration: 2.5, // Duurt 2.5 seconden
    ease: 'power2.out' // Voegt een zachte overgang toe aan de beweging
}, "+=0.5"); // Wacht 0.5 seconden na de vorige animatie

/**
 * Mouse-hover-effect voor navigatielinks
 * @description Vergroot een navigatielink subtiel wanneer de muis eroverheen beweegt en herstelt de grootte wanneer de muis wegglijdt.
 */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.5, ease: 'power1.out' }); // Vergroot de link lichtjes
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.5, ease: 'power1.out' }); // Herstelt de originele grootte
    });
});
