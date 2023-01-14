import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const Form = () => {
  const studentCtx = useContext(StudentContext);

  const createHandler = (e) => {
    e.preventDefault();
    if (!studentCtx.studentName) {
      return alert("Please provide a valid student name");
    }
    const newStudent = {
      id: Date.now() + "",
      name: studentCtx.studentName,
    };
    studentCtx.setStudents([...studentCtx.students, newStudent]);
    studentCtx.setStudentName("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!studentCtx.studentName) {
      return alert("Please provide a valid student name");
    }
    const newStudentList = studentCtx.students.map((item) => {
      if (item.id === studentCtx.editableStudent.id) {
        item.name = studentCtx.studentName;
      }
      return item;
    });
    studentCtx.setStudents(newStudentList);
    studentCtx.setStudentName("");
    studentCtx.setEditMode(false);
    studentCtx.setEditableStudent(null);
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          studentCtx.editMode ? updateHandler(e) : createHandler(e);
        }}
        className="student-form"
      >
        <input
          type="text"
          value={studentCtx.studentName}
          onChange={(e) => studentCtx.setStudentName(e.target.value)}
        />
        <button
          onClick={(e) => {
            studentCtx.editMode ? updateHandler(e) : createHandler(e);
          }}
          type="submit"
        >
          {studentCtx.editMode ? "Update Student" : "Add Student"}
        </button>
      </form>
    </div>
  );
};

export default Form;
