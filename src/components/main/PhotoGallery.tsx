import Image from "next/image"

import img1 from "../../../public/PhotoGallery/img1.png"
import img2 from "../../../public/PhotoGallery/img2.png"
import img3 from "../../../public/PhotoGallery/img3.png"
import img4 from "../../../public/PhotoGallery/img4.png"
import img5 from "../../../public/PhotoGallery/img5.png"
import img6 from "../../../public/PhotoGallery/img6.png"

const images = [img1, img2, img3, img4, img5, img6]

export default function PhotoGallery() {
  return (
    <div className="min-h-screen bg-slate-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-slate-300 text-lg">We Meet, We Greet, We Enjoy, We Work</p>
        </div>

        <div className="grid gap-4">
          {/* Mobile Layout */}
          <div className="grid grid-cols-1 gap-4 sm:hidden">
            {images.map((img, i) => (
              <div key={i} className="aspect-[4/3]">
                <Image
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Tablet Layout */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 grid-rows-3 gap-4 h-[600px]">
            <div className="row-span-1"><Image src={img1} alt="1" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="row-span-2"><Image src={img2} alt="2" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="row-span-1"><Image src={img3} alt="3" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="row-span-1"><Image src={img4} alt="4" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-2 row-span-1"><Image src={img5} alt="5" className="w-full h-full object-cover rounded-lg" /></div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid xl:hidden grid-cols-12 grid-rows-4 gap-4 h-[600px]">
            <div className="col-span-4 row-span-4"><Image src={img1} alt="1" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-4 row-span-4"><Image src={img2} alt="2" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-4 row-span-4"><Image src={img3} alt="3" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-3 row-span-4"><Image src={img4} alt="4" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-6 row-span-4"><Image src={img5} alt="5" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-3 row-span-4"><Image src={img6} alt="6" className="w-full h-full object-cover rounded-lg" /></div>
          </div>

          {/* XL Layout */}
          <div className="hidden xl:grid grid-cols-16 grid-rows-6 gap-4 h-[600px]">
            <div className="col-span-5 row-span-3"><Image src={img1} alt="1" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-6 row-span-2"><Image src={img2} alt="2" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-5 row-span-3"><Image src={img3} alt="3" className="w-full h-full object-cover rounded-lg" /></div>

            <div className="col-span-4 row-span-3"><Image src={img4} alt="4" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-6 row-span-4"><Image src={img5} alt="5" className="w-full h-full object-cover rounded-lg" /></div>
            <div className="col-span-6 row-span-3"><Image src={img6} alt="6" className="w-full h-full object-cover rounded-lg" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
