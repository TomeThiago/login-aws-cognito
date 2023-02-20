import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
      identityPoolId: import.meta.env.VITE_APP_IDENTITY_POOL_ID,
      region: import.meta.env.VITE_APP_AWS_REGION,
      identityPoolRegion: import.meta.env.VITE_APP_AWS_REGION,
      userPoolId: import.meta.env.VITE_APP_USER_POOL_ID,
      userPoolWebClientId: import.meta.env.VITE_APP_USER_POOL_WEB_CLIENT_ID,
      mandatorySignIn: true,
      signUpVerificationMethod: 'code',
      authenticationFlowType: 'USER_PASSWORD_AUTH',
      oauth: {
        domain: import.meta.env.VITE_APP_AWS_OAUTH_DOMAIN,
        scope: ['email', 'aws.cognito.signin.user.admin'],
        redirectSignIn: import.meta.env.VITE_APP_AWS_OAUTH_REDIRECT_SIGN_IN,
        redirectSignOut: import.meta.env.VITE_APP_AWS_OAUTH_REDIRECT_SIGN_OUT,
        responseType: 'token'
      }
  }
});

Auth.configure();