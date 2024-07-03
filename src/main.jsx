import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import SingleBlog from './pages/SingleBlog.jsx';
import blogsData from './api/blogsData.json';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: ({ params }) => {
          const blog = blogsData.find(blog => blog.id === parseInt(params.id));
          return blog ? { blog } : { error: 'Blog not found' };
        }
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
