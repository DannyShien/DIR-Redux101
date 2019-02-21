import React, { Component } from 'react';

// We would like to inform this component from redux. 
// To do that we need some glue, this container needs to 
// know about the store so it can use it's state, and 
// update if needed. To accomplish this, we use the connect
// method from react-redux. This is our glue!
import { connect } from 'react-redux'

// We need bindActionCreators from Redux, so that
// we can get the actions to dispatch to the reducers
import { bindActionCreators } from 'redux';

import addStudent from '../Actions/addStudent';

class Student extends Component {

    addNewStudent = ()=>{
        const name = document.getElementById('student-name').value;
        this.props.addStudent(name);
    }

    render() {
        const students = this.props.rightSideOfRoom.map(student => {
            return <li>{student}</li>
        })
        console.log(this.props);
        return(
            <div>
                <h1>Students!</h1>
                <input type="text" id="student-name" placeholder="Student Name"/>
                <button onClick={this.addNewStudent}>Add Student</button>
                {students}
            </div>
        )
    }
}

// We need a function to map the redux store
// to this components props. Redux state
// always comes in as props. 
function mapStateToProps(state) {
    // the state paramete is mapStateToProps, IS THE ROOT REDUCER
    // this function returns an object
    // property will be props in THIS COMPONENT
    // value will be the peice of state in the redeucer
    return {
        rightSideOfRoom: state.students
    }
}

function mapDispatchToProps(dispatch) {
    // bindActionCreators takes an object as first param:
    // property is the local prop name (this.props.aaaaa)
    // value is the callback (the action file.js)
    // 2nd param is the dispatcher
    return bindActionCreators(
        {
            addStudent: addStudent
        }, dispatch
    )
}
console.log(connect);

// export default Student:
export default connect(mapStateToProps, mapDispatchToProps)(Student);