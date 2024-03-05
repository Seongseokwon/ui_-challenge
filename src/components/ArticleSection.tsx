import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


type ArticleSectionProps = {
  
}

const ArticleSection = ({  }: ArticleSectionProps) => {
  return (
    <article className="flex flex-col flex-1 gap-3">
     <h2 className="text-2xl font-bold">Shopping bag</h2>
     <p><b>2 items </b>in your bag.</p>
     
     <section className="flex flex-col shadow-xl">
      <div className="flex flex-1">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total Price</h3>
      </div>
      <div className="flex items-center">
        <section className="flex">
          <img src="/item_1.jpg" alt="product_img"/>
          <section>
            <div>
              <p>MAN</p>
              <b>러닝클럽 럭비 맨투맨_네이비</b>
            </div>
            
          </section>
        </section>
        <section>$20.50</section>
        <section className="flex gap-2">
          <button type="button" className="p-1 text-stone-400 border rounded-md border-gray-300 colo">
            <AiOutlineMinus />
            </button>
          2
          <button type="button" className="p-1 text-stone-400 border rounded-md border-gray-300 colo">
            <AiOutlinePlus />
          </button>
        </section>
        <section>
          total price
        </section>
      </div>
     </section>
    </article>
  )
}

export default ArticleSection;