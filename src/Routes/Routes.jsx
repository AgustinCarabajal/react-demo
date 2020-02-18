import Home from '../Screens/Home/components/HomeContainer';

const ApplicationRoutes = {
  Routes: [
    {
      path: '/home', exact: true, component: Home, isPrivate: false,
    },
    // TODO: Not Found page
    { component: Home },
  ],
};

export default ApplicationRoutes;
