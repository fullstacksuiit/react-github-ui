import React from 'react';

export default function Memmber(props) {
  return <div className="ui"><img src="https://avatars2.githubusercontent.com/u/31477944?s=460&v=4" />
    <p>Repo:<br />
      Owner:{props.owner}<br />
      Fork Count:<br />Stars Count: {props.starCount}</p></div>
}