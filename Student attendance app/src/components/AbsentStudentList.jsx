import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const AbsentStudentList = ({toggleHandler}) => {
  const { students } = useContext(StudentContext);
  return (
    <div>
      <div className="list absent-student-list">
        <h2>Absent Student List</h2>
        <div className="student-list">
          <ul>
            {students
              .filter((item) => item.isPresent === false)
              .map((student) => (
                <li key={student.id}>
                  <span>{student.name}</span>
                  <button onClick={() => toggleHandler(student.id)}>
                    Make Present
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AbsentStudentList;
