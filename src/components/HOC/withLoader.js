import React, {Component} from 'react'

const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {

        validarData() {
            if(this.props[propValue].length===0) {
                return <h2 className="t3">Cargando...</h2>
            }
            return <WrappedComponent {...this.props} />
        }

        render() {
            return this.validarData()
        }
    }
}

export default withLoader