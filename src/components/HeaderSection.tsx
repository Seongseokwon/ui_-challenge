import { IoSettingsOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";

type HeaderSectionProps = {
  
}

const HeaderSection = ({  }: HeaderSectionProps) => {
  return (
    <header className="flex justify-between items-center p-5 rounded-t-2xl bg-white">
     <section className="flex flex-1 items-center gap-5 basis-1/2">
      <div>
      로고 
      </div>
      <input type="text" placeholder="Search..." className="w-1/2 px-3 py-2 border-solid border-2 border-gray-400 rounded-lg"/>
     </section>
     <section className="flex gap-5">
      <MdOutlineShoppingBag className="text-2xl"/>
      <LuUser className="text-2xl"/>
      <IoSettingsOutline className="text-2xl"/>
     </section>
    </header>
  )
}

export default HeaderSection;