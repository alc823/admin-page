import React, {Component} from 'react';
import './StudentList.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Input, Button } from 'antd';
import EditStudent from './EditStudent';

class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            firstname: '',
            lastname: '',
            grade: '',
            id: -1,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = () => {
        this.props.handleEditStudent(this.state.firstname, this.state.lastname, this.state.grade, this.state.id)
        this.setState({
            id: -1
        })
    }

    render() {
        const {students} = this.props;
        return(
            <div className="studentList" >
                Dashboard<br/>
                {students.map(student => {
                    return(
                        <div className="studentCards">
                            <ExpansionPanel  >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className="heading">
                                        <div className="topLevelInfo">
                                        {' '}{student.firstname}{' '}{student.lastname}
                                        </div>
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className="panel">
                                    <Typography>
                                        <div className="moreInfo">
                                            {student.id !== this.state.id &&
                                                <div>
                                                First Name:{' '}{student.firstname}<br/>
                                                Last Name:{' '}{student.lastname}<br/>
                                                Grade:{' '}{student.grade}<br/>
                                                {/* ID: {' '}{student.id} */}
                                                {/* Classes:{' '}<br/>
                                                {student.keys.map.classes(class_object => {
                                                    return (
                                                        <div>
                                                            <ul>
                                                                <li>{class_object.name} | {class_object.teacher} | {class_object.letter_grade}</li><br/>
                                                            </ul>
                                                        </div>
                                                    );
                                                })} */}
                                                <br/>
                                                <button className="button" 
                                                    onClick={() => this.setState({
                                                        firstname: student.firstname,
                                                        lastname: student.lastname,
                                                        grade: student.grade,
                                                        id: student.id
                                                    })}>Edit</button>
                                                
                                                </div>
                                            }

                                            {student.id === this.state.id &&
                                                <div className="editStudent">
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
                                                
                                                    <button className="button" type="button" onClick={this.handleSubmit}>Save Changes</button>
                                                    <button className="button" 
                                                        onClick={() => this.setState({
                                                            id: -1
                                                        })}>Cancel</button>
                                                </div>
                                            }   
                                        </div>
                                    </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default StudentList;