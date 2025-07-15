import Image from 'next/image'
import React from 'react'

import PHP from "../../../../../public/Icons/Web/php.png";
import torch from "../../../../../public/Icons/Web/torch.png";
import redis from "../../../../../public/Icons/Web/redis.png";
import laravel from "../../../../../public/Icons/Web/laravel.png";
import nodejs from "../../../../../public/Icons/Web/nodejs.png";
import backend from "../../../../../public/webDev/backend.png";
import Python from "../../../../../public/Icons/Web/python.png";


export default function BackendDevelopment() {
  return (
        <section className="main-container grid grid-cols-1 gap-12 object-center !pb-10 lg:!pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h2 className="text-h1-color">Backend Development Services</h2>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            A well-optimised backend lays the foundation for sustainable and
            future- ready web applications. We design your web app&apos;s
            architecture With scalability and flexibility in mind from the
            start, ensuring it can adapt to shifting business demands. Our
            tailor-made backend solutions ore built to evolve with changing user
            expectations and technological advancements. you&apos;ll be able to
            implement updates and roll out enhancements efficiently and
            cost-effectively.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <Image src={PHP} width={25} height={25} alt="PHP Development" />
              <span className="text-gray-700">PHP Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={torch}
                width={20}
                height={20}
                alt="CodeIgniter Development"
              />
              <span className="text-gray-700">CodeIgniter Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={Python}
                width={20}
                height={20}
                alt="Python Development"
              />
              <span className="text-gray-700">Python Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={redis}
                width={20}
                height={20}
                alt="CakePHP Development"
              />
              <span className="text-gray-700">CakePHP Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={laravel}
                width={20}
                height={20}
                alt="Laravel Development"
              />
              <span className="text-gray-700">Laravel Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={nodejs}
                width={40}
                height={40}
                alt="Node Js Development"
              />
              <span className="text-gray-700">NodeJs Development</span>
            </div>
          </div>
        </div>
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={backend}
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
            alt="Backend Development Services"
          />
        </div>
      </section>
  )
}
