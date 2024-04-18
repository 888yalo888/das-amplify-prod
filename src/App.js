import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import { PMHeader, Youths } from "./ui-components";

Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <PMHeader width="100%" />
      <Youths />
    </>
  );
}

export default withAuthenticator(App);
