import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <div className="w-full flex flex-col gap-8 text-center border-t p-6 mt-8">
      <div className="flex flex-col mx-auto gap-6 sm:flex-row sm:justify-evenly sm:mx-0">
        <h5 className="flex flex-col text-left">
          <span className="flex items-center gap-2 text-primary font-semibold">
            <PhoneIcon />
            Call Us
          </span>
          <a
            href="tel:8008224539"
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            (800) 822-4539
          </a>
        </h5>
        <h5 className="flex flex-col text-left">
          <span className="flex items-center gap-2 text-primary font-semibold">
            <MailIcon />
            Email Us
          </span>
          <a
            href="mailto:info@baileyco.com"
            className="text-lg font-medium text-blue-600 hover:underline"
          >
            info@baileyco.com
          </a>
        </h5>
        <h5 className="flex flex-col text-left max-w-72">
          <span className="flex items-center gap-2 text-primary font-semibold">
            <LocationOnIcon />
            Locate Us
          </span>
          <a
            href="https://www.google.com/maps/search/?q=5146+W+Hurley+Pond+Rd+STE+5,+Wall+Township,+NJ+07727"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-blue-600 hover:underline block"
          >
            5146 W Hurley Pond Rd, STE 5, Wall Township, NJ 07727
          </a>
        </h5>
      </div>
      <div className="text-sm text-secondary">
        &copy; 2023 Bailey Refrigeration Co. All rights reserved.
      </div>
    </div>
  );
}
