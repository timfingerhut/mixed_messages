// define message database containing a number of quotes
let messages = ['Vor dem Spiel ist nach dem Spiel', 
                'Mailand oder Madrid, Hauptsache Italien', 
                'Wir brauchen Eier',
                'Wir müssen jetzt die Köpfe hochkrempeln – und die Ärmel auch.',
                'Es ist wichtig, dass man neunzig Minuten mit voller Konzentration an das nächste Spiel denkt']

// select random message
var randomMessage = messages[Math.floor(Math.random()*messages.length)];

// log the output to the console
console.log('Dein persönliches Fußballer-Zitat des Tages: '+randomMessage)