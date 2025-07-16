import Image from "next/image";

import img1 from "../../../public/PhotoGallery/img1.png";
import img2 from "../../../public/PhotoGallery/img2.png";
import img3 from "../../../public/PhotoGallery/img3.png";
import img4 from "../../../public/PhotoGallery/img4.png";
import img5 from "../../../public/PhotoGallery/img5.png";
import img6 from "../../../public/PhotoGallery/img6.png";

const images = [img1, img2, img3, img4, img5, img6];
const gridConfig = [
  { colSpan: 3, rowSpan: 4, label: "Salmon" },
  { colSpan: 3, rowSpan: 4, label: "Broccoli" },
  { colSpan: 2, rowSpan: 4, label: "Tamago" },
  { colSpan: 2, rowSpan: 3, label: "Pork" },
  { colSpan: 4, rowSpan: 3, label: "Edamame" },
  { colSpan: 2, rowSpan: 3, label: "Tomato" },
];

// Create a mapping for reliable class generation
const getGridClasses = (colSpan, rowSpan) => {
  const colSpanClasses = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    7: "col-span-7",
    8: "col-span-8",
  };

  const rowSpanClasses = {
    1: "row-span-1",
    2: "row-span-2",
    3: "row-span-3",
    4: "row-span-4",
    5: "row-span-5",
    6: "row-span-6",
    7: "row-span-7",
  };

  return `${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]}`;
};

export default function PhotoGallery() {
  return (
    <div className="main-container">
      <div className="grid grid-cols-8 grid-rows-7 gap-4 rounded-lg p-2 shadow-lg">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative ${getGridClasses(gridConfig[i].colSpan, gridConfig[i].rowSpan)} overflow-hidden rounded-lg shadow-md`}
          >
            <div className="h-5/6 min-h-56">
              <Image
                src={src}
                alt={gridConfig[i].label}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
