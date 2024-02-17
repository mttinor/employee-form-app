import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import NoPage from "./pages/NoPage";
import "./firebase";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
function App() {
  function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted...");
        if (navigator.userAgent.match(/Android/i)) {
          toast("سلام خوش حالم که با گوشی وارد سایت ما شدی ");
        } else {
          toast("سلام خوش حالم که ار آخرین اخبار   سایت ما با خبر میشی ");
        }
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
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
