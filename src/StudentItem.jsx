import React from "react"

function StudentItem({fName,lName,course,id,students,setStuds}){
    function handleDelete(){
        fetch(`http://127.0.0.1:5000/students/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "applicaion/json"
            }
        })
        .then(res => res.json())
        .then(student => {
            let rem = students.filter(student => student.id !== id)
            setStuds(rem)
            alert(student.message)
        })
    }
    return (
        <>
            <div className="student-item">
                <h1>{fName}</h1>
                <h2>{lName}</h2>
                <h3>{course}</h3>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default StudentItem