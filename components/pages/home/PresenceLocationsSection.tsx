import { Container } from "@/components/common";
import { Heading, NormalText } from "@/components/UI";
import { locationDubaiImage, presenceBgImage } from "@/constants/images";
import Image from "next/image";

const PresenceLocationsSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${presenceBgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "40vh",
      }}
    >
      <Container className="h-full">
        <div className="grid grid-cols-7 gap-4 h-full items-center">
          <div className="col-span-3">
            <Heading
              text="Our Presence in 4 regions in UAE"
              type="h3"
              textAlign="left"
              color="dark"
              fontWeight="bold"
              className="mb-3"
            />
            <NormalText text="Browse By Location" fontWeight="semiBold" />
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src={locationDubaiImage}
                  alt="location-dubai"
                  className="mb-2"
                />
                <NormalText text="Dubai" fontWeight="semiBold" />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={locationDubaiImage}
                  alt="location-dubai"
                  className="mb-2"
                />
                <NormalText text="Sharjah" fontWeight="semiBold" />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={locationDubaiImage}
                  alt="location-dubai"
                  className="mb-2"
                />
                <NormalText text="Abu Dhabi" fontWeight="semiBold" />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={locationDubaiImage}
                  alt="location-dubai"
                  className="mb-2"
                />
                <NormalText text="Ajman" fontWeight="semiBold" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PresenceLocationsSection;
// 5JSZ3S232B98H15GVTRR3QDM
