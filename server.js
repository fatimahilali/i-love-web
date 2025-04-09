// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';

import { marked } from 'marked'

import { readdir, readFile } from 'node:fs/promises'
 
const files = await readdir ('content')
 
console.log(files)
// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({extended: true}))

app.get('/', async function (req, res) {
  res.render('home.liquid'); 
});


// Route om de hoofdpagina van het journal weer te geven
app.get('/journal', async function (req, res) {
  // Render de 'journal.liquid' template en geef het 'files'-object mee
  res.render('journal.liquid', { files: files })
})


// Route om de hoofdpagina van het journal weer te geven
app.get('/about', async function (req, res) {
  res.render('about.liquid');
})


// Route om een specifiek artikel te tonen op basis van de slug in de URL
app.get('/journal/:slug', async function (request, response) {
  // Lees de inhoud van het .md-bestand uit de 'content' map
  // De bestandsnaam wordt bepaald door de slug uit de URL (bijv. /journal/artikel-1 → artikel-1.md)
  const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' }) 
  // Zet de inhoud van het Markdown-bestand om naar HTML met 'marked'
  const opgemaakt = marked.parse(fileContents) 
  // Render de 'artikel.liquid' template en geef de HTML-inhoud mee als 'file'
  response.render('artikel.liquid', { file: opgemaakt }) 
})



// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})






