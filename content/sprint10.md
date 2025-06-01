# Vragenlijst Blok 4  Lerend Vermogen

## Client-side vs Server-side JavaScript

**Begrijp je het verschil en weet je wanneer je wat inzet?**  
Ja. Ik gebruik server-side JavaScript in mijn `server.js` om data op te halen en pagina’s te maken:  
https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L38C1-L46C54

Client-side gebruik ik voor dingen in de browser, zoals animaties:  
https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L84C10-L92C1

---

## Debugstrategie voor JS en Liquid

**Heb je een strategie voor debuggen?**  
Ja.  
- **Server-side**: `console.error()` gebruikt  om fouten te zien  
  https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L85C3-L91C1  
- **Client-side**: Browserconsole met `console.log()`  
- **Liquid**: Filters zoals `default` en `escape`:  
  https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/detail.liquid#L87C6-L90C1

---

## GET en POST routes

**Kun je routes en request parameters gebruiken?**  
Ja. Ik gebruik GET-routes met `req.params` en `req.query`:  
https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L39C2-L47C1

POST ken ik ook, ik weet hoe de POST-request werkt.

---

## Server-side fetch van JSON (REST API)

**Kun je data ophalen van een REST API?**  
Ja. Ik gebruik `fetch()` in mijn server om data op te halen van een REST API
https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L29C1-L31C3

---

## Filteren of sorteren van API-data

**Kun je data uit een REST API filteren of sorteren?**  
Ja.  
Ik haal alleen de velden op die ik nodig heb:  
https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L60C1-L61C1

Sorting heb ik nog niet gebruikt, maar ik weet dat het kan met bijv. `?sort=veldnaam`.

---

## Async in JavaScript

**Snap je wat `async` doet?**  
Ja. `async` maakt functies asynchroon, zodat ik `await` kan gebruiken voor bijv. API-calls:  
https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L27C1-L30C1

---

## Try/Catch en JSON parsing

**Kun je fouten opvangen met try/catch?**  
Ja.  
Ik gebruik `try/catch` om fouten op te vangen bijvoorbeeld als de API geen geldige JSON terugstuurt::  
https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L57C3-L92C1
Zo voorkom ik dat mijn server crasht bij een fout.

---

## Client-side fetch voor formulieren

**Kun je fetch gebruiken voor een formulier?**  
Niet in dit project gedaan, maar ik weet hoe het werkt:

```js
fetch('/form', {
  method: 'POST',
  body: new FormData(formElement)
})
```

## View Transitions (Multi-page/Single-page)

**Kun je view transitions inzetten?**  
Ja.  
Ik heb animaties tussen gallery en detailpagina gebruikt:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/detail.liquid#L69C1-L76C1)

---

## Responsive Images

**Kun je verschillende responsive image-technieken uitleggen en toepassen?**  
Ja.  
Ik heb `<picture>`, `srcset`, `sizes` en fallback gebruikt:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L54C12-L95C18)

---

## Performance Audits Begrijpen

**Kun je performance audits begrijpen en oplossen?**  
Ja.  
Ik heb layout shift opgelost met vaste breedte/hoogte bij afbeeldingen:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L87)

---

## UX Verbeteren met Progressive Enhancement

**Kun je progressive enhancement toepassen?**  
Ja.  
Ik gebruik View Transitions die werken in moderne browsers, maar de site blijft functioneel zonder:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L90C9-L91C66)

---

## Nieuwe Technieken met Oog op Oude Browsers

**Houd je rekening met oudere browsers?**  
Ja.  
Ik gebruik `<picture>` met AVIF, WebP en PNG als fallback:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L40C1-L82C16)

---

## Basis JavaScript Kennis

**Begrijp je objecten, arrays, loops, etc.?**  
Ja.  

- Objecten en variabelen in Express:  
  [Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L75C1-L83C8)

- Loops en arrays in Liquid:  
  [Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L45)

---

## Geavanceerdere JS-concepten

**Begrijp je closures, promises, scope, event loop?**  
Ja.  
Voorbeeld:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L59C3-L64C40)

---

## Werken met GitHub Branches

**Kun je met branches, PR’s en reviews werken?**   
Ja ik heb in het verleden met branches gewerkt.
Ik maak branches aan voor taken, open een pull request, laat deze reviewen en merge die daarna.

---

## Formulier Validatie Client-side

**Kun je formulieren client-side valideren?**  
Ik heb het in dit project niet gebruikt, maar ik weet dat het betekent dat je formuliergegevens controleert vóórdat je ze verstuurt. Dus: client-side validatie.

---

## ARIA en Semantische HTML

**Ken je de eerste ARIA-regel?**  
Ja.  
Gebruik eerst semantische HTML zoals `<button>`, `<label>`, `<nav>`, `<form>`.  
ARIA alleen als semantiek ontbreekt.

---

## Layout Shifts Begrijpen en Oplossen

**Weet je wat layout shifts zijn?**  
Ja.  
Ze ontstaan bij bijvoorbeeld afbeeldingen zonder vaste afmetingen.

---

## Core Web Vitals Meten en Interpreteren

**Ken je LCP, FID, CLS?**  
Ja.

- **LCP**: hoe snel hoofdinhoud laadt  
- **FID**: hoe snel interactie werkt  
- **CLS**: of layout onverwacht verschuift  
Tools: Lighthouse / PageSpeed

---

## Perceived Performance Verbeteren

**Kun je de ervaring sneller laten lijken?**  
Ja.  
Ik gebruik View Transitions en andere animaties.

---

## Progressive UI States

**Kun je UI states gebruiken met progressive enhancement?**  
Ja.  
De basis werkt altijd, extra’s zijn optioneel en kunnen werken zonder animatie.

---

## UI Prettiger Maken Zonder Functionaliteit uit het oog te verliezen

**Kun je UX verbeteren zonder afbreuk?**  
Ja.  
De belangrijkste functies werken altijd. Animaties en andere extra’s worden alleen gebruikt als de browser het ondersteunt.

---

## Scroll-driven Animations

**Kun je animaties koppelen aan scrollen?**  
Ja.  
Niet in dit project gedaan, maar ik weet hoe het moet met JS of CSS keyframes.

---

## Feature Detection Toepassen

**Kun je feature detection gebruiken in HTML/CSS/JS?**  
Ja.  
Bijvoorbeeld via `<picture>` voor AVIF/WebP support.
