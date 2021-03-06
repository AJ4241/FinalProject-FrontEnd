import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  formContainer: {
    marginTop: "20px",
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
  links: {
    textDecoration: "none",
  },
}));

const EditStudentView = (props) => {
  const { handleChange, handleSubmit, student } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Link className={classes.title} to={"/"}>
            <Typography variant="h6" className={classes.title} color="inherit">
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
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "#11153e",
            }}
          >
            Edit Student
          </Typography>
        </div>
        <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e, student.id)}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            First Name:{" "}
          </label>
          <input
            type="text"
            name="firstname"
            onChange={(e) => handleChange(e)}
            defaultValue={student.firstname}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Last Name:{" "}
          </label>
          <input
            type="text"
            name="lastname"
            onChange={(e) => handleChange(e)}
            defaultValue={student.lastname}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Email:{" "}
          </label>
          <input
            type="text"
            name="email"
            onChange={(e) => handleChange(e)}
            defaultValue={student.email}
            required
          />
          <br />
          <br />
          
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Image URL:{" "}
          </label>
          <input
            type="text"
            name="imageUrl"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>GPA: </label>
          <input
            type="decimal"
            name="gpa"
            onChange={(e) => handleChange(e)}
            defaultValue={student.gpa}
            required
          />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            campusId:{" "}
          </label>
          <input
            type="text"
            name="campusId"
            onChange={(e) => handleChange(e)}
            defaultValue={student.campusId}
          />
          <br />
          <br />

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;
