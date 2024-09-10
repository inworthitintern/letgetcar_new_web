import React from "react";

interface IItemCard {
  image?: string;
  name: string;
  bg?: "primary" | "white";
}

const ItemCard: React.FC<IItemCard> = ({ image, name, bg = "white" }) => {
  return (
    <div className="px-2">
      <div
        className={`bg-${bg} border border-gray-200 shadow-sm p-3 flex flex-col items-center rounded-lg h-full justify-center cursor-pointer`}
      >
        {image && (
          <img
            style={{ height: "60px", objectFit: "cover" }}
            src={image}
            alt="image"
            //   height={40}
            //   width={90}
          />
        )}

        <span>{name}</span>
      </div>
    </div>
  );
};

export default ItemCard;
