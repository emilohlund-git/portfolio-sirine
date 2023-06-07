import { Link } from "react-router-dom";
import pb from "../pb.config";

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
    }} className={`grid grid-flow-row md:grid-cols-2 items-stretch`}>
      <div
        className={`w-full h-[50vh] lg:h-[80vh] ${project.orientation === 'left' || flat ? 'md:order-last' : 'md:order-first'}`}
        style={{
          background: `url(${pb.files.getUrl(project, project.cover_image)})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} />
      <div className={`h-[50vh] lg:h-[80vh] flex items-center text-center md:items-start flex-col mg:gap-y-2 justify-center ${!flat && 'p-20'}`}>
        <h2 style={{
          color: project.expand.colors.title_color
        }} className={`text-[2rem] md:text-[3rem] font-bold ${flat && 'lg:px-80'}`}>{project.title}</h2>
        {!flat &&
          <>
            <p style={{
              color: project.expand.colors.slogan_color
            }} className={`text-[1.5rem] truncate`}>{project.slogan}</p>
            <p style={{
              color: project.expand.colors.text_color
            }} className={`font-extralight md:text-left max-w-3xl mt-4 md:mt-8`}>{truncate()}</p>
            <p style={{
              color: project.expand.colors.title_color
            }} className={`font-semibold`}><Link to={`/projects/${project.id}`}>&gt; Read more</Link></p>
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