import { useLoaderData } from "react-router-dom";
import { A11y, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import FadeIn from "../components/FadeIn";
import FadeList from "../components/FadeList";
import FigmaPrototype from "../components/FigmaPrototype";
import Layout from "../components/Layout";
import Mockup from "../components/Mockup";
import ProcessStepsBanner from "../components/ProcessStepsBanner";
import Project from "../components/Project";
import ProjectMedia from "../components/ProjectMedia";
import Typography from "../components/Typography";
import { hexToRgbA } from "../utils/utils";

const ProjectPage = () => {
  const project = useLoaderData() as ProjectType;

  return (
    <Layout>
      <Project flat={true} project={project} />
      <FadeList title="Role" list={project.roles} titleBackground={project.expand.colors.role_list_color} fadingBackground={hexToRgbA(project.expand.colors.role_list_color)} />
      <FadeList title="Process" list={project.processes} titleBackground={project.expand.colors.process_list_color} fadingBackground={hexToRgbA(project.expand.colors.process_list_color)} />
      <FadeList title="Tools" list={project.tools} titleBackground={project.expand.colors.tools_list_color} fadingBackground={hexToRgbA(project.expand.colors.tools_list_color)} />
      <div className="flex flex-col lg:px-96 pb-[10rem] pt-[3rem] lg:pt-[12rem] gap-y-20 text-center lg:text-left px-4">
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2" className="flex flex-col">Problem</Typography>
            <Typography type="p" html={project.problem} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2" className="flex flex-col">Potential solution</Typography>
            <Typography type="p" html={project.potential_solution} />
          </div>
        </FadeIn>
      </div>
      <ProcessStepsBanner project={project} />
      <div style={{
        backgroundColor: `rgba(${hexToRgbA(project.expand.colors.process_steps_color)},${1})`
      }} className="flex flex-col lg:px-96 pt-[12rem] gap-y-20 pb-36">
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">Goals</Typography>
            <Typography type="p" html={project.research_goals} />
          </div>
        </FadeIn>
        <div className="flex flex-col gap-y-6">
          <FadeIn>
            <Typography type="h2">Methodologies</Typography>
          </FadeIn>
          <div className="flex flex-col gap-y-6">
            <FadeIn>
              <Typography type="h3">Primary research</Typography>
            </FadeIn>
            <FadeIn>
              <div>
                {project?.expand.primary_research?.map((primary_research) => {
                  return (
                    <div key={primary_research.id}>
                      <Typography type="p">
                        {primary_research.content}
                      </Typography>
                      <div className="flex h-screen gap-4">
                        {primary_research.expand.media?.map((media) => {
                          console.log(project);
                          return (
                            <ProjectMedia key={media.id} mediaType={media.type} media={media} />
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </FadeIn>
            <FadeIn>
              <Typography type="h3">Secondary research</Typography>
            </FadeIn>
            <div className="flex flex-col gap-y-12">
              {project.expand.secondary_research?.map((secondary_research) => {
                return <FadeIn key={secondary_research.id}><div>
                  <Typography type="p">
                    {secondary_research.content}
                  </Typography>
                  <div className="flex h-screen gap-4">
                    {secondary_research.expand.media?.map((media) => {
                      return (
                        <ProjectMedia key={media.id} mediaType={media.type} media={media} />
                      )
                    })}
                  </div>
                </div>
                </FadeIn>
              })}
            </div>
          </div>
        </div>
      </div >
      <ProcessStepsBanner project={project} />
      <div style={{
        backgroundColor: `rgba(${hexToRgbA(project.expand.colors.process_steps_color)},${.8})`
      }} className="flex flex-col lg:px-96 pt-[12em] gap-y-20 pb-36">
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">Findings / Data analysis</Typography>
            <div className="grid grid-cols-3 gap-4">
              {project.expand.findings?.map((finding) => {
                return (
                  <ProjectMedia key={finding.id} mediaType={finding.type} media={finding} />
                )
              })}
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">Key insights</Typography>
            <Typography type="p" html={project.key_insights} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">Persona</Typography>
            <ProjectMedia mediaType={project.expand.persona?.type} media={project.expand.persona} />
          </div>
        </FadeIn>
      </div>
      <ProcessStepsBanner project={project} />
      <div style={{
        backgroundColor: `rgba(${hexToRgbA(project.expand.colors.process_steps_color)},${.6})`
      }} className="flex flex-col lg:px-96 pt-[12em] gap-y-20 pb-36">
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">Affinity map</Typography>
            <ProjectMedia mediaType={project.expand.affinity_map?.type} media={project.expand.affinity_map} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">User scenario / Storyboard</Typography>
            <ProjectMedia mediaType={project.expand.user_scenario?.type} media={project.expand.user_scenario} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">User flow</Typography>
            <ProjectMedia mediaType={project.expand.user_flow?.type} media={project.expand.user_flow} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">App navigation map</Typography>
            <ProjectMedia mediaType={project.expand.navigation_map?.type} media={project.expand.navigation_map} />
          </div>
        </FadeIn>
      </div>
      <ProcessStepsBanner project={project} />
      <div style={{
        backgroundColor: `rgba(${hexToRgbA(project.expand.colors.process_steps_color)},${.4})`
      }} className="flex flex-col lg:px-96 pt-[12em] gap-y-20 pb-36">
        <div className="flex flex-col gap-y-6">
          <FadeIn>
            <Typography type="h2">Brand guidelines</Typography>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col gap-y-6 mt-12">
              <Typography type="h3">About</Typography>
              <div>
                <Typography type="p" html={project.about} />
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col gap-y-6 mt-12">
              <Typography type="h3">Logo</Typography>
              <div className="grid col-auto grid-flow-col gap-8">
                {project.expand.logo?.expand.media?.map((image) => {
                  return (
                    <ProjectMedia key={image.id} mediaType={image.type} media={image} />
                  )
                })}
              </div>
              <div>
                <p
                  className="text-[1.5rem] font-extralight">
                  {project.expand.logo?.content}
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col gap-y-6 mt-12">
              <Typography type="h3">Brand colors</Typography>
              <div className="flex gap-x-8">
                {project.expand.brand_colors.expand.media?.map((image) => {
                  return (
                    <ProjectMedia key={image.id} mediaType={image.type} media={image} />
                  )
                })}
                <Typography type="p">
                  {project.expand.brand_colors.content}
                </Typography>
              </div>
            </div>
          </FadeIn>
          <div className="flex gap-x-20">
            <FadeIn>
              <div className="flex flex-col gap-y-6 mt-12">
                <Typography type="h3">Iconography</Typography>
                <div>
                  {project.expand.iconography.map((iconography) => {
                    return <div className="flex flex-col gap-y-12" key={iconography.id}>
                      <Typography type="p">
                        {iconography.content}
                      </Typography>
                      {iconography.expand.media?.map((image) => {
                        return (
                          <ProjectMedia key={image.id} mediaType={image.type} media={image} />
                        )
                      })}
                    </div>
                  })}
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-col gap-y-6 mt-12 justify-between h-full pb-36">
                <Typography type="h3">Font family</Typography>
                <div>
                  <p
                    className="text-[1.5rem] font-extralight">
                    <ProjectMedia mediaType={project.expand.font_family.type} media={project.expand.font_family} />
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div >
      <ProcessStepsBanner project={project} />
      <FadeIn>
        <div style={{
          backgroundColor: `rgba(${hexToRgbA(project.expand.colors.process_steps_color)},${.2})`
        }} className="flex flex-col pb-36 w-full">
          <Typography type="h2" className="text-center mt-36">High fidelity mock-ups</Typography>
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={0}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              slidesPerView={5}
            >
              {project.expand.high_fidelity_mock_ups?.map((image) => {
                return (
                  <SwiperSlide key={image.id}>
                    <Mockup media={image} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </FadeIn>
      <FadeIn>
        <div className="flex flex-col bg-black">
          <Typography type="h2" className="text-center mt-36">Interactive prototype</Typography>
          <div className="flex items-center justify-center">
            <FigmaPrototype url={project.expand.interactive_prototype.embed_src} />
          </div>
        </div>
      </FadeIn>
    </Layout >
  )
}

export default ProjectPage