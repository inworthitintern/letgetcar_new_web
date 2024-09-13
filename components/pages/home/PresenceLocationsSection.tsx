import { Container } from "@/components/common";
import { Heading, NormalText } from "@/components/UI";
import {
  locationDubaiImage,
  presenceBgImage,
  locationAbuDhabiImage,
  locationAjmanImage,
  locationSharjahImage,
} from "@/constants/images";
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
          <div className="col-span-12 lg:col-span-3 ">
            <Heading
              text="Our Presence in 4 regions in UAE"
              type="h3"
              textAlign="left"
              color="dark"
              fontWeight="bold"
              className="mb-3"
            />
            <NormalText text="Browse By Location" fontWeight="semiBold" />
            <div className="col-span-4 block lg:hidden">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={locationDubaiImage}
                    style={{
                      height: 150,
                      width: 150,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                    alt="location-dubai"
                    className="mb-2"
                  />
                  <NormalText text="Dubai" fontWeight="semiBold" />
                </div>
                <div className="flex flex-col flex-wrap items-center">
                  <Image
                    src={locationSharjahImage}
                    style={{
                      height: 150,
                      width: 150,
                      objectFit: "cover",
                      outline: "4px solid #fff",
                      borderRadius: 10,
                    }}
                    alt="location-dubai"
                    className="mb-2"
                  />
                  <NormalText text="Sharjah" fontWeight="semiBold" />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={locationAbuDhabiImage}
                    alt="location-dubai"
                    style={{
                      height: 150,
                      width: 150,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                    className="mb-2"
                  />
                  <NormalText text="Abu Dhabi" fontWeight="semiBold" />
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    src={locationAjmanImage}
                    alt="location-dubai"
                    style={{
                      height: 150,
                      width: 150,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                    className="mb-2"
                  />
                  <NormalText text="Ajman" fontWeight="semiBold" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 hidden lg:block">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <Image
                  src={locationDubaiImage}
                  alt="location-dubai"
                  className="mb-2"
                  style={{
                    height: 150,
                    width: 150,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />
                <NormalText text="Dubai" fontWeight="semiBold" />
              </div>
              <div className="flex flex-col flex-wrap items-center">
                <Image
                  src={locationSharjahImage}
                  alt="location-dubai"
                  className="mb-2"
                  style={{
                    height: 150,
                    width: 150,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                />
                <NormalText text="Sharjah" fontWeight="semiBold" />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={locationAbuDhabiImage}
                  alt="location-dubai"
                  style={{
                    height: 150,
                    width: 150,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
                  className="mb-2"
                />
                <NormalText text="Abu Dhabi" fontWeight="semiBold" />
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={locationAjmanImage}
                  alt="location-dubai"
                  style={{
                    height: 150,
                    width: 150,
                    objectFit: "cover",
                    borderRadius: 4,
                  }}
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
