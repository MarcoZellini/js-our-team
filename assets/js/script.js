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
const teamWork = [

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

for (let i = 0; i < teamWork.length; i++) {
    const dipendente = teamWork[i];
    
    for (const key in dipendente) {
        console.log(`key - ${key} : value - ${dipendente[key]}`);
    }
}

/* 
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
*/
const bodyElement = document.querySelector('body');
const teamWorkList = document.createElement('ul'); //lista di lavoratori

bodyElement.insertAdjacentElement('beforeend', teamWorkList);

for (let i = 0; i < teamWork.length; i++) {
    const dipendente = teamWork[i];
    const teamWorkListItem = document.createElement('li'); //lavoratore singolo
    const workerElement = document.createElement('ul'); //lista che rappresenta le proprieta' di un lavoratore
    
    teamWorkList.append(teamWorkListItem);
    teamWorkListItem.append(workerElement);

    for (const key in dipendente) {
        const workerItem = document.createElement('li'); //proprieta' singola

        workerElement.append(workerItem);
        workerItem.insertAdjacentHTML('beforeend', `<strong>${key}</strong>: ${dipendente[key]}`);
    }
}