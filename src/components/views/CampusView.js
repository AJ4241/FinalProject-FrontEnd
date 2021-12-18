import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Helvetica, sans-serif', 
    fontSize: '35px', 
    color: '#FFFFFF'
  },
  appBar:{
    backgroundColor: '#eab676',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  
}));
const CampusView = (props) => {
  const {campus, deleteCampus} = props;
  const classes = useStyles();

  if (campus.students.length === 0) {
    return (
      <div>  
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link className={classes.title} to={'/'}>
            <Typography variant="h6" className={classes.title} color="inherit" >
                CampusHub
            </Typography>
          </Link>
          
          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

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
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link className={classes.title} to={'/'}>
            <Typography variant="h6" className={classes.title} color="inherit" >
                CampusHub
            </Typography>
          </Link>
          
          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>   
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