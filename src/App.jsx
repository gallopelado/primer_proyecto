import "./styles/styles.scss"
import Banner from "./Banner"
import Form from "./Form"
import CourseGrid from "./CourseGrid"
import Course from "./Course"
import MainMenu from "./MainMenu"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import History from "./History"

function App() {
  return (
    <Router>
      <MainMenu />
      <Switch>
        <Route path="/" exact  component={ Banner } />
        <Route path="/cursos/:id" component={ Course } />
        <Route path="/cursos"  component={ CourseGrid } />
        <Route path="/historial/:id"  component={ History } />
        <Route path="/historial"  component={ History } />
        <Route path="/formulario" component={ () => <Form name="Inscripcion contacto" /> } />
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
