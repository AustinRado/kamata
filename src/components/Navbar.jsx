import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <section>
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-3 max-w-6xl mx-auto" >
      <div className="h-[8em]">
      <img src={Logo} 
           alt = "Logo" 
           className="w-full h-full"
           />
       </div>
      </div>  
    </div>
    </section>
  )
}
