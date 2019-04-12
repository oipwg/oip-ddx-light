const styles = theme => ({
  // record template
  recordTemplateRoot: {
    display: 'flex',
    flexDirection: 'column'
  },
  selectBase: {
    height: 25,
    background: 'none',
    borderRadius: 3
  },
  inputBase: {
    height: 21,
    borderRadius: '3px',
    outline: 'none',
  },
  buttonBase: {},
  templateFieldRow: {
    margin: [8, 0],
    display: 'grid'
  },
  inputTitle: {
    fontWeight: 'bold',
    marginBottom: '5px',
    fontFamily: 'arial',
    color: theme.palette.greyscale(0.85)
  },
  nameRow: {},
  descriptionRow: {},
  wifRow: {},
  publishRow: {},
  selectNetwork: {},
  publishButton: {
    height: '30px',
    marginTop: '10px'
  },
  // descriptor
  descriptorRoot: {
    display: 'flex',
    flexDirection: 'column',
    margin: [8, 0]
  },
  descriptorFieldRowContainer: {
    maxWidth: 400,
    margin: [1]
  },
  addRowButton: {},
  removeRowButton: {
    height: 22,
    width: 22
  },
  descriptorInputField: {},
  descriptorSelect: {}
})

export default styles
