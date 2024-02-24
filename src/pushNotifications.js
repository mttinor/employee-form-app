// pushNotifications.js

export async function subscribeToPushNotifications() {
    // Check if service worker is supported
    if (!('serviceWorker' in navigator)) {
      console.error('Service workers are not supported.');
      return;
    }
  
    try {
      // Register service worker
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service worker registered:', registration);
  
      // Request permission for notifications
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.error('Permission for notifications not granted.');
        return;
      }
  
      // Subscribe to push notifications
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'YOUR_VAPID_PUBLIC_KEY'
      });
  
      // Send subscription data to server
      await sendSubscriptionToServer(subscription);
    } catch (error) {
      console.error('Error subscribing to push notifications:', error);
    }
  }
  
  async function sendSubscriptionToServer(subscription) {
    // Send subscription data to your server
    // Example: Use fetch to send subscription data to your backend
    try {
        const response = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subscription),
        });
        if (response.ok) {
          console.log('Subscription data sent successfully');
        } else {
          console.error('Failed to send subscription data');
        }
      } catch (error) {
        console.error('Error sending subscription data:', error);
      }
  }