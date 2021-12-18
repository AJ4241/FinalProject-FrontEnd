import {Link} from "react-router-dom";

const StudentView = (props) => {
  const { student, deleteStudent } = props;
  if (student.campus === null) {
    return(
      <div>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h2>Student is not enrolled in any campus</h2>
        <h4>
          {student.email} <br/>
          {"GPA: " + student.gpa} <br/>
          {"created at: " + student.createdAt} <br/>
          {"updated at: " + student.updatedAt} <br/>
        </h4>
        <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
      </div>
    );
  }
  else {
    return (
      <div>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h3 key={student.campus.id}>
          <Link to={`/campus/${student.campus.id}`}>
            {student.campus.name}
          </Link>
        </h3>
        <h4>
          {student.email} <br/>
          {"GPA: " + student.gpa} <br/>
          {"created at: " + student.createdAt} <br/>
          {"updated at: " + student.updatedAt} <br/>
        </h4>
        <button> onClick={() => deleteStudent(student.id)}>Delete Student</button>
      </div>
    );
  }
};

export default StudentView;