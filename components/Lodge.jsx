import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Lodge = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10">
        <h1 className="text-3xl text-center text-red-500 lg:text-5xl">
          Oreteti Mara Lodge
        </h1>
        <span className="text-center">Doing Well by Doing Good</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-center">
          Set like a shining star in the authentic forest of <b>Oloirien</b>{' '}
          (wild olive tree) – Kenya, on the top of the Oloololo escarpment,
          located near Lolgorian and with a 10 minutes drive from “the big five”
          wildlife in the magnificent Maasai Mara, our lodges are wrapped around
          by native trees meeting the sweeping bush grass in the seasonal path
          of the awe-inspiring Great Migration, the Oreteti Mara Lodge reflects
          the spirit of ancient Maasai land.
        </p>
        <p className="text-center">
          Maasai Mara, a remarkable National Game Reserve which many safari
          travellers deem the finest game reserve on the continent of Africa!
        </p>
        <Link
          href="https://www.oretetimaralodge.com"
          target="_blank"
          className=""
        >
          <Image
            src="/logoLodge.webp"
            width={1000}
            height={1000}
            alt="mara"
            className="mx-auto transition-all duration-300 max-w-[400px] sm:max-w-none sm:w-1/2 hover:opacity-80 w-3/4 hover:scale-105"
          />
        </Link>

        <div className="grid grid-cols-1 gap-5 overflow-hidden md:grid-cols-2 ">
          <Link
            href="https://www.oretetimaralodge.com/rooms/"
            target="_blank"
            className="md:min-h-[245px] min-h-[170px] max-h-[254px]"
          >
            <div className="relative h-full cursor-pointer">
              <Image
                src="https://i0.wp.com/oretetimaralodge.com/wp-content/uploads/2016/11/WRA_0380.jpg?fit=960%2C640&ssl=1"
                width={2000}
                height={2000}
                className="h-full transition-all duration-300 hover:scale-105 hover:opacity-80"
                alt="rooms"
              />
              <span className="absolute text-xl text-white md:text-3xl bottom-2 left-2">
                Rooms
              </span>
            </div>
          </Link>

          <Link
            href="https://www.oretetimaralodge.com/services-sliders/"
            target="_blank"
            className="md:min-h-[245px] min-h-[170px] max-h-[254px]"
          >
            <div className="relative h-full cursor-pointer">
              <Image
                // src="https://i0.wp.com/oretetimaralodge.com/wp-content/uploads/2016/12/WRA_0667.jpg?fit=960%2C640&ssl=1"
                src="https://images.pexels.com/photos/750540/pexels-photo-750540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={1000}
                height={1000}
                className="h-full transition-all duration-300 hover:scale-105 hover:opacity-80"
                alt="big-five"
              />
              <span className="absolute text-xl text-white md:text-3xl bottom-2 left-2">
                Experience Our Excursions
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lodge;
