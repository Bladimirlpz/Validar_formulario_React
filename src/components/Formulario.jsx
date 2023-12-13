import { useState } from "react"
import Alert from "./Alert";

function Formulario (){
    const [Nombre, setNombre] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmarContraseña, setConfirmarContraseña] = useState("")

    const NombreState = (e) => {
        setNombre (e.target.value)
    }
    const EmailState = (e) => {
        setEmail (e.target.value)
    }
    const PasswordState = (e) => {
        setPassword (e.target.value)
    }
    const ConfirmarContraseñaState = (e) => {
        setConfirmarContraseña (e.target.value)
    }


    return (
        <>
            <form className="formulario">
                <input type="text" placeholder="Nombre" value={Nombre} onChange={NombreState} />
                <input type="email" placeholder="tuemail@ejemplo.com" value={Email} onChange={EmailState} />
                <input type="password" placeholder="Contraseña" value={Password} onChange={PasswordState}/>
                <input type="password" placeholder="Confirma tu contraseña" value={ConfirmarContraseña} onChange={ConfirmarContraseñaState}/>
                <button type="submit">Registrarse</button>
                <Alert/>
            </form>
        </>
    )
}

export default Formulario