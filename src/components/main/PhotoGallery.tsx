import Image from "next/image";

import img1 from "../../../public/PhotoGallery/img1.png";
import img2 from "../../../public/PhotoGallery/img2.png";
import img3 from "../../../public/PhotoGallery/img3.png";
import img4 from "../../../public/PhotoGallery/img4.png";
import img5 from "../../../public/PhotoGallery/img5.png";
import img6 from "../../../public/PhotoGallery/img6.png";
import { MobilePhotoSlider } from "./MobilePhotoGallery";

const images = [
  { id: 1, image: img1, title: "image", description: "Our Meetup" },
  { id: 2, image: img2, title: "image", description: "Our Meetup" },
  { id: 3, image: img3, title: "image", description: "Our Meetup" },
  { id: 4, image: img4, title: "image", description: "Our Meetup" },
  { id: 5, image: img5, title: "image", description: "Our Meetup" },
  { id: 6, image: img6, title: "image", description: "Our Meetup" },
];

const gridConfig = [
  { colSpan: 3, rowSpan: 4 },
  { colSpan: 3, rowSpan: 4 },
  { colSpan: 2, rowSpan: 4 },
  { colSpan: 2, rowSpan: 4 },
  { colSpan: 3, rowSpan: 4 },
  { colSpan: 3, rowSpan: 4 },
];

export default function PhotoGallery() {
  return (
    <div className="main-container bg-dark-bg-primary mb-10 !py-8 sm:!py-14">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex w-full flex-col items-center justify-center gap-4 pb-14">
          <h2 className="text-custom-white text-2xl sm:text-3xl md:text-4xl">
            Gallery
          </h2>
          <p className="!text-custom-white">
            We Meet, We Greet, We Enjoy, We Work
          </p>
        </div>
        <div className="hidden h-full min-h-full grid-cols-8 grid-rows-7 gap-4 md:grid">
          {images.map((src, i) => (
            <div
              key={i}
              className={`group relative col-span-${gridConfig[i].colSpan} row-span-${gridConfig[i].rowSpan} overflow-hidden rounded-lg`}
            >
              <div className="relative h-full w-full">
                <div className="h-full min-h-56">
                  <Image
                    src={src.image || "/placeholder.svg"}
                    alt={src.title}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold text-white">
                    {src.title}
                  </h3>
                  <p className="text-sm text-white">{src.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <MobilePhotoSlider images={images} />
        </div>
      </div>
    </div>
  );
}
