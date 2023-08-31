import Header from "../layout/Header"
import Sidebar from "../layout/Sidebar"
import Content from "../layout/Content"
import Footer from "../layout/Footer"


const Feedback = () => {
  return (
    <>
       <Header />
       <div id="main">
          <Sidebar />
          <Content>
            <h1>Feedbacks</h1>
          </Content>
       </div>
       <Footer />
    </>
  )
}

export default Feedback