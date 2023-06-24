import Image from 'next/image';
import React from 'react';

const Founders = () => {
  return (
    <div className="pb-5">
      <h1 className="py-10 text-2xl text-center text-red-500 lg:text-5xl">
        Our Beloved Founders
      </h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="order-2 md:order-1">
          <h1 className="mb-2 text-2xl md:text-3xl">Mariska and Andri</h1>
          <p className="text-sm md:text-base">
            <b>Mariska</b> and <b>Andri</b> orem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit voluptates natus magnam optio in
            obcaecati inventore sapiente! Sit ex nemo ipsa recusandae cum
            laborum, quae voluptatem sint tempora possimus soluta accusamus.
            Adipisci aspernatur rem tempore ut, asperiores atque doloremque
            aliquam. Dolorem numquam non esse. Tempore ipsa possimus omnis, nisi
            reprehenderit minus aut amet, quam, rerum iusto provident. Minima
            aspernatur id quae quos natus sapiente facilis accusamus, cum esse
            repudiandae iusto ab ratione consequuntur eius aperiam nostrum
            molestias nobis nulla laudantium modi libero reiciendis fugit
            provident commodi. Quibusdam repellat excepturi autem deleniti,
            ratione minima sequi, eius ex, quia hic ad officiis.
          </p>
        </div>
        <div className="order-1 overflow-hidden md:order-2">
          <Image
            src="/slider-3.webp"
            width={1000}
            height={1000}
            className=" w-full max-w-[600px] mx-auto hover:opacity-80 hover:scale-150 transition-all duration-1000 cursor-pointer"
            alt="Mariska and Andri"
          />
        </div>
      </div>
    </div>
  );
};

export default Founders;
