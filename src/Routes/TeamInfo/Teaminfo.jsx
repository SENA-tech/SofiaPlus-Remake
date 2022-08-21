import React from 'react';

import { TeamData } from './data';

//css
import './teaminfo.css';

export default function TeamInfo() {
    return (
        <div className="SF-Teaminfo-Base">
            <div className="SF-Teaminfo-Base-Title">
                <h1>Equipo de Desarrollo | Sofia Plus Remake</h1>
            </div>
            <hr className='hr'/>
            <div className="SF-Teaminfo-Base-Content">
                {
                    TeamData.map(data => {
                        return (
                            <div className="SF-Teaminfo-Base-Content-Item" key={ data.id }>
                                <div className="SF-Teaminfo-Base-Content-Item-Name">
                                    <h2>{ data.name }</h2>
                                </div>
                                <div className="SF-Teaminfo-Base-Content-Item-Img">
                                    <img src={ data.image } alt="Joan Cardozo" height={200} width={200} />
                                </div>
                                <br />
                                <div className="SF-Teaminfo-Base-Content-Item-Info">
                                    <p>{ data.description }</p>
                                </div>
                                <br />
                                <div className="SF-Teaminfo-Base-Content-Item-Roles">
                                    <h3>Roles</h3>
                                    <br />
                                    <ul>
                                        {
                                            data.roles.map(role => {
                                                return (
                                                    <li>{ role }</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}