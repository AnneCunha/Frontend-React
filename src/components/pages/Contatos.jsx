import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"


const Contatos = () => {
  return (
    <>
       <Header />
       <div id="main">
        <h1>Contatos</h1>
          <Sidebar />
          <Content />
       </div>
       <Footer />
    </>
  )
}

export default Contatos