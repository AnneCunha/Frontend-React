
import Home from "./components/pages/Home"
import QuemSomos from "./components/pages/QuemSomos"
import Page404 from "./components/pages/Page404"

import { Routes, Route } from "react-router-dom"
import "./App.css"
import Contatos from "./components/pages/Contatos"
import Feedback from "./components/pages/Feedback"

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/quem-somos" element={ <QuemSomos />} />
    <Route path="*" element = { <Page404 />} />
    <Route path="contatos" element = { <Contatos />} />
    <Route path="Feedback" element = { <Feedback /> } />
    </Routes>
  )
}

export default App

