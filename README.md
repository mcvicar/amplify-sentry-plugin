# 👋  The Amplify to Sentry Plugin 👋
An [Amplify](https://docs.amplify.aws/cli/plugins) plugin that pushes release information to [Sentry](https://www.sentry.io)


It will send the latest git hash and your amplify environment post push of your deploy `amplify push` or `amplify publish`.

You need to have a .env.{environment} file in the root of your project with `SENTRY_DETAILS=$YOUR_WEBHOOK_URL`

Your .env file should match your amplify environment (e.g. it'll look for `.env.dev`)
