function crmDB() {
    // Crear base de datos versión 1
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
    crmDB.onupgradeneeded = function () {
        console.log('Este metodo solo se ejecuta una vez');
    }
}

crmDB();