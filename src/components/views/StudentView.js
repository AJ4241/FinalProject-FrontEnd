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
    color: '#FFFFFF',
    textDecoration: 'none',
    transition: '0.3s',
    textAlign: 'left',
    '&:hover': {
      color: "#063970"
    }
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
  name:{
    textDecoration: 'none', 
    color: '#FFFFFF',
    fontSize: '40px',
    marginLeft: '80px'
  },
  school:{
    textDecoration: 'none', 
    color: '#FFFFFF',
    fontSize: '30px',
    marginLeft: '80px',
    '&:hover': {
      color: "#eab676"
    }
  },
  text:{
    textDecoration: 'none', 
    color: '#FFFFFF',
    fontSize: '20px',
    marginLeft: '80px'
  },
  links:{
    textDecoration: 'none',
  },
  button:{
    marginLeft: '80px',
    marginTop: '20px',
    background: '#Adadad',
    padding: '8px 24px',
    'border-radius': '9px',
    color: 'black',
    border: '3px solid #3f3f3f',
    transition: '0.3s',
    cursor: 'pointer',
    '&:hover': {
      background: "#eab676",
      color: 'white'
    }
  }
}));

const StudentView = (props) => {
  const { student, deleteStudent, editStudent } = props;
  const classes = useStyles();

  if (student.campus === null) {
    return(
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
        <h1>{student.firstname + " " + student.lastname}</h1>
        <h2>Student is not enrolled in any campus</h2>
        <h4 className={classes.text}>
          {student.email} <br/>
          {"GPA: " + student.gpa} <br/>
        </h4>
        <Link to={`/editstudent`}>
          <button>Edit Student</button>
        </Link>
        <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
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
        <h1 className={classes.name}>{student.firstname + " " + student.lastname}</h1>
        <h3 key={student.campus.id}>
          <Link to={`/campus/${student.campus.id}`} className={classes.school}>
            {student.campus.name}
          </Link>
        </h3>
        <h4 className={classes.text}>
          {student.email} <br/>
          {"GPA: " + student.gpa} <br/>
        </h4>
        <Link to={`/editstudent`}>
          <button className={classes.button}>Edit Student</button>
        </Link>
        <button onClick={() => deleteStudent(student.id)} className={classes.button}>Delete Student</button>
      </div>
    );
  }
};

export default StudentView;