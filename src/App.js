import "./styles/styles.scss"
import Curso from './Curso'

function App() {
  return (
    <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" alt="laimagen" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Bienvenido</p>
              <p> Tu futuro esta cerca</p>
              <a href="/entrando" className="button">Ingresar</a>
            </div>
        </div>
      </div>
    </div>

    <div className="ed-grid m-grid-3">
      <Curso title="React desde cero" image="https://ux.ed.team/img/curso-portada.png" price="20 usd" 
        profesor="Tio Gallo"
      />
      <Curso title="MarkDown gratis" image="https://edteam-media.s3.amazonaws.com/courses/medium/2c2c7a26-3dc2-4d61-a165-7b9de73420ce.png" 
        price="gratis" profesor="Tio Gallo Tambien"
      />
      {/* Componente sin props */}
      <Curso />
    </div>

    </>
  );
}

export default App;
