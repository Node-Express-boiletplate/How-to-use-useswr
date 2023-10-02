import React, { useState, useEffect } from "react";
import { BASE_URL, routes } from "../api/routes";
import { useFetcher } from "../util/swr";

const Home = () => {
  const { data, error, isLoading } = useFetcher(routes.PRODUCTS);

  if (error) return <div>Failed to fetch users</div>;
  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <>
      <div>
        {data &&
          data.map((product, index) => {
            return (
              <>
                <h2 key={index}>{product.title}</h2>
                <h2 key={index}>{product.price}</h2>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Home;
