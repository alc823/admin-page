import React, {Component} from 'react';
import './EditStudent.css';

class EditStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: this.props.firstname,
            lastname: this.props.lastname,
            grade: this.props.grade,
            id: this.props.id,
            editID: -1
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
            editID: -1
        })
    }

    render() {
        return (
            <div className="editStudent">
                {this.state.id !== this.state.editID &&
                    <div>
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
                            editID: -1
                        })}>Cancel</button>
                    </div>
                }

                {this.state.id === this.state.editID &&
                <div>
                    <button className="button" 
                        onClick={() => this.setState({
                            editID: this.state.id
                        })}>Edit</button>
                </div>
                }
                

                <br/>

                
            </div>
        )
    }
}

export default EditStudent;