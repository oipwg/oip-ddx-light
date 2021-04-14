export default function getFloWif(hdmwWallet) {
  if (!hdmwWallet) {
    return 
  }
  const mainAddress = hdmwWallet.getCoin('flo').getMainAddress();
  const privatekey = mainAddress.getPrivateAddress();
  return privatekey
}