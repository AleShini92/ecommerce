import React, { useEffect, useState } from 'react';

const useGetCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setloading] = useState(false);

    const getCategories = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            if(res.ok) {
                const data = await res.json();
                setCategories(data);
                setloading(false);
            }
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
      getCategories();
    }, []);
    

  return (
    { categories, loading }
  )
}

export default useGetCategories;