import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

const View = () => {
  let [std, setStd] = useState({});

  let {id} = useParams();

  async function getStudent() {
    let res = await axios.get(`https://students-q2a4.onrender.com/students/${id}`);
    setStd(res.data);
  
  }

  useEffect(() => {
    getStudent();
  }, []);
  return (
    <>
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Name :{std.name}</h5>
          <h5 className="card-title">Course :{std.course}</h5>
          <h5 className="card-title">Age :{std.age}</h5>
          <h5 className="card-title">Location :{std.location}</h5>
          <h5 className="card-title">Marks :{std.marks}</h5>
          {std.isPresent ? (
            <span className="bg-success rounded-2 py-1 px-2">present</span>
          ) : (
            <span className="bg-danger px-2 py-1 rounded-2">absent</span>
          )}
          <Link to="/" className="btn btn-primary btn-sm">
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default View;
