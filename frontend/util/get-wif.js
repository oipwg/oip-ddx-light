export default function getFloWif (hdmwWallet) {
  if (!hdmwWallet) {
    return
  }
  const mainAddress = hdmwWallet.getCoin('flo').getMainAddress()
  return mainAddress.getPrivateAddress()
}
