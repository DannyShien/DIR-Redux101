import { combineReducers } from "redux";

// This is our master combineReducers. 
// This is our state. 
//  It imports all of the little reducers. 

// MasterReducer manifesto: I, the master reducer, neither know
// now give a rip about React. 
// I am like Licktenstien, independent of your silly empires. 
// I just care about redux. 

import {combineReducers } from 'redux';

// We need a reducer to give to the master reducer
import StudentReducer from './StudentReducer';

// Build the rood reducer with combineReducers. 
// We get combineReducers from redux. 