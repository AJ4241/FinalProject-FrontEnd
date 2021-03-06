import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { editStudentThunk, fetchStudentThunk } from '../../store/thunks';


class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          email: "",
          imageUrl: "",
          gpa: 0, 
          campusId: null, 
          redirect: false, 
          redirectId: null,
          id: null,
        };
    }

    componentDidMount() {
      this.props.fetchStudent(window.location.pathname.slice(-1));

      this.setState({
        firstname: this.props.student.firstname,
        lastname: this.props.student.lastname,
        email: this.props.student.email,
        imageUrl: this.props.student.imageUrl,
        gpa: this.props.student.gpa,
        campusId: this.props.student.campusId,
        redirect: false,
        redirectId: null,
      })
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async (event, sid) => {
        event.preventDefault();

        let editStudent = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            imageUrl: this.state.imageUrl,
            gpa: this.state.gpa,
            campusId: this.state.campusId,
            id: sid,
        };
        
        await this.props.editStudent(editStudent);

        this.setState({
          firstname: "", 
          lastname: "", 
          email: "",
          imageUrl: "",
          gpa: 0,
          campusId: null, 
          redirect: true, 
          redirectId: sid,
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <EditStudentView 
            handleChange = {this.handleChange} 
            handleSubmit = {this.handleSubmit}
            student = {this.props.student}    
          />
        );
    }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
    return({
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (student) => dispatch(fetchStudentThunk(student)),
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);