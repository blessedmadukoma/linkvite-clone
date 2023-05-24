import React from "react";

const Footer = () => {
  return (
    <section className=" border-top px-[2rem] text-[#BDBDBD]">
      <div className="flex justify-around items-start text-start flex-wrap w-full py-[4rem]">
        <div className="space-y-4 min-w-[15%]">
          <a
            href="/"
            className="text-[#fa5a5f] hover:text-white flex font-medium items-center text-[1.45rem] w-[40px] space-x-2 text-center"
          >
            <img alt="paws" src="https://assets.linkvite.io/cdn/favicon.webp" />
            <span>Linkvite</span>
          </a>

          <div className="tracking-wide font-light my-[1.5rem] max-w-[20rem]">
            The easiest way to save and organize your bookmarks.
          </div>
          <div className="flex space-x-2">
            <div>
              <a href="https://testflight.apple.com/join/9iJO7VQP">
                <img
                  src="https://linkvite.io/_next/static/media/app_store.53382f5f.svg"
                  alt="AppStore"
                />
              </a>
            </div>
            <div>
              <a
                href="https://play.google.com/store/apps/details?id=com.decover_labs.linkvite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://linkvite.io/_next/static/media/google_play.06984d3c.svg"
                  alt="PlayStore Icon"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[20rem] min-w-[15%]">
          <h3 className="sub-title space-y-3 mb-[1.3rem]">Product</h3>
          <div className="mb-[1.6rem]">Features</div>
          <div className="mb-[1.6rem]">Pricing</div>
          <div className="mb-[1.6rem]">Integrations</div>
          <div className="mb-[1.6rem]">Download</div>
          <div className="mb-[1.6rem]">Changelog</div>
          <div className="mb-[1.6rem]">Docs</div>
        </div>
        <div className="max-w-[20rem] min-w-[15%]">
          <h3 className="sub-title space-y-3 mb-[1.3rem]">Company</h3>
          <div className="mb-[1.6rem]">About</div>
          <div className="mb-[1.6rem]">Blog</div>
          <div className="mb-[1.6rem]">Credits</div>
          <div className="mb-[1.6rem]">Terms of Service</div>
          <div className="mb-[1.6rem]">Privacy Policy</div>
        </div>
        <div className="max-w-[20rem] min-w-[15%]">
          <h3 className="sub-title space-y-3 mb-[1.3rem]">Resources</h3>
          <div className="mb-[1.6rem]">Contact</div>
          <div className="mb-[1.6rem]">Status</div>
          <div className="mb-[1.6rem]">GitHub</div>
          <div className="mb-[1.6rem]">DPA</div>
        </div>
      </div>
      <div className="flex items-center text-center justify-between font-light text-sm max-w-[1280px] py-[2rem]">
        <section>© 2023 Linkvite. All rights reserved.</section>
        <section>
          <div className="flex">
            <div className="w-[30px] mr-[15px]">
              <a
                href="https://twitter.com/tryLinkvite"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[1.5rem] mr-[15px] w-[30px]"
              >
                <img
                  src="https://linkvite.io/_next/static/media/twitter.dd651835.svg"
                  alt="Twitter Icon"
                  className="sc-fnGiBr iENTtq"
                />
              </a>
            </div>
            <div className="w-[30px] mr-[15px]">
              <a
                href="https://github.com/linkvite"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[1.5rem] mr-[15px] w-[30px]"
              >
                <img
                  src="https://linkvite.io/_next/static/media/github.2c3ab107.svg"
                  alt="Github Icon"
                  className="sc-fnGiBr iENTtq"
                />
              </a>
            </div>
            <div className="w-[30px]">
              <a
                href="mailto:contact@linkvite.io"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-[1.5rem] mr-[15px] w-[30px]"
              >
                <img
                  src="https://linkvite.io/_next/static/media/email.1102192c.svg"
                  alt="Email Icon"
                  className="sc-fnGiBr iENTtq"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Footer;
