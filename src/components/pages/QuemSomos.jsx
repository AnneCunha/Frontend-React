import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"


const QuemSomos = () => {
  return (
    <>
       <Header />
       <div id="main">
        <h1>Quem Somos</h1>
          <Sidebar />
          <Content />
       </div>
       <Footer />
    </>
  )
}

export default QuemSomos