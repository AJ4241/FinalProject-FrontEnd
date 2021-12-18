import PropTypes from "prop-types";
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
    textAlign: 'left'
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

const AllCampusesView = (props) => {
  const classes = useStyles();
  
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

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

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
        </div>
      ))}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;