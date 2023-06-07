import { useLoaderData } from "react-router-dom";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import FadeIn from "../components/FadeIn";
import FadeList from "../components/FadeList";
import FigmaPrototype from "../components/FigmaPrototype";
import Layout from "../components/Layout";
import Mockup from "../components/Mockup";
import Project from "../components/Project";
import ProjectMedia from "../components/ProjectMedia";
import Typography from "../components/Typography";

const ProjectPage = () => {
  const project = useLoaderData() as ProjectType;

  return (
    <Layout>
      <Project flat={true} project={project} />
      <FadeList title="Role" list={project.roles} titleBackground="#E9E3DC" fadingBackground="238,233,227" />
      <FadeList title="Process" list={project.processes} titleBackground="#DEC7BE" fadingBackground="230,210,201" />
      <FadeList title="Tools" list={project.tools} titleBackground="#C0D6E6" fadingBackground="206,224,237" />
      <div className="flex flex-col lg:px-80 pb-[10rem] pt-[3rem] lg:pt-[12rem] gap-y-20 text-center lg:text-left px-4">
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h1" className="flex flex-col">Problem</Typography>
            <hr />
            <Typography type="p" html={project.problem} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h1" className="flex flex-col">Potential solution</Typography>
            <hr />
            <Typography type="p" html={project.potential_solution} />
          </div>
        </FadeIn>
      </div>
      <div
        className={`grid lg:grid-flow-col`}>
        {project.processes.map((process, index) => {
          const maxOpacity = project.roles.length + 1;
          const opacity = (maxOpacity - index) / maxOpacity;
          return (
            <FadeIn key={process + index} delay={index / 10}>
              <div style={{
                backgroundColor: `rgba(167,213,225,${opacity})`
              }} className="p-10">
                <span className="text-[4rem] font-bold opacity-10">0{index + 1}.</span>
                <p className="text-[2em] font-extralight opacity-50">{process}</p>
              </div>
            </FadeIn>
          )
        })}
      </div>
      <div className="flex flex-col lg:px-80 pt-[12rem] gap-y-20">
        <FadeIn>
          <Typography type="h1" className="flex flex-col">
            <span className="text-[4rem] font-extralight opacity-10">01.</span>
            Research</Typography>
        </FadeIn>
        <hr />
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">&gt; Goals</Typography>
            <Typography type="p" html={project.research_goals} />
          </div>
        </FadeIn>
        <div className="flex flex-col gap-y-6">
          <FadeIn>
            <Typography type="h2">&gt; Methodologies</Typography>
          </FadeIn>
          <div className="flex flex-col gap-y-6">
            <FadeIn>
              <Typography type="h3">&gt; Primary research</Typography>
            </FadeIn>
            <FadeIn>
              <div>
                {project?.expand.primary_research?.map((primary_research) => {
                  return (
                    <div key={primary_research.id}>
                      <Typography type="p">
                        {primary_research.content}
                      </Typography>
                      <div className="flex flex-col h-screen gap-4">
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
              <Typography type="h3">&gt; Secondary research</Typography>
            </FadeIn>
            <div className="flex flex-col gap-y-12">
              {project.expand.secondary_research?.map((secondary_research) => {
                return <FadeIn key={secondary_research.id}><div>
                  <Typography type="p">
                    {secondary_research.content}
                  </Typography>
                  <div className="flex flex-col h-screen gap-4">
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
        <hr />
      </div >
      <div className="flex flex-col lg:px-80 pt-[12em] gap-y-20">
        <FadeIn>
          <Typography type="h1" className="flex flex-col">
            <span className="text-[4rem] font-extralight opacity-10">02.</span>
            Analyze / Empathize</Typography>
        </FadeIn>
        <hr />
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">&gt; Findings / Data analysis</Typography>
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
            <Typography type="h2">&gt; Key insights</Typography>
            <Typography type="p" html={project.key_insights} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">&gt; Persona</Typography>
            <ProjectMedia mediaType={project.expand.persona?.type} media={project.expand.persona} />
          </div>
        </FadeIn>
        <hr />
      </div>
      <div className="flex flex-col lg:px-80 pt-[12em] gap-y-20">
        <FadeIn>
          <Typography type="h1" className="flex flex-col">
            <span className="text-[4rem] font-extralight opacity-10">03.</span>
            Ideate</Typography>
        </FadeIn>
        <hr />
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">&gt; Affinity map</Typography>
            <ProjectMedia mediaType={project.expand.affinity_map?.type} media={project.expand.affinity_map} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">&gt; User scenario / Storyboard</Typography>
            <ProjectMedia mediaType={project.expand.user_scenario?.type} media={project.expand.user_scenario} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">&gt; User flow</Typography>
            <ProjectMedia mediaType={project.expand.user_flow?.type} media={project.expand.user_flow} />
          </div>
        </FadeIn>
        <FadeIn>
          <div className="flex flex-col gap-y-6">
            <Typography type="h2">&gt; App navigation map</Typography>
            <ProjectMedia mediaType={project.expand.navigation_map?.type} media={project.expand.navigation_map} />
          </div>
        </FadeIn>
        <hr />
      </div>
      <div className="flex flex-col lg:px-80 pt-[12em] gap-y-20">
        <FadeIn>
          <Typography type="h1" className="flex flex-col">
            <span className="text-[4rem] font-extralight opacity-10">04.</span>
            Design</Typography>
        </FadeIn>
        <hr />
        <div className="flex flex-col gap-y-6">
          <FadeIn>
            <Typography type="h2">&gt; Brand guidelines</Typography>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col gap-y-6">
              <Typography type="h3">&gt; About</Typography>
              <div>
                <Typography type="p" html={project.about} />
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col gap-y-6">
              <Typography type="h3">&gt; Logo</Typography>
              <div>
                {project.expand.logo?.expand.media?.map((image) => {
                  return (
                    <ProjectMedia key={image.id} mediaType={image.type} media={image} />
                  )
                })}
                <p
                  className="text-[1.5rem] font-extralight">
                  {project.expand.logo?.content}
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col gap-y-6">
              <Typography type="h3">&gt; Brand colors</Typography>
              <div>
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
          <FadeIn>
            <div className="flex flex-col gap-y-6">
              <Typography type="h3">&gt; Iconography</Typography>
              <div>
                {project.expand.iconography.map((iconography) => {
                  return <div key={iconography.id}>
                    <p className="text-[1.5rem] font-extralight">
                      {iconography.content}
                    </p>
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
            <div className="flex flex-col gap-y-6">
              <Typography type="h3">&gt; Font family</Typography>
              <div>
                <p
                  className="text-[1.5rem] font-extralight">
                  <ProjectMedia mediaType={project.expand.font_family.type} media={project.expand.font_family} />
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col gap-y-6 w-full">
              <Typography type="h2">&gt; High fidelity mock-ups</Typography>
              <div className="flex justify-center w-full items-center flex-wrap lg:gap-12">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={3}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
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
            <div className="flex flex-col gap-y-6">
              <Typography type="h2">&gt; Interactive prototype</Typography>
              <div className="flex items-center justify-center">
                <FigmaPrototype url={project.expand.interactive_prototype.embed_src} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div >
    </Layout >
  )
}

export default ProjectPage