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

app.get('/journal', async function (req, res) {
  res.render('journal.liquid', {files: files})
})



app.get('/journal/:slug', async function (request, response) {
  const fileContents = await readFile('content/' + request.params.slug + '.md', { encoding: 'utf8' }) //je maakt een variable aan. Je pakt de file met de slg die je op regel 76 hebt aangegeven. Achter elke bestand heb je .md en daarom geef je dit ook hier mee
  const opgemaakt = marked.parse(fileContents) //  content wordt omgezet met marked in HTML.
  response.render('artikel.liquid', {file: opgemaakt}) 

})




// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})






