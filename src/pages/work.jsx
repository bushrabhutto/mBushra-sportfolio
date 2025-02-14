import React from "react";
import quote from "../assets/quote.png";
import lunar from "../assets/lunar.png";
import gridweb from "../assets/gridwebsite.png";
import olx from "../assets/olx.png";
import searchFood from "../assets/searchFood.png";
import moviesearch from "../assets/moviesearch.png";
import productfilter from "../assets/productfilter.png";
import addtoCart from "../assets/addToCart.png";
import calculator from "../assets/calculator.png";

const Work = () => {
  const work = [
    {
      projectname: "Javascript Quote Generator",
      description:
        "I have made a quote generator in this project where I added famous quotations to feel dedicated and motivated.",
      image: quote,
      repoLink: "https://github.com/bushrabhutto/QuoteGenerator",
      button: "https://github.com/bushrabhutto/QuoteGenerator",
    },
    {
      projectname: "Lunar Website Clothing",
      description:
        "For practice of Bootstrap, I made this website covering all Bootstrap concepts.",
      image: lunar,
      repoLink: "https://github.com/bushrabhutto/Lunar-website-homePage",
      button: "https://bushrabhutto.github.io/Lunar-website-homePage/",
    },
    {
      projectname: "Educational Website Using Grid",
      description:
        "I made this website for practicing grid layouts using the Bootstrap grid system.",
      image: gridweb,
      repoLink: "",
      button: "https://bushrabhutto.github.io/flexbox-and-grid/",
    },
    {
      projectname: "OLX Static Website",
      description:
        "I created this static OLX website using HTML and CSS to practice static website concepts.",
      image: olx,
      repoLink: "",
      button: "https://bushrabhutto.github.io/OlxStaticwebsite/",
    },
    {
      projectname: "Product Search",
      description:
        "I created a product search application using an API for searching.",
      image: searchFood,
      repoLink: "https://github.com/bushrabhutto/jsWebsite",
      button: "https://bushrabhutto.github.io/jsWebsite/",
    },
    {
      projectname: "Movie Search Template",
      description:
        "I created a movie search template using a movie API in this project.",
      image: moviesearch,
      repoLink: "https://github.com/bushrabhutto/movie-search-temlate-js-api",
      button: "https://bushrabhutto.github.io/movie-search-temlate-js-api/",
    },
    {
      projectname: "Product Filtering Using API",
      description:
        "I developed a product filtering feature using an API for fetching products.",
      image: productfilter,
      repoLink: "https://github.com/bushrabhutto/Productsfilteringusingai",
      button: "https://bushrabhutto.github.io/Productsfilteringusingai/",
    },
    {
      projectname: "Add To Cart",
      description: "I implemented an Add To Cart feature using vanilla JavaScript.",
      image: addtoCart,
      repoLink: "https://github.com/bushrabhutto/addToCart",
      button: "https://bushrabhutto.github.io/addToCart/",
    },
    {
      projectname: "Calculator Using JS",
      description: "I built a calculator application using vanilla JavaScript.",
      image: calculator,
      repoLink: "https://github.com/bushrabhutto/calculator-updated",
      button: "https://bushrabhutto.github.io/calculator-updated/",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {work.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.projectname}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.projectname}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              {item.repoLink && (
                <a
                  href={item.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline block mb-2"
                >
                  View Repository
                </a>
              )}
              <a
                href={item.button}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
