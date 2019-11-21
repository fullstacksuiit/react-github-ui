import React from 'react';

const Member = (props) => {
  return <div className="ui">
    <img src={props.urlOwner}/>
    <p>
      Repo:{props.repoName}<br />
      Owner:{props.owner}<br />
      Fork Count:{props.forkCount}<br />
      Stars Count: {props.starCount}<br />
      Pull Request: {props.pullRequest} <br />
      Followers : {props.followers} <br />
      Following : {props.following}
    </p>
  </div>
}

export default Member;