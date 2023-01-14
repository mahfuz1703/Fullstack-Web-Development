import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const PresentStudentList = ({toggleHandler}) => {
  const {students} = useContext(StudentContext);
  return (
    <div>
      <div className="list present-student-list">
        <h2>Present Student List</h2>
        <div className="student-list">
          <ul>
            {students
              .filter((item) => item.isPresent === true)
              .map((student) => (
                <li key={student.id}>
                  <span>{student.name}</span>
                  <button onClick={() => toggleHandler(student.id)}>
                    Make Absent
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresentStudentList;
