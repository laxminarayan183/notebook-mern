// import React from 'react'

import News from "./News";
import Recomonded from "./Recomonded";
import TopSell from "./TopSell";

const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12 px-10">
        <div className="md:w-1/2 w-full flex items-center md:justify-center">
          <img
            className="h-72"
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSH48UvScFLfU83usXwPkOwlVX0yvvNdgG1S2dvGzY3xIH0NkJYKUQxbEZ8hRNRMtGXf_XQYe3lz5RD62oD-Nh0v2aoaj8FBtFGBDy6xHzU"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="md:text-5xl text-2xl font-medium mb-7">
            New Release This Week
          </h1>
          <p className="mb-5 font-semibold">
            Bhagavad Gita As It Is By His Divine Grace A.C. Bhaktivedanta Swami
            Prabhupada
          </p>
          <p>
            The Bhagavad-gita, spoken by Lord Krishna to Arjuna, is a guide to
            self-realization and spiritual wisdom. A unique English translation
            by A.C. Bhaktivedanta Swami Prabhupada, a renowned Vedic scholar,
            offers profound insights without adulteration.{" "}
          </p>
          <button className="bg-yellow-400 p-2 rounded-xl">Subscribe</button>
        </div>
      </div>
      <TopSell />
      <Recomonded />
      <News />
    </>
  );
};

export default Home;
