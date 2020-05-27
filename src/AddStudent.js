import React, {Component} from 'react';
import './AddStudent.css';
import { isEmpty } from "lodash";

class AddStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            grade: '',
            showError: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = () => {
        this.setState({
            showError: false,
        });

        let new_id = 0;
        console.log(!isEmpty(this.props.students));

        if (!isEmpty(this.props.students)) {
            console.log('id: ' + this.props.students[this.props.students.length-1].id);
            new_id = this.props.students[this.props.students.length - 1].id + 1;
        }

        const new_student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            grade: this.state.grade,
            id: new_id
        }
        
        if (new_student.firstname === '' || new_student.lastname === '' || new_student.grade === '') {
            this.setState({
                showError: true
            });
        } else {
            this.props.handleAddStudent(new_student);
            console.log("handleAddStudent called");
        }
        
        this.setState({
            firstname: '',
            lastname: '',
            grade: '',
        });
    }

    render() {
        return(
            <div className="addStudent">
                <div>Add Student</div>
                <form>

                    <label className="label">
                    First Name: 
                    <input type="text" name="firstname" id="firstname" placeholder='' 
                        onChange={this.handleChange} className="textbox" value={this.state.firstname}
                        maxLength='100'/>
                    </label><br/>

                    <label className="label">
                    Last Name: 
                    <input type="text" name="lastname" id="lastname" placeholder='' 
                        onChange={this.handleChange} className="textbox" value={this.state.lastname}
                        maxLength='100'/>
                    </label><br/>

                    <label className="label">
                    Grade: 
                    <input type="number" name="grade" id="grade" placeholder='' 
                        onChange={this.handleChange} className="textbox" value={this.state.grade}
                        maxLength='1'/>
                    </label><br/>

                </form>

                <br/>

                {this.state.showError &&
                    <div style={{color: "red"}}>
                        All fields must be filled out.
                    </div>
                }
                <button className="button" type="button" onClick={this.handleSubmit}>Add Student</button>


            </div>
        );
    }
}

export default AddStudent;