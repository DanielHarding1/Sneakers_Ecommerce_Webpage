import React, {useState, useEffect} from "react";
import axios from "axios";

import Header from "./Header/Header";
import Home from "./Home/Home";


function MainLayout() {

  const [sneakersData, setSneakersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://asos2.p.rapidapi.com/products/v2/list",
        params: {
          store: "US",
          offset: "0",
          categoryId: "12703",
          limit: "6",
          country: "US",
          sort: "freshness",
          currency: "USD",
          sizeSchema: "US",
          lang: "en-US",
          q: "shoe",
        },
        headers: {
          "X-RapidAPI-Key": "de2f7235a1msh51b406813c90eb3p167ae7jsnc2746392f895",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };

      try {
        const {data} = await axios.request(options);
        setSneakersData(data.products);
        // console.log(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return(
    <div>
      <Header />
      <Home sneakersData={sneakersData}/>
    </div>
  );
}

export default MainLayout;
