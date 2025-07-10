let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    let crmDB = window.indexedDB.open('crm', 1);

    crmDB.onerror = function () {
        console.log('Error en la creación de la Base de Datos');
    };

    crmDB.onsuccess = function () {
        console.log('Base de Datos creada correctamente');
        DB = crmDB.result;
    };

    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'id',
            autoIncrement: true
        });

        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas');
    };
}

function crearCliente() {
    const transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function () {
        console.log('Transacción completada');
    };

    transaction.onerror = function () {
        console.log('Hubo un error en la transacción');
    };

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 1920394,
        nombre: 'José',
        email: 'correo@correo.com'
    };

    const peticion = objectStore.add(nuevoCliente);

    peticion.onsuccess = function () {
        console.log('Cliente agregado correctamente');
    };

    peticion.onerror = function () {
        console.log('Error al agregar el cliente');
    };
}