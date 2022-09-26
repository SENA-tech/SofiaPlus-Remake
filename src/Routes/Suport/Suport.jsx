import React from 'react';

import pdf from './Manual.pdf'

export default function Suport() {

    return (

        <div className="iframe">
            <embed src={pdf} frameborder="0"></embed>
        </div>

    )

}