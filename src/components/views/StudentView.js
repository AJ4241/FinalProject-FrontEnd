const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h3>{student.campus.name}</h3>
      <h4>
        {student.email} <br/>
        {"GPA: " + student.gpa} <br/>
        {"created at: " + student.createdAt} <br/>
        {"updated at: " + student.updatedAt} <br/>
      </h4>
    </div>
  );

};

export default StudentView;