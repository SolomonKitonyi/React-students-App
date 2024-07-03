import React from "react"
import StudentItem from "./StudentItem"

function StudentList({students,setStuds}){
    console.log(students)
    return (
        <>
            <h1>Students List</h1>
            {students.map(student => (
                <StudentItem  
                key ={student.id}
                fName = {student.first_name}
                lName= {student.last_name} 
                course = {student.course}
                id = {student.id}
                setStuds = {setStuds}
                students = {students}
                />
            ))}
        </>
    )
}

export default StudentList