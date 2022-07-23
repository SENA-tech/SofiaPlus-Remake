import React from 'react';

//Data
import { mods, FlechaDown } from '../data';

export default function BodyPrincipal() {

    return (

        <div>
            <section className="contenedor">
                <article>
                    <div id="conten-txt">
                        <div className="texto">
                            <h1>!Que le interesa estudiar¡</h1>
                            <h2>
                                Sofia Plus le permite estudiar en la modalidad que mas se acomode
                                a usted
                            </h2>
                        </div>
                        <div id="boton">
                            <button>
                                <img src={FlechaDown} width="25px" />
                                <h1>Busque la modalidad que prefiera</h1>
                                <img src={FlechaDown} width="25px" />
                            </button>
                        </div>
                    </div>

                    <div className="img">
                        <div className="img">
                            {
                                mods.map(e => {
                                    return (
                                        <div key={e.title} className="card">
                                            <img src={e.img} width="200px" />
                                            <div className="details">
                                                <h4>{e.title}</h4>
                                                <p className='details-p'>
                                                    {e.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </article>

                <article className="anun">
                    <div className="anuncios">
                        <img src="img-anuncios/1.png" width="800px" alt="" />
                    </div>

                    <div className="cards-ayuda">
                        <div className="cards-ayuda-1">
                            <figure>
                                <img src="img-anuncios/img (1).png" width="200px" />
                            </figure>
                            <div className="cards-contenido">
                                <h3>Programa de formación.</h3>
                                <div className="card-contenido-txt">
                                    <p>verifique si se encuentra inscrito </p>
                                    <a href=""><img src="img-anuncios/flecha.png " width="50px" /></a>
                                </div>

                            </div>
                        </div>

                        <div className="cards-ayuda-1">
                            <figure>
                                <img src="img-anuncios/img (2).png" width="200px" />
                            </figure>
                            <div className="cards-contenido">
                                <h3>Ayuda y guía.</h3>
                                <div className="card-contenido-txt">
                                    <p>encuentre soluciones a las dudas que tenga sobre sofia plus</p>
                                    <a href=""><img src="img-anuncios/flecha.png " width="50px" /></a>
                                </div>

                            </div>
                        </div>

                        <div className="cards-ayuda-1">
                            <figure>
                                <img src="img-anuncios/img (3).png" width="200px" />
                            </figure>
                            <div className="cards-contenido">
                                <h3>Mas información</h3>
                                <div className="card-contenido-txt">
                                    <p>verifique si se encuentra inscrito </p>
                                    <a href=""><img src="img-anuncios/flecha.png " width="50px" /></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>

    )

}