import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../store/fetchWeather";
import {
  LocationButton,
  LocationIcon,
  SearchElement,
  SearchIcon,
  SearchInput,
} from "./styled";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchInputChanged = (e: any) => {
    setSearchTerm(e.target.value);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      if (!searchTerm) {
        return;
      }
      dispatch(fetchWeather(searchTerm));
    }
  };
  const showPosition = (position: any) => {
    dispatch(
      fetchWeather({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  };
  return (
    <SearchElement>
      <SearchIcon />
      <DebounceInput
        element={SearchInput}
        debounceTimeout={300}
        onKeyDown={handleKeyDown}
        onChange={onSearchInputChanged}
        placeholder="Search for location"
      />
      <LocationButton
        onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
          } else {
            alert("Geolocation is not supported by this browser.");
          }
        }}
      >
        <LocationIcon />
      </LocationButton>
    </SearchElement>
  );
};

export default Search;
