import { GoogleSigninButton } from "react-signin-google";
import { FacebookSigninButton } from "react-signin-facebook";

const Home = () => {
  return (
    <div>
      <GoogleSigninButton />
      <FacebookSigninButton />
    </div>
  );
};

export default Home;
