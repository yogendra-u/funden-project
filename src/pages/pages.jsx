import About from './About';
import Home from './Home';

const pages = [
  {
    path: '',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'about',
    element: <About />,
    title: 'about',
  },
];

export default pages;
