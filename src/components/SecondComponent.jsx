export const SecondComponent = () => {

  const books = [
    "Harry Potter y la piedra filosofal",
    "Harry Potter y la cámara secreta",
    "Harry Potter y el prisionero de Azkaban",
    "Harry Potter y el cáliz de fuego",
    "Harry Potter y la Orden del Fénix",
    "Harry Potter y el misterio del Príncipe",
    "Harry Potter y las Reliquias de la Muerte",
    "Animales Fantásticos y dónde encontrarlos",
    "Otro libro"
    ];
    

// conddicional ternario = condicion ? (si_verdadero) : (si_falso)


  return (
    <>
      <h1>SecondComponent</h1>
      <div>
        <ul>
          {books.length >= 1 ?
            (
                books.map((book, index) => {
                  return <li key={ index }> { book } </li>
                })
            ) :
            (
              <p>No existen libros</p>
            )
          }
        </ul>
      </div>
    </>
  )
}



export const MyFirstComponent = () => {

  const name = "Inés María Oliveros";

  const github_profile = "https://github.com/inesmariao";

  const student = {
    name: "Diana ",
    last_name: "Arévalo",
    mobile: "300000000",
    linkedin_profile: "https://www.linkedin.com/in/diana-arevalo-168b0925b"
  };

  return (
    <>
      <div>MyFirstComponent</div>
      <div className="container bg-info-subtle mt-4">
        <h1>Temas de React</h1>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados Hooks</li>
            <li>Props</li>
        </ul>
      </div>
      <div className="container bg-warning-subtle py-2">
        <h1>Datos del Docente</h1>
        <p>Nombre: <strong>{ name }</strong></p>
        <p>GitHub: { github_profile } </p>
      </div>
      <div className="container bg-success-subtle py-2">
        <h1>Datos del Estudiante</h1>
        <p>Nombre: <strong>{ student.name }</strong></p>
        <p>Apellido: { student.last_name } </p>
        <p>Celular: { student.mobile } </p>
        <p>LinkedIn: <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a> </p>
      </div>
      <div>
        <h1>Objeto Completo</h1>
        <pre>{JSON.stringify(student)} </pre>
      </div>
    </>
  )
}
