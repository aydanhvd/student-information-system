import React, { useState } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";

import { loadFonts } from "./styles/fonts";
import { UIComonentProvider } from "./utils/UIComonentProvider";
import { RootDrawer } from "./navigation/RootDrawer";
import store, { persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  //a state for determining wether fonst are installes or not
  const [ready, setReady] = useState(false);
  //is fonts r't insatlled install them and then return rootdrawer
  if (!ready) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setReady(true)}
        onError={(err) => console.log("AppLoading err", err)}
        //todo handele err
      />
    );
  }
  return (
    <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
      <UIComonentProvider>
        <RootDrawer />
      </UIComonentProvider>
	  </PersistGate>
    </Provider>
  );
}
