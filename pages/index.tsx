import {
  Brand,
  DocumentationCTA,
  Footer,
  Header,
  Hero,
  MainMenu,
  ProjectsInfo,
  Stats,
  Summary,
} from "../components";

export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`py-6 px-6 sm:px-16 flex justify-center items-center`}>
        <div className={`xl:max-w-[1920px] w-full font-helvetica`}>
          {/* Sidebar */}
          <div className="flex flex-col md:flex-row">
            <section
              id="sidebar"
              className="flex flex-1 flex-col max-w-[250px] w-full"
            >
              <Brand />
              <MainMenu />
              <DocumentationCTA />
            </section>

            <section id="main-content" className="flex flex-col ml-0 sm:ml-10">
              {/* MainContent */}
              <Header></Header>
              <Summary></Summary>
              <Hero></Hero>
              <Stats></Stats>
              <ProjectsInfo></ProjectsInfo>
              <Footer></Footer>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
