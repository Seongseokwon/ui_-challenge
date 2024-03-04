import { IoSettingsOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";

type HeaderProps = {
  
}

const Header = ({  }: HeaderProps) => {
  return (
    <header className="flex justify-between p-5">
     <section className="flex flex-1 gap-5 basis-1/2">
      <div>
      로고 
      </div>
      <input type="text" placeholder="Search..." className="w-1/2 px-3 py-2 border-solid border-2 border-gray-400 rounded-lg"/>
     </section>
     <section className="flex gap-5">

     <MdOutlineShoppingBag className="text-xl"/>
     <LuUser className="text-xl"/>
     <IoSettingsOutline className="text-xl"/>

     </section>
    </header>
  )
}

export default Header;