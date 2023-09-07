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
    }
];

/* 
    MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
*/

/* for (let i = 0; i < teamWork.length; i++) {
    const dipendente = teamWork[i];
    
    for (const key in dipendente) {
        console.log(`key - ${key} : value - ${dipendente[key]}`);
    }
} */

/* 
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

/* 
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
*/

/* 
    BONUS 1:
    Trasformare la stringa foto in una immagine effettiva
    
    BONUS 2:
    Organizzare i singoli membri in card/schede
*/

//Definisco gli elementi di cui ho bisogno
const teamworkElement = document.getElementById('teamwork');
const rowElement = document.createElement('div');

//Aggiungo le classi CSS agli elementi che ho definito
teamworkElement.classList.add('container', 'my-5');
rowElement.classList.add('row', 'g-5', 'justify-conntent-center', 'm-auto');

//Mostro in pagina gli elementi creati
teamworkElement.append(rowElement);
updateWorkerTable(teamWork, rowElement);

const formElement = document.querySelector('form');

//Aggiungo un ascoltatore: Quando eseguo l'evento sumbit sulla form faccio...
formElement.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullNameElement = document.getElementById('full-name');
    const jobElement = document.getElementById('job');

    fullNameValue = fullNameElement.value;
    jobValue = jobElement.value;

    addWorker(teamWork, fullNameValue, jobValue);
    updateWorkerTable(teamWork, rowElement);

    console.log(teamWork);
});


/**
 * ## addWorker
 * > This function add a worker to a given List 
 * @param {Object[]} teamWork Workers' List to update
 * @param {String} name Worker name
 * @param {String} position Worker position
 */
function addWorker(teamWork, name, position) {

    const worker = {
        fullName: name,
        job: position,
        image: `https://picsum.photos/400/429?random=${Math.ceil(Math.random() * 10)}`
    }

    teamWork.push(worker);
}


/**
 * ### updateWorkerTable
 * > This function update the workers table HTML structure
 * @param {Object[]} teamWork Workers' List
 * @param {Object} rowElement Element to be written
 */
function updateWorkerTable(teamWork, rowElement) {

    //Azzero l'area della DOM dove andro' a scrivere
    rowElement.innerHTML = '';

    for (let i = 0; i < teamWork.length; i++) {
        //Definisco gli elementi di cui ho bisogno
        const worker = teamWork[i];
        const col4Element = document.createElement('div');
        const cardElement = document.createElement('div');
        const cardImgElement = document.createElement('div');
        const imgElement = document.createElement('img');
        const cardBodyElement = document.createElement('div');
        const listGroupElement = document.createElement('ul');


        //Aggiungo le classi CSS agli elementi che ho definito
        col4Element.classList.add('col-4');
        cardElement.classList.add('card');
        // cardImgElement.classList.add('card-img-top');
        cardBodyElement.classList.add('card-body');
        imgElement.classList.add('img-fluid', 'card-img-top');
        listGroupElement.classList.add('list-group');


        //Aggiungo gli attributi agli elementi della DOM creati
        imgElement.setAttribute('src', worker.image);

        //Mostro in pagina gli elementi creati
        rowElement.append(col4Element);
        col4Element.append(cardElement);
        cardElement.append(cardImgElement);
        cardImgElement.append(imgElement);
        cardElement.append(cardBodyElement);
        cardBodyElement.append(listGroupElement);

        for (const key in worker) {
            //controllo se la chiave ' job o fullName, l'immagine non mi serve
            if (key === 'job' || key === 'fullName') {
                //Definisco gli elementi di cui ho bisogno
                const listGroupItemElement = document.createElement('li');

                //Aggiungo le classi CSS agli elementi che ho definito
                listGroupItemElement.classList.add('list-group-item');

                //Mostro in pagina gli elementi creati
                listGroupElement.append(listGroupItemElement)
                listGroupItemElement.append(worker[key]);
            }
        }
    }
}
