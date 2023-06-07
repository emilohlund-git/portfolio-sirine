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

const projects: ProjectType[] = await pb.collection('projects').getFullList({
  expand: 'affinity_map,brand_colors,colors,findings,font_family,high_fidelity_mock_ups,iconography,interactive_prototype,logo,navigation_map,persona,primary_research,secondary_research,user_flow,user_scenario,primary_research.media,secondary_research.media,logo.media,brand_colors.media,iconography.media'
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div></div>,
  },
  ...projects.map((project: ProjectType) => {
    return {
      path: `/projects/${project.id}`,
      element: <ProjectPage project={project} />
    }
  })
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
