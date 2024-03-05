import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CartItem from "./CartItem";


type ArticleSectionProps = {
  
}

const CART_ITEMS = [
  {
    "img" :"/item_1.jpg",
    "name":"러닝클럽 럭비 맨투맨_네이비",
    "color": "Navy",
    "size": 100,
    "category": "MAN",
    "price": 48.65,
    "quantity": 1,
    "totalPrice": 0,
  },
  {
    "img" :"/item_2.jpg",
    "name":"VSW Football Crewneck Navy",
    "color": "Navy",
    "size": 100,
    "category": "MAN",
    "price": 51.64,
    "quantity": 1,
    "totalPrice": 0,
  }
]

const ArticleSection = ({  }: ArticleSectionProps) => {
  return (
    <article className="flex flex-col flex-1 p-5 gap-5 bg-gray-200">
     <h2 className="text-2xl font-bold">Shopping bag</h2>
     <p><b>2 items </b>in your bag.</p>
     
     <section className="flex flex-col rounded-2xl shadow-2xl bg-white">
      <div className="flex flex-1 p-10">
        <h3 className="flex-auto w-3/5 text-xl font-semibold">Product</h3>
        <h3 className="flex-auto w-16 text-xl font-semibold">Price</h3>
        <h3 className="flex-auto w-16 text-xl font-semibold">Quantity</h3>
        <h3 className="flex-auto w-16 text-xl font-semibold">Total Price</h3>
      </div>
      <div className="flex flex-col p-3 rounded-2xl">
        {CART_ITEMS.map((item, index) => (<CartItem key={index} cartItem={item} isLast={CART_ITEMS.length - 1 === index} />))}
      </div>
      
     </section>
    </article>
  )
}

export default ArticleSection;