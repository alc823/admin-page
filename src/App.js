import React, {Component} from 'react';
import './App.css';
import {base} from './base.js';
import AddStudent from './AddStudent.js';
import StudentList from './StudentList.js';
import { isEmpty } from "lodash";
import './.env';

require('dotenv').config();

const dotenv = require('dotenv');
dotenv.config();

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: [],
      num_students: 0,
    }
  }

  componentWillMount() {
    this.studentsRef = base.syncState('students', {
      context: this,
      state: 'students'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.studentsRef);
  }

  handleAddStudent = (new_student) =>{
    this.setState(prevState => {
      if (isEmpty(this.state.students)) {
        return {
          students: [new_student],
        }
      } else {
        return{
          students: [...prevState.students, new_student],
        }
      }
      
    });
  }

  handleEditStudent = (firstname, lastname, grade, id) => {
    this.setState(prevState => {
      const edited_students = this.state.students.map(student => {
        if (student.id == id) {
          const adjustedStudent = {
            firstname: firstname,
            lastname: lastname,
            grade: grade,
            id: id,
          }
          return adjustedStudent;
        } else {
          return student;
        }
      });
      
      return {
        students: edited_students
      }
      
    });
  }

  render() {
    
    return(
      <div>
        Admin<br/>
        <AddStudent
          students={this.state.students}
          num_students={this.state.num_students+1}
          handleAddStudent={this.handleAddStudent}
        />
        <StudentList 
          handleEditStudent={this.handleEditStudent}
          students={this.state.students}
        />
      </div>
    );
  }
}

export default App;
