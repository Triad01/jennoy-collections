import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FeaturedBagItem from "./FeaturedBagItem";
import classes from "./FeaturedBagList.module.css";
import { uiActions } from "../../store/ui-slice";

// const FeaturedItems = [
//   {
//     name: "Sussi travellers",
//     price: 2000,
//     id: "m1",
//   },
//   {
//     name: "Gucci tote",
//     price: 3000,
//     id: "m2",
//   },
//   {
//     name: "Indian tushe",
//     price: 4000,
//     id: "m3",
//   },
// ];

const FeaturedBagList = (props) => {
  const dispatch = useDispatch();
  const [availableFeaturedProducts, setAvailableFeaturedProducts] = useState(
    []
  );
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const response = await fetch(
        "https://jennoy-collections-default-rtdb.firebaseio.com/featured-products.json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch featured products");
      }
      const featuredProductData = await response.json();

      let featuredProducts = [];
      for (const key in featuredProductData) {
        featuredProducts.push({
          id: key,
          name: featuredProductData[key].name,
          price: featuredProductData[key].price,
          image: featuredProductData[key].image,
        });
      }
      setAvailableFeaturedProducts(featuredProducts);
    };

    fetchFeaturedProducts()
      .then(() => {
        dispatch(
          uiActions.showNotification({
            status: "Success",
            title: "Successful",
            message: "Products fetched",
          })
        );
      })
      .catch(() => {
        dispatch(
          uiActions.showNotification({
            status: "Error",
            title: "Error",
            message: "Failed to fetch products",
          })
        );
      });
  }, [dispatch]);

  return (
    <ul className={classes["featured-bag__list"]}>
      {availableFeaturedProducts.map((item) => {
        return (
          <FeaturedBagItem
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
            key={item.id}
          />
        );
      })}
    </ul>
  );
};

export default FeaturedBagList;
