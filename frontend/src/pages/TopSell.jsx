// import React from 'react'

import { useState } from "react";
import BookCard from "./BookCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useFetchAllBooksQuery } from "../redux/features/bookapi/booksapi";

const categories = [
  "Choose a genre",
  "Business",
  "Fiction",
  "Spiritual",
  "Adventure",
];

const TopSell = () => {
  const [selected, setSelected] = useState("choose a genre");
  const { data: books = [] } = useFetchAllBooksQuery();
  const filteredBooks =
    selected === "choose a genre"
      ? books
      : books.filter((book) => book.category === selected.toLocaleLowerCase());

  return (
    <div className="py-10 px-10">
      <h2 className="text-3xl font-semibold mb-6 ">Top Sellers</h2>
      {/* category filtering */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelected(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} className="mx-2" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSell;
