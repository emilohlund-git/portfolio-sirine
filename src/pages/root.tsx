import { useEffect, useState } from "react";
import Box from "../components/Box";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Skill from "../components/Skill";
import BrandingIcon from "../icons/BrandingIcon";
import ProductDesignIcon from "../icons/ProductDesignIcon";
import UiUxIcon from "../icons/UiUxIcon";
import pb from "../pb.config";

const Root = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res: ProjectType[] = await pb.collection('projects').getFullList({
        expand: 'affinity_map,brand_colors,colors,findings,font_family,high_fidelity_mock_ups,iconography,interactive_prototype,logo,navigation_map,persona,primary_research,secondary_research,user_flow,user_scenario'
      });

      setProjects(res);
    }

    fetchProjects();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-center h-[100vh] items-center pb-[20rem] pt-[12rem]">
        <img src="/images/sirine.jpg" className="rounded-full w-36" width={228} height={228} />
        <h1 className="text-[2rem] md:text-[4rem] font-extralight"><span className="font-light">Sirine</span> Harzallah</h1>
        <p className="text-[1.5rem] md:text-[2rem] font-extralight"><span className="font-light">UI/UX</span> designer</p>
      </div>
      <Grid>
        <Box size={'small'} className="bg-[#F3E3CE]">
          <Skill icon={<BrandingIcon className="w-12 h-12 fill-[#DBC49F]" />} title="Branding" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." />
        </Box>
        <Box size={'small'} className="bg-[#F7ECDE]">
          <Skill icon={<ProductDesignIcon className="w-12 h-12 fill-[#DBC49F]" />} title="UI/UX" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." />
        </Box>
        <Box size={'small'} className="bg-[#FBF6EF]">
          <Skill icon={<UiUxIcon className="w-12 h-12 fill-[#DBC49F]" />} title="Product Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do." />
        </Box>
      </Grid>
      {projects?.map((project: ProjectType, index: number) => {
        return <Project key={index} project={project} />
      })}
      <div id="contact" className="p-20 py-52 min-h-screen md:h-screen flex flex-col justify-center items-center bg-[#2F2F2F] text-[#DDDDDD]">
        <div className="text-center md:w-1/3">
          <h2 className="text-[2rem] md:text-[4rem] font-extralight">Contact me</h2>
          <p className="font-extralight md:text-[1.5rem]">Tell me what the fuck is going on please.</p>
          <form className="mt-10 flex flex-col gap-y-8 font-extralight">
            <input className="md:text-[1.5rem] bg-transparent border-[1px] rounded-2xl py-2 px-4 w-full" placeholder="Your email" type="text" />
            <textarea className="no-scrollbar md:text-[1.5rem] bg-transparent border-[1px] rounded-2xl py-2 px-4 w-full" placeholder="Message" />
            <button className="md:text-[1.5rem] border-[1px] rounded-2xl py-2 px-4 w-full bg-[#EAEAEA] text-[#2E2E2E]">Send</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Root;