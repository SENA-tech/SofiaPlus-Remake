//Modalidades
import Mod1 from './Import/img/img-2/car1.png';
import Mod2 from './Import/img/img-2/car2.png';
import Mod3 from './Import/img/img-2/car3.png';
import Mod4 from './Import/img/img-2/car4.png';
import Mod5 from './Import/img/img-2/car5.png';

//Anuncios
import Banner from './Import/img-anuncios/1.png';

//Help
import Ayuda1 from './Import/img-anuncios/img1.png';
import Ayuda2 from './Import/img-anuncios/img2.png';
import Ayuda3 from './Import/img-anuncios/img3.png';

//Flechas
import FlechaAyuda from './Import/img-anuncios/flecha.png';
import FlechaDown from './Import/img-section-2/flecha.png';

let USER_DATA = JSON.parse(window.localStorage.getItem("SessionID"));

const mods = [
    {
        id: 1,
        title: 'Cursos Presenciales',
        description: 'Certificate en carreras presenciales como tecnico o tecnologo',
        link: "/search?=facetoface",
        img: Mod1
    },
    {
        id: 2,
        title: 'Cursos Virtuales',
        description: 'Certificate en carreras virtuales como tecnico o tecnologo',
        link: "/search?=virtual",
        img: Mod2
    },
    {
        id: 3,
        title: 'Cursos Cortos Virtuales',
        description: 'Certificate con cursos cortos de modo virtual',
        link: "/search?=shorvirtual",
        img: Mod3
    },
    {
        id: 4,
        title: 'Cursos Cortos Presenciales',
        description: 'Certificate con cursos cortos de modo presencial',
        link: "/search?=shortfacetoface",
        img: Mod4
    },
    {
        id: 5,
        title: 'Cursos De Ingles',
        description: '¿Quieres aprender ingles? entra a nuestros cursos',
        link: "/search?=english",
        img: Mod5
    }
]

const help = [
    {
        id: 1,
        link: USER_DATA ? `/profile/${USER_DATA._key}` : '/login',
        title: 'Programa de Formacion',
        description: 'Verifique si se encuentra inscrito',
        img: Ayuda1
    },
    {
        id: 2,
        link: '/support',
        title: 'Ayuda y Guia',
        description: 'Encuentre nuestra guia aqui',
        img: Ayuda2
    },
    {
        id: 3,
        link: '/about',
        title: 'Mas Informacion',
        description: 'Encuentre soluciones a sus dudas',
        img: Ayuda3
    }
]
/*
{
        banner: Banner
    },
    {
        ayuda1: Ayuda1,
        ayuda2: Ayuda2,
        ayuda3: Ayuda3,
        FlechaAyuda: FlechaAyuda,
    }
*/

export { mods, FlechaDown, FlechaAyuda, Banner, help }