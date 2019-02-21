// Reducers are functions that return a peice of state 
const students = [
    'Ron', 
    'Jim',
    'JR', 
    'Matt'
];

// All redecer functions have 2 params: 
// 1. Current state
// 1b. Usually, you will want to privide a default state
// 2. Info that came from the action
export default function(state = students, action) {
    if(action.type === 'ADD_STUDENT') {
        // This means that I care about this action. Update. 
        let newStudents = state.slice(); 
        newStudents.push(action.payload)
        return newStudents; 
    }else {
        return state; 
    }
}