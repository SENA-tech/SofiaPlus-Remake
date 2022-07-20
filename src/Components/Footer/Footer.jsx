import React from 'react';

//Css
import './footer.css'

//Data
import { imgs } from './data';

export default function Footer() {

    return (

        <footer>
            <div className="container-footer-all">
                <div className="container-body">
                    <div className="colum1">
                        <div className="all-sen">
                            <img src={imgs.logoSena} width="100px" id="ls" alt='logosSena' />

                            <h1 id="lsen">SENA</h1>
                        </div>

                        <hr />

                        <p>
                            Esta compañia se dedica a la venta de software integrado con un
                            conjunto de cosas que no se lo que estoy escribiendo, este texto
                            es solo para llenara informacion en el cuadro de informacion de la
                            compañia.
                        </p>
                    </div>

                    <div className="colum2">
                        <h1>Redes Sociales</h1>

                        <div className="row2">
                            <img src={imgs.facebook} alt='logosSena' />
                            <label className='row-label'>Facebook</label>
                        </div>
                        <div className="row2">
                            <img src={imgs.twitter} alt='logosSena' />
                            <label className='row-label'>Twitter</label>
                        </div>
                        <div className="row2">
                            <img src={imgs.instagram} alt='logosSena' />
                            <label className='row-label'>Instagram</label>
                        </div>
                        <div className="row2">
                            <img src={imgs.youtube} alt='logosSena' />
                            <label className='row-label'>youtube</label>
                        </div>
                    </div>

                    <div className="colum3">
                        <h1>Informacion desarrolladores</h1>

                        <div className="row2">
                            <img src={imgs.logoSena} alt='logosSena' />
                            <label className='row-label'>
                                centro de materiales y ensayos|Sonia ortega|Joan cardozo
                            </label>
                        </div>

                        <div className="row2">
                            <img src={imgs.logoSena} alt='logosSena' />
                            <label className='row-label'>+57 ejemplo numero</label>
                        </div>

                        <div className="row2">
                            <img src={imgs.logoSena} alt='logosSena' />
                            <label className='row-label'>Sena</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-footer">
                <div className="footer">
                    <div className="copyright">
                        © 2022 Todos los Derechos Reservados |
                        <a href="https://www.sena.edu.co/es-co/Paginas/default.aspx"
                        >Sena</a
                        >
                    </div>

                    <div className="information">
                        <a href="">Informacion del sena</a> |
                        <a href="">Privacion y Politica</a> |
                        <a href="">Terminos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>

    )

}