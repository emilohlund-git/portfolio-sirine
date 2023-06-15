import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import ProjectPage from './pages/project';
import Root from './pages/root';
import pb from './pb.config';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: async () => {
      return await pb.collection('front_page_content').getFirstListItem('');
    },
    errorElement: <div></div>,
  },
  {
    element: <ProjectPage />,
    path: "/projects/:projectId",
    loader: async ({ params }) => {
      return await pb.collection('projects').getOne(params!.projectId!, {
        expand: 'affinity_map,brand_colors,colors,findings,font_family,high_fidelity_mock_ups,iconography,interactive_prototype,logo,navigation_map,persona,primary_research,secondary_research,user_flow,user_scenario,primary_research.media,secondary_research.media,logo.media,brand_colors.media,iconography.media'
      })
    }
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
