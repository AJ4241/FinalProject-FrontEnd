

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>{campus.name}</h1>
      <p>
        {campus.description} <br/>
        {"Address: " + campus.address} <br/>
        {"Created At: " + campus.createdAt} <br />
        {"Updated At: " + campus.updatedAt} <br />
      </p>
      <h3>Students Attending this Campus: </h3>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>{name}</li>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;