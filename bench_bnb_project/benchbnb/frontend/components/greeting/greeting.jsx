import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  // debugger;
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="buttons" to="/signup">Sign Up</Link>
      <Link className="buttons" to="/login">Log In</Link>
    </div>
  );

  return (
    <div>
      {display}
    </div>
  );
};
