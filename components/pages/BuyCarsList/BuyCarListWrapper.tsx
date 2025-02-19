// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   BuyCarFilters,
//   CarCard2,
//   Container,
//   LoadingSpinner,
//   Section,
//   Spacer,
// } from "@/components/common";
// import { Button, Heading, NormalText } from "@/components/UI";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/GlobalRedux/store";
// import {
//   getBuyCarModels,
//   setCurrentPage,
// } from "@/GlobalRedux/Features/buyCarModel/buyCarSlice";
// import { useRouter } from "next/navigation";

// const BuyCarsList: React.FC = () => {
//   const [apiParameter, setApiParameters] = useState<object | string>({});
//   const router = useRouter();

//   const dispatch = useDispatch();
//   const { buyCarLists, loading, currentPage, totalPages, totalCount } =
//     useSelector((state: RootState) => state.buyCarModel);
//   const { user } = useSelector((state: RootState) => state.auth);

//   // Fetch data when the page or filters change
//   useEffect(() => {
//     dispatch(
//       getBuyCarModels({
//         filters: apiParameter,
//         isLoggedIn: !!user,
//         page: currentPage,
//       })
//     );
//   }, [apiParameter, currentPage, user, dispatch]);

//   // Handle page change with scroll-to-top
//   const handlePageChange = (page: number) => {
//     if (page > 0 && page <= totalPages) {
//       dispatch(setCurrentPage(page));
//       // Scroll to top smoothly
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Render pagination buttons
//   const renderPagination = () => {
//     const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//     return (
//       <div className="flex justify-center items-center space-x-2 mt-6">
//         {/* First Page Button */}
//         <button
//           onClick={() => handlePageChange(1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 border rounded ${
//             currentPage === 1
//               ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           &laquo;
//         </button>

//         {/* Previous Page Button */}
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 border rounded ${
//             currentPage === 1
//               ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           &lsaquo;
//         </button>

//         {/* Page Numbers */}
//         {pages.map((page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={`px-4 py-2 border rounded ${
//               page === currentPage
//                 ? "bg-primary text-dark"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             {page}
//           </button>
//         ))}

//         {/* Next Page Button */}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 border rounded ${
//             currentPage === totalPages
//               ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           &rsaquo;
//         </button>

//         {/* Last Page Button */}
//         <button
//           onClick={() => handlePageChange(totalPages)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 border rounded ${
//             currentPage === totalPages
//               ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           &raquo;
//         </button>
//       </div>
//     );
//   };

//   return (
//     <Section className="bg-[#FCFBFB] relative overflow-auto">
//       <Container>
//         <div className="py-16">
//           <div className="flex justify-between gap-8 relative">
//             <div className="hidden lg:block w-1/4 top-0 z-10">
//               <BuyCarFilters
//                 budgetRange={[0, 410000]}
//                 emiRange={[0, 410000]}
//                 setApiParameters={setApiParameters}
//               />
//             </div>
//             <div className="w-full lg:w-3/4">
//               <div className="flex items-center justify-between">
//                 <Heading
//                   text={`${totalCount || 0} Available Cars`}
//                   type="h4"
//                   fontWeight="bold"
//                   textAlign="left"
//                 />
//               </div>

//               <Spacer spacing="sm" />
//               <NormalText
//                 size="sm"
//                 color="gray"
//                 text="Explore an array of inspected used cars in Dubai - we offer top-quality vehicles."
//               />

//               <Spacer spacing="sm" />
//               {loading ? (
//                 <LoadingSpinner />
//               ) : !loading && buyCarLists?.length > 0 ? (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//                   {buyCarLists?.map((car: any, index: number) => (
//                     <CarCard2
//                       key={index}
//                       id={car?.id}
//                       wishlistedId={car?.wishlist_model_id}
//                       name={car?.name}
//                       booked={car?.status === "Booked"}
//                       emi={car?.emi_price}
//                       imageUrl={
//                         car?.images?.length > 0 ? car.images[0].url : null
//                       }
//                       location={car?.location?.name}
//                       newCar={car?.is_new_car === 1}
//                       price={car?.sale_price}
//                       slug={car?.slug}
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center">
//                   <p>No cars found. Try adjusting your filters.</p>
//                 </div>
//               )}

//               {renderPagination()}
//             </div>
//           </div>
//         </div>
//       </Container>
//     </Section>
//   );
// };

// export default BuyCarsList;

// "use client";

// import React, { useEffect, useState } from "react";
// import {
//   BuyCarFilters,
//   CarCard2,
//   Container,
//   LoadingSpinner,
//   Section,
//   Spacer,
// } from "@/components/common";
// import { Button, Heading, NormalText } from "@/components/UI";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "@/GlobalRedux/store";
// import {
//   getBuyCarModels,
//   setCurrentPage,
// } from "@/GlobalRedux/Features/buyCarModel/buyCarSlice";

// const BuyCarsList: React.FC = () => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   const toggleFilterPanel = () => {
//     setIsFilterOpen(!isFilterOpen);
//   };

//   const [apiParameter, setApiParameters] = useState<object | string>({});
//   const dispatch = useDispatch();
//   const { buyCarLists, loading, currentPage, totalPages, totalCount } =
//     useSelector((state: RootState) => state.buyCarModel);
//   const { user } = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     dispatch(
//       getBuyCarModels({
//         filters: apiParameter,
//         isLoggedIn: !!user,
//         page: currentPage,
//       })
//     );
//   }, [apiParameter, currentPage, user, dispatch]);

//   const handlePageChange = (page: number) => {
//     if (page > 0 && page <= totalPages) {
//       dispatch(setCurrentPage(page));
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const renderPagination = () => {
//     const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//     return (
//       <div className="flex justify-center items-center space-x-2 mt-6">
//         <button
//           onClick={() => handlePageChange(1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 border rounded ${
//             currentPage === 1
//               ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           &laquo;
//         </button>
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 border rounded ${
//             currentPage === 1
//               ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           &lsaquo;
//         </button>
//         {pages.map((page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={`px-4 py-2 border rounded ${
//               page === currentPage
//                 ? "bg-primary text-dark"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 border rounded ${
//             currentPage === totalPages
//               ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           &rsaquo;
//         </button>
//         <button
//           onClick={() => handlePageChange(totalPages)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 border rounded ${
//             currentPage === totalPages
//               ? "bg-gray-200 text-gray-400 cursor-not-allowed"
//               : "bg-gray-200 hover:bg-gray-300"
//           }`}
//         >
//           &raquo;
//         </button>
//       </div>
//     );
//   };

//   return (
//     <Section className="bg-[#FCFBFB] relative overflow-auto">
//       <Container>
//         <div className="py-16">
//           <div className="flex justify-between gap-8 relative">
//             {/* Mobile Filter Button */}
//             <button
//               className="lg:hidden fixed top-40 left-4 z-20 bg-gray-200 rounded-full p-2 shadow-md"
//               onClick={toggleFilterPanel}
//             >
//               Filters
//             </button>

//             {/* Filter Panel */}
//             <div
//               className={`${
//                 isFilterOpen ? "translate-x-0" : "-translate-x-full"
//               } fixed lg:relative top-0 left-0 w-3/4 lg:w-1/4 bg-white z-30 shadow-lg h-full overflow-y-auto transition-transform lg:translate-x-0`}
//             >
//               <div className="p-4 lg:p-0">
//                 <button
//                   className="lg:hidden absolute top-4 right-4 text-gray-600"
//                   onClick={toggleFilterPanel}
//                 >
//                   ✖
//                 </button>
//                 <BuyCarFilters
//                   budgetRange={[0, 410000]}
//                   emiRange={[0, 410000]}
//                   setApiParameters={setApiParameters}
//                 />
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="w-full lg:w-3/4 ml-auto">
//               <div className="flex items-center justify-between">
//                 <Heading
//                   text={`${totalCount || 0} Available Cars`}
//                   type="h4"
//                   fontWeight="bold"
//                   textAlign="left"
//                 />
//               </div>

//               <Spacer spacing="sm" />
//               <NormalText
//                 size="sm"
//                 color="gray"
//                 text="Explore an array of inspected used cars in Dubai - we offer top-quality vehicles."
//               />

//               <Spacer spacing="sm" />
//               {loading ? (
//                 <LoadingSpinner />
//               ) : !loading && buyCarLists?.length > 0 ? (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
//                   {buyCarLists.map((car: any, index: number) => (
//                     <CarCard2
//                       key={index}
//                       id={car.id}
//                       wishlistedId={car.wishlist_model_id}
//                       name={car.name}
//                       booked={car.status === "Booked"}
//                       emi={car.emi_price}
//                       imageUrl={
//                         car.images?.length > 0 ? car.images[0].url : null
//                       }
//                       location={car.location?.name}
//                       newCar={car.is_new_car === 1}
//                       price={car.sale_price}
//                       slug={car.slug}
//                     />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center">
//                   <p>No cars found. Try adjusting your filters.</p>
//                 </div>
//               )}

//               {renderPagination()}
//             </div>
//           </div>
//         </div>

//         {/* Overlay for mobile */}
//         {isFilterOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-30 z-20"
//             onClick={toggleFilterPanel}
//           ></div>
//         )}
//       </Container>
//     </Section>
//   );
// };

// export default BuyCarsList;

"use client";

import React, { useEffect, useState } from "react";
import {
  BannerImage,
  BuyCarFilters,
  CarCard2,
  Container,
  LoadingSpinner,
  Section,
  Spacer,
} from "@/components/common";
import { Heading, NormalText } from "@/components/UI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import {
  getBuyCarModels,
  setCurrentPage,
} from "@/GlobalRedux/Features/buyCarModel/buyCarSlice";
import { getBanners } from "@/GlobalRedux/Features/banners/bannerSlice";

const BuyCarsList: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { banners } = useSelector((state: RootState) => state.banner);
  const topBanner = banners?.filter((banner) => banner.priority === 1);
  // const bottomBanner = banners?.filter((banner) => banner.priority === 3);

  useEffect(() => {
    dispatch(getBanners({ type: "buycar" }));
  }, []);

  const toggleFilterPanel = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const [apiParameter, setApiParameters] = useState<object | string>({});
  const dispatch = useDispatch();
  const { buyCarLists, loading, currentPage, totalPages, totalCount } =
    useSelector((state: RootState) => state.buyCarModel);
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(
      getBuyCarModels({
        filters: apiParameter,
        isLoggedIn: !!user,
        page: currentPage,
      })
    );
  }, [apiParameter, currentPage, user, dispatch]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPage(page));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderPagination = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="flex justify-center items-center space-x-2 mt-6">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 border rounded ${
              page === currentPage
                ? "bg-primary text-dark"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    );
  };

  return (
    <Section className="bg-[#FCFBFB] relative overflow-auto">
      <Container>
        <div className="py-16">
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Mobile Filter Button */}
            <button
              className="lg:hidden fixed bottom-4 right-4 z-20 bg-gray-200 rounded-full p-4 shadow-md"
              onClick={toggleFilterPanel}
              aria-label="Filter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h18M6.75 9h10.5M10.5 13.5h3"
                />
              </svg>
            </button>

            <div
              className={`${
                isFilterOpen ? "translate-x-0" : "-translate-x-full"
              } fixed top-0 left-0 w-3/4 bg-white z-30 shadow-lg h-full overflow-y-auto transition-transform lg:hidden`}
            >
              <div className="p-4">
                {/* Close Button for Mobile */}
                <button
                  className="absolute top-4 right-4 text-gray-600"
                  onClick={toggleFilterPanel}
                >
                  ✖
                </button>
                <BuyCarFilters
                  budgetRange={[0, 410000]}
                  emiRange={[0, 410000]}
                  setApiParameters={setApiParameters}
                />
              </div>
            </div>

            <div className="hidden lg:block w-1/4 top-0 z-10">
              <BuyCarFilters
                budgetRange={[0, 410000]}
                emiRange={[0, 410000]}
                setApiParameters={setApiParameters}
              />
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              <div className="flex items-center justify-between">
                <Heading
                  text={`${totalCount || 0} Available Cars`}
                  type="h4"
                  fontWeight="bold"
                  textAlign="left"
                />
              </div>

              <Spacer spacing="sm" />
              <NormalText
                size="sm"
                color="gray"
                text="Explore an array of inspected used cars in Dubai - we offer top-quality vehicles."
              />

              <Spacer spacing="sm" />
              {loading ? (
                <LoadingSpinner />
              ) : !loading && buyCarLists?.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {buyCarLists.map((car: any, index: number) => (
                    <CarCard2
                      key={index}
                      id={car.id}
                      wishlistedId={car.wishlist_model_id}
                      name={car.name}
                      booked={car.status === "Booked"}
                      emi={car.emi_price}
                      imageUrl={
                        car.images?.length > 0 ? car.images[0].url : null
                      }
                      location={car.location?.name}
                      newCar={car.is_new_car === 1}
                      price={car.sale_price}
                      slug={car.slug}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <p>No cars found. Try adjusting your filters.</p>
                </div>
              )}

              {renderPagination()}

              {topBanner?.length > 0 && (
                <>
                  {topBanner?.map((cur) => (
                    <Section key={cur.id}>
                      <Container>
                        <div
                          className={`grid grid-cols-1 gap-6 lg:grid-cols-${cur?.images?.length}`}
                        >
                          {cur?.images?.map((img: string) => (
                            <BannerImage img={img} />
                          ))}
                        </div>
                      </Container>
                    </Section>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-20"
            onClick={toggleFilterPanel}
          ></div>
        )}
      </Container>
    </Section>
  );
};

export default BuyCarsList;
