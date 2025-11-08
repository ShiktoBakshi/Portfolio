
import './App.css'
import ParticleBackground from './Components/Component/ParticleBackground'
import Nav from './Components/Component/Nav'
import Banner from './Components/Component/Banner'
import About from './Components/Component/About'
import Technology from './Components/Component/Technology'
import Education from './Components/Component/Education'
import Contact from './Components/Component/Contact'
import Footer from './Components/Component/Footer'





function App() {



  return (
    <>
     



      <nav>
        <Nav></Nav>
      </nav>
      <main>
        <ParticleBackground></ParticleBackground>
        <Banner></Banner>
       <About></About>
       <Education></Education>
       <Technology></Technology>
       <Contact></Contact>
       <Footer></Footer>
       
      </main>

    </>
  )
}

export default App
