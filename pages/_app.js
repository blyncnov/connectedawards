import Layouts from "../layout";
import "../styles/globals.css";
import "../styles/constants/helper.css";
import "../styles/homepage/Hero.css";
import "../styles/homepage/Target.css";
import "../styles/homepage/Vision.css";
import "../styles/homepage/Showcase.css";
import "../styles/layouts/Navigation.css";
import "../styles/layouts/Footer.css";
import "../styles/auth/auth.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;
