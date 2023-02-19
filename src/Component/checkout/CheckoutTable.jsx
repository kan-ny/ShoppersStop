import { useContext } from "react";
import { CartContent } from "../../context/cart.content";
import Button from "../button/Button.component";
import "./checkoutTable.styles.scss";

const CheckoutTable = () => {
  const { cartItem, total, increaseDecrease, removeItem } = useContext(CartContent);
  return (
    <div>
      <table>
        <tbody >
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        {cartItem.map((ele, index) => {
          return (
            <tr key={index}>
              <td>
                <img className="img" src={ele.imageUrl} alt={ele.name} />
              </td>
              <td>{ele.name}</td>
              <td>
                {" "}
                <Button onClick={() => increaseDecrease(ele, 1)}>
                  {" "}
                  +{" "}
                </Button>{" "}
                {ele.quantity} <Button onClick={() => increaseDecrease(ele, -1)}> - </Button>{" "}
              </td>
              <td> {ele.price * ele.quantity } </td>
              <td onClick={(()=>   removeItem(ele) )}> X </td>
            </tr>
          );
        })}
        </tbody>
      </table>
      <span>Total: ${total} </span>
    </div>
  );
};
export default CheckoutTable;
