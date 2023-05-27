import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

import {
  FileIcon,
  CollaborationIcon,
  BellIcon,
  SearchIcon,
  AccessIcon,
  ChatIcon,
} from "@/icons/icons";

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
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 my-[2rem] text-left gap-16 font-thin tracking-wider">
            <section className="space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="w-[30px] h-[30px] rounded bg-[#fa5a5f] flex flex-row items-center justify-center">
                  <FileIcon />
                </div>
                <h2 className="text-lg">Collections</h2>
              </div>
              <p className="text-[#bdbdbd] tracking-wide">
                Group bookmarks into organized, nested collections for easy
                access.
              </p>
            </section>
            <section className="space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="w-[30px] h-[30px] rounded bg-[#1db954] flex flex-row items-center justify-center">
                  <CollaborationIcon />
                </div>
                <h2 className="text-lg">Collaboration</h2>
              </div>
              <p className="text-[#bdbdbd]">
                Share and work on collections with others using custom invite
                links.
              </p>
            </section>
            <section className="space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="w-[30px] h-[30px] rounded bg-[#3f51b5] flex flex-row items-center justify-center">
                  <BellIcon />
                </div>
                <h2 className="text-lg">Reminders</h2>
              </div>
              <p className="text-[#bdbdbd]">
                Set reminders for important bookmarks or collections to stay on
                track.
              </p>
            </section>
            <section className="flex flex-col space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="w-[30px] h-[30px] rounded bg-[#2196f3] flex flex-row items-center justify-center">
                  <SearchIcon />
                </div>
                <h2 className="text-lg">Searching</h2>
              </div>
              <p className="text-[#bdbdbd]">
                Quickly find anything with our powerful search tool.
              </p>
            </section>
            <section className="space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="w-[30px] h-[30px] rounded bg-[#ff4747] flex flex-row items-center justify-center">
                  <AccessIcon />
                </div>
                <h2 className="text-lg">Use Anywhere</h2>
              </div>
              <p className="text-[#bdbdbd]">
                Access Linkvite on iOS, Android, and desktop devices with
                real-time syncing.
              </p>
            </section>
            <section className="space-y-4">
              <div className="flex space-x-2 items-center">
                <div className="w-[30px] h-[30px] rounded bg-[#ff9800] flex flex-row items-center justify-center">
                  <ChatIcon />
                </div>
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
      <section className=" bg-[#1a1a1a] md:bg-black lg:bg-black">
        <div className="max-w-[1280px] m-auto w-[100vh] py-8 mb-4 flex flex-col md:flex-row lg:flex-row justify-between items-center text-center">
          <div className="max-w-[30rem] m-auto text-xl">
            <p className="text-[#fa5a5f] inline-block text-base">
              *Coming soon
            </p>
            <p className="text-3xl font-medium">Linkvite Integrations</p>
            <p className="text-[#bdbdbd] my-[1rem]">
              Supercharge your workflow by integrating Linkvite with your
              favorite apps and services.
            </p>
          </div>
          <div>
            <img
              src="https://linkvite.io/_next/static/media/all_icons.9f804d71.svg"
              alt="Icons"
            />
          </div>
        </div>
      </section>

      {/* Ready to use */}
      <section className="w-full my-40">
        <div className="p-[1.5rem] text-center items-center bg-gradient-to-r max-w-[768px] rounded-lg mx-6 m-auto md:m-auto from-[#ff6d6d] via-[#5e35b1]  to-[#3f51b5]">
          <p className="text-[#fa5a5f] inline-block text-base">
            *Currently in closed beta.
          </p>

          <p className="text-3xl">Ready to use Linkvite?</p>
          <div className="bg-[#fa5a5f] py-[0.9rem] rounded-[0.25rem] items-center text-center w-2/6 m-auto my-4">
            Request Early Access
          </div>
        </div>
        {/* linear-gradient(225deg, #3f51b5 0%, #5e35b1 50%, #ff6d6d 100%) */}
      </section>

      <Footer />
    </main>
  );
}
