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
  },[]);

  return (<>
   <Messages HubConnecttion={hubConnection}/>
  </>)
}


export default App

