import React from 'react'

const { nombres, apellidos, edad } = { nombres: 'Juan Jose', apellidos: 'Gonzalez Ramirez', edad: 28}

const Curso = () => (
    <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src="https://ux.ed.team/img/curso-portada.png" alt="imagen" />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">
            { `${nombres} ${apellidos}` } y { edad > 18 ? 'soy mayor de edad' : 'No soy mayor de edad' }
          </h3>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="/comprar">$ 20USD</a>
          </div>
        </div>
    </article>
)

export default Curso;
