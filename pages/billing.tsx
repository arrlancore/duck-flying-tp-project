import Head from "next/head";
import {
  BillingInformation,
  BillingPayment,
  Brand,
  DocumentationCTA,
  Footer,
  Header,
  MainMenu,
} from "../components";
import { SpaceY } from "../components/Space";

const caption = {
  title: "Billing",
  description: "Purity UI Dashboard",
};

export default function Billing() {
  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen">
      {/* Meta */}
      <Head>
        <title>{caption.title}</title>
        <meta name="description" content={caption.description} key="desc" />
      </Head>
      <div
        className={`py-6 px-2 sm:px-16 xl:px-24 flex justify-center items-center`}
      >
        <div className={`xl:max-w-[1920px] w-full font-helvetica`}>
          <div className="flex flex-col md:flex-row">
            <section
              id="sidebar"
              className="flex flex-1 flex-col min-w-[250px] w-full"
            >
              <Brand />
              <MainMenu />
              <DocumentationCTA />
            </section>

            <section
              id="main-content"
              className="flex flex-col w-full ml-0 md:ml-10"
            >
              <Header title={caption.title} />
              <SpaceY />
              <BillingPayment />
              <BillingInformation />
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
