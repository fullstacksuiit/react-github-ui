import React from 'react';
import './App.css';
import Tile from './MemberTile';

function App() {
  return (
    <div className="App">
      <p>&nbsp;</p>
      <input type="text" aria-required="true" size="225" value=""
        name="Search Repo" placeholder="Search Repo" style={{ "width": "1300px", "height": "30px" }} />&nbsp;
    
    <button style={{ "width": "100px", "height": "30px" }} >Search</button>
      <p style={{ "text-align": "center" }}>20 Results Found</p>

      <Tile urlOwner="https://avatars0.githubusercontent.com/u/10206837?s=400&v=4" owner='A' forkCount={1} starCount={100}/>
      <p>&nbsp;</p>
      <Tile urlOwner="https://avatars2.githubusercontent.com/u/31477944?s=400&u=f8680a0f441849fa1b363af8afe2376cd1f5ef60&v=4" owner='B' forkCount={3} starCount={200}/>
      <p>&nbsp;</p>
      <Tile  urlOwner="https://avatars0.githubusercontent.com/u/10206837?s=400&v=4" owner='C' forkCount={4} starCount={300}/>
      <p>&nbsp;</p>
      <Tile urlOwner="https://avatars2.githubusercontent.com/u/31477944?s=400&u=f8680a0f441849fa1b363af8afe2376cd1f5ef60&v=4" owner='D' forkCount={2} starCount={40}/>
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
