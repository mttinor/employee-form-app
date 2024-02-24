// console.log("mehdi backgound");
self.addEventListener("fetch",async fetchEvent => {
  console.log(fetchEvent,11);
  // setInterval(()=>{
  //   console.log('mehdi');
  // },3000)
  // const response=await  fetch("https://jsonplaceholder.typicode.com/todos/1")
  // const movies = await response.json();
  // console.log(movies,"data");
  // const notificationTitle = 'payload.notification.title';
  // const notificationOptions = {
  // body: 'payload.notification.body',
  // // icon: "/logo.svg",
  // };
  // self.registration.showNotification(notificationTitle, notificationOptions)
})
self.addEventListener("push", (event) => {
  const payload = event.data?.text() ?? "no payload";
  event.waitUntil(
    self.registration.showNotification("ServiceWorker Cookbook", {
      body: payload,
    }),
  );
 
});




// importScripts('@microsoft/signalr');
// import * as signalR from "@microsoft/signalr"
// const signalR = require("@microsoft/signalr");
// const hubConnection = new signalR.HubConnectionBuilder().withUrl("http://172.24.0.38:8910/notifications/").build()


// hubConnection.start().then(() => {
//   const connectionId = hubConnection.connectionId;
//   console.log('Connected to SignalR hub. Connection ID: test',connectionId);
// })


// hubConnection.on("ReceiverNotification", data => {
//   console.log(data);
//     const notificationTitle = 'mehdi';
//     const notificationOptions = {
//     body: 'mehdi',
//     // icon: "/logo.svg",
//     };
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });