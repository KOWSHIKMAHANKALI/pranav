import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import Profile from './components/Profile';
import CourseList from './components/CourseList';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Learning Platform</h1>
      </header>
      <Profile />
      <CourseList />
    </div>
  );
}

export default withAuthenticator(App);
