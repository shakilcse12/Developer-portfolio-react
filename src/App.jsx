import './App.css'
import Nav from './components/Nav';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Summary from './components/Summary';
import Footer from './components/Footer';
function App() {

  return (
    <>

  <div className="font-open-sans">

  
    <Nav /> 
  

     

    
    <main className="max-w-[1140px] mx-auto">
        
        <Intro />
        
        <Experience />

        
        <Summary />
    </main>

   
    <Footer />

</div>



    </>
  )
}

export default App
