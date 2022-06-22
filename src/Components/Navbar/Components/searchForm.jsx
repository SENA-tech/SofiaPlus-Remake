import React from 'react';

//Data
import SearchLogo from '../Import/Search-L.png';

//Hooks
import useNavbar from '../../../Hooks/useNavbar';

export default function SearchFrom() {

    const { actived, navbar } = useNavbar();

    return (

        <form action="" method="get" className='FormSearch'>
            <input autoComplete='off' type="text" name="search" id="searcher" onClick={() => actived(navbar)} />
            <button type="submit" id='btn-searcher'>
                <img src={SearchLogo} alt="search buttom" height={30} />
            </button>
        </form>

    )

}