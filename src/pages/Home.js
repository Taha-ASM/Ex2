import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Products from "../components/Products";
import Review from "../components/Review";
import Update from "../components/Update";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Products />
      <Review />
      <Update />
      <Footer />
    </div>
  );
}
