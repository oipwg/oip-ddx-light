import React from "react";
import PropTypes from "prop-types";

function Alert({
  content,
  show,
  setAlert,
  textBox,
  onTextChange,
  heading,
  content1,
}) {
  return (
    <div className="required-popup">
      <div className="popup_inner">
        {heading ? <h5>{heading}</h5> : null}
        <div className="p-content">
          <p>{content}</p>
          {content1 ? <p>{content1}</p> : null}
        </div>
        <div className="required-content">
          {textBox ? (
            <div className="form-group">
              <input
                required
                placeholder="********"
                type="password"
                className="form-control"
                onChange={(e) => {
                  onTextChange(e);
                }}
              />
            </div>
          ) : null}
          <a
            onClick={() => {
              setAlert(false);
            }}
            href="#"
            className="btn btn-primary"
          >
            OK
          </a>
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  content: PropTypes.string.isRequired,

  setAlert: PropTypes.func.isRequired,
};

export default Alert;
