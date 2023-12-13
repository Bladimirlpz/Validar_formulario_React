

// Renderiza los 3 iconos de la app
function SocialButton ({icono1, icono2, icono3}){
    
    return(
        <>
            <div className="iconos">
                <button>{icono1}</button>
                <button>{icono2}</button>
                <button>{icono3}</button>
            </div>  
        </>
    )
}

export default SocialButton