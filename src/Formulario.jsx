import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            correo: '',
            fecha: new Date()
        }
        //Enlazar
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarFecha = this.cambiarFecha.bind(this)
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarCorreo(e) {
        this.setState({
            correo: e.target.value
        })
    }

    cambiarFecha() {
        this.setState({
            fecha: new Date()
        })
    }
    // this.setState({})

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario: {this.props.name}</h1>
                <h2>Fecha: {Math.ceil(this.state.fecha/1000)}</h2>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label htmlFor="">Nombre Completo</label>
                            <input type="text" name="" onChange={ this.cambiarNombre } />
                        </div>
                        <div className="form__item">
                            <label htmlFor="">Correo Electronico</label>
                            <input type="email" onChange={ this.cambiarCorreo } />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{ `Hola ${this.state.nombre}` }</h2>
                    <span>{`Tu correo es: ${this.state.correo}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const elemento = document.getElementById('elemento');
        console.log(elemento);
        this.intervaloFecha = setInterval( () => {
            this.cambiarFecha()
            console.log(new Date());
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        /* console.log('Props: ', prevProps);
        console.log('State: ', prevState);
        console.log('------------------------'); */
    }

    componentWillUnmount() {
        // cuando se desmonta la app, apagamos el interval
        clearInterval(this.intervaloFecha)
    }

}

export default Formulario;