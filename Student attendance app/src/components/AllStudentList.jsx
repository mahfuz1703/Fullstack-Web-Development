import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const AllStudentList = () => {
  const {students, setStudents, setEditMode, setEditableStudent, setStudentName} = useContext(StudentContext);

  const removeHandler = (id) => {
    // const newStudentList = students.filter((item) => item.id !== id);
    // setStudents(newStudentList);

    setStudents(students.filter((item) => item.id !== id));
  };

  const editHandler = (id) => {
    const toBeEditedStudent = students.find((item) => item.id === id);
    setEditMode(true);
    setEditableStudent(toBeEditedStudent);
    setStudentName(toBeEditedStudent.name);
  };

  const presentHandler = (id) => {
    const newStudentList = students.map((item) => {
      if (item.id === id) {
        if (item.isPresent === undefined) {
          item.isPresent = true;
        } else if (item.isPresent === true) {
          alert("This student is already in present list");
        } else if (item.isPresent === false) {
          alert("Please make use of the accedentally button");
        }
      }
      return item;
    });
    setStudents(newStudentList);
  };

  const absentHandler = (id) => {
    const newStudentList = students.map((item) => {
      if (item.id === id) {
        if (item.isPresent === undefined) {
          item.isPresent = false;
        } else if (item.isPresent === true) {
          alert("Please make use of the accedentally button");
        } else if (item.isPresent === false) {
          alert("This student is already in present list");
        }
      }
      return item;
    });
    setStudents(newStudentList);
  };

  return (
    <div>
      <div className="list all-student-list">
        <h2>All Student List</h2>
        <div className="student-list">
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                <span>{student.name}</span>
                <button onClick={() => editHandler(student.id)}>Edit</button>
                <button onClick={() => removeHandler(student.id)}>
                  Delete
                </button>
                <button onClick={() => presentHandler(student.id)}>
                  Present
                </button>
                <button onClick={() => absentHandler(student.id)}>
                  Absent
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllStudentList;
