/**
 * Author: @ Fatima El Hilali
 * Description: Mini course on GSAP animations
 * @see GSAP Documentation: https://gsap.com/resources
 * YouTube tutorial link: [https://www.youtube.com/watch?v=m6PDUIF24v4]
 */

// Blokkeer scroll aan het begin
document.body.style.overflow = "hidden";

// Creëer een GSAP-timeline met standaardinstellingen
const timeline = gsap.timeline({ defaults: { duration: 2 } });

/**
 * Navigatieletters animatie
 * @description Laat de navigatie-items één voor één verschijnen met een tragere fade-in en scale-up effect.
 */
timeline.from('.nav-links a', {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    stagger: 0.6,
    ease: 'power2.out'
});

/**
 * Subheading fade-in
 * @description Laat de welkomsttekst (subheading) verschijnen als tweede.
 */
timeline.from('.welcome-text', {
    opacity: 0,
    y: 30,
    duration: 2,
    ease: 'power2.out'
}, "+=0.5");

/**
 * Logo-tekst animatie
 * @description Laat de letters van de logo-tekst als derde omhoog schuiven en verschijnen.
 */
timeline.from('.logo-text .key', {
    y: 70,
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    ease: 'bounce.out'
}, "+=0.5");

/**
 * Button-animatie
 * @description Laat de knop verschijnen door te vergroten, te draaien en zichtbaar te worden.
 */
timeline.fromTo('.buttons-container .button', {
    opacity: 0,
    scale: 0,
    rotation: 720
}, {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 2,
    ease: 'back.out(1.7)'
}, "+=0.5");

/**
 * Afbeelding van beneden naar boven animatie
 * @description Laat de afbeelding als laatste verschijnen.
 */
timeline.from('.image img', {
    y: 150,
    opacity: 0,
    duration: 2.5,
    ease: 'power2.out'
}, "+=0.5");

/**
 * Scroll-down animatie
 * @description Laat de "scroll down" tekst verschijnen na de vorige animaties.
 */
timeline.from('.scroll-down', {
    y: 150,
    opacity: 0,
    duration: 2.5,
    ease: 'power2.out'
}, "+=0.5");





/**
 * Scroll inschakelen na animaties
 * @description Zorgt ervoor dat scrollen weer mogelijk is na alle animaties.
 */
timeline.call(() => {
    document.body.style.overflow = "auto"; // Scrollen weer inschakelen
});

/**
 * Mouse-hover-effect voor navigatielinks
 * @description Vergroot een navigatielink subtiel wanneer de muis eroverheen beweegt en herstelt de grootte wanneer de muis wegglijdt.
 */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, { scale: 1.1, duration: 0.5, ease: 'power1.out' });
    });
    link.addEventListener('mouseleave', () => {
        gsap.to(link, { scale: 1, duration: 0.5, ease: 'power1.out' });
    });
});
