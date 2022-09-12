// import FeaturedBagItem from "../Bags/FeaturedBagItem";
import FeaturedBagList from "../Bags/FeaturedBagList";
import classes from "./Main.module.css";
const Main = () => {
  return (
    <main className={classes.main}>
      <h2>Featured Products</h2>
      <FeaturedBagList />
    </main>
  );
};

export default Main;
