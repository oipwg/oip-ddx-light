import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import Link from 'next/link';
import { useDispatch } from "react-redux";
import Router from "next/router";
import { sortedLastIndex } from "lodash";
import PropTypes from 'prop-types';
import withStyles from 'react-jss'
import axios from 'axios'
import { MdCropSquare } from "react-icons/md";
import { Wallet } from '@oipwg/hdmw';
import { setUser } from "../../../../redux/modules/User/actions";
import config from "../../../../config";
import Alert from "../../../shared/Alert";
import { decrypt } from "../../../../helpers-functions/crypto";
import { setHdmwWallet } from "../../../../redux/modules/Wallet/actions";
import { initExplorerWallet } from "../../../../redux/modules/Wallet/thunks";

//const history = useHistory();

const styles = theme => ({
  root: {
    position: 'absolute',
    top: '10%',
    left: '40%'
  },
  signInButton: {
    marginTop: 10,
    backgroundColor: '#e7e7e7',
    padding: '8px 32px',
    borderRadius: '4px'
  },
  inputField: {
    marginTop: 6
  },
  rememberMe: {
    marginTop: 6
  },
  backgroundSlate: {
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#e7e7e7'
  }
})


// Move to Helpers directory

const LoginForm = ({
  classes
}) => {
  //let history = useHistory();
  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: displayName,
          password: password,
        }),
      });
      const data = await response.json();

      console.log("this is the data: ", data)
      console.log(data.displayName);
      console.log("setUser: ", setUser(data.user));
      
      
      dispatch(setUser(data.user))

      // decrypt mnemonic
      // derive privatekey from mnemonic 
      // 

      

      const mnemonic = decrypt(data.user.mnemonic, password)
      const hdmwWallet = new Wallet(mnemonic, { discover: false })
      dispatch(setHdmwWallet(hdmwWallet))
      //console.log(hdmwWallet);
      
      const mainAddress = hdmwWallet.getCoin('flo').getMainAddress();

      //console.log("test 1", hdmwWallet.getCoin('flo'));
      //console.log("test 2", mainAddress);
      
      const privatekey = mainAddress.getPrivateAddress()
      //console.log("private key: ", privatekey);
      
      // Todo:
      // set HDMW wallet to redux store
      // pass the private key to the records template publisher component 
      // to get the private key, call getFloWif with the HDMW wallet
      // to get the HDMW wallet inside a component, use React-Redux's useSelector
      // const hdmwWallet = useSelector(state => state.Wallet.hdmwWallet)
      // const wif = getFloWif(hdmwWallet)

      dispatch(initExplorerWallet({ privatekey, network: config.network, options: { explorerUrl: config.explorerUrl } }))
      
      if (data.msg === "Please enter correct credentials") {
        setError(data.msg);
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("displayName");
      } else if (data.activated === false) {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("displayName");
        setVerified(true);
      } else {
        window.localStorage.setItem("token", JSON.stringify(data.token));
        window.localStorage.setItem("displayName", data.displayName);
        dispatch({ type: "LOGIN", payload: true });
        //socket.emit("login");
        //history.push("/");
      }

      /*
        if (data.msg === "Auth Successful") {
          window.localStorage.setItem("token", JSON.stringify(data.token));
          window.localStorage.setItem("displayName", data.displayName);
          dispatch({ type: "LOGIN", payload: true });
          //socket.emit("login");
          //history.push("/");
        } else if (data.activated === false) {
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("displayName");
          setVerified(true);
        } else {
          if (data.msg != undefined) {
            setError(data.msg);
          }
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("displayName");
        }
      */


      //const { mnemonic } = data;

      /*
      // handle error response
      const createWalletData = await fetch("users/createWallet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mnemonic: mnemonic,
          password,
        }),
      });
      

      const wifJson = await createWalletData.json();
      console.log("wifJson", wifJson);

      localStorage.setItem("userAddress", JSON.stringify(wifJson.wif));
      */
     console.log("success")
    } catch (err) {
      console.log("onLogin error" + err);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onLogin();
    Router.push('/')
  };

  return(
    <div className={classes.root}>
      <div className={classes.backgroundSlate}>
        <div className="card-header">
            <h3>Sign In</h3>
        </div>
        <form onSubmit={onFormSubmit} href="https://google.com">
          <div className={classes.inputField}>
            <input
              placeholder="Display Name"
              className="form-control"
              onChange={(e) => {
                setDisplayName(e.target.value.trim());
              }}
            />
          </div>
          <div className={classes.inputField}>
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className={classes.rememberMe}>
            <input type="checkbox" id="html1" />
            <label htmlFor="html1">Remember me</label>
          </div>
          <div className="login-alert">
            {error.length > 0 ? (
              <Alert
                content={error}
                setAlert={() => {
                  setError("");
                }}
              />
            ) : null}
          </div>
          <button 
            className={classes.signInButton}
          >
              Sign in
          </button>
        </form>
      </div>
    </div>
  )
}



LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles, { injectTheme: true }) (LoginForm);