import { Navigate, useParams } from "react-router-dom";

export default function DeleteCourse() {

    let permission = JSON.parse(window.localStorage.getItem("SessionID"));

    const { ID } = useParams();

    if (permission._permissions === 1) {
        fetch('https://SofiaPlus-Web-Server.11-cardozo-joan.repl.co/data/delete',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                courseId: ID
            })
        })
        .then(res => console.log(res))
    }

    return (
        <Navigate to='/search'/>
    )
}