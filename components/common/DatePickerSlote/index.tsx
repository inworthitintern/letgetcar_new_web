"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button, NormalText } from "@/components/UI";
import buyCarServices from "@/services/buycarService";

interface IDateTimeSelector {
  carId: number;
  selectedDate: string;
  setSelectedDate: (arg: boolean) => void;
  selectedTime: string;
  setSelectedTime: (arg: boolean) => void;
}

const DateTimeSelector: React.FC<IDateTimeSelector> = ({
  carId,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  const [dateSlot, setDateSlot] = useState([]);

  useEffect(() => {
    if (carId) {
      getTestDriveTimeSlot();
    }
  }, [carId]);

  const getTestDriveTimeSlot = async () => {
    const bookingSlots = await buyCarServices.getTestDriveBookingSlot(carId);
    if (bookingSlots) {
      setDateSlot(bookingSlots.data[0].slots);
      // bookingSlots[0]
      setSelectedDate(bookingSlots.data[0].slots[0]);
    }
  };

  const handleDateClick = (date: string) => {
    const selected = dateSlot.find((d) => d.date === date);
    if (selected) {
      setSelectedDate(selected);
      setSelectedTime(""); // Reset selected time when a new date is selected
    }
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  const getTestDriveSlot = async () => {
    const dateSlots = await buyCarServices.getTestDriveBookingSlot(carId);

    if (dateSlots) {
      console.log(dateSlots, "hello");
    }
  };

  useEffect(() => {
    getTestDriveSlot();
  }, [carId]);

  return (
    <>
      {dateSlot ? (
        <div className="container mx-auto p-4">
          {/* Available Dates */}
          <div className="mb-4">
            <NormalText
              text="Available Dates"
              fontWeight="bold"
              textAlign="left"
              size="md"
            />

            <div className="overflow-x-auto flex space-x-2 mt-3">
              {dateSlot?.length > 0 &&
                dateSlot.map((dateObj) => {
                  const isActive = selectedDate.date === dateObj.date;

                  return (
                    <button
                      key={dateObj.date}
                      onClick={() => handleDateClick(dateObj.date)}
                      className={`px-5 py-2 rounded-lg border  ${
                        isActive
                          ? "bg-primary text-dark"
                          : "bg-white text-gray-700 border-gray-300"
                      }`}
                    >
                      <div>{moment(dateObj.date).format("ddd")}</div>
                      <NormalText
                        text={moment(dateObj.date).format("DD")}
                        fontWeight="bold"
                        textAlign="left"
                        size="md"
                      />
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Available Time Slots */}
          <div>
            <NormalText
              text="Available Times"
              fontWeight="bold"
              textAlign="left"
              size="md"
              className="mb-4"
            />
            <div className="overflow-x-auto flex space-x-2 mt-3">
              {selectedDate?.timeSlots?.length > 0 &&
                selectedDate?.timeSlots?.map((time, index) => {
                  const isTimeActive = selectedTime === time;
                  return (
                    <button
                      key={index}
                      onClick={() => handleTimeClick(time)}
                      className={`px-4 py-2 border rounded-lg ${
                        isTimeActive
                          ? "bg-primary text-dark"
                          : "bg-white text-gray-700 border-gray-300"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <>Noo</>
      )}
    </>
  );
};

export default DateTimeSelector;
