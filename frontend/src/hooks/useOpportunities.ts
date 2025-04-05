import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../lib/redux/store";
import {
  fetchOpportunities,
  fetchFollowedOpportunities,
} from "../lib/redux/slices/opportunitiesSlice";

export const useOpportunities = (onlyFollowed = false) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, followedItems, status, error, filters } = useSelector(
    (state: RootState) => state.opportunities
  );

  useEffect(() => {
    if (onlyFollowed) {
      dispatch(fetchFollowedOpportunities(filters));
    } else {
      dispatch(fetchOpportunities(filters));
    }
  }, [dispatch, filters, onlyFollowed]);

  return {
    opportunities: onlyFollowed ? followedItems : items,
    status,
    error,
    filters,
  };
};
