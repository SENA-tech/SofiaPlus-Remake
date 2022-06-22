import React, { useState } from 'react';

const useNavbar = () => {

    const [navbar, setNavbar] = useState(true);
    const [visible, setVisible] = useState('block');

    const actived = (property) => {

        setNavbar(!property);

        if (navbar === true) {
            setVisible('block');
        } else {
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