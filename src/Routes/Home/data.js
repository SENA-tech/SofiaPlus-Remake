//Modalidades
import Mod1 from './Import/img/img-2/car1.png';
import Mod2 from './Import/img/img-2/car2.png';
import Mod3 from './Import/img/img-2/car3.png';
import Mod4 from './Import/img/img-2/car4.png';
import Mod5 from './Import/img/img-2/car5.png';

//Anuncios
import Banner from './Import/img-anuncios/1.png';

//Help
import Ayuda1 from './Import/img-anuncios/img (1).png';
import Ayuda2 from './Import/img-anuncios/img (2).png';
import Ayuda3 from './Import/img-anuncios/img (3).png';

//Flechas
import FlechaAyuda from './Import/img-anuncios/flecha.png';
import FlechaDown from './Import/img-section-2/flecha.png';

const mods = [
    {
        title: 'Carreras Presenciales',
        description: 'Certificate en carreras presenciales como tecnico o tecnologo',
        img: Mod1
    },
    {
        title: 'Carreras Virtuales',
        description: 'Certificate en carreras virtuales como tecnico o tecnologo',
        img: Mod2
    },
    {
        title: 'Cursos Cortos Virtuales',
        description: 'Certificate con cursos cortos de modo virtual',
        img: Mod3
    },
    {
        title: 'Cursos  Cortos Presenciales',
        description: 'Certificate con cursos cortos de modo presencial',
        img: Mod4
    },
    {
        title: 'Carreras De Ingles',
        description: '¿Quieres aprender ingles? entra a nuestros cursos',
        img: Mod5
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

export { mods, FlechaDown }