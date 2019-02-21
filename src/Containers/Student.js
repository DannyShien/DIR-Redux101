import React, { component } from 'react';

// We would like to inform this component from redux. 
// To do that we need some glue, this container needs to 
// know about the store so it can use it's state, and 
// update if needed. To accomplish this, we use the connect
// method from react-redux. This is our glue!
import { connect } from 'react-redux'

// We need bindActionCreators from Redux, so that
// we can get the actions to dispatch to the reducers
import { bindActionCreators } from 'redux';

class Student extends Component {
    render() {
        const students = this.props.rightSideOfRoom.map(student => {
            return <li>{student}</li>
        })
        console.log(this.props);
        return(
            <div>
                <h1>Students!</h1>
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
console.log(connect);

// export default Student:
export default connect(mapStateToProps)(Student);