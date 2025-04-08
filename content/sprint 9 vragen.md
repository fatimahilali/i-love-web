# NodeJS en Express.js – Checklist

1. **Ik kan uitleggen wat NodeJS is en waarvoor het gebruikt wordt**  
    I got this 🍗  
   Met Node.js kun je de backend maken van je website of app.  

2. **Ik weet wat het doel van `package.json` is en heb hier aanpassingen in gemaakt**   
    I got this 🍗  
   Houdt info over je project bij, zoals welke packages je gebruikt, maar ik heb geen aanpassingen gedaan.

3. **Ik heb met npm packages geïnstalleerd en gebruikt in het bestand `server.js`**  
   I got this 🍗  
   Met `npm install` voeg je extra tools toe die je in `server.js` kan gebruiken.

4. **Ik kan met commando’s in de terminal een NodeJS project stoppen en starten**  
    I got this 🍗  
   - Starten: `npm start`  
   - Stoppen: `Ctrl + C`

5. **Ik weet waarom ik mijn NodeJS project regelmatig moet herstarten en kan dit uitleggen**  
    I got this 🍗  
   Ik moet herstarten als ik iets aan de code verander, zodat de server de nieuwe code gebruikt.

6. **Ik heb een strategie voor debuggen in NodeJS**
    I got this 🍗 
   Fouten zoeken, bijvoorbeeld met `console.log()`: [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/server.js#L154C1-L158C3)

7. **Ik kan uitleggen wat Express.js doet en waarom het nodig is om met NodeJS een website te bouwen**  
   I got this 🍗  
   Express is de brug tussen frontend en backend.

8. **Ik weet wat routes zijn en kan zelf een nieuwe route aanmaken**  
   I got this 🍗  
   Een route regelt wat er gebeurt als je een link bezoekt.  
   - Voorbeeld `GET`: [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/server.js#L127C1-L130C39)  
   - Voorbeeld `POST`: [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/server.js#L102C1-L114C1)

9. **Ik weet wat `request` en `response` argumenten zijn in een functie voor het laden van data**  
   - `request` = info die binnenkomt  
   - `response` = wat je terugstuurt naar de gebruiker

10. **Ik heb gebruik gemaakt van een request parameter om specifieke data te laden**  
     I got this 🍗  
    [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/91b1096c5b1081740c2a2368c75f07335a56a905/server.js#L121C1-L135C4)

11. **Ik kan uitleggen wat Liquid doet en waarom het nodig is om met Express.js een website te maken**  
    - Ik weet wel wat Liquid doet, maar geen idee waarom het nodig is voor Express.js.

12. **Ik weet hoe ik data naar Liquid verstuur om dit te gebruiken bij het renderen van een pagina**  
     I got this 🍗  
    Je gebruikt `res.render()` om data naar Liquid te sturen en `{{ }}` om het in de HTML te tonen.

13. **Ik weet hoe ik Liquid filters toe kan passen en waar ik kan vinden hoe die werken**  
     I got this 🍗  
    Liquid filters pas je toe om data te veranderen, voorbeeld code: [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/views/detail.liquid#L75C6-L79C1)

14. **Ik heb een nieuwe route gemaakt en nieuwe data meegegeven aan een Liquid view**  
     I got this 🍗  
    [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/91b1096c5b1081740c2a2368c75f07335a56a905/server.js#L100C1-L116C4)

15. **Ik weet waar een `foreach` loop voor gebruikt wordt en pas het toe in een Liquid view om HTML te renderen**

16. **Ik kan in Liquid een controle maken waarmee een image niet getoond wordt als deze niet in de database is ingevuld**  
     I got this 🍗  
    [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/views/detail.liquid#L41C1-L47C15)

17. **Ik heb een strategie voor debuggen in Liquid**  
     0 punten

18. **Ik kan data fetchen uit een REST API**  
     I got this 🍗  
    [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/server.js#L44C1-L45C52)

19. **Ik snap het verschil tussen HTTP requests van de methodes GET en POST**  
     I got this 🍗  
    HTTP transportprotocol voor het ophalen en versturen van data tussen  
    - `GET` = data ophalen van de server  
    - `POST` = data versturen naar de server

20. **Ik kan data uit een REST API filteren of sorteren**  
     0 punten

21. **Ik snap wat het `async` keyword doet in JavaScript code**  
     I got this 🍗  
    Het zorgt ervoor dat de code niet stopt.  
    [Code voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/server.js#L128C1-L129C1)

22. **Ik weet wat het doel is van een `try/catch` block en kan het gebruiken bij het parsen van JSON**  
    - Het zorgt ervoor dat fouten worden opgevangen en de applicatie niet stopt.  
    - [Code voorbeeld `try/catch`](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/server.js#L52C1-L61C1)  
    - [Andere voorbeeld](https://github.com/fatimahilali/the-web-is-for-everyone-interactive-functionality/blob/0d5f4bac48cd1e78e112efe9794473a9aac8df44/server.js#L92C1-L96C4)

23. **Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten**  
     I got this 🍗

24. **Ik kan formulier data die is ge-POST opslaan in een variabele op de server en gebruiken bij het renderen van een pagina**  
     0 punten

25. **Ik kan formulier data die is ge-POST door middel van een POST of PATCH HTTP request opslaan in de REST API**  
     0 punten
