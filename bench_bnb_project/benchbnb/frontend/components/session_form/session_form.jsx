import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    if (this.state.formType === 'signup') {
      const buttonText = 'Sign Up!';
      const header = (
        <h2>Sign Up</h2>
      );
    } else {
      const buttonText = 'Log In!';
      const header = (
        <h2>Log In</h2>
      );
    }

    return (
      <div className="session-form">
        {header}
        <form>
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            /input>
          </label>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            /input>
          </label>
          <button onClick={this.handleSubmit}>{buttonText}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
