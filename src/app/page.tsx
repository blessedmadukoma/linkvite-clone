import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import FileIcon from "@/icons/icons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="items-center text-center p-10">
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
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 my-[1.5rem] text-left gap-16">
            <section className="">
              <h2>Collections</h2>
              <span>
                Group bookmarks into organized, nested collections for easy
                access.
              </span>
            </section>
            <section>
              <h2>Collaboration</h2>
              <span>
                Share and work on collections with others using custom invite
                links.
              </span>
            </section>
            <section>
              <h2>Reminders</h2>
              <span>
                Set reminders for important bookmarks or collections to stay on
                track.
              </span>
            </section>
            <section className="flex flex-col">
              <div>
                <h2>Searching</h2>
                {/* @ts-ignore */}
                <FileIcon />
              </div>
              <span>Quickly find anything with our powerful search tool.</span>
            </section>
            <section>
              <h2>Use Anywhere</h2>
              <span>
                Access Linkvite on iOS, Android, and desktop devices with
                real-time syncing.
              </span>
            </section>
            <section>
              <h2>Discussions</h2>
              <span>
                Communicate and share ideas within bookmarks through comments.
              </span>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </main>
  );
}
