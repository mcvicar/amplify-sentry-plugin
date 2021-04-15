const eventName = 'PostPush';
const https = require('https')
var gitHash = 000000000000000000000000000;

async function run(context, args) {
  const env = context.amplify._getEnvInfo();
  var configFile = `${env.projectPath}/.env.${env.envName}`;

  require('dotenv').config({ path: configFile })
  const sentryUrl = new URL(process.env.SENTRY_DETAILS);

  const rev = context.filesystem.read('.git/HEAD').toString().trim();

  if (rev.indexOf(':') === -1) {
    gitHash = rev;
  } else {
    gitHash = context.filesystem.read(env.projectPath + '/.git/' + rev.substring(5)).toString().trim();
  }

  const data = JSON.stringify({
    version: gitHash,
    environment: env.envName
  })

  const options = {
    hostname: sentryUrl.hostname,
    port: 443,
    path: sentryUrl.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
    }
  }

  const req = https.request(options, res => {
    context.print.info(`statusCode: ${res.statusCode}`)
  })

  req.on('error', error => {
    context.print.error(error)
  })

  req.on('end', function () {
    context.print.info(req.data)
  })

  req.write(data)
  req.end()

}

module.exports = {
  run,
};
