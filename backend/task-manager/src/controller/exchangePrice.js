exports.getCoinPrice = async (req, res, next) => {
  console.log(req.body)
  try {
    fetch(`https://api.coingecko.com/api/v3/coins/${req.coin}`).then()
  } catch (err) {
      return err
  }
}
