import RingCentral from '@rc-ex/core';
import waitFor from 'wait-for-async';

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
});

(async () => {
  await rc.authorize({
    username: process.env.RINGCENTRAL_USERNAME!,
    extension: process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD!,
  });

  setInterval(async () => {
    const activeCalls = await rc
      .restapi()
      .account()
      .extension()
      .activeCalls()
      .get({view: 'Detailed', direction: ['Inbound']});
    if (activeCalls.records!.length > 0) {
      console.log(JSON.stringify(activeCalls.records![0], null, 2));
    } else {
      console.log('No records');
    }
    console.log(new Date());
  }, 5000);

  await waitFor({
    interval: 999999999,
  });
  await rc.revoke();
})();
