import "./styles/styles.scss"
import Banner from "./Banner"
import Formulario from "./Formulario"
import CourseGrid from "./CourseGrid"
import Course from "./Course"
import MainMenu from "./MainMenu"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact  component={ Banner } />
        <Route path="/cursos/:id" component={ Course } />
        <Route path="/cursos"  component={ CourseGrid } />
        <Route path="/formulario" component={ () => <Formulario name="Inscripcion contacto" /> } />
        <Route component={ () => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Pagina No encontrada</span>
          </div>
        )} />
      </Switch>
    </Router>
  );
}

export default App;
