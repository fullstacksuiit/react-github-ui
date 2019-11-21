
import React, { Component } from 'react'
import './App.css';
import Tile from './MemberTile';


class App extends Component {

  state={
    members:[
      {
      url:'https://avatars0.githubusercontent.com/u/10206837?s=400&v=4',
      repoName:'PayPal_sandbox',
      owner:'A',
      forkCount:1,
      starCount:100
    },
      {
      url:'https://avatars2.githubusercontent.com/u/31477944?s=400&u=f8680a0f441849fa1b363af8afe2376cd1f5ef60&v=4',
      repoName:'PayPal_sdk',
      owner:'B',
      forkCount:3,
      starCount:200
    },
   
  ]
  }

  render() {
    const members = this.state.members;

    return (
      <div className="App">
      <p>&nbsp;</p>
      <input type="text" aria-required="true" size="225" value=""
        name="Search Repo" placeholder="Search Repo" style={{ "width": "1300px", "height": "30px" }} />&nbsp;
    
    <button style={{ "width": "100px", "height": "30px" }} >Search</button>
      <p style={{ "text-align": "center" }}>20 Results Found</p>
      {
        members.map(d => <Tile 
          urlOwner={d.url} 
          repoName={d.repoName} 
          owner={d.owner} 
          forkCount={d.forkCount} 
          starCount={d.starCount}
          />)
      }

      <div>
        <button style={{ "width": "100px", "height": "30px" }} >Prev</button> 
        Page 2 
        <button style={{ "width": "100px", "height": "30px" }}>Next</button>
      </div>
</div>
    )
  }
}

export default App;
