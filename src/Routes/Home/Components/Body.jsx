import React from 'react';
import { Link } from 'react-router-dom';

//Data
import { mods, FlechaDown, FlechaAyuda, help, Banner } from '../data';

export default function BodyPrincipal() {

    return (

        <div>
            <section className="contenedor">
                <article>
                    <div id="conten-txt">
                        <div className="texto">
                            <h1>!Que le interesa estudiar¡</h1>
                            <h3>
                                Sofia Plus le permite estudiar en la modalidad que mas se acomode
                                a usted
                            </h3>
                        </div>
                        <div id="boton">
                            <Link id='boton-link' to='/search'>
                                <button>
                                    <img src={FlechaDown} width="25px" />
                                    <h1>Busque la modalidad que prefiera</h1>
                                    <img src={FlechaDown} width="25px" />
                                </button>
                            </Link>
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
                <hr className='hr' /><br /><br />
                <h1 id='Anuncements'>Anuncios</h1>
                <article className="anun">
                    <div className="anuncios">
                        <img src={Banner} width="800px" alt="" />
                    </div>
                    <div className="cards-ayuda">
                        {
                            help.map(e => {
                                return (
                                    <div key={e.title} className="cards-ayuda-1">
                                        <figure>
                                            <img src={e.img} width="200px" />
                                        </figure>
                                        <div className="cards-contenido">
                                            <h3>{e.title}</h3>
                                            <div className="card-contenido-txt">
                                                <p>{e.description}</p>
                                                <a href=""><img src={FlechaAyuda} width="50px" /></a>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </article>
            </section>
        </div>

    )

}