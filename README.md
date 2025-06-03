# html-dolgozat-0604
KTCH 2025. 06. 04. HTML dolgozat
1) Div-ek
Készítsd egy HTML-t, melyben öt div taget felviszel. Egyiknek se adj id vagy class attribútumot, sőt hagyjuk
attribútum nélkül. Készíts egy scriptet, amely képes beírni az első div-be, hogy „Első”, utolsóba, hogy „Utolsó”,
harmadikba azt, hogy „Harmadik”, majd a maradék kettőbe az indexét (hányadik elem a bodyban). A
megoldást tesztelje, ha hibákat talál javítsa ki, beadandó egy GitHub repo címe.
2) Háttér
Készítsen egy fv-t ami egy olyan Div-et küld vissza, a div háttere egy kép legyen, ha rákattintunk a divre, a
háttere legyen egy másik kép 2 másodpercig majd álljon vissza az eredeti állapot. A megoldást tesztelje, ha
hibákat talál javítsa ki, beadandó egy GitHub repo címe.
3) Ötöslottó
A játék során 90 számból húznak ki 5 darab számot véletlenszerűen, és ezek közül kell a játékosoknak minél
többet eltalálniuk. Erzsi néni ezen a héten a véletlenre bízza az öt szám bejelölését a lottószelvényen. Írj egy
paraméter nélküli otoslotto függvényt, amely generál 5 darab véletlenszámot 1 és 90 között, és visszaadja
ezeket egy tömbben, növekvő sorrendben! Ügyelj arra, hogy a számok között ne legyen ismétlődés (minden
számot csak egyszer jelölhetünk meg)! A megoldást tesztelje, ha hibákat talál javítsa ki, beadandó egy GitHub
repo címe.

4) Full stack
Jónás, a csokigyáros el szeretné készíteni a vállalkozásának a weboldalát, ezért webfejlesztőket keres. A
munkára beadott jelentkezések elbírálásakor Jónás előnyben részesíti azokat a fejlesztőket, akik a frontendhez
és a back-endhez is értenek ("full stack fejlesztők").
Írj egy fullStack nevű függvényt, amely két szöveget kap paraméterül: az első szövegben a front-end, míg a
második szövegben a back-end fejlesztők nevei szerepelnek pontosvesszőkkel elválasztva! A függvény adja
vissza egy tömbben azoknak a nevét, akik a front-end és back-end fejlesztők között is szerepelnek! A
megoldást tesztelje, ha hibákat talál javítsa ki, beadandó egy GitHub repo címe.

Példa:
Input: 'Zsiros B. Odon;Koaxk Abel;Heu Reka;Riz Otto', 'Riz Otto;Rabsz
Olga;Trab Antal;Koaxk Abel;Winch Eszter'
Return: ['Koaxk Abel', 'Riz Otto']
Input: 'Citad Ella;Techno Kolos', 'Git Aron;Teask Anna'
Return: []

5) Json feldolgozás
Általános leírás
Készítsen egy modern Weboldalt. A weboldalona felhasználók könnyedén böngészhetik a bérelhető irodákat,
illetve bérlést is kezdeményezhetnek.
Feladatok
1. Irodák listázása
• Hozzon létre egy komponenst, amely megjeleníti a bérelhető irodákat.
• Az irodák adatai egy külső forrásból érhetők el:
https://p161-7ddfd-default-rtdb.europe-west1.firebasedatabase.app/offices.json (GET kérés).
• A letöltött adatok JSON formátumban állnak rendelkezésre.
2. Design és esztétika
• Az alább megadott minták irányadóak, de nem kötelező szigorúan követni őket.
• Törekedjen az ízléses, letisztult, modern megjelenésre.
Technikai követelmények
• A megoldásokat töltsd fel publikus GitHub tárolóba, és add le a Classroom rendszerében a repo címét
• Minden feladathoz csak egy megoldás fogadható el.
• A javítás során kizárólag az utolsó commit kerül figyelembevételre.
• Csak a szintaktikai hibamentes, leforduló projektek kerülnek javításra.

A fejlesztés során kiemelt figyelmet fordítson a kód olvashatóságára, a helyes komponensstruktúrára, és a
reszponzív megjelenésre!
