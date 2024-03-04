import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header"
import KisiEkle from "./components/KisiEkle";
function App() {

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/baslik" element= {<Header/>} />
        <Route path="/kisiEkle" element= { <KisiEkle/>} />
      </Routes>
    
  </BrowserRouter>
  )
}

export default App
