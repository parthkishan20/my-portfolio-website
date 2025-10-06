import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import About from './pages/about';
import Experience from './pages/experience';
import Education from './pages/education';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Certifications from './pages/certifications';
import Extracurricular from './pages/extracurricular';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Test from './pages/test';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/experience',
        element: <Experience />,
      },
      {
        path: '/education',
        element: <Education />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/certifications',
        element: <Certifications />,
      },
      {
        path: '/extracurricular',
        element: <Extracurricular />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;