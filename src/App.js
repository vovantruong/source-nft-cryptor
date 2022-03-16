import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import UploadVariants from "./screens/UploadVariants";
import UploadDetails from "./screens/UploadDetails";
import UploadDetailsMutiple from "./screens/UploadDetailsMutiple";
import ConnectWallet from "./screens/ConnectWallet";
import Faq from "./screens/Faq";
import NFT from "./screens/NFT";
import Activity from "./screens/Activity";
import Search01 from "./screens/Search01";
import Search02 from "./screens/Search02";
import Profile from "./screens/Profile";
import ProfileEdit from "./screens/ProfileEdit";
import Item from "./screens/Item";
import PageList from "./screens/PageList";
import AllActivity from "./screens/All_Activity";
import BackToTop from "./components/BackToTop";
import SellNFT from "./screens/SellNFT";
import { bids } from "./mocks/bids";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAsh3B55LXpwuOTd3IQXNhL1M1evcA05E",
  authDomain: "womentech-nft.firebaseapp.com",
  projectId: "womentech-nft",
  storageBucket: "womentech-nft.appspot.com",
  messagingSenderId: "191795889654",
  appId: "1:191795889654:web:d34352eed1f490666e73d7",
  measurementId: "G-049R6L1G1B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/upload-variants"
          render={() => (
            <Page>
              <UploadVariants />
            </Page>
          )}
        />
        <Route
          exact
          path="/upload-details"
          render={() => (
            <Page>
              <UploadDetails />
            </Page>
          )}
        />
        <Route
          exact
          path="/upload-details-mutiple"
          render={() => (
            <Page>
              <UploadDetailsMutiple />
            </Page>
          )}
        />
        <Route
          exact
          path="/connect-wallet"
          render={() => (
            <Page>
              <ConnectWallet />
            </Page>
          )}
        />
        <Route
          exact
          path="/faq"
          render={() => (
            <Page>
              <Faq />
            </Page>
          )}
        />
        <Route
          exact
          path="/nft"
          render={() => (
            <Page>
              <NFT />
            </Page>
          )}
        />
        <Route
          exact
          path="/activity"
          render={() => (
            <Page>
              <Activity />
            </Page>
          )}
        />
        <Route
          exact
          path="/search01"
          render={() => (
            <Page>
              <Search01 />
            </Page>
          )}
        />
        <Route
          exact
          path="/search02"
          render={() => (
            <Page>
              <Search02 />
            </Page>
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <Page>
              <Profile />
            </Page>
          )}
        />
        <Route
          exact
          path="/profile-edit"
          render={() => (
            <Page>
              <ProfileEdit />
            </Page>
          )}
        />
        <Route
          exact
          path="/item"
          render={() => (
            <Page>
              <Item />
            </Page>
          )}
        />
        <Route
          exact
          path="/pagelist"
          render={() => (
            <Page>
              <PageList />
            </Page>
          )}
        />
        <Route
          exact
          path="/all-activity"
          render={() => (
            <Page>
              <AllActivity />
            </Page>
          )}
        />
        <Route
          exact
          path="/sell_nft"
          render={() => (
            <Page>
              <SellNFT />
            </Page>
          )}
        />
      </Switch>
      <BackToTop />
    </Router>
  );
}

export default App;
