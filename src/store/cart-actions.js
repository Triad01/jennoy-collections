import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
import { allBagsAction } from "./allbags-slice";

// FUNTION TO LOAD INITIAL BAGS(in HOME PAGE) FROMS THE BACKEND(COME BACK LATER FOR THIS)==========================================
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const fetchInitialBagsData = () => {
  return async (dispatch) => {
    const fetchBags = async () => {
      const response = await fetch(
        "https://jennoy-collections-default-rtdb.firebaseio.com/tote-bags.json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Bags from store...pls try again ");
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

      return loadedBags;
    };
    try {
      const bagCollection = await fetchBags();
      dispatch(
        allBagsAction.loadAllBags({
          name: bagCollection.name,
          id: bagCollection.id,
          price: bagCollection.price,
          description: bagCollection.description,
          image: bagCollection.image,
        })
      );

      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Success",
          message: "Successfully fetched bags collection...",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error",
          message: "Failed to fetch bags collection...",
        })
      );
    }
  };
};

// FUNCTION TO SEND USERS CART DETAILS TO THE BACKEND WHEN ITEMS ARE ADDED TO CART==========================================
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Pending",
        title: "Pending!",
        message: "Adding item to cart...",
      })
    );
    const sendData = async () => {
      const response = await fetch(
        "https://jennoy-collections-default-rtdb.firebaseio.com/user-cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send cart details...");
      }
    };

    try {
      await sendData();
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Successful",
          message: "Item added to cart",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error",
          message: "Failed to add item to cart...",
        })
      );
    }
  };
};

// FUNCTION TO FETCH USERS CART DATA FROM BACKEND UPON PAGE RELOAD ================================================
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jennoy-collections-default-rtdb.firebaseio.com/user-cart.json"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart details...");
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const bagData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: bagData.items || [],
          totalAmount: bagData.totalAmount,
          totalQuantity: bagData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          title: "Error!",
          message: "Failed to fetch cart details...",
        })
      );
    }
  };
};
