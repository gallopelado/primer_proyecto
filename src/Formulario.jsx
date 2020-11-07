import React, {Component} from "react"

class Formulario extends Component {

    constructor(props) {
        super(props)
        this.state = {
            nombre: '',
            correo: ''
        }
        //Enlazar
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
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
    // this.setState({})

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <form>
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
}

export default Formulario;