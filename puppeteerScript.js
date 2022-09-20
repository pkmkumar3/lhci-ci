async function setup(browser) {
  // launch browser for LHCI
  const page = await browser.newPage();
  await page.setCacheEnabled(true);
  const cookies = [{
    'name': 'common-cart-id',
    'value': '545a9dbf-a68e-4c36-907c-fabead71025c',
    'domain': 'perf-www.cos.com'
    },{
    'name': 'allow-to-checkout',
    'value': 'true',
    'domain': 'perf-www.cos.com'
    },{
    'name': 'X-lighthouse-sensor',
    'value': 'B370DE14E94142D4A108A79DF6D0E265A',
    'domain': 'perf-www.cos.com'
    }];
  await page.setCookie(...cookies);

}

module.exports = setup;
