import Home from '../components/Home';
import Launch from "../components/Launch";
import RocketDetail from "../components/RocketDetail";
import Info from "../components/Info";

export default ({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/launch',
      name: 'Launch',
      component: Launch,
    },
    {
      path: '/rockets/:rocket_id',
      name: 'RocketDetail',
      component: RocketDetail,
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
    },

  ],
  mode: 'history',
});
