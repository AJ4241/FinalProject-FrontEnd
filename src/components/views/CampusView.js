import {Link, Redirect} from "react-router-dom";

const CampusView = (props) => {
  const {campus, deleteCampus} = props;
  if (campus.students.length === 0) {
    return (
      <div>      
        <h1>{campus.name}</h1>
        <p>
          {campus.description} <br/>
          {"Address: " + campus.address} <br/>
          {"Created At: " + campus.createdAt} <br />
          {"Updated At: " + campus.updatedAt} <br />
        </p>
        <h2>There are no students attending this campus</h2>
        <button onClick={() => deleteCampus(campus.id)}>
          Delete Campus
        </button>
      </div>
    );
  }
  else {
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
            <li key={student.id}>
              <Link to={`/student/${student.id}`}>
                {name}
              </Link>
            </li>
          );
        })}
        </ul>
        <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </div>
    );
  }

};

export default CampusView;