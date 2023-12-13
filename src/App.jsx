import Formulario from "./components/Formulario"
import Registro from "./components/Registro"
import './App.css'

function App() {

  return (
    <>
      
      <div className="card-registro">
        <h1>Crea una cuenta</h1>
        <Registro icono1="insta" icono2="facebook" icono3="twiter"/>
        <h4>O usa tu email para registrarte</h4>
        <Formulario/>
      </div>
    </>
  )
}

export default App
