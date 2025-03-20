import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-8 text-center border-t p-6 mt-8">
      <div className="flex flex-col mx-auto gap-4 sm:flex-row sm:justify-evenly sm:mx-0">
        <h5 className="flex flex-col text-left">
          <span className="flex gap-2 text-primary">
            <PhoneIcon />
            <span>Call Us</span>
          </span>
          <span>(800) 822-4539</span>
        </h5>
        <h5 className="flex flex-col text-left">
          <span className="flex gap-2 text-primary">
            <MailIcon />
            <span>Email Us</span>
          </span>
          <span>info@baileyco.com</span>
        </h5>
        <h5 className="flex flex-col text-left max-w-64">
          <span className="flex gap-2 text-primary">
            <LocationOnIcon />
            <span>Locate Us</span>
          </span>
          <span className="whitespace-pre-wrap">
            5146 W Hurley Pond Rd STE 5, Wall Township, NJ 07727
          </span>
        </h5>
      </div>
      <div className="text-sm text-secondary">
        &copy; 2023 Bailey Refrigeration Co. All rights reserved.
      </div>
    </div>
  );
}
