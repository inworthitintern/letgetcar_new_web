"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CarCategories = () => {
  const router = useRouter();
  const categories = [
    {
      title: "Rent Car",
      image:
        "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Limousine Cars",
      image:
        "https://images.unsplash.com/photo-1676107648535-931375db52e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Luxury Cars",
      image:
        "https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Corporate Cars",
      image:
        "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="cursor-pointer relative group h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          onClick={() => router.push("/rentcar-limousine/list")}
        >
          {/* Background Image */}
          <Image
            src={category.image}
            alt={category.title}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 group-hover:bg-opacity-70"></div>
          {/* Text at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white text-center bg-gradient-to-t from-black/60 to-transparent">
            <h2 className="text-lg font-semibold">{category.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCategories;
