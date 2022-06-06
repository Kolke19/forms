// import logo from "./logo.svg";
// import "./App.css";
import { useState } from "react";
import { requiredStrings } from "./utils/forms";

function App() {
  const initialFormValue = {
    name: "",
    lastname: "",
    age: 0,
  };
  const [form, setForm] = useState(initialFormValue);
  const [errors, setErrors] = useState({});
  // const [name, setName] = useState("kolke");

  //comentario: crear la funcion setName..
  // const handleOnChange = (e) => {
  //   setName(e.target.value);
  // };

  // const [lastName, setLastName] = useState("");

  // const [age, setAge] = useState(0);

  // const handleAge = (e) => {
  //   setAge(e.target.value);
  // };

  // const handleLastName = (e) => {
  //   setLastName(e.target.value);
  // };
  const handleOnBlur = (e) => {
    if (e.target.value === "" || Number(e.target.value) === 0) {
      setErrors({
        ...errors,
        [e.target.name]: `el ${e.target.name} es obligatorio`,
      });
    } else {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };
  const handleChange = (e) => {
    console.log(e.target.name);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //Simulando que enviamos los datos al backend
  const handleSubmit = (e) => {
    e.preventDefault(); //mirar bien como escribimos metodos, si no no funcionan
    console.log("enviando", form);
    setForm(initialFormValue); //De esta manera reseteo los valores al darle submit.
    // form.setName(""); //aca seteamos para que el campo pase a estar vacio
    // form.setLastName(""); //limpiando el input de lastName
    // form.setAge(0);
    // if (requiredStrings(form)) {
    //   setErrors("Los campos no pueden estar vacios");
    //   return;
    // }
    // setErrors(null); // esto hara que si los campos contienen datos desaparezca el mensaje de eroor
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
              name="name"
              type="text"
              placeholder="Put your name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <p>{errors.name && <p>{errors.name}</p>}</p>
            <br />
            <label>Apellido</label>
            <br />
            <input
              name="lastname"
              type="text"
              placeholder="ingrese su apellido.."
              value={form.lastname}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <p>{errors.lastname && <p>{errors.lastname}</p>}</p>
            <br />
            <label>Age</label>
            <br />
            <input
              name="age"
              type="number"
              placeholder="put your age .."
              value={form.age}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
            <p>{errors.age && <p>{errors.age}</p>}</p>
          </div>
          {/* {errors && <p>{errors}</p>} */}
          <button
            disabled={Object.values(form).some(
              (value) => value === "" || value === 0
            )} //basicamente lo que estoy diciendo es que si el valor del input esta vacio o esta en 0
            //desactivame el boton submit
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div></div>
    </>
  );
}

export default App;
