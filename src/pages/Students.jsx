import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Students = (props) => {

  function handleDelete(stdId)
  {
    async function deleteStd()
    {
      await axios.delete(`https://students-q2a4.onrender.com/students/${stdId}`)
      window.location.reload()
    }
    deleteStd()
    
  }
  return (
    <div className="card-container">
      <div className="card shadow-lg" style={{ width: "15rem", height: "300px" }}>
        <div className="container py-2">
          <p>Name:{props.student.name}</p>
          <p>Course:{props.student.course}</p>
          <p>Age:{props.student.age}</p>
          <p>Location:{props.student.location}</p>
          <p>Marks:{props.student.marks}</p>
          {props.student.isPresent ? (
            <span className="bg-success rounded-2 py-1 px-2">present</span>
          ) : (
            <span className="bg-danger px-2 py-1 rounded-2">absent</span>
          )}
          <br />

          <div className="d-flex gap-1 mt-3">
            <Link
              to={`/view/${props.student.id}`}
              className="bg-primary px-2 py-1 rounded-2 text-white text-decoration-none"
            >
              View
            </Link>

            <Link
              to={`./Edit/${props.student.id}`}
              className="bg-info px-2 py-1 rounded-2 text-white text-decoration-none"
            >
              Edit
            </Link>

            <button className="bg-danger px-2 py-1 rounded-2 text-white text-decoration-none"
            onClick={()=>handleDelete(props.student.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
