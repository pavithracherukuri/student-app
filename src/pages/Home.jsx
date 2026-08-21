import React, {useState, useEffect } from 'react'
import Students from './Students';
import { Link } from 'react-router-dom';

const Home = () => {


  let [students,setStudents]=useState([]);

  async function getStudents()
  {

    let res=await fetch("https://students-q2a4.onrender.com/students")
    let std=await res.json();
    setStudents(std);
  }
  useEffect(()=>
  {getStudents()},[]);

  return (
    <div>
    <h1 className="text-center bg-primary text-white">Student Management</h1>
      <div className="d-flex justify-content-center ">
       <Link to="/create" className="bg-primary px-2 py-1 rounded-2 text-white text-decoration-none">Add Student</Link>
       </div>
     <div className="container row">
        
         {
          students.map((student)=>
            <div className="col-md-3 mb-5">
          <Students student={student}/>
          </div>)
         }
     </div>

    </div>
       
  )
}

export default Home