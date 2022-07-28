import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGift";

export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGift(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //useEffect hook ejecuta la funcion solo cuando se crea el componente
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
