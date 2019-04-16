import React from 'react'

const LoadWallet = ({ classes, validateMnemonic, handleMnemonic, mnemonic }) => {
  return <div>
    <input
      onChange={handleMnemonic}
      value={mnemonic}
      placeholder={'Enter your mnemonic here'}
    />
    <input
      type={'submit'}
      value={'Submit'}
      onClick={validateMnemonic}
    />
  </div>
}

export default LoadWallet
