const rootURL = "http://localhost:3000/";
const testMonster = {"name":"Chronos", "age": "4005", "description": "god of time","id" : 1}
const testMonsterArray = [
    {
        "name": "Chronos",
        "age": 4005.302453418598,
        "description": "Effulgence eldritch shunned foetid. Ululate gibbering tenebrous foetid iridescence daemoniac. Stench nameless gambrel. Amorphous furtive iridescence noisome. Foetid mortal nameless.",
        "id": 1
    },
    {
        "name": "Tartarus",
        "age": 1874.4913565609456,
        "description": "Cyclopean swarthy amorphous singular accursed furtive non-euclidean stygian. Swarthy gibbering charnel eldritch daemoniac gibbous. Cyclopean lurk hideous tentacles squamous immemorial tenebrous mortal. Madness tentacles furtive mortal foetid decadent. Foetid immemorial comprehension.",
        "id": 2
    },
    {
        "name": "Hemera",
        "age": 4094.8375978925988,
        "description": "Dank immemorial abnormal gambrel. Cat lurk unutterable. Abnormal tenebrous ululate. Nameless swarthy manuscript eldritch indescribable accursed antediluvian decadent.",
        "id": 3
    }
        
]       

function getMonsters(page){
    const builtURL = '${rootURL} monsters/?_limit=30&_page=${page}';
    return fetch(builtURL)
        .then(r =>r.json())
}

function createMonsterDiv (monsterObj){
    const div = document.createElement('div'),
        h2 = document.createElement('h2'),
        h3 = document.createElement('h3'),
        p = document.createElement('p');
    h2.textContent = monsterObj.name;
    h3.textContent = monsterObj.age;
    p.textContent = monsterObj.description;
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    return div;
}

function showMonsters(monstersArray) {
    const monsterContainer = document.getElementById('monster-container');
    monstersArray.forEach(monsterObj => {
        const monsterDiv = createMonsterDiv(monsterObj);
        monsterContainer.appendChild(monsterDiv);
        });
    }

getMonsters().then(showMonsters);   