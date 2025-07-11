# Vragenlijst Blok 4  Lerend Vermogen

## Client-side vs Server-side JavaScript

**Begrijp je het verschil en weet je wanneer je wat inzet?**   
3 punt Ja. Ik gebruik server-side JavaScript in mijn `server.js` om data op te halen en pagina’s te maken:  
[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L38C1-L46C54)

3 punt client side gebruik je voor dingen in de browser, zoals animaties,formulier validatie, 
In dit project heb ik het niet toegepast, maar ik weet hoe het werkt.

---

## Debugstrategie voor JS en Liquid

**Heb je een strategie voor debuggen?**  
2 punt Ja.  
- **Server-side**: `console.error()` gebruikt  om fouten te zien  
[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L85C3-L91C1)
-  Browserconsole met `console.log()`  

- **Liquid**: Filters zoals `default` en `escape`:  
[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/detail.liquid#L87C6-L90C1)


---

## GET en POST routes

**Kun je routes en request parameters gebruiken?**  
2 punt Ja. Ik gebruik GET-routes met `req.params` en `req.query`:  
[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L39C2-L47C1)


POST gebruik je om gegevens te versturen naar de server, zoals bij het versturen van een formulier. Je leest de data dan uit met req.body.
In dit project heb ik geen POST-route nodig gehad, maar ik weet hoe je die opzet met Express.

---

## Server-side fetch van JSON (REST API)

**Kun je data ophalen van een REST API?**  
2 punt Ja. Ik gebruik `fetch()` in mijn server om data op te halen van een REST API
[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L29C1-L31C3)

---

## Filteren of sorteren van API-data

**Kun je data uit een REST API filteren of sorteren?**  
2 punt Ja.  
Ik haal alleen de velden op die ik nodig heb:  
[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L60C1-L61C1)

sorting heb ik nog niet gebruikt, maar ik weet dat het kan met ?sort=veldnaam.
daarmee kun je data in volgorde zetten, zoals op alfabet of op datum.

---

## Async in JavaScript

**Snap je wat `async` doet?**  
3 punt Ja.Met`async` en `await`  kun je op data wachten zonder dat je hele site vastloopt.
[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L27C1-L30C1)

---

## Try/Catch en JSON parsing

**Kun je fouten opvangen met try/catch?**  
Ja. 3 punt   
Ik gebruik `try/catch` om fouten op te vangen bijvoorbeeld als de API geen geldige JSON terugstuurt::  
[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L57C3-L92C1)

Zo voorkom ik dat mijn server crasht bij een fout.

---

## Client-side fetch voor formulieren

**Kun je fetch gebruiken voor een formulier?**  
2 punt Niet in dit project gedaan, maar ik weet hoe het werkt:

```js
fetch('/form', {
  method: 'POST',
  body: new FormData(formElement)
})
```

## View Transitions (Multi-page/Single-page)

**Kun je view transitions inzetten?**  
2 punt Ja.  
Ik heb animaties tussen gallery en detailpagina gebruikt:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/detail.liquid#L69C1-L76C1)

---

## Responsive Images

**Kun je verschillende responsive image-technieken uitleggen en toepassen?**  
2 punt Ja.  
Ik heb `<picture>`, `srcset`, `sizes` en fallback gebruikt:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L54C12-L95C18)

---

## Performance Audits Begrijpen

**Kun je performance audits begrijpen en oplossen?**  
2 punt Ja.  
Ik heb layout shift opgelost met vaste breedte/hoogte bij afbeeldingen:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L87)

---

## UX Verbeteren met Progressive Enhancement

**Kun je progressive enhancement toepassen?**  
3 punt Ja.  
Ik gebruik View Transitions die werken in moderne browsers, maar de site blijft functioneel zonder:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L90C9-L91C66)

---

## Nieuwe Technieken met Oog op Oude Browsers

**Houd je rekening met oudere browsers?**  
2 punt Ja.  
Ik gebruik `<picture>` met AVIF, WebP en PNG als fallback:  
[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L40C1-L82C16)

---

## Basis JavaScript Kennis

**Begrijp je objecten, arrays, loops, etc.?**  
2 punt Ja.  

- Objecten en variabelen in Express:  
  [Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L75C1-L83C8)

- Loops en arrays in Liquid:  
  [Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L45)

---

## Geavanceerdere JS-concepten

**Begrijp je closures, promises, scope, event loop?**  
- 2 punt **Promises** – Ja, die begrijp ik goed. Ik weet hoe `await` werkt en hoe je met `fetch()` en asynchrone code omgaat.

[Link naar code](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/server.js#L59C3-L64C40)

- **De rest (closures, scope, event loop)** – Misschien begrijp ik ze deels of herken ik het als ik het zie in code, maar de termen zelf zeggen me niet veel.

---

## Werken met GitHub Branches

**Kun je met branches, PR’s en reviews werken?**   
3 punt Ja ik heb in het verleden met branches gewerkt.
Ik maak branches aan voor taken, open een pull request, laat deze reviewen en merge die daarna.

---

## Formulier Validatie Client-side

**Kun je formulieren client-side valideren?**  
2 punt Ik heb het in dit project niet gebruikt, maar ik weet dat je met client-side validatie formuliergegevens controleert voordat ze worden verstuurd.

---

## ARIA en Semantische HTML

**Ken je de eerste ARIA-regel?**  
3 punt Ja.  
Gebruik eerst semantische HTML zoals `<button>`, `<label>`, `<nav>`, `<form>`.  
ARIA alleen als semantiek ontbreekt.

---

## Layout Shifts Begrijpen en Oplossen

**Weet je wat layout shifts zijn?**  
2 punt Ja.  
Ze ontstaan bij bijvoorbeeld afbeeldingen zonder vaste afmetingen.
Je lost het op door breedte en hoogte toe te voegen aan de afbeelding.

[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/detail.liquid#L73C12-L75C53)

---

## Core Web Vitals Meten en Interpreteren

**Ken je LCP, FID, CLS?**  
2 punt Ja.

- **LCP**: hoe snel hoofdinhoud laadt  
- **FID**: hoe snel interactie werkt  
- **CLS**: of layout onverwacht verschuift  
Tools: Lighthouse / PageSpeed

---

## Perceived Performance Verbeteren

**Kun je de ervaring sneller laten lijken?**  
2 punt Ja.
Ik gebruik View Transitions en lazy loading, zodat de pagina sneller laadt en ook sneller aanvoelt.

[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L86C11-L91C66)

---

## Progressive UI States

**Kun je UI states gebruiken met progressive enhancement?**  
2 punt Ja.  
De basis werkt altijd, extra’s zijn optioneel en kunnen werken zonder animatie.
Ik heb het in deze sprint niet gebruikt, maar ik weet hoe het werkt.

---

## UI Prettiger Maken Zonder Functionaliteit uit het oog te verliezen

**Kun je UX verbeteren zonder afbreuk?**  
3 punten Ja, dat kan. Progressive enhancement zorgt ervoor dat je de UX verbetert zonder functies te verliezen

---

## Scroll-driven Animations

**Kun je animaties koppelen aan scrollen?**  
2 punt Ja.  
Niet in dit project gedaan, maar ik weet dat het kan met  JS of CSS keyframes.

---

## Feature Detection Toepassen

**Kun je feature detection gebruiken in HTML/CSS/JS?**  
2 punt Ja.  
Bijvoorbeeld via `<picture>` voor AVIF/WebP support.

[Link naar code ›](https://github.com/fatimahilali/user-experience-enhanced-website/blob/e3af61af438c00d2f178c93e927c82c739ff03cb/views/gallery.liquid#L50C2-L94C21)
