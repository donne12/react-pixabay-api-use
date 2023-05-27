import React, { useEffect, useState } from "react";
import API from "./API";
import Image from "./Image";
import Masonry from "react-masonry-css";

let pageNum = 1;

const App = () => {
  const [imagesArray, setImagesArray] = useState([]);
  const [query, setQuery] = useState("");

  const fetchImages = (pageNumber, query) => {
    API.get("/", { params: { page: pageNumber, q: query } })
      .then((res) => {
        setImagesArray([...res.data.hits]);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchClick = () => {
    fetchImages(1, query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    fetchImages(pageNum, "tech");
  }, []);

  const breakpointColumnsObj = {
    default: 6,
    1200: 3,
    992: 3,
    768: 2,
    576: 1,
  };

  return (
    <div className="App">

      <div className="container-fluid">
        <h1 className="text-center text-4xl font-bold my-4">
          Galerie d'images
        </h1>

      
        <div className="flex items-center justify-center">
          <input
            className="py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Trouver une image..."
          />
          <button
            onClick={handleSearchClick}
            className="ml-2 px-4 py-2 bg-blue-500 text-black rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Rechercher
          </button>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {imagesArray.map((image) => (
                <Image key={image.id} {...image} />
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
