import { useEffect, useState } from 'react'
import './App.css'
import StudentList from './StudentList'

function App() {
  const [students,setStudents] = useState([])
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [course,setCourse] = useState("")
  const [tmId,setTmId] = useState(0)
  const [refresh,setRefresh]=useState(false)

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/students")
    .then(res => res.json())
    .then(data => {
      setStudents(data)
    })
  },[refresh])
  function handleSubmit(e){
    e.preventDefault()
    let studObj = {
      first_name : fname,
      last_name : lname,
      course: course,
      tm_id: tmId
    }
    fetch("http://127.0.0.1:5000/students",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studObj)

    })
    .then(res => res.json())
    .then(data => {
      setRefresh(!refresh)
      setFname("")
      setLname("")
      setCourse("")
      setTmId(0)
      alert(data.message)
    })
  }
  return (
    <>
      <h1>Students Application</h1>
      <StudentList students={students} setStuds = {setStudents}/>
      <form onSubmit={handleSubmit}> 
        <input placeholder='first name' value={fname} onChange={e => setFname(e.target.value)}/>
        <input placeholder='last name' value={lname} onChange={e => setLname(e.target.value)}/>
        <input placeholder='course' value={course} onChange={e => setCourse(e.target.value)}/>
        <input placeholder='tm id' value={tmId} onChange={e => setTmId(e.target.value)}/>
        <button>Add Student</button>
      </form>
    </>
  )
}

export default App
