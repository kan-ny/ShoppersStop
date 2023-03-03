import { useContext } from "react";
import { CartContent } from "../../context/cart.content";
import Button from "../button/Button.component";
import { ImgComp, CheckoutTableContainer, TotalSpan } from "./checkoutTable.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  contentItems,
  contentTotal,
} from "../../store/contentReducer/content-selector";
import {
  cartRemoveAction,
  cartDecAction,
  cartAddAction,
} from "../../store/contentReducer/content-action";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from '@mui/material/IconButton';


const CheckoutTable = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(contentItems);
  const total = useSelector(contentTotal);
  const center_item = { textAlign: "center" };

  // const { cartItem, total, addCartItem, decreaseItem, removeItem } = useContext(CartContent);
  return (
    <CheckoutTableContainer>
      <table>
        <tbody>
          <tr style={{ height: "30px", margin: "10px 0px 20px 0px" }}>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
          {cartItem.map((ele, index) => {
            // return (
            //   <tr key={index}>
            //     <td>
            //       <ImgComp src={ele.imageUrl} alt={ele.name} />
            //     </td>
            //     <td>{ele.name}</td>
            //     <td>
            //       {" "}
            //       <Button onClick={() => addCartItem( ele )}>
            //         {" "}
            //         +{" "}
            //       </Button>{" "}
            //       {ele.quantity} <Button onClick={() => decreaseItem(ele, -1)}> - </Button>{" "}
            //     </td>
            //     <td> {ele.price * ele.quantity } </td>
            //     <td onClick={(()=>   removeItem(ele) )}> X </td>
            //   </tr>
            // );

            return (
              <tr key={index}>
                <td style={center_item}>
                  <ImgComp src={ele.imageUrl} alt={ele.name} />
                </td>
                <td style={center_item}>{ele.name}</td>
                <td style={center_item}>
                  {/* {" "}
                <Button onClick={() => dispatch(cartAddAction( ele ) )}>
                  {" "}
                  +{" "}
                </Button>{" "} 
                
                 {ele.quantity} 
                 
                 */}
                  {/* <Button onClick={() => dispatch(cartDecAction( ele, -1 )) }> - </Button>{" "} */}
                  <div
                    style={{
                      display: "flex",
                      "flex-direction": "row",
                      "align-content": "center",
                      "justify-content": "space-evenly",
                    }}
                  >
                    <ArrowBackIosIcon
                      onClick={() => dispatch(cartDecAction(ele, -1))}
                    />
                    <div>{ele.quantity}</div>
                    <ArrowForwardIosIcon
                      onClick={() => dispatch(cartAddAction(ele))}
                    />
                  </div>
                </td>
                <td style={center_item}> {"$" + ele.price * ele.quantity} </td>
                <td
                  style={center_item}
                  onClick={() => dispatch(cartRemoveAction(ele))}
                >
                  <IconButton style={{color: "red"}} aria-label="delete" size="large">
                    <DeleteOutlineIcon />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TotalSpan >Total: ${total} </TotalSpan>
    </CheckoutTableContainer>
  );
};
export default CheckoutTable;
