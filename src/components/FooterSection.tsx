import FooterCard from "./FooterCard";

type FooterSectionProps = {
  
}

const FooterSection = ({  }: FooterSectionProps) => {
  return (
    <footer className="flex flex-1 items-center justify-between mt-5">
     <FooterCard title="Free Shipping" description="When you spend $50+" imgUrl="/delivery.png" />
     <FooterCard title="Call Us Anytime" description="+82 777 7777" imgUrl="/consultant.png" />
     <FooterCard title="Chat With Us" description="We offer 24-hour chat support" imgUrl="/meeting.png" />
     <FooterCard title="Gift Cards" description="For your loved one, in any amount" imgUrl="/gift-card.png" />
    </footer>
  )
}

export default FooterSection;