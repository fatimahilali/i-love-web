const coll = document.getElementsByClassName("collapsible"); 
// Selecteer alle elementen met de class "collapsible" en sla deze op in de variabele `coll`

for (let i = 0; i < coll.length; i++) { 
    // Loop door elk element in `coll`
    
    coll[i].addEventListener("click", function() { 
        // Voeg een "click" eventlistener toe aan het huidige element in de loop
        
        this.classList.toggle("active"); 
        // Wissel de "active" class aan of uit bij het klikken om styling te veranderen
        
        const content = this.nextElementSibling; 
        // Selecteer het volgende sibling-element van het aangeklikte element (de inhoud die we willen tonen of verbergen)
        
        content.style.display = content.style.display === "block" ? "none" : "block";
        // Controleer de display-stijl van `content`: 
        // Als de display op "block" staat (zichtbaar), verander naar "none" (verborgen)
        // Zo niet, stel de display in op "block" om het zichtbaar te maken
    });
}
