import React from 'react';
import './App.css';
import MemberTile from './MemberTile';

function App() {
  return (
    <div className="App">
      <p>&nbsp;</p>
      <input type="text" aria-required="true" size="225" value=""
        name="Search Repo" placeholder="Search Repo" style={{ "width": "1300px", "height": "30px" }} />&nbsp;
    
    <button style={{ "width": "100px", "height": "30px" }} >Search</button>
      <p style={{ "text-align": "center" }}>20 Results Found</p>

      <MemberTile owner='A' starCount={100}/>
      <p>&nbsp;</p>
      <MemberTile owner='B' starCount={200}/>
      <p>&nbsp;</p>
      <MemberTile owner='C' starCount={300}/>
      <p>&nbsp;</p>
      <MemberTile owner='D' starCount={40}/>
      <p>&nbsp;</p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<button style={{ "width": "100px", "height": "30px" }} >Prev</button> &nbsp;&nbsp;&nbsp;&nbsp;Page 2 &nbsp;&nbsp;&nbsp;&nbsp;<button style={{ "width": "100px", "height": "30px" }}>Next</button>
      <h1>&nbsp;</h1>
    </div>

  );
}

export default App;
