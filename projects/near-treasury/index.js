const utils = require('./helper/utils');

/* * * * * * * *
* ==> Correct adapter needs to be created.
*
*****************/
async function fetch() {
  var tvl = await utils.fetchURL('https://seashell-app-cmf7v.ondigitalocean.app/treasury_tvl')
  return tvl.data.TVL;
}

module.exports = {
  fetch,
  methodology: `TVL for Near Stacking Protocol is achieved by making calls to their API: https://seashell-app-cmf7v.ondigitalocean.app/treasury_tvl`
}
