import carLoanService from "@/services/carLoanService";
import { Card, Badge } from "flowbite-react";
import React, { useEffect, useState } from "react";

interface Loan {
  id: number;
  customer_name: string;
  email: string;
  status: string;
  uae_address: string;
  home_country_address: string;
  emirates_ID: string;
  passport_copy: string;
  salary_certificate: string;
  visa_page: string;
  created_at: string;
}

const LoansSection = () => {
  const [loans, setLoans] = useState<Loan[]>([]);

  useEffect(() => {
    fetchLoans();
  }, []);

  const fetchLoans = async () => {
    try {
      const loansData = await carLoanService.showBuyCarLoans();
      setLoans(loansData);
    } catch (error) {
      console.log("Error fetching loans:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 p-6">
      {loans.map((loan) => (
        <Card
          key={loan.id}
          className="shadow-lg hover:shadow-xl transition-shadow duration-200"
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {loan.customer_name}
            </h3>
            <Badge color={loan.status === "Rejected" ? "failure" : "success"}>
              {loan.status}
            </Badge>
          </div>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> {loan.email}
          </p>
          <p className="text-gray-600">
            <strong>UAE Address:</strong> {loan.uae_address}
          </p>
          <p className="text-gray-600">
            <strong>Home Country Address:</strong> {loan.home_country_address}
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href={loan.emirates_ID}
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Emirates ID
            </a>
            <a
              href={loan.passport_copy}
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Passport Copy
            </a>
          </div>
          <div className="mt-2 flex space-x-4">
            <a
              href={loan.salary_certificate}
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Salary Certificate
            </a>
            <a
              href={loan.visa_page}
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Visa Page
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            <strong>Submitted on:</strong>{" "}
            {new Date(loan.created_at).toLocaleDateString()}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default LoansSection;
