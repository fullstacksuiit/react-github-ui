import React from 'react';

const Memmber = (props) => {
  return <div className="ui">
    <img src={props.urlOwner}/>
    <p>
      Repo:{props.repoName}<br />
      Owner:{props.owner}<br />
      Fork Count:{props.forkCount}<br />Stars Count: {props.starCount}
    </p>
  </div>
}

export default Memmber;