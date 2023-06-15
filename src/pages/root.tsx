import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Box from "../components/Box";
import ContactForm from "../components/ContactForm";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
import Project from "../components/Project";
import Skill from "../components/Skill";
import BrandingIcon from "../icons/BrandingIcon";
import ProductDesignIcon from "../icons/ProductDesignIcon";
import UiUxIcon from "../icons/UiUxIcon";
import pb from "../pb.config";

const Root = () => {
  const content = useLoaderData() as FirstPageContent;
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
          <Skill icon={<BrandingIcon className="w-12 h-12 fill-[#DBC49F]" />} title="Branding" description={content?.branding_text} />
        </Box>
        <Box size={'small'} className="bg-[#F7ECDE]">
          <Skill icon={<ProductDesignIcon className="w-12 h-12 fill-[#DBC49F]" />} title="UI/UX" description={content?.ui_ux_text} />
        </Box>
        <Box size={'small'} className="bg-[#FBF6EF]">
          <Skill icon={<UiUxIcon className="w-12 h-12 fill-[#DBC49F]" />} title="Product Design" description={content?.product_design_text} />
        </Box>
      </Grid>
      {projects?.map((project: ProjectType, index: number) => {
        return <Project key={index} project={project} />
      })}
      <ContactForm caption={content?.contact_me_caption} />
    </Layout>
  )
}

export default Root;