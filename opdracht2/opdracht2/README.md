# Frontend voor Designers - opdracht 2: Een interactie uitwerken voor verschillende gebruikers input

Werk een functionaliteit uit die je kunt bedienen met 'click' en nog een user interactie, zoals het toetsenbord, tab, dubbel click, swipe, long press, <del>force touch</del>, of iets anders ... Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een [browser](https://en.m.wikipedia.org/wiki/List_of_web_browsers).


## Werkwijze
Bedenk een functionaliteit die je op meerdere manieren kunt bedienen. Schets eerst hoe de functionaliteit er uit komt te zien. Maak daarna een breakdown-schets van hoe de verschillende elementen technisch moeten gaan werken...

Codeer de functionaliteit in HTML, CSS en JavaScript en test verschillende versies van je ontwerp in een browser.

## Planning
1. Les 3: Briefing opdracht 2 en beginnen met schetsen en coderen
2. Les 4: Eerste versie testen
3. Les 5: Oplevering en beoordeling


## Voorbeeld functionaliteit die je kunt maken
- Carousel met vakantiefoto's: Een carousel met meerdere foto's van een vakantie, die je kan bedienen met een button en met de pijltjes op het toetsenbord.
- Portfolio website met meerdere projecten en een biografie. Als je naar 'beneden' scrollt vult de betreffende section zich met informatie. Als je op tab klikt ga je ook naar de volgende section. Of als je 'volgende' roept ...
- Settings panel op een foto-overzichtpagina: Instellingen zijn bijvoorbeeld de font-grootte, night vision en het aantal kolommen die naast elkaar worden getoond. Het bedienen van de instellingen moet met de muis en de sneltoetsen op het toetsenbord.
- Je mag ook een eigen idee uitwerken. Kom dan eerst even overleggen.


## Criteria

1. In de demo maak je gebruik van verschillende [User Interface events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent).
2.In de demo dien je rekening te houden met de interface design principles 04, 08 & 09 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
3. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github. <br>Voeg ook je breakdown-schets toe, en beschrijf je eerste idee en technische opzet en hoe het uiteindelijk is geworden.


## Resources
- Bekijk hier de lijst [User Interface Events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) die je in javascript kunt gebruiken.
- Als je iets wil doen met scrollen, dan kun je het event 'scroll' gebruiken. Misschien kun je ook iets doen met de [Intersection observer](https://pawelgrzybek.com/the-intersection-observer-api-explained/)
- Als een onderdeel van je pagina in beeld moet verschijnen na een click, dan kun je iets doen met [scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).


OPDRACHT 2
Ik heb ervoor gekozen om case 2 te maken: 
- Carousel met vakantiefoto's: Een carousel met meerdere foto's van een vakantie, die je kan bedienen met een button en met de pijltjes op het toetsenbord.

Ik ben begonnen met het maken van een schets. Zie onderstaande afbeelding:

<img width="898" alt="Schermafbeelding 2020-03-11 om 12 57 08" src="https://user-images.githubusercontent.com/59088506/76414651-09464380-6398-11ea-8eda-49de0013e81d.png">

Dit leek mij een leuk idee, ik kom het best wel vaak tegen op andere websites. Het leek mij wel een uitdaging om te maken.

PROCES
Ik ben begonnen met het invoegen van afbeeldingen en deze naast elkaar te plaatsen. Toen dit was gelukt heb ik snapping toegepast, op deze manier kon ik door de pagina heen scrollen op een manier waardoor het bleef staan: zie onderstaande afbeelding voor het resultaat.

<img width="1397" alt="Schermafbeelding 2020-03-11 om 12 56 48" src="https://user-images.githubusercontent.com/59088506/76414743-35fa5b00-6398-11ea-9454-02a21865a7d5.png">

De pagina wilde ik laten bedienen door pijltjes naar links en rechts maar ook door buttons, zodat je gelijk ziet hoeveel foto's er beschikbaar zijn en dan kun je er gemakkelijk naar navigeren: zie onderstaande afbeelding.

<img width="1398" alt="Schermafbeelding 2020-03-11 om 12 56 58" src="https://user-images.githubusercontent.com/59088506/76414717-2a0e9900-6398-11ea-8478-3d3caba82973.png">

Het was niet moeilijk om de foto's te linken aan het goede rondje maar er moest ook nog iets gebeuren met javascript. Op dit moment heb ik mijn code helemaal verwijdert en ben ik op nieuw begonnen. Ik heb toen van de rondjes radio buttons gemaakt en die gelinkt aan een foto en daarnaast een array gemaakt in mijn javascript. Die array heb ik gelinkt aan de pijltjes, link en rechts zodat je daar ook doorheen kunt klikken. 

Als laatste nog heeft Sanne mij geholpen om met het toetsenbord de foto's te bedienen, hij heeft die code voor mij geschreven. Het zag er simpel uit maar dat was het echter niet, ik wilde nog de functies aan elkaar koppelen zodat het er niet dubbel zou staan maar ik ben er echt nog niet uitgekomen, dus daar ligt mijn verbeterpunt.

Dit is het resultaat geworden.
<img width="459" alt="Schermafbeelding 2020-03-11 om 12 56 02" src="https://user-images.githubusercontent.com/59088506/76414749-3a267880-6398-11ea-8b34-98055c42027e.png">

Wanneer ik verder zou gaan werken aan deze opdracht zou ik meer mijn geschetste idee gaan uitwerken, dus dat je aan beide zijkanten alvast de foto's ziet maar dan klein en vervaagd.
