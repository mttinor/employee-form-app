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


// ======================================
interface MessageProps {
  HubConnecttion:signalR.HubConnection
}
const Messages :React.FC<MessageProps> = (messageProps)=>{
  const [itemDate,setItemDate] = useState<Date>();

  useEffect(()=>{
    messageProps.HubConnecttion.on("send",message =>{
      console.log(message,"message on send");
      setItemDate(new Date())
    })
  },[])

  return (<>
    <h1>test my connection</h1>
  </>)
}
// ======================================
interface MessageProps {
  HubConnecttion:signalR.HubConnection
}
const SendMessage :React.FC = ()=>{
  const [message,setMessage] = useState<string>("");
  const messageChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    if(event && event.target){
      const {value} = event.target
      setMessage(value)
    }
  }
  
  const messageSubmit = (event:React.MouseEvent)=>{
    if(event){
      fetch("http://172.24.0.38:8910/notifications",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        body:
          JSON.stringify({
            message:message
          })
      })
      setMessage("")
    }
  }

  return (<>
   <div>
    <label htmlFor="">entermessage</label>
    <input type="text" onChange={messageChange} value={message}/>
    <button onClick={messageSubmit}>send message</button>
   </div>
  </>)
}
// ======================================

const App:React.FC = ()=>{
  const hubConnection = new signalR.HubConnectionBuilder().withUrl("http://172.24.0.38:8910/notifications").build()
  hubConnection.start()
  return (<>
  <SendMessage/>
   <Messages HubConnecttion={hubConnection}/>
  </>)
}


export default App

