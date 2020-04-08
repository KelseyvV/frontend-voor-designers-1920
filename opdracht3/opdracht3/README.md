Dit is de link naar mijn website:
https://kelseyvv.github.io/frontend-voor-designers-1920/opdracht3/opdracht3/index.html

# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.


## Werkwijze
Schets eerst hoe de functionaliteit er uit komt te zien. Maak daarna een breakdown-schets hoe de verschillende componenten technisch moeten gaan werken...

Werk daarna je ontwerp uit in HTML, CSS en JavaScript.


## Planning
1. Les 5: Briefing opdracht 3, API uitzoeken, tutorial doorlopen, schetsen en beginnen met coderen
2. Les 6: Eerste versie testen. Meenemen: breakdown-schets, JSON laden in de console, daarna in Javascript HTML elementen aanmaken, de data koppelen en toevoegen aan de DOM
3. Les 7: Demo presenteren
4. Les 8: Oplevering en beoordeling


## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De data wordt van een externe bron ingeladen met Javascript.
3. Een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) worden opgevangen en zijn vormgegeven.
4. In de demo maak je gebruik van meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
5. In de demo dien je rekening te houden met de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
6. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github


## Resources
- Gebruik verschillende [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) om de functionaliteit mee te bedienen.
- Met behulp van [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) of [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) kan een [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) file worden geladen. Daarna kun je de HTML elementen aanmaken, de juiste content koppelen en aan de DOM toevoegen.
- Hier staat een [tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) voor het laden van JSON data en het aanmaken van HTMl elementen.
- Bij het laden van externe data kan de server verschillende [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) doorgeven, die kun je gebruiken om feedback te tonen.


--------------- LES  1 --------------------

Deze les hebben we de beschrijving voor opdracht 3 gekregen. We zijn deze les begonnen met het stappenplan om gegevens van een andere website op te halen, die van Koop. Op deze manier kan ik de films en titels gebruiken voor mijn eigen website.

Mijn bedoeling is dat ik de code van opdracht 2 nogmaals ga gebruiken alleen vervang ik deze vakantie foto's nu voor film foto's. 

Ik wil proberen om een ander soort carousel te maken. Ik ga proberen om Sanne's voorbeeld 'na te maken'. 


--------------- Huiswerk LES 2 --------------

Voor les 2 heb ik mijn code samengevoegt, dit heeft Sanne gedaan voor mij. Mijn website ziet er nu als volgt uit:

<img width="1001" alt="Schermafbeelding 2020-03-19 om 14 21 53" src="https://user-images.githubusercontent.com/59088506/77071866-06c59880-69ed-11ea-9615-b9ad5a2d43a4.png">


--------------- Huiswerk LES 3 --------------

Vorige week heb ik dus mijn code van opdracht 2 samengevoegt aan de API. Deze code wil ik verder uitbreiden door er een ronde 3d caroussel van te maken. 


![IMG_9896](https://user-images.githubusercontent.com/59088506/77753469-d2c02800-7029-11ea-80db-580121fe3198.jpg)



Ik heb op internet gezocht hoe dit gedaan werd en kwam allerlei verschillende manieren tegen met CSS, JavaScript en Jquery. Het was vrij onduidelijk dus ik heb nogmaals hulp gevraagd aan Sanne. Sanne heeft mij toen zijn caroussel gestuurd en op deze manier kon ik dit samenvoegen met mijn code.

Sanne's code bestaat uit 12 items, ik zou mijn films kunnen verdubbelen 2x 6 films maar ik heb er toch voor gekozen om dit bij 6 te laten. 

Ik heb deze code nu gekoppeld met de caroussel code maar mijn buttons werken nog niet helemaal, dat gebeurd in dit stukje code:

function beweegSlider(richting) {
    var radio_length = radio_array.length;

    if (richting == "naarLinks") {
        positieSlider--;
        if (positieSlider < 0) {
            draaiCarrousel("naarLinks");
        }
    } else if (richting == "naarRechts") {
        positieSlider++;
        if (positieSlider > radio_length - 1) {
            draaiCarrousel("naarRechts");
        }
    }
    radio_array[positieSlider].checked = true;
}

Ik heb hier al draaiCarrousel geplaatst maar ik weet niet zo goed wat het if statement moet zijn.
Ik twijfel ook nog of ik radio buttons moet gebruiken, naar mijn idee heeft dat geen toegevoegde waarde bij dit caroussel.


Dit is het resultaat van deze week:
<img width="1193" alt="Schermafbeelding 2020-03-25 om 12 23 37" src="https://user-images.githubusercontent.com/59088506/77531623-817e3000-6e93-11ea-9e33-089244361569.png">





--------------- Huiswerk LES 4 --------------

Voor deze week had ik weinig inspiratie. Tot nu toe heb ik al bereikt wat ik wou bereiken voor opdracht 3. Toen heb ik Nicole gesproken en die had iets leuks gemaakt, namelijk dat wanneer je over een film hovert dat je dan details te zien zou krijgen. 

Dit ziet er als volgt uit:
![IMG_9993](https://user-images.githubusercontent.com/59088506/78343002-7d8c9500-759a-11ea-9fbf-5b28c747998b.jpg)
![IMG_9992](https://user-images.githubusercontent.com/59088506/78343015-82e9df80-759a-11ea-9059-ae09d5be824e.jpg)

Ze heeft haar code met mij gedeeld en die heb ik geprobeerd eigen te maken. Nog niet gelukt helaas. Dus ik heb nu niks om te laten zien eigenlijk...

Hier ga ik mij komende week nog mee bezig houden!

Ik heb wel de radio buttons weggehaalt. Deze waren overbodig. 
Zo ziet mijn website er nu uit:
<img width="1200" alt="Schermafbeelding 2020-04-03 om 10 56 33" src="https://user-images.githubusercontent.com/59088506/78342617-d576cc00-7599-11ea-936d-9b90ed22e321.png">

Dit is de link naar mijn website:
https://kelseyvv.github.io/frontend-voor-designers-1920/opdracht3/opdracht3/index.html



--------------- Huiswerk LES 5: Eindoplevering. --------------

Zoals ik vorige week heb beschreven zou ik graag over een film willen hoveren waardoor er dan details van de film tevoorschijn komen. Ik ben daar mee aan de slag gegaan en met behulp van Sanne ben ik tot het resultaat gekomen.

Wanneer de gebruiker nu over de film hovert, ziet hij het genre en de releasedata. 
<img width="804" alt="Schermafbeelding 2020-04-08 om 11 46 39" src="https://user-images.githubusercontent.com/59088506/78770651-279b6100-798f-11ea-8547-4d5ee444723e.png">


Sanne heeft de buttons responsive gemaakt, de buttons verschuiven mee met het beeldformaat.


Nog een kleine aanpassing: De titels van de films staan nu gecentreerd in hun veld. 

Dit is het eindresultaat:
<img width="832" alt="Schermafbeelding 2020-04-08 om 11 50 07" src="https://user-images.githubusercontent.com/59088506/78770662-2a965180-798f-11ea-95fa-e0b705fb091d.png">

