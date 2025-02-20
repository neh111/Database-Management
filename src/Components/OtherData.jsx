import React from "react";

export default function OtherData(props) {
  return (
    <div style={{border:'2px solid black'}}>
      <label>Street:</label>
      <input type="text" placeholder={props.userAddress?.street}></input>
      <label>City:</label>
      <input type="text" placeholder={props.userAddress?.city}></input>
      <label>Zip Code:</label>
      <input type="text" placeholder={props.userAddress?.zipcode}></input>
    </div>
  );
}
