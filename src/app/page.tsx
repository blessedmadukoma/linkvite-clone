import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
// @ts-ignore
// import { FileIcon, CollaborationIcon } from "@/icons/icons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="items-center text-center px-10 py-4">
        {/* Hero section */}
        <section className="p-20  h-[calc(100vh_-_4rem)] items-center text-center space-y-10 m-auto max-w-[1280px]">
          <div>
            <span className="text-[#bdbdbd]">
              Press A to request early access.
            </span>
          </div>
          <div className="leading-[60px] relative">
            <img
              alt="sprite"
              src="sprite.svg"
              width="50"
              height="50"
              decoding="async"
              data-nimg="1"
              loading="lazy"
              className="absolute top-[-25px] left-[-40px] w-[50px] h-[50px] text-transparent"
            />
            <span className="text-[3.5rem] tracking-wide text-center">
              The easiest way to save and organize your bookmarks
            </span>
          </div>
          <div>
            <span className="text-[#bdbdbd] text-[36px] lg:text-xl tracking-wide w-[45rem] m-auto text-center my-[2rem] hidden md:hidden lg:visible">
              We make your bookmarks accessible from any platform. Save once,
              access anywhere
            </span>
          </div>

          <div className="min-w-[15%] flex flex-col lg:flex-row w-full justify-center items-center mb-[2rem] mt-[1rem]">
            <div className="bg-[#fa5a5f] py-[0.9rem] w-full lg:w-[372px] px-[3rem] rounded-[0.25rem] items-center border border-gray-900 text-center hover:bg-gray-900 hover:border hover:border-[#fa5a5f] hover:text-[#fa5a5f]">
              <a href="#">Request Access</a>
            </div>
            <div className="hover:text-[#fa5a5f] w-full lg:w-[180px] mt-4 lg:mt-0 lg:ml-[1rem] text-[#bdbdbd] border border-[#bdbdbd] py-[0.9rem] px-[3rem] rounded-[0.25rem]">
              <a href="#">Login</a>
            </div>
          </div>
        </section>

        {/* Do more section */}
        <section className="py-[4.5rem] px-[2rem] text-center items-center justify-center">
          <h2 className="text-[30px] tracking-wider">Do more with Linkvite</h2>
          <div className="text-[#bdbdbd] text-xl py-2 mt-[1rem] tracking-wide max-w-[45rem] m-auto items-center">
            Easily manage, share, and access bookmarks and files on all devices
            using Linkvite.
          </div>
          {/* grid collection */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 my-[2rem] text-left gap-16 font-extralight tracking-wider">
            <section className="space-y-2">
              <div>
                <h2 className="text-lg">Collections</h2>
              </div>
              <p className="text-[#bdbdbd] tracking-wide">
                Group bookmarks into organized, nested collections for easy
                access.
              </p>
            </section>
            <section className="space-y-2">
              <div>
                <h2 className="text-lg">Collaboration</h2>
              </div>
              <p className="text-[#bdbdbd]">
                Share and work on collections with others using custom invite
                links.
              </p>
            </section>
            <section className="space-y-2">
              <div>
                <h2 className="text-lg">Reminders</h2>
              </div>
              <p className="text-[#bdbdbd]">
                Set reminders for important bookmarks or collections to stay on
                track.
              </p>
            </section>
            <section className="flex flex-col space-y-3">
              <div>
                <h2 className="text-lg">Searching</h2>

                {/* <FileIcon /> */}
              </div>
              <p className="text-[#bdbdbd]">
                Quickly find anything with our powerful search tool.
              </p>
            </section>
            <section className="space-y-3">
              <div>
                <h2 className="text-lg">Use Anywhere</h2>
                {/* <CollaborationIcon /> */}
              </div>
              <p className="text-[#bdbdbd]">
                Access Linkvite on iOS, Android, and desktop devices with
                real-time syncing.
              </p>
            </section>
            <section className="space-y-3">
              <div>
                <h2>Discussions</h2>
              </div>
              <p className="text-[#bdbdbd]">
                Communicate and share ideas within bookmarks through comments.
              </p>
            </section>
          </section>
        </section>
      </section>

      {/* Coming soon */}
      <section className="bg-[#bdbdbd] py-10 mb-4 flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div>1</div>
        <div>2</div>
      </section>
      <Footer />
    </main>
  );
}
