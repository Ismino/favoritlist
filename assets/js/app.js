//Offline-stöd genom att ladda service worker
if ('serviceWorker') in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
     .then(() => console.log('Service Worker registrerad'))
     .catch(error => console.log('Server Worker registreringen misslyckades'))
}

document.getElementById('add-favorite-form').addEventListener('')