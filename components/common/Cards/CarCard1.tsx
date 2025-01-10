// "use client";

// import { NormalText } from "@/components/UI";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";

// interface ICarCard1Props {
//   image: any;
//   name: string;
//   price: number;
//   emi: number;
//   slug: string;
//   trusted_badge: string;
// }

// const CarCard1: React.FC<ICarCard1Props> = ({
//   image,
//   name,
//   price,
//   emi,
//   slug,
//   trusted_badge,
// }) => {
//   const router = useRouter();
//   return (
//     <div
//       className="group bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden cursor-pointer"
//       onClick={() => router.push(`/buycarslist/${slug}`)}
//     >
//       <div className="overflow-hidden">
//         <img
//           src={image}
//           alt="car"
//           height={135}
//           style={{ objectFit: "cover", height: "135px", width: "100%" }}
//           className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
//         />
//       </div>
//       <div className="py-3 px-4 flex flex-col gap-2">
//         <NormalText text={name} textAlign="left" />
//         <NormalText
//           text={"AED " + price}
//           fontWeight="bold"
//           textAlign="left"
//           color="primary"
//         />
//         <div>
//           <NormalText
//             text={`From EMI ${emi}/ month`}
//             size="xs"
//             color="gray"
//             textAlign="left"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarCard1;
"use client";

import { NormalText } from "@/components/UI";
import { useRouter } from "next/navigation";
import React from "react";

interface ICarCard1Props {
  image: any;
  name: string;
  price: number;
  emi: number;
  slug: string;
  trusted_badge: string;
}

const CarCard1: React.FC<ICarCard1Props> = ({
  image,
  name,
  price,
  emi,
  slug,
  trusted_badge,
}) => {
  const router = useRouter();

  // Render the badge based on trusted_badge value
  // const renderBadge = () => {
  //   if (trusted_badge === "1") {
  //     return (
  //       <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
  //         ✓
  //       </div>
  //     );
  //   } else if (trusted_badge === "2") {
  //     return (
  //       <div className="px-3 py-1 bg-green-500 text-white rounded-full flex items-center gap-1 text-sm font-bold shadow-lg">
  //         <span>✓</span>
  //         <span>✓</span>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div
      className="group bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden cursor-pointer"
      onClick={() => router.push(`/buycarslist/${slug}`)}
    >
      <div className="relative overflow-hidden">
        {/* Cover image */}
        <img
          src={image}
          alt="car"
          height={135}
          style={{ objectFit: "cover", height: "135px", width: "100%" }}
          className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
        />

        {/* Badge */}
        {/* {trusted_badge && (
          <div className="absolute top-2 right-2">{renderBadge()}</div>
        )} */}
      </div>
      <div className="py-3 px-4 flex flex-col gap-2">
        <NormalText text={name} textAlign="left" />
        <NormalText
          text={"AED " + price}
          fontWeight="bold"
          textAlign="left"
          color="primary"
        />
        <div>
          <NormalText
            text={`From EMI ${emi}/ month`}
            size="xs"
            color="gray"
            textAlign="left"
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard1;
