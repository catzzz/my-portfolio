import "../styles/globals.scss";
import { useState } from "react";

import UserContext from "@/context/UserContext";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  const [scrollPos, setScrollPos] = useState(0);
  return (
    <UserContext.Provider
      value={{ scrollPos: scrollPos, setScrollPos: setScrollPos }}
    >
      <ToastProvider autoDismiss={true} autoDismissTimeout="2000">
        <Component {...pageProps} />
      </ToastProvider>
    </UserContext.Provider>
  );
}

export default MyApp;
