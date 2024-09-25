"use client";

import { RootState } from "@/GlobalRedux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner } from "../../components/common";
import { getProfileDetails } from "@/GlobalRedux/Features/auth/authSlice";

const AuthManager = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Only fetch profile if no user data exists
    if (!user) {
      dispatch(getProfileDetails());
    }
  }, [dispatch, user]); // Only trigger when user is null

  if (loading && !user) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};

export default AuthManager;
