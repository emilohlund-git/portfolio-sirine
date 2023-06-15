import { Link } from "react-router-dom";
import pb from "../pb.config";
import Typography from "./Typography";

type Props = {
  project: ProjectType;
  flat?: boolean;
}

const Project: React.FC<Props> = ({ project, flat = false }) => {
  const truncate = () => {
    return project.about.slice(0, 50) + "...";
  }

  return (
    <div style={{
      backgroundColor: project.expand.colors.banner_color
    }} className={`grid grid-flow-row md:grid-cols-2`}>
      <div
        className={`w-full h-[60vh] lg:h-[80vh] ${project.orientation === 'left' || flat ? 'md:order-last' : 'md:order-first'}`}
        style={{
          background: `url(${pb.files.getUrl(project, project.cover_image)})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} />
      <div className={`h-[60vh] lg:h-[80vh] flex items-center text-center lg:items-start flex-col gap-y-2 justify-center ${!flat && 'p-8 lg:p-20'}`}>
        <Typography type="h1" style={{
          color: project.expand.colors.title_color
        }} className={`${flat && 'lg:px-80'}`}>{project.title}</Typography>
        {!flat &&
          <>
            <Typography type="h4" style={{
              color: project.expand.colors.slogan_color
            }} className={`text-[1.5rem] truncate`}>{project.slogan}</Typography>
            <Typography style={{
              color: project.expand.colors.text_color
            }} type="p" className="text-center text-base" html={truncate()} />
            <span style={{
              color: project.expand.colors.title_color
            }} className={`font-semibold`}><Link to={`/projects/${project.id}`}>&gt; Read more</Link></span>
            <div className="flex gap-2 flex-wrap mt-4 justify-center">
              {project.roles.map((role, index) => {
                return <div key={role + index} className="w-fit p-2 text-xs text-white bg-black rounded-xl">{role}</div>
              })}
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Project