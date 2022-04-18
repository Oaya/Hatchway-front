import React, { useState, useEffect } from "react";
import axios from 'axios';

function Students() {
  const [studentsData, setStudentsData] = useState([]);
  const [value, setValue] = useState("");

  //get api request at for first render//
  useEffect(() => {
    axios.get(`https://www.hatchways.io/api/assessment/students`)
      .then(res => {
       setStudentsData(res.data.students)
        console.log(res.data.students);
      }).catch(err => {
      console.log(err.message)
    })
  },[])


 

  // useEffect(() => {
  //   console.log(value, data);
  //   searchStudent();
  // }, [value]);

  // function searchStudent() {
  //   const newData = data.filter((doc) => {
  //     return (
  //       value === doc.firstName.substr(0, value.length) ||
  //       value === doc.lastName.substr(0, value.length)
  //     );
  //   });
  //   console.log(newData);
  //   return setData(newData);
  // }

  return (
    <div className="card">
      <form>
        <input
          type="text"
          value={value}
          className="no-outline"
          placeholder="Search by name"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      {studentsData.map((item) => {
        return (
          <div key={item.id} className="avatar">
            <img src={item.pic} alt="avatar" className="avatar-image" />
            <div className="content">
              <h1 className="avatar-name">
                {item.firstName} {item.lastName}
              </h1>
              <p>Email:{item.email}</p>t<p>Company:{item.company}</p>
              <p>Skill:{item.skill}</p>
              <p>
                Average:
                {item.grades.reduce((acc, cur) => +acc + +cur, 0) /
                  item.grades.length}
                %
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Students;
