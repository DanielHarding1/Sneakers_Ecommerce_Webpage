import React, {useState, useEffect} from "react";
import axios from "axios";

import Header from "./Header/Header";
import Home from "./Home/Home";


function MainLayout() {
  const [sneakersData, setSneakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (query = 'shoe') => {
    console.log({query})
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
        q: query,
      },
      headers: {
        "X-RapidAPI-Key": "de2f7235a1msh51b406813c90eb3p167ae7jsnc2746392f895",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    try {
      setIsLoading(true);
      const {data} = await axios.request(options);
      setSneakersData(data.products);
      // console.log(data.products);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const performSearch = (query) => {
    fetchData(query);
  }

  useEffect((query = 'shoe') => {
    fetchData();
  }, []);

  return(
    <div>
      <Header performSearch={performSearch}/>
      <Home isLoading={isLoading}  sneakersData={sneakersData}/>
    </div>
  );
}

export default MainLayout;
