import React, { useEffect, useState, useReducer } from "react";
import axios from "../utils/axios";

const reducer = (state, action) => {
  if (action.type === "FETCH_DATA_START") {
    return {
      ...state,
      current: "",
    };
  } else if (action.type === "UPDATE_SEARCH") {
    return {
      ...state,
      current: action.payload.current,
    };
  } else if (action.type === "FETCH_DATA_SUCCESS") {
    const { searchVal, results } = action.payload;
    return {
      ...state,
      searches: {
        ...state.searches,
        [searchVal]: true,
      },
      current: searchVal,
      images: {
        ...state.images,
        [searchVal]: results,
      },
    };
  }
  return state;
};

const INITIAL_STATE = {
  searches: {},
  images: {
    cars: [],
    cameras: [],
    mobiles: [],
  },
  current: "mobiles",
};

const useFetch = (search) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState([]);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({
      type: "UPDATE_SEARCH",
      payload: {
        current: search,
      },
    });
  }, [search]);

  useEffect(() => {
    dispatch({
      type: "FETCH_DATA_SUCCESS",
      payload: {
        searchVal: search,
        results: data,
      },
    });
  }, [data]);

  useEffect(() => {
    if (state.searches[search]) {
      return;
    }
    const fetchUnsplashData = async () => {
      try {
        if (searched.includes(search)) {
          return;
        }
        setLoading(true);
        const res = await axios.get(`/search/photos`, {
          params: { query: search },
        });
        setData(res.data.results);
        setLoading(false);
        setSearched([...searched, search]);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchUnsplashData();
  }, [search]);

  return {
    data,
    loading,
    error,
    state,
  };
};

export default useFetch;
