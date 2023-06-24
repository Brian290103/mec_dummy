import NewsletterBanner from '@/components/NewsletterBanner';
import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import React from 'react';
import { BiCertification, BiFork } from 'react-icons/bi';
import { FaCaretRight, FaTree } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      <div className="bg-red-500 h-[30vh] flex justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-2 text-3xl">About Us</h1>
          <span className="">
            Home - <b>About</b>
          </span>
        </div>
      </div>
      <Wrapper className="py-5">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <div className="grid grid-cols-1 gap-2 ">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              <div className="overflow-hidden">
                <Image
                  src="/slider-1.jpg"
                  width={1000}
                  height={1000}
                  alt="about-us"
                  className="transition-transform cursor-pointer hover:opacity-90 hover:scale-105"
                />
              </div>
              {/* <div className="flex items-center justify-end"> */}

              <div className="overflow-hidden">
                <Image
                  src="/slider-1.jpg"
                  width={1000}
                  height={1000}
                  alt="about-us"
                  className="transition-transform cursor-pointer hover:opacity-90 hover:scale-105"
                />
              </div>

              {/* </div> */}
            </div>
            <div className="overflow-hidden">
              {' '}
              <Image
                src="/slider-3.webp"
                width={1000}
                height={1000}
                className="max-h-[400px] hover:opacity-90  cursor-pointer hover:scale-105 transition-transform"
                alt="about-us"
              />
            </div>
          </div>

          {/* Right */}
          <div className="">
            <h1 className="text-2xl">Welcome to Maasai Education Center,</h1>
            <span className="pb-3 text-xl text-red-500">
              the Style Hotel School
            </span>
            <p className="flex items-start justify-start pt-3">
              <FaCaretRight className="text-2xl text-red-500 me-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              doloremque vitae ipsa reiciendis aliquam perferendis amet
              laboriosam omnis repellat suscipit saepe blanditiis, debitis est
              excepturi provident praesentium consequatur quas numquam!
            </p>
            <div className="mt-3">
              <h1 className="font-medium text-red-500">Mission</h1>
              <p className="flex items-start justify-start">
                <FaCaretRight className="text-2xl text-red-500 me-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, possimus? numquam!
              </p>
            </div>
            <div className="my-3">
              <h1 className="font-medium text-red-500">Vision</h1>
              <p className="flex items-start justify-start ">
                <FaCaretRight className="text-2xl text-red-500 me-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, possimus? numquam!
              </p>
            </div>
          </div>
        </div>

        <div className="my-10">
          <h1 className="mb-5 text-3xl text-center text-red-500">
            Awesome Features
          </h1>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Grid1 */}
            <div className="flex flex-col items-start justify-center p-3 text-white transition-all duration-300 bg-green-600 rounded-lg cursor-pointer hover:opacity-90 hover:scale-95">
              <FaTree className="mb-3 text-5xl" />
              <h1 className="mb-3 text-lg font-medium">
                Wonderful Learning Environment
              </h1>
              <p className="flex items-start justify-start text-sm">
                <FaCaretRight className="text-2xl me-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eum voluptates omnis illum, velit dolor?
              </p>
            </div>
            <div className="flex flex-col items-start justify-center p-3 text-white transition-all duration-300 bg-red-500 rounded-lg cursor-pointer hover:opacity-90 hover:scale-95">
              <BiFork className="mb-3 text-5xl" />
              <h1 className="mb-3 text-lg font-medium">A Hotel School</h1>
              <p className="flex items-start justify-start text-sm">
                <FaCaretRight className="text-2xl me-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eum voluptates omnis illum, velit dolor?
              </p>
            </div>
            <div className="flex flex-col items-start justify-center p-3 text-white transition-all duration-300 bg-black rounded-lg cursor-pointer hover:opacity-90 hover:scale-95">
              <FaTree className="mb-3 text-5xl" />
              <h1 className="mb-3 text-lg font-medium">Cerification</h1>
              <p className="flex items-start justify-start text-sm">
                <FaCaretRight className="text-2xl me-2" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                eum voluptates omnis illum, velit dolor?
              </p>
            </div>
          </div>
        </div>

        <div className="py-5 mx-auto md:w-3/4">
          <h1 className="pb-5 text-2xl text-center text-red-500 md:text-5xl">
            Our History
          </h1>
          <p className="pb-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            consequuntur rerum porro id eveniet, recusandae quis dolore neque
            iusto non! Et quo minima nesciunt, molestiae ipsam ut libero,
            dolores ullam exercitationem odit tenetur laudantium, praesentium
            commodi maiores accusantium sunt nisi. Sint ad eligendi facilis
            impedit consequuntur magnam doloribus veritatis sapiente, dicta
            commodi optio, odio veniam quibusdam nesciunt? Unde nulla, deleniti
            officia magnam quis ad hic cupiditate quaerat ab optio earum
            adipisci, fugiat sed, iure veniam! Nobis eos, totam modi nostrum ea
            labore voluptates explicabo mollitia atque magnam error assumenda
            dolor, sequi deserunt repellendus quos quibusdam facilis nesciunt
            eaque quia! Reprehenderit consequatur est corrupti a voluptatem
            veniam excepturi vel tenetur quidem sint explicabo, cum nam
            inventore totam eum esse, ea ut hic facilis expedita vitae porro
            asperiores. Repudiandae illum, officia, cupiditate quasi accusantium
            expedita ullam ea, tempora voluptatem corporis exercitationem animi
            tenetur! Alias ut similique quae unde illo sint accusamus possimus?
            Fuga molestias provident alias omnis commodi vitae optio molestiae
            recusandae repellendus id esse neque, illo tempora perferendis ad
            nostrum nemo labore minima quod quibusdam laudantium? Eum aut
            aspernatur ratione quia omnis blanditiis odit quas et accusantium
            perferendis sunt repudiandae aliquam, expedita nihil quod quis
            dolore voluptatibus porro, magni obcaecati! Aspernatur?
          </p>
          <p className="pb-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            consequuntur rerum porro id eveniet, recusandae quis dolore neque
            iusto non! Et quo minima nesciunt, molestiae ipsam ut libero,
            dolores ullam exercitationem odit tenetur laudantium, praesentium
            commodi maiores accusantium sunt nisi. Sint ad eligendi facilis
            impedit consequuntur magnam doloribus veritatis sapiente, dicta
            commodi optio, odio veniam quibusdam nesciunt? Unde nulla, deleniti
            officia magnam quis ad hic cupiditate quaerat ab optio earum
            adipisci, fugiat sed, iure veniam! Nobis eos, totam modi nostrum ea
            labore voluptates explicabo mollitia atque magnam error assumenda
            dolor, sequi deserunt repellendus quos quibusdam facilis nesciunt
            eaque quia! Reprehenderit consequatur est corrupti a voluptatem
            veniam excepturi vel tenetur quidem sint explicabo, cum nam
            inventore totam eum esse, ea ut hic facilis expedita vitae porro
            asperiores. Repudiandae illum, officia, cupiditate quasi accusantium
            expedita ullam ea, tempora voluptatem corporis exercitationem animi
            tenetur! Alias ut similique quae unde illo sint accusamus possimus?
            Fuga molestias provident alias omnis commodi vitae optio molestiae
            recusandae repellendus id esse neque, illo tempora perferendis ad
            nostrum nemo labore minima quod quibusdam laudantium? Eum aut
            aspernatur ratione quia omnis blanditiis odit quas et accusantium
            perferendis sunt repudiandae aliquam, expedita nihil quod quis
            dolore voluptatibus porro, magni obcaecati! Aspernatur?
          </p>
        </div>

        <NewsletterBanner />
      </Wrapper>
    </div>
  );
};

export default About;
