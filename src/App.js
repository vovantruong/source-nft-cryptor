import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Page1 from "./components/Page1";
import Home from "./screens/Home";
import UploadVariants from "./screens/UploadVariants";
import UploadVariants1 from "./screens/UploadVariants1";
import UploadDetails from "./screens/UploadDetails";
import UploadDetailsMutiple from "./screens/UploadDetailsMutiple";
import ConnectWallet from "./screens/ConnectWallet";
import Faq from "./screens/Faq";
import Activity from "./screens/Activity";
import Search01 from "./screens/Search01";
import Search02 from "./screens/Search02";
import Profile from "./screens/Profile";
import ProfileEdit from "./screens/ProfileEdit";
import Item from "./screens/Item";
import PageList from "./screens/PageList";

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
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/Home"
          render={() => (
            <Page1>
              <Home />
            </Page1>
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
          path="/upload-variants1"
          render={() => (
            <Page1>
              <UploadVariants1 />
            </Page1>
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
          path="/upload-details1"
          render={() => (
            <Page1>
              <UploadDetails />
            </Page1>
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
          path="/upload-details-mutiple1"
          render={() => (
            <Page1>
              <UploadDetailsMutiple />
            </Page1>
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
          path="/connect-wallet1"
          render={() => (
            <Page1>
              <ConnectWallet />
            </Page1>
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
          path="/faq1"
          render={() => (
            <Page1>
              <Faq />
            </Page1>
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
          path="/activity1"
          render={() => (
            <Page1>
              <Activity />
            </Page1>
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
          path="/search011"
          render={() => (
            <Page1>
              <Search01 />
            </Page1>
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
          path="/search021"
          render={() => (
            <Page1>
              <Search02 />
            </Page1>
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
          path="/profile1"
          render={() => (
            <Page1>
              <Profile />
            </Page1>
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
          path="/profile-edit1"
          render={() => (
            <Page1>
              <ProfileEdit />
            </Page1>
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
          path="/item1"
          render={() => (
            <Page1>
              <Item />
            </Page1>
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
          path="/pagelist1"
          render={() => (
            <Page1>
              <PageList />
            </Page1>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
