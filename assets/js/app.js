// Offline-stöd genom att ladda service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registrerad'))
      .catch(error => console.log('Service Worker registrering misslyckades:', error));
  }
  
  document.getElementById('add-favorite-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
  
    addFavorite(title, description);
  
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
  });
  
  function addFavorite(title, description) {
    const favoriteList = document.getElementById('favorites-list');
  
    const li = document.createElement('li');
    li.textContent = `${title} - ${description}`;
    favoriteList.appendChild(li);
  
    saveToLocalStorage(title, description);
  }
  
  function saveToLocalStorage(title, description) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push({ title, description });
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoriteList = document.getElementById('favorites-list');
  
    favorites.forEach(fav => {
      const li = document.createElement('li');
      li.textContent = `${fav.title} - ${fav.description}`;
      favoriteList.appendChild(li);
    });
  }
  
  // Ladda favoritlistan vid sidans start
  window.addEventListener('load', loadFavorites);
  