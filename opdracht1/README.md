# Frontend voor Designers - opdracht 1: Een Micro-interactie uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

## Use cases
- In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.
- In een lijst studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is om te huren.
- In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een playlist te maken voor een feest.
- Als ik foto's zoek wil ik ze kunnen filteren op kleur om verassende zoekresultaten te krijgen die ik kan gebruiken voor mijn Visual Research.
- Je mag ook een eigen idee uitwerken. Kom dan eerst even overleggen.

## Werkwijze
Kies een van de Use Cases, schets eerst een ontwerp voor de interactie. Codeer in HTML, CSS en JavaScript en test verschillende versies van je ontwerp in een browser.

## Planning
1. Les 1: Briefing opdracht 1 en beginnen met schetsen en coderen
2. Les 2: Eerste versie testen
2. Les 3: Oplevering en beoordeling


## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) nr 04 & 11 zijn goed toegepast.
3. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op [Github](https://github.com).

## Resources

### Wat doe je ook alweer in JavaScript?
1. Gebruik de [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) om een element in je html te selecteren
2. Koppel een [evenListener](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) aan het element om een mouse-event te detecteren
3. Gebruik het [Classlist object](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) om een css class aan een element toe te voegen of weg te halen.

Voor wat complexere micro-interacties waar verschillende states elkaar moeten opvolgen kun je aan het eind van een transition of animation weer iets laten gebeuren. Gebruik hiervoor in Javascript de:

- eventlistener: [transitionend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event)
- eventlistener: [animationend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event)

-----------------------------------------

LES 1

Ik heb gekozen voor de eerste case:
- In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.

Ik ben begonnen met het maken van een schets (Zie afbeelding 1.). 

<img width="934" alt="Schermafbeelding 2020-02-26 om 14 33 24" src="https://user-images.githubusercontent.com/59088506/75349417-0a11ac80-58a5-11ea-9978-a3bb5923eb81.png">

Werking:
Alle vierkantjes zijn de films. Rechts bovenaan zie je een hartje, dit is de plaats waar waar de films heen gaan wanneer je de film 'vind-ik-leukt'.

Ik ben eerst aan de slag gegaan met het verzamelen van foto's die de films dan moeten voorstellen. Daarna heb ik een navigatie gemaakt en de favorieten button. Ik heb de website een naam gegeven en de films ook. 

Hieronder zie je het resultaat van het einde van les 1:
<img width="512" alt="Schermafbeelding 2020-02-06 om 17 16 09" src="https://user-images.githubusercontent.com/59088506/75349982-fadf2e80-58a5-11ea-900c-0c2c7c95a4c5.png">



LES 2
Deze les heb ik mij bezig gehouden met het positioneren van alle films en de buttons ten opzichte van de films. De buttons zijn goed gepositioneerd nu alleen de titels nog niet maar daar ga ik later mee verder.

Daarnaast heb ik mij bezig gehouden met javascript. Door te klikken op een hartje op een film moest deze van kleur veranderen zodat de gebruiker weet dat hij is 'gefavoriet'. Deze les is dat gelukt bij 1 van de 6 hartjes.

<img width="548" alt="Schermafbeelding 2020-02-13 om 16 30 30" src="https://user-images.githubusercontent.com/59088506/75350287-85279280-58a6-11ea-8ccd-27725fb130dc.png">


LES 3
Voor les 3 moet de opdracht af zijn dus ik ben thuis aan de slag gegaan omdat het nog niet af was. Ik ben begonnen met de uitwerking van alle hartjes. Alle hartjes zijn nu werkend. Het is de bedoeling dat wanneer je op een hartje klikt het hartje rechts bovenaan dan optelt. Hij telt hoevaak er geklikt is op een hartje. Dit is me nu gelukt! 

Daarnaast heb ik de site opgemaakt. Over alle elementen kun je hoveren dan wordt het element vergroot. Elementen die moeten opvallen hebben een felle kleur roze en de andere licht roze. Ook hebben de elementen shaduwen gekregen.

Ik heb geprobeerd om een soort uitschuif menu te maken waarin dan de films te zien zijn maar dit wil gewoon niet lukken. Het is wel gelukt om op het icoon te klikken en dat er op dat moment iets verschijnt maar verder is het niet gelukt. Dus dit zou ik nog kunnen verbeteren.

Dit is het uiteindelijke resultaat geworden!
<img width="806" alt="Schermafbeelding 2020-02-26 om 14 09 00" src="https://user-images.githubusercontent.com/59088506/75350785-5d84fa00-58a7-11ea-868c-82da29184276.png">
