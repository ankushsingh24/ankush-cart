import React from "react";
import CartItem from "../Cart Item/CartItem";
import { useGlobalContext } from "../Context/Context";

const CartContainer = () => {
  const { cart, total, clearcart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <div className="cart">
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </div>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span> &{total}</span>
          </h4>
        </div>

        <button className="btn clear-btn" onClick={clearcart}>
          clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
