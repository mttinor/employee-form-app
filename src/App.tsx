// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Admin from "./pages/Admin";
// import NoPage from "./pages/NoPage";
// import "./firebase";
// import { useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
// function App() {
//   function requestPermission() {
//     console.log("Requesting permission...");
//     Notification.requestPermission().then((permission) => {
//       if (permission === "granted") {
//         console.log("Notification permission granted...");
//         if (navigator.userAgent.match(/Android/i)) {
//           toast("سلام خوش حالم که با گوشی وارد سایت ما شدی ");
//         } else {
//           toast("سلام خوش حالم که از آخرین اخبار   سایت ما با خبر میشی ");
//         }
//       } else {
//         console.log("Do not have permissions");
//         alert("لطفا برای دریافت اخرین اخبار  نوتیفیکشن را فعال کنید ");
//       }
//     });
//   }
//   useEffect(() => {
//     requestPermission();
//   });

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route index element={<Home />} />
//         <Route path="admin" element={<Admin />} />
//         <Route path="*" element={<NoPage />} />
//       </Routes>
//       <Toaster />
//     </BrowserRouter>
//   );
// }

// export default App;
import * as signalR from "@microsoft/signalr"
import React,{ useEffect,useState } from "react";

// import { registerSW } from "virtual:pwa-register";
// ======================================
interface MessageProps {
  HubConnecttion:signalR.HubConnection
}
const Messages :React.FC<MessageProps> = (messageProps)=>{
  interface itemsMessages {
    message:string
  }
  
  const [itemDate,setItemDate] = useState<string>("");
  const [messages,serMessages] = useState<string>("");
  const [isFlag,setIsFlag] = useState<boolean>(false);
  const [items,setItems] = useState<itemsMessages[]>([]);



  useEffect(()=>{
    
    messageProps.HubConnecttion.on("ReceiverNotification",message =>{
      console.log(message,"message on send");
      setIsFlag(true)
      serMessages(prev=>`${message}${prev}`)
      setItems([...items,{message}])
      setItemDate(`${new Date()}`)
    })
  },[])

  const showNotif = ()=>{
    new Notification(messages)
    setIsFlag(false)
  }

  useEffect(()=>{
    showNotif()
    console.log(isFlag);
    
  },[isFlag])

  return (<>
    <h1>test my connection {itemDate}</h1>
    <p>{messages}</p>
    <ul>
      {items.map((x,i)=><li key={i}>{x?.message}</li>)}
      
    </ul>
  </>)
}
// ======================================
// interface MessageProps {
//   HubConnecttion:signalR.HubConnection
// }
// const SendMessage :React.FC = ()=>{
//   const [message,setMessage] = useState<string>("");
//   const messageChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
//     if(event && event.target){
//       const {value} = event.target
//       setMessage(value)
//     }
//   }
  
//   const messageSubmit = (event:React.MouseEvent)=>{
//     if(event){
//       fetch("http://172.24.0.38:8910/notifications",{
//         method:"POST",
//         headers:{
//           Accept:"application/json",
//           "Content-Type":"application/json"
//         },
//         body:
//           JSON.stringify({
//             message:message
//           })
//       })
//       setMessage("")
//     }
//   }

//   return (<>
//    <div>
//     <label htmlFor="">entermessage</label>
//     <input type="text" onChange={messageChange} value={message}/>
//     <button onClick={messageSubmit}>send message</button>
//    </div>
//   </>)
// }
// ======================================

const App:React.FC = ()=>{
  const hubConnection = new signalR.HubConnectionBuilder().withUrl("http://172.24.0.38:8910/notifications/").build()
  hubConnection.start().then(() => {
    const connectionId = hubConnection.connectionId;
    console.log('Connected to SignalR hub. Connection ID:',connectionId);
  })
  .catch(error => console.error(error)); 
  
    function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted...");
        if (navigator.userAgent.match(/Android/i)) {
          console.log("سلام خوش حالم که با گوشی وارد سایت ما شدی ");
        } else {
          console.log("سلام خوش حالم که از آخرین اخبار   سایت ما با خبر میشی ");
        }
      } else {
        console.log("Do not have permissions");
        alert("لطفا برای دریافت اخرین اخبار  نوتیفیکشن را فعال کنید ");
      }
    });
  }
  useEffect(() => {
    requestPermission();
    // registerPeriodicSync()
    // navigator.serviceWorker.ready.then(async (swReg) => {
    //   const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', ['/ep-5.mp3', 'ep-5-artwork.jpg'], {
    //     title: 'Episode 5: Interesting things.',
    //     icons: [{
    //       sizes: '300x300',
    //       src: '/ep-5-icon.png',
    //       type: 'image/png',
    //     }],
    //     downloadTotal: 60 * 1024 * 1024,
    //   });
    // });
  },[]);

  // const updateSW = registerSW({
  //   // onNeedRefresh() {
  //   //   if (confirm("New content available. Reload?")) {
  //   //     updateSW(true);
  //   //   }
  //   // },
  //   onOfflineReady(){
  //     fetchPWa()
  //   }
  // });
  return (<>

   <Messages HubConnecttion={hubConnection}/>
  </>)
}


export default App

