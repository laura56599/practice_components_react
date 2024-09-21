
export const FourthComponent = () => {

  const handleClicked = (e, name) => {
    alert("Has hecho click en el botón " + name);
  }

  return (
    <div>
      <h1>FourComponent</h1>
      {/* Evento Click */}
      <div>
        <button
          className="btn btn-danger"
          onClick={ () => {
            alert("Hola, soy un evento click");
          }}
        >Haz clic!!
        </button>
      </div>
      <div>
        <button className="btn btn-success" 
          onClick={e => handleClicked(e, "Inés")}>
          ¡Aquí también haz click!
        </button>
      </div>
    </div>
  )
}
