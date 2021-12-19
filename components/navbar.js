import Image from "next/image";

export default function Navbar() {
  return (
    <div className="mx-auto bg-white shadow-lg">
      <div className="flex flex-wrap h-16">
        <div className="w-full flex flex-1 justify-start items-center px-10">
          <p>Dashboard</p>
        </div>
        <div className="w-full flex flex-1 justify-center items-center">
          <Image src="/logo.png" alt="logo" height="50px" width="50px" />
        </div>
        <div className="w-full flex flex-1 justify-end px-10 items-center">
          <p>Maddy</p>
        </div>
      </div>
    </div>
  )
}