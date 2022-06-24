import { useState } from 'react';

const useNavbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [visible, setVisible] = useState('block');

    const actived = () => {

        setNavbar(!navbar);

        if (navbar === true) {
            console.log(navbar);
            setVisible('flex');
        } else {
            console.log(navbar);
            setVisible('none');
        };

    }

    return {
        navbar,
        visible,
        actived
    }

}

export default useNavbar;