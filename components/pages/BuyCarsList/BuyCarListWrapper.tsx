"use client";

import React, { useEffect, useState } from "react";
import {
  BuyCarFilters,
  CarCard2,
  Container,
  LoadingSpinner,
  Section,
  Spacer,
} from "@/components/common";
import { Button, Heading, NormalText } from "@/components/UI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import {
  getBuyCarModels,
  setCurrentPage,
} from "@/GlobalRedux/Features/buyCarModel/buyCarSlice";
import { useRouter } from "next/navigation";

const BuyCarsList: React.FC = () => {
  const [apiParameter, setApiParameters] = useState<object | string>({});
  const router = useRouter();

  const dispatch = useDispatch();
  const { buyCarLists, loading, currentPage, totalPages, totalCount } =
    useSelector((state: RootState) => state.buyCarModel);
  const { user } = useSelector((state: RootState) => state.auth);

  // Fetch data when the page or filters change
  useEffect(() => {
    dispatch(
      getBuyCarModels({
        filters: apiParameter,
        isLoggedIn: !!user,
        page: currentPage,
      })
    );
  }, [apiParameter, currentPage, user, dispatch]);

  // Handle page change with scroll-to-top
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      dispatch(setCurrentPage(page));
      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Render pagination buttons
  const renderPagination = () => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="flex justify-center items-center space-x-2 mt-6">
        {/* First Page Button */}
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          &laquo;
        </button>

        {/* Previous Page Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          &lsaquo;
        </button>

        {/* Page Numbers */}
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

        {/* Next Page Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          &rsaquo;
        </button>

        {/* Last Page Button */}
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          &raquo;
        </button>
      </div>
    );
  };

  return (
    <Section className="bg-[#FCFBFB] relative overflow-auto">
      <Container>
        <div className="py-16">
          <div className="flex justify-between gap-8 relative">
            <div className="hidden lg:block w-1/4 top-0 z-10">
              <BuyCarFilters
                budgetRange={[0, 410000]}
                emiRange={[0, 410000]}
                setApiParameters={setApiParameters}
              />
            </div>
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
                  {buyCarLists?.map((car: any, index: number) => (
                    <CarCard2
                      key={index}
                      id={car?.id}
                      wishlistedId={car?.wishlist_model_id}
                      name={car?.name}
                      booked={car?.status === "Booked"}
                      emi={car?.emi_price}
                      imageUrl={
                        car?.images?.length > 0 ? car.images[0].url : null
                      }
                      location={car?.location?.name}
                      newCar={car?.is_new_car === 1}
                      price={car?.sale_price}
                      slug={car?.slug}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center">
                  <p>No cars found. Try adjusting your filters.</p>
                </div>
              )}

              {renderPagination()}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default BuyCarsList;
