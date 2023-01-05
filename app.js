document.addEventListener('DOMContentLoaded', () => {
  registerServiceWorker();
});

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('https://jean-emmery.github.io/web_mobile_tp1/sw.js', {
        scope: 'https://jean-emmery.github.io/web_mobile_tp1/',
      });
      if (registration.installing) {
        console.log('Installation du service worker en cours');
      } else if (registration.waiting) {
        console.log('Service worker installé');
      } else if (registration.active) {
        console.log('Service worker actif');
      }
    } catch (error) {
      console.error(`L'enregistrement a échoué : ${error}`);
    }
  }
};

function updateOnlineStatus() {
  let condition = navigator.onLine ? 'online' : 'offline';

  if (condition === 'online') {
    console.log('Online status');
  } else if (condition === 'offline') {
    console.log('Offline status');
  }
}
updateOnlineStatus();
