import {Fragment} from 'react';
import "./styles/styles.scss"

function App() {
  return (
    <Fragment>
      <div>
        <h1>Hola mundo desde App.js</h1>
        <p>Saludando desde mi componente</p>
      </div>
      <div>
        <h1>Hola soy otro div</h1>
        <p>Saludando desde mi componente</p>
      </div>
      <div>
        <img src="https://ux.ed.team/img/curso-portada.png" alt="prueba" />
      </div>
    </Fragment>
  );
}

export default App;
