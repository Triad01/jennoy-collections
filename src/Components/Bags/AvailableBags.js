// import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import BagListItems from "./BagListItem";
import styles from "./AvailableBags.module.css";
import Card from "../UI/Card/Card";

// import { fetchInitialBagsData } from "../../store/cart-actions";

// const DummyBagCollection = [
//   {
//     name: "Canadian swiss",
//     price: 2000,
//     description: "good quality bag",
//     id: "m1",
//   },
//   {
//     name: "Canadian swiss",
//     price: 2000,
//     description: "good quality bag",
//     id: "m2",
//   },
//   {
//     name: "Canadian swiss",
//     price: 2000,
//     description: "good quality bag",
//     id: "m3",
//   },
//   {
//     name: "Canadian swiss",
//     price: 2000,
//     description: "good quality bag",
//     id: "m4",
//   },
//   {
//     name: "Canadian swiss",
//     price: 2000,
//     description: "good quality bag",
//     id: "m5",
//   },
//   {
//     name: "Canadian swiss",
//     price: 2000,
//     description: "good quality bag",
//     id: "m6",
//   },
// ];

const AvailableBags = () => {
  // const loadedBags = useSelector((state) => state.allBags);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchInitialBagsData());
  // }, [dispatch]);

  // ASYCN FETCHING OF DATA FROM BACKEND===================================================================
  const [error, setError] = useState(null);
  const [loadedAvailableBags, setLoadedAvailableBags] = useState([]);
  const [bagIsLoading, setBagIsLoading] = useState(false);
  useEffect(() => {
    setBagIsLoading(true);
    const fetchBags = async () => {
      const response = await fetch(
        "https://jennoy-collections-default-rtdb.firebaseio.com/tote-bags.json"
      );
      if (!response.ok) {
        throw new Error(
          "Something went wrong... Pls check your internet connection"
        );
      }

      const responseData = await response.json();

      let loadedBags = [];
      for (const key in responseData) {
        loadedBags.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          description: responseData[key].description,
          image: responseData[key].image,
        });
      }
      setLoadedAvailableBags(loadedBags);
      setBagIsLoading(false);
    };

    fetchBags().catch((error) => {
      setError(error.message);
      setBagIsLoading(false);
    });
  }, []);

  const content = loadedAvailableBags.map((BagItem) => {
    return (
      <BagListItems
        id={BagItem.id}
        key={BagItem.id}
        name={BagItem.name}
        description={BagItem.description}
        price={BagItem.price}
        image={BagItem.image}
      />
    );
  });

  if (bagIsLoading && !error) {
    return (
      <section className={styles.isLoading}>
        <p>loading bag collections...please wait!</p>
      </section>
    );
  }

  if (error && !bagIsLoading) {
    return (
      <secton>
        <p className={styles["error-text"]}>
          {error}.
          <br />
          Pls check your internet connection.
        </p>
      </secton>
    );
  }
  return (
    <section>
      <Card className={styles["all-bags"]}>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableBags;
