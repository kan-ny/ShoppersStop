// import { Fragment } from "react";
// import ProductCard from "../../Component/product-card/product-card.component";
// import { useNavigate } from "react-router-dom";

// const Preview = ({ title, products }) => {
//   console.log("title, products", title, products);
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/shop/" + title);
//   };

//   return (
//     <div>
//       <span
//         onClick={handleClick}
//         style={{ "font-size": "25px", cursor: "pointer", "font-weight": "800" }}
//       >
//         {title.toUpperCase()}
//       </span>
//       <div className="product-container">
//         {products.map((product, index) =>
//           index < 4 ? <ProductCard key={product.id} product={product} /> : null
//         )}
//       </div>
//     </div>
//   );
// };

// export default Preview;

import { Fragment } from "react";
import ProductCard from "../../Component/product-card/product-card.component";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Preview = ({ title, products }) => {
  console.log("title, products", title, products);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop/" + title);
  };

  return (
    <div>
      <Link
        to={title}
        style={{ textDecoration: "none", "font-size": "25px", cursor: "pointer", "font-weight": "800" }}
      >
        {title.toUpperCase()}
      </Link>
      <div className="product-container">
        {products.map((product, index) =>
          index < 4 ? <ProductCard key={product.id} product={product} /> : null
        )}
      </div>
    </div>
  );
};

export default Preview;