import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
