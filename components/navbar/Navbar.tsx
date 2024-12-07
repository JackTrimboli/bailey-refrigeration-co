import Image from "next/image";
import Link from "next/link";
import { Button } from "../button/Button";

export const Navbar = () => {
  return (
    <div className="max-h-24 min-h-20 w-full bg-background border-b border-border p-6 flex justify-between items-center">
      <div className="w-full flex items-center mx-auto p-6 text-sm">
        <Image
          src="/image/Bailey-logo-cropped.jpeg"
          alt="logo"
          width={60}
          height={60}
        />
        <div className="flex justify-evenly items-center gap-12 font-semibold ml-auto">
          <Link className="hidden md:block" href="/about">
            About Us
          </Link>
          <Link className="hidden md:block" href="/services">
            Our Services
          </Link>
          <Button> Contact Us </Button>
          <div className="block md:hidden">btn</div>
        </div>
      </div>
    </div>
  );
};
