import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("kolke");

  //comentario: crear la funcion setName..
  // const handleOnChange = (e) => {
  //   setName(e.target.value);
  // };

  const [lastName, setLastName] = useState("");

  const [age, setAge] = useState(0);

  // const handleAge = (e) => {
  //   setAge(e.target.value);
  // };

  // const handleLastName = (e) => {
  //   setLastName(e.target.value);
  // };
  //Simulando que enviamos los datos al backend
  const handleSubmit = (e) => {
    e.preventDefault(); //mirar bien como escribimos metodos, si no no funcionan
    console.log("enviando...", { name, lastName, age });
    setName(""); //aca seteamos para que el campo pase a estar vacio
    setLastName(""); //limpiando el input de lastName
    setAge(0);
  };

  return (
    <>
      <div>
        <h1>hola desde mi formulario</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre</label>
            <br />
            <input
              id="name"
              type="text"
              placeholder="Put your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Apellido</label>
            <br />
            <input
              id="lastName"
              type="text"
              placeholder="ingrese su apellido.."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <label>Age</label>
            <br />
            <input
              id="age"
              type="number"
              placeholder="put your age .."
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div></div>
    </>
  );
}

export default App;
