import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/css/global.css";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
  onOfflineReady(){
    console.log(111);
    
  }
});
console.log("369");


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered",res))
      .catch(err => console.log("service worker not registered", err))
  })
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
