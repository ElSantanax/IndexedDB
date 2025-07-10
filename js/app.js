function crmDB() {
    // Crear base de datos versión 1.0
    let crmDB = window.indexedDB.open('crm', 1)

    // Si hay error
    crmDB.onerror = function () {
        console.log('Error en la creación de la Base de Datos');
    }

    // Si se creo bien.
    crmDB.onsuccess = function () {
        console.log('Bases de Datos creada correctamente');
    }

    // Configuración de la base de datos
    crmDB.onupgradeneeded = function (e) {

        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('correo', 'correo', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creada');
    }
}

crmDB();