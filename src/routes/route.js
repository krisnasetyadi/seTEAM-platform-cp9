import Signup from "../Pages/Register";
import Login from "../Pages/Login";
import GameSuit from "../Pages/GameSuit";
import AddGame from "../Pages/AddGamePage";
import EditProfile from "../Pages/EditProfilePage";
import GameList from "../Pages/GameListPage";
import GameDetail from "../Pages/GameDetailPage";
import Profile from "../Pages/ProfilePage";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/About";

const routes = [
  {
    path: "/signup",
    component: <Signup />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/gamesuit",
    component: <GameSuit />,
  },
  {
    path: "/",
    component: <HomePage />,
    exact: true,
  },
  {
    path: "/addgame",
    component: <AddGame />,
  },
  {
    path: "/editprofile",
    component: <EditProfile />,
  },
  {
    path: "/games",
    component: <GameList />,
  },
  {
    path: "/gamedetail",
    component: <GameDetail />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "/about",
    component: <AboutPage />,
  }
];

export default routes;
