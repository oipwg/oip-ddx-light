import React from 'react'
import withStyles from 'react-jss'
import { connect } from 'react-redux'
import { updateThresholds } from '../redux/actions/Autopay/thunk';
import { updateInput } from '../redux/actions/Autopay/creators';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 40px',
    overflowX: 'auto'
  },
  autopayWrapper: {
    borderRadius: '20px',
    boxShadow: '1px 1px 3px',
    marginBottom: '108px',
    padding: '2rem',
    textTransform: 'capitalize',
    '& label': {
        display: 'inline-block',
        width: '140px',
        textAlign: 'right',
        marginLeft: '10px'
      }
  }
})
const AutopayPage = ({ classes, thresholds, updateInput }) => {
  let { video, audio, photos, articles, other} = thresholds


  const handleChange = (e) => {
      updateInput({[e.target.id]: Number(e.target.value)})
  }

  return <div className={classes.root}>
    <div className={classes.autopayWrapper}>
        <h1>Set autopay threshold</h1>
        <br />
        <div>
           <label htmlFor="video">Video:</label>
            <input type="number" id="video" name="video" defaultValue={video} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
           <label htmlFor="audio">Audio:</label>
            <input type="number" id="audio" name="audio" defaultValue={audio} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
           <label htmlFor="photos">Photos:</label>
            <input type="number" id="photos" name="photos" defaultValue={photos} onChange={(e) => handleChange(e)} />
        </div>
        <div>
           <label htmlFor="articles">Articles:</label>
            <input type="number" id="articles" name="articles" defaultValue={articles} onChange={(e) => handleChange(e)}/>
        </div>
        <div>
           <label htmlFor="Other">Other:</label>
            <input type="number" id="other" name="other" defaultValue={other} onChange={(e) => handleChange(e)} />
        </div>
    </div>
  </div>
}

function mapStateToProps (state) {
  return {
      thresholds: state.Autopay
  }
}
const mapDispatchToProps = {
  updateThresholds,
  updateInput
};


export default connect(
  mapStateToProps, mapDispatchToProps
)(withStyles(styles)(AutopayPage))
