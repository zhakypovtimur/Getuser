import React, { useState } from "react";


const User = () => {
  let [_state, setArray] = useState([]);

  return (
    <div>
      <ul>
        {_state.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={() => setArray([..._state, "Ali", "Dastan", "Beka", "Maksata", "Timur"])}>GET USER</button>
    </div>
  );
};

export default User;
