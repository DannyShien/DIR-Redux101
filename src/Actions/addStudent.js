// An action exports a function, 
// That function, must itself, return an object. 
// That object must have a prop of 'type'.


function addStudent(studentNane){
    console.log('Add sudent action was called...studentName');
    return {
        type: 'ADD_STUDENT',
        payload: studentNane,
    }
}

export default addStudent;