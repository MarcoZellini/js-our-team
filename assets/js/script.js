/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    
    MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite.
    
    MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
    
    BONUS 1:
    Trasformare la stringa foto in una immagine effettiva
    
    BONUS 2:
    Organizzare i singoli membri in card/schede
    Consigli del giorno:
    Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
    E ricordiamoci che console.log() è nostro amico!
    Buon divertimento e confermate lettura come al solito!
    
    Dati:

    Wayne Barnett
    Founder & CEO	
    wayne-barnett-founder-ceo.jpg

    Angela Caroll	
    Chief Editor	
    angela-caroll-chief-editor.jpg

    Walter Gordon
    Office Manager
    walter-gordon-office-manager.jpg

    Angela Lopez
    Social Media Manager	
    angela-lopez-social-media-manager.jpg

    Scott Estrada	
    Developer	
    scott-estrada-developer.jpg

    Barbara Ramos	
    Graphic Designer	
    barbara-ramos-graphic-designer.jpg
*/

/* 
    MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite.
*/
const dipendenti = [

    {
        fullName: 'Wayne Barnett',
        job: 'Founder & CEO',
        image: './assets/img/wayne-barnett-founder-ceo.jpg'
    },

    {
        fullName: 'Angela Caroll',
        job: 'Chief Editor',
        image: './assets/img/angela-caroll-chief-editor.jpg'
    },

    {
        fullName: 'Walter Gordon',
        job: 'Office Manager',
        image: './assets/img/walter-gordon-office-manager.jpg'
    },

    {
        fullName: 'Angela Lopez',
        job: 'Social Media Manager',
        image: './assets/img/angela-lopez-social-media-manager.jpg'
    },

    {
        fullName: 'Scott Estrada',
        job: 'Developer',
        image: './assets/img/scott-estrada-developer.jpg'
    },

    {
        fullName: 'Barbara Ramos',
        job: 'Graphic Designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg'
    },
];

/* 
    MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
*/

for (let i = 0; i < dipendenti.length; i++) {
    const dipendente = dipendenti[i];
    
    for (const key in dipendente) {
        console.log(`key - ${key} : value - ${dipendente[key]}`);
    }
}