import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type CartItem = {
    "img" : string,
    "name": string,
    "color": string,
    "size": number,
    "category": string,
    "price": number,
    "quantity": number,
    "totalPrice": number,
}

type CartItemProps = {
  cartItem : CartItem,
  isLast: boolean
}

const CartItem = ({ cartItem, isLast}: CartItemProps) => {
  const cartItemBoxClasses = `flex flex-1 items-center py-2 ${isLast ? "" :"border-b-2"}`
  return (
    <div className={cartItemBoxClasses}>
        <section className="flex flex-auto w-3/5 gap-5">
          <img src={cartItem.img} alt="product_img"/>
          <section className="flex flex-col justify-center gap-10">
            <div>
              <p>{cartItem.category}</p>
              <b>{cartItem.name}</b>
            </div>
            <div>
              <div className="flex gap-3">
                <label className="text-stone-400">Color</label>
                <span>{cartItem.color}</span>
              </div>
              <div className="flex gap-3">
                <label className="text-stone-400">Size</label>              
                <span>{cartItem.size}</span>
              </div>
            </div>
          </section>
        </section>

        <section className="flex-auto w-20 font-semibold">
          ${cartItem.price}
          </section>
        <section className="flex-auto w-20 flex gap-2">
          <button type="button" className="
          p-1 text-stone-400 border rounded-md border-gray-300 hover:border-gray-900 hover:text-stone-800">
            <AiOutlineMinus />
            </button>
          {cartItem.quantity}
          <button type="button" className="p-1 text-stone-400 border rounded-md border-gray-300 hover:border-gray-900 hover:text-stone-800">
            <AiOutlinePlus />
          </button>
        </section>
        <section className="flex-auto w-20 text-amber-300 font-semibold text-xl">
          ${cartItem.quantity * cartItem.price}
        </section>
      </div>
  )
}

export default CartItem;