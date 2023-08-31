export function openDatabase() {
  const request = indexedDB.open('famouser', 1);

  return new Promise((resolve, reject) => {
    request.onerror = (event) => {
      reject('Error opening database');
    };

    request.onsuccess = (event) => {
      const database = event.target.result;
      resolve(database);
    };

    request.onupgradeneeded = (event) => {
      const database = event.target.result;
      if (!database.objectStoreNames.contains('celebrities')) {
        database.createObjectStore('celebrities', { keyPath: "id", autoIncrement: true });
      }
    };
  });
}

export function addUser(database, celebrity) {
  const store = database.transaction(['celebrities'], 'readwrite').objectStore('celebrities');
  const celebrities = store.getAll();

  return new Promise((resolve, reject) => {
    celebrities.onsuccess = (event) => {
      const celebrityExists = event.target.result.some(c => c.name === celebrity.name);
  
      if (!celebrityExists) {
        store.add(celebrity);
        resolve(celebrity);
      } else {
        reject(`Celebrity already exists ${celebrity}`)
      }
    };
  });
}

export function getCelebrities(db) {
  const transaction = db.transaction(['celebrities'], 'readonly');
  const store = transaction.objectStore('celebrities');
  const request = store.getAll();

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      resolve(event.target.result.map(celebrity => {
        return {
          key: celebrity.id,
          value: celebrity.name
        };
      }));
    }

    request.onerror = (event) => {
      reject(`Error getting favorites celebrities - ${event}`)
    }
  });
}

export function deleteCelebrity(db, key) {
  const request = db.transaction(['celebrities'], 'readwrite').objectStore('celebrities').delete(key);

  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      resolve(`Record deleted ${event}`)
    };
    request.onerror = (event) => {
      reject(`Error deleting - ${event}`)
    }
  });
}

export function isFavorite(db, celeb) {
  const request = db.transaction(['celebrities'], 'readonly').objectStore('celebrities').getAll();
  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const any = event.target.result.some(celebrity => celebrity.name === celeb)
      resolve(any)
    }
  });
}