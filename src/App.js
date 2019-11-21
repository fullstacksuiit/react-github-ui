
import React, { Component } from 'react'
import './App.css';
import Tile from './MemberTile';
import githubData from './data';

class App extends Component {

  state = {
    members: githubData,
    serchText: ''
  }

  onSearchTextChange = (e) => {
    const text = e.target.value;
    this.setState({
      serchText: text
    })
  }

  search = () => {
    const searchText = this.state.serchText;
    const members = this.state.members;
    const filteredList = members.filter(d => d.login.indexOf(searchText) > -1);
    this.setState({
      members: filteredList
    })
  }

  render() {
    const members = this.state.members;
    const serchText = this.state.serchText;

    return (
      <div className="App">
        <p>&nbsp;</p>
        <input
          type="text"
          aria-required="true"
          size="225"
          value={serchText}
          onChange={this.onSearchTextChange}
          name="Search Repo"
          placeholder="Search Repo"
          style={{ "width": "1300px", "height": "30px" }}
        />&nbsp;

      <button
          onClick={this.search}
          style={{ "width": "100px", "height": "30px" }}
        >Search</button>
        <p style={{ "text-align": "center" }}>{members.length} Results Found</p>
        {
          members.map(d => <Tile
            urlOwner={d.avatar_url}
            repoName={d.full_name}
            owner={d.login}
            forkCount={d.forks_count}
            starCount={d.watchers_count}
            pullRequest={d.pullRequest}
            followers={d.followers}
            following={d.following}
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
