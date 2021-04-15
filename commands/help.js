async function run(context) {
  // print out the help message of your plugin
  context.print.info('👋  The Amplify to Sentry Plugin 👋 ');
  context.print.info('This is a simple plugin to alert sentry of a release of your amplify app');
  context.print.info('It will send the latest git hash post push of your deploy');
  context.print.info('You need to have a .env.{environment} file in the root of your project with SENTRY_DETAILS=$YOUR_WEBHOOK_URL');
  context.print.info('Your .env file should match your amplify environment');
  context.print.info('');
  context.print.info('See https://github.com/mcvicar/amplify-sentry-plugin for more details');
}

module.exports = {
  run,
};
