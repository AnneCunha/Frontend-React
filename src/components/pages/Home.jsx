import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"


const Home = () => {
  return (
    <>
       <Header />
       <div id="main">
          <Sidebar />
          <Content>
            <h1>Bem-Vindo!</h1>
            <img src="https://i.pinimg.com/originals/31/fa/01/31fa01bbb94c8df00335bba99fcf2cd8.gif"></img>
          </Content>
       </div>
       <Footer />
    </>
  )
}

export default Home