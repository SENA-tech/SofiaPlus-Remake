import { useState, useEffect } from 'react';
import './message.css'

export default function Messages() {

    let MESSAGE = window.localStorage.getItem('MESSAGE');

    const [despliegue, setDespliegue] = useState('5%')

    useEffect(() => {
        setDespliegue('5%')
        setTimeout(() => {
            setDespliegue('-100%')
        }, 7500)
    }, [MESSAGE])
    

    return (
        <div style={{ left: despliegue }} className="mess">
            <div className="message-box">
                <h3>{MESSAGE}</h3>
            </div>
        </div>
    )
}