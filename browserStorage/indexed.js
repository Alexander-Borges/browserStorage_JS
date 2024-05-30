const request = indexedDB.open('myDatabase', 1);

request.addEventListener('upgradeneeded', event => {
    const database = event.target.result;
    const store = database.createObjectStore('users',{keyPath: 'id'});
    store.createIndex('name', 'name');

    store.add({
        id: 0,
        name: 'Alex',
        course: 'FrontendExpert'
    });
    store.add ({
        id: 1, 
        name: 'Clement',
        course: 'AlgoExpert'
    });
})