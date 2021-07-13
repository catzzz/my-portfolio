import "../styles/globals.scss";
import { useState } from "react";
import UserContext from "@/context/UserContext";
function MyApp({ Component, pageProps }) {
  const [scrollPos, setScrollPos] = useState(0);
  return (
    <UserContext.Provider
      value={{ scrollPos: scrollPos, setScrollPos: setScrollPos }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
