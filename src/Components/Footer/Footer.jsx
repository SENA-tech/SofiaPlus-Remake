import React from 'react';
import { Link } from 'react-router-dom';

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

                        <hr className='hrFooter' />

                        <p>
                            Pagina web orientada a la educación de los colombianos para estudios tecnicos y tecnologicos en todo Colombia. ( Pagina no oficial )
                        </p>
                    </div>

                    <div className="colum2">
                        <h1>Redes Sociales</h1>

                        <div className="row2">
                            <img src={imgs.facebook} alt='logosSena' />
                            <label className='row-label'><a href="https://www.facebook.com/SENA" target="_blank" rel="SENA facebook">Facebook</a></label>
                        </div>
                        <div className="row2">
                            <img src={imgs.twitter} alt='logosSena' />
                            <label className='row-label'><a href="https://twitter.com/SENAComunica" target="_blank" rel="SENA twitter">Twitter</a></label>
                        </div>
                        <div className="row2">
                            <img src={imgs.instagram} alt='logosSena' />
                            <label className='row-label'><a href="https://www.instagram.com/senacomunica/?hl=es" target="_blank" rel="SENA twitter">Instagram</a></label>
                        </div>
                        <div className="row2">
                            <img src={imgs.youtube} alt='logosSena' />
                            <label className='row-label'><a href="https://www.youtube.com/channel/UCt5y885UFplu2okY39TBwCg" target="_blank" rel="SENA youtube">Youtube</a></label>
                        </div>
                    </div>

                    <div className="colum3">
                        <h1>Informacion desarrolladores</h1>

                        <div className="row2">
                            <img src={imgs.logoSena} alt='logosSena' />
                            <label className='row-label'><Link to='team'>Equipo de desarrollo</Link></label>
                        </div>

                        <div className="row2">
                            <img src={imgs.logoSena} alt='logosSena' />
                            <label className='row-label'>+57 320 9172705</label>
                        </div>

                        <div className="row2">
                            <img src={imgs.logoSena} alt='logosSena' />
                            <label className='row-label'><a href="https://www.sena.edu.co/es-co/Paginas/default.aspx" target="_blank" rel="noopener noreferrer">SENA Official</a></label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-footer">
                <div className="footer">
                    <div className="copyright">
                        © 2022 Todos los Derechos Reservados |
                        <a href="https://github.com/SENA-tech"
                        >SENA tech</a>
                    </div>

                    <div className="information">
                        <a target='_blank' href="https://www.sena.edu.co/es-co/sena/Paginas/quienesSomos.aspx">Informacion del sena</a> |
                        <a target='_blank' href="http://portal.senasofiaplus.edu.co/index.php/seguridad/tips-de-seguridad-de-la-informacion">Privacion y Politica</a> |
                        <Link target='_blank' to="/dataconsent">Terminos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>

    )

}