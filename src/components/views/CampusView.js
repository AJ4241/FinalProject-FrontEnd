import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  formContainer: {
    width: "500px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
    margin: "auto",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Helvetica, sans-serif",
    fontSize: "35px",
    color: "#FFFFFF",
    textDecoration: "none",
    transition: "0.3s",
    textAlign: "left",
    "&:hover": {
      color: "#063970",
    },
  },
  appBar: {
    backgroundColor: "#eab676",
    shadows: ["none"],
  },
  formTitle: {
    backgroundColor: "#c5c8d6",
    marginBottom: "15px",
    textAlign: "center",
    borderRadius: "5px 5px 0px 0px",
    padding: "3px",
  },
  text: {
    color: "#FFFFFF",
    fontSize: "20px",
    marginLeft: "80px",
  },
  schoolName: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "35px",
    marginLeft: "80px",
  },
  student: {
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "20px",
    transition: "0.2s",
    "&:hover": {
      color: "#000000",
      backgroundColor: "#eab676",
    },
  },
  links: {
    textDecoration: "none",
  },
  button: {
    marginLeft: "80px",
    marginTop: "20px",
    background: "#Adadad",
    padding: "8px 24px",
    "border-radius": "9px",
    color: "black",
    border: "3px solid #3f3f3f",
    transition: "0.3s",
    cursor: "pointer",
    "&:hover": {
      background: "#eab676",
      color: "white",
    },
  },
}));

const CampusView = (props) => {
  const { campus, deleteCampus } = props;
  const classes = useStyles();

  if (campus.students.length === 0) {
    return (
      <div>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
            <Link className={classes.title} to={"/"}>
              <Typography
                variant="h6"
                className={classes.title}
                color="inherit"
              >
                CampusHub
              </Typography>
            </Link>

            <Link className={classes.links} to={"/campuses"}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
              >
                All Campuses
              </Button>
            </Link>

            <Link className={classes.links} to={"/students"}>
              <Button variant="contained" color="primary">
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>

        <h1 className={classes.text}>{campus.name}</h1>
        <p className={classes.text}>
          {campus.description} <br />
          {"Address: " + campus.address} <br />
        </p>
        <h2 className={classes.text}>
          There are no students attending this campus
        </h2>
        <Link to={`/editcampus`}>
          <button className={classes.button}>Edit Campus</button>
        </Link>
        <button
          onClick={() => deleteCampus(campus.id)}
          className={classes.button}
        >
          Delete Campus
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
            <Link className={classes.title} to={"/"}>
              <Typography
                variant="h6"
                className={classes.title}
                color="inherit"
              >
                CampusHub
              </Typography>
            </Link>

            <Link className={classes.links} to={"/campuses"}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
              >
                All Campuses
              </Button>
            </Link>

            <Link className={classes.links} to={"/students"}>
              <Button variant="contained" color="primary">
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <h1 className={classes.schoolName}>{campus.name}</h1>
        <p className={classes.text}>
          {campus.description} <br />
          {"Address: " + campus.address} <br />
        </p>
        <h3 className={classes.text}>Students Attending this Campus: </h3>
        <ul>
          {campus.students.map((student) => {
            let name = student.firstname + " " + student.lastname;
            return (
              <li key={student.id} className={classes.text}>
                <Link to={`/student/${student.id}`} className={classes.student}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to={`/editcampus`}>
          <button className={classes.button}>Edit Campus</button>
        </Link>
        <button
          onClick={() => deleteCampus(campus.id)}
          className={classes.button}
        >
          Delete Campus
        </button>
      </div>
    );
  }
};

export default CampusView;
