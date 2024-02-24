
// import * as signalR from "@microsoft/signalr"
// import React,{ useEffect,useState } from "react";

// // import { registerSW } from "virtual:pwa-register";
// // ======================================
// interface MessageProps {
//   HubConnecttion:signalR.HubConnection
// }
// const Messages :React.FC<MessageProps> = (messageProps)=>{
//   interface itemsMessages {
//     message:string
//   }
  
//   const [itemDate,setItemDate] = useState<string>("");
//   const [messages,serMessages] = useState<string>("");
//   const [countCall,setCountCall] = useState<number>(0);
//   const [items,setItems] = useState<itemsMessages[]>([]);



//   useEffect(()=>{
    
//     messageProps.HubConnecttion.on("ReceiverNotification",message =>{
//       console.log(message,"message on send");
     
//       serMessages(`${message}`)
//       setItems([...items,{message}])
//       setItemDate(`${new Date()}`)
//       setCountCall(prev=>prev+1)
//     })
//   },[])

//   const showNotif = ()=>{
//     new Notification(messages)

//   }

//   useEffect(()=>{
//     showNotif()
  
//   },[countCall])

//   return (<>
//     <h1>test my connection {itemDate}</h1>
//     <p>{messages}</p>
//     <h1>{countCall}</h1>
//     <ul>
//       {items.map((x,i)=><li key={i}>{x?.message}</li>)}
      
//     </ul>
//   </>)
// }
// // ======================================
// // interface MessageProps {
// //   HubConnecttion:signalR.HubConnection
// // }
// // const SendMessage :React.FC = ()=>{
// //   const [message,setMessage] = useState<string>("");
// //   const messageChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
// //     if(event && event.target){
// //       const {value} = event.target
// //       setMessage(value)
// //     }
// //   }
  
// //   const messageSubmit = (event:React.MouseEvent)=>{
// //     if(event){
// //       fetch("http://172.24.0.38:8910/notifications",{
// //         method:"POST",
// //         headers:{
// //           Accept:"application/json",
// //           "Content-Type":"application/json"
// //         },
// //         body:
// //           JSON.stringify({
// //             message:message
// //           })
// //       })
// //       setMessage("")
// //     }
// //   }

// //   return (<>
// //    <div>
// //     <label htmlFor="">entermessage</label>
// //     <input type="text" onChange={messageChange} value={message}/>
// //     <button onClick={messageSubmit}>send message</button>
// //    </div>
// //   </>)
// // }
// // ======================================
// // {"publicKey":"BLUqTl-msl2xAdpuGGz-K43uIvwinOUWiZGVF5lFS6j4j45lggvj0H8u843SSvAGLQv4Qr30rSz6-ySl6oyimgA","privateKey":"hc_woR3ZxBYtajnZn7Bmx2_wvX-HoYLISXHs2z6YJyQ"}
// const App:React.FC = ()=>{
//   const hubConnection = new signalR.HubConnectionBuilder().withUrl("http://172.24.0.38:8910/notifications/").build()
//   hubConnection.start().then(() => {
//     const connectionId = hubConnection.connectionId;
//     console.log('Connected to SignalR hub. Connection ID:',connectionId);
//   })
//   .catch(error => console.error(error)); 
  
//     function requestPermission() {
//     console.log("Requesting permission...");
//     Notification.requestPermission().then((permission) => {
//       if (permission === "granted") {
//         console.log("Notification permission granted...");
//         if (navigator.userAgent.match(/Android/i)) {
//           console.log("سلام خوش حالم که با گوشی وارد سایت ما شدی ");
//         } else {
//           console.log("سلام خوش حالم که از آخرین اخبار   سایت ما با خبر میشی ");
//         }
//       } else {
//         console.log("Do not have permissions");
//         alert("لطفا برای دریافت اخرین اخبار  نوتیفیکشن را فعال کنید ");
//       }
//     });
//   }
//   useEffect(() => {
//     requestPermission();
//     // registerPeriodicSync()
//     // navigator.serviceWorker.ready.then(async (swReg) => {
//     //   const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', ['/ep-5.mp3', 'ep-5-artwork.jpg'], {
//     //     title: 'Episode 5: Interesting things.',
//     //     icons: [{
//     //       sizes: '300x300',
//     //       src: '/ep-5-icon.png',
//     //       type: 'image/png',
//     //     }],
//     //     downloadTotal: 60 * 1024 * 1024,
//     //   });
//     // });
//   },[]);

//   // const updateSW = registerSW({
//   //   // onNeedRefresh() {
//   //   //   if (confirm("New content available. Reload?")) {
//   //   //     updateSW(true);
//   //   //   }
//   //   // },
//   //   onOfflineReady(){
//   //     fetchPWa()
//   //   }
//   // });
//   return (<>

//    <Messages HubConnecttion={hubConnection}/>
//   </>)
// }


// export default App

// import React, { useEffect } from 'react';
// import { subscribeToPushNotifications } from './pushNotifications';

// function App() {
//   useEffect(() => {
//     subscribeToPushNotifications();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Push Notifications Example</h1>
//     </div>
//   );
// }

// export default App;



// src/App.js
import React, { useState } from 'react';

import Notification from './Notification';

function App() {
  const [subscription, setSubscription] = useState(null);

  const subscribe = async () => {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BGvRzo8nMXyVmATOyEwKF_JuqLDuih-CtO21rNQIajRIUsoEcDc6bI8MPCWbzfj0xWRy2dplyAQ8PkrAieYIZ90',
      });
      setSubscription(subscription);
      console.log('Subscription:', subscription);
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  const sendNotification = async () => {
    try {
      await fetch('http://localhost:3001/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscription }),
      });

      await fetch('http://localhost:3001/sendNotification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          notification: {
            title: 'New Notification',
            body: 'This is a push notification!',
          },
        }),
      });
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Push Notification Service</h1>
        <button onClick={subscribe}>Subscribe to Push Notifications</button>
        <button onClick={sendNotification}>Send Notification</button>
        {subscription && (
          <Notification title="Subscription Successful" body="You are now subscribed to push notifications!" />
        )}
      </header>
    </div>
  );
}

export default App;