import React from "react";

export default function Post(props) {
  return (
    <div>
      <div style={{ border: `solid purple 2px` }}>
        <label>Title:{props.title}</label>
        <br />
        <label>Body:{props.body}</label>
      </div>
    </div>
  );
}
