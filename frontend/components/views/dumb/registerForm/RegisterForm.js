import React, { useState } from "react";
import PropTypes from 'prop-types';
import withStyles from 'react-jss'

//import { useHistory } from "react-router-dom";

import Link from "next/link";
import Alert from "../../../shared/Alert";
import Router from "next/router";

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '10%',
    left: '40%'
  },
  signUpButton: {
    marginTop: 10,
    backgroundColor: '#e7e7e7',
    padding: '8px 32px',
    borderRadius: '4px',
    transform: 'translateX(15%)'
  },
  inputField: {
    marginTop: 6
  },
  backgroundSlate: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#e7e7e7'
  }
})

const RegisterForm = ({
  classes,
}) => {
  //var location = useHistory();
  /**************************STATE SECTION************************/
  //**Display Name States */
  const [username, setUsername] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

  //**Password States */
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passErrorMessage, setPassErrorMessage] = useState("");

  //**Email States */
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  //**Mnemonic States */
  const [mnemonic, setMnemonic] = useState("");

  const [reg_success, setRegSuccess] = useState(false);

  const validateForm = (e) => {
    if (email !== reEmail) {
      setEmailErrorMessage("Emails do not match!");
      setUsernameErrorMessage("");
    } else if (password !== password2) {
      setEmailErrorMessage("");
      setPassErrorMessage("Passwords do not match!");
    } else {
      setPassErrorMessage("");
      sendUser();
    }
  };

  const sendUser = () => {
    fetch("http://localhost:5000/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        displayName: username,
        email: email,
        password: password,
        mnemonic: mnemonic
      }),
    })
      .then((response) => response.json())
      .then((message) => {
        if (message.error) {
          setUsernameErrorMessage(message.error);
        }
        if (message.success) {
          setUsernameErrorMessage("");
          setPassErrorMessage(`User Created, redirecting to dashboard...`);
          setRegSuccess(true);
          // walletData();
          /*
          setTimeout(() => {
            setRegSuccess(false);
            location.push("/");
          }, 5000);
          */
        }
      });
  };
  /*
  const sendUser = async () => {
    try {
      //const response = await fetch("http://localhost:5000/api/users/signup", {
      const response = await fetch("/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: username,
          email: email,
          password: password,
          password2: password,
        }),
      });
      const data = await response.json();

      console.log(data)

    } catch (err) {
      console.log("onLogin error" + err);
    }
  };
  */

  const onFormSubmit = (e) => {
    e.preventDefault();
    validateForm(e);
    Router.push('/')
  };

  /*************The placeholders are fontawesome unicode, allows them to show in the placeholder field *****************/
  /*************Password fields get set to state to compare before submit*/
  return (
    <div className={classes.root}>
      {/*  */}
      <div className="wrapper">
        <div className="signup-wrap">
          <div className="log-container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className={classes.backgroundSlate}>
                  
                  <h2>Sign Up</h2>

                  <form onSubmit={onFormSubmit}>
                    <div className={classes.inputField}>
                      <input
                        required
                        placeholder="Username"
                        className="form-control"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      {usernameErrorMessage.length > 0 ? (
                        <Alert
                          content={usernameErrorMessage}
                          setAlert={() => {
                            setUsernameErrorMessage("");
                          }}
                        />
                      ) : null}
                    </div>
                    <div className={classes.inputField}>
                      <input
                        required
                        placeholder="Email"
                        className="form-control"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className={classes.inputField}>
                      <input
                        required
                        placeholder="Confirm Email"
                        className="form-control"
                        onChange={(e) => {
                          setReEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      {emailErrorMessage.length > 0 ? (
                        <Alert
                          content={emailErrorMessage}
                          setAlert={() => {
                            setEmailErrorMessage("");
                          }}
                        />
                      ) : null}
                    </div>
                    <div className={classes.inputField}>
                      <input
                        required
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    <div className={classes.inputField}>
                      <input
                        required
                        type="password"
                        placeholder="Confirm Password"
                        className="form-control"
                        onChange={(e) => {
                          setPassword2(e.target.value);
                        }}
                      />
                    </div>
                    <div>
                      {passErrorMessage.length > 0 ? (
                        <Alert
                          content={passErrorMessage}
                          setAlert={() => {
                            setPassErrorMessage("");
                          }}
                        />
                      ) : null}
                    </div>
                    <div className={classes.inputField}>
                      <input
                        type="mnemonic"
                        placeholder="Mnemonic (optional)"
                        className="form-control"
                        onChange={(e) => {
                          setMnemonic(e.target.value);
                          localStorage.setItem('mnemonic', e.target.value)
                        }}
                      />
                    </div>
    
                    <button className={classes.signUpButton}>Sign Up</button>
                  </form>
                  <div className="log-footer">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {reg_success ? (
          <div className="thanks-popup">
            <div className="thanks-content">
            
              <div className="thank-you-msg">
                <p>
                  Thank you for registering <span> {username}</span>!
                  <br />
                  An email has been sent to <br />
                  <span>{email}</span>
                </p>
                <p>Please verify your email address to continue.</p>
                <p>
                  You will now be redirected to the
                  <a href="#"> Login Page</a>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles, { injectTheme: true }) (RegisterForm);