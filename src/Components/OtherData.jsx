import React from "react";

export default function OtherData(props) {
  return (
    <div style={{border:'2px solid black'}}>
      <label>Street:</label>
      <input type="text" placeholder={props.userAddress?.street} name="street" onChange={props.handleChange}></input>
      <label>City:</label>
      <input type="text" placeholder={props.userAddress?.city} name="city" onChange={props.handleChange}></input>
      <label>Zip Code:</label>
      <input type="text" placeholder={props.userAddress?.zipcode} name="zipCode" onChange={props.handleChange}></input>
    </div>
  );
}
