import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import "./firebase";
import { useEffect } from "react";

function App() {
  function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted...");
        new Notification("به سایت خود خوش امدید");
      } else {
        console.log("Do not have permissions");
        alert("لطفا برای دریافت اخرین اخبار  نوتیفیکشن را فعال کنید ");
      }
    });
  }
  useEffect(() => {
    requestPermission();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="admin" element={<Admin />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
