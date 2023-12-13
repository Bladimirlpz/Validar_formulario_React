import Formulario from "./components/Formulario"
import Registro from "./components/Registro"
import './App.css'

function App() {

  return (
    <>
      
      <div className="card-registro">
        <h1>Crea una cuenta</h1>
        <Registro 
          icono1={<i className="fa-brands fa-facebook fa-2xl"></i>}
          icono2= {<i className="fa-brands fa-github fa-2xl"></i>} 
          icono3= {<i className="fa-brands fa-linkedin-in fa-2xl"></i>}
        />
        <h4>O usa tu email para registrarte</h4>
        <Formulario/>
      </div>
    </>
  )
}

export default App
