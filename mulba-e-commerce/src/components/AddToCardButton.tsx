"use client";

import { cn } from "@/lib/utils";
import { Products } from "../../sanity.types";
import { Button } from "./ui/button";
import PriceFormatter from "./PriceFormatter";
import QuantityButton from "./QuantityButton";
import useCartStore from "@/productsStore";
import { toast } from "react-hot-toast";

interface AddToCardButtonProps {
  product: Products;
  className?: string;
}
const AddToCardButton = ({ product, className }: AddToCardButtonProps) => {
  const isoutOfStock = product?.stock === 0;
  const { addItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);
  // console.log(itemCount);

  const addToCart = () => {
    addItem(product);
    toast.success(
      `${product?.name?.substring(0, 12)} added to cart successfully`
    );
  };

  return (
    <>
      <div className="w-full ">
        {itemCount ? (
          <div className="w-full text-sm">
            <div className="flex items-center justify-between py-1">
              <span>Quantity</span>
              <QuantityButton product={product} />
            </div>
            <div className="flex items-center justify-between border-t py-1">
              <span>Subtotal</span>
              <PriceFormatter
                amount={product?.price ? product?.price * itemCount : 0}
              />
            </div>
          </div>
        ) : (
          <Button
            disabled={isoutOfStock}
            onClick={addToCart}
            className={(cn("w-full"), className)}
          >
            Add To Cart
          </Button>
        )}
      </div>
    </>
  );
};

export default AddToCardButton;
