// Questo è il nostro database di mail con l'accesso autorizzato
var listaMail = [
'lukeskywalker@mail.it',
'hansolo@mail.it',
'boolean@mail.it',
'leiaorgana@mail.it',
'bobafett@mail.it'
];
console.log(listaMail);

// Chiediamo all'utente di inserire la propria email
var mailUtente = prompt('Inserisci il tuo indirizzo email');
console.log(mailUtente);

// Verifichiamo se la mail dell'utente è presente nel nostro database
for (var i = 0; i < listaMail.length; i++)
// In caso di corrispondenza, diamo il benvenuto e l'utente è autorizzato ad accedere al sito
if (mailUtente == listaMail[i]) {
    console.log('Benvenuto!');
}
// In caso di non corrispondenza, mostriamo un messaggio di errore
else {
    console.log('La mail che hai inserito è errata');
}
