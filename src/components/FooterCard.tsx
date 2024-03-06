
type FooterCardProps = {
  title: string;
  description: string;
  imgUrl: string;
}

const FooterCard = ({ title, description, imgUrl }: FooterCardProps) => {
  return (
    <div className="flex gap-2 p-5 w-1/5 bg-white rounded-3xl">
      <img src={imgUrl} alt="delivery-icon" className="flex-auto max-w-24"/>
      <div className="flex flex-col flex-auto">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-gray-400">{description}</p>
      </div>
     </div>
  )
}

export default FooterCard;