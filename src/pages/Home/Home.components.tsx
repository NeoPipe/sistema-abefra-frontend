import * as ProductService from "../../services/Product";

const Home = () => {
  const products = ProductService.getAll();

  return (
    <div>
      <h1>AAAAAAAA</h1>
    </div>
  );
};

export default Home;
