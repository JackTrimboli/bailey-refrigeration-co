import { ListWithHeader } from "@/components/listWithHeader/ListWithHeader";
import EngineeringIcon from "@mui/icons-material/Engineering";
import StarsIcon from "@mui/icons-material/Stars";
import PublicIcon from "@mui/icons-material/Public";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import { Button } from "@/components/button/Button";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 px-6 lg:px-12">
      {/* Header Section */}
      <div className="fade-down-animation flex flex-col gap-4 text-left">
        <h1>Bailey Refrigeration Co.</h1>
        <h4 className="text-secondary font-medium">
          Your Trusted Partner in HVAC-R and Dehumidification for Over 65 Years
        </h4>
        <Button>Contact Us Today!</Button>
      </div>

      {/* Why Choose Section */}
      <div className="w-full flex flex-col gap-8">
        <h2
          className="fade-down-animation font-semibold"
          style={{ animationDelay: "500ms" }}
        >
          Why Choose Bailey Refrigeration?
        </h2>
        <div
          className="fade-up-animation grid grid-cols-1 md:grid-cols-2  gap-12"
          style={{ overflowX: "auto", animationDelay: "1000ms" }}
        >
          <ListWithHeader
            header="A Legacy of Excellence"
            bullets={[
              "Third-generation, Veteran-Owned Small Business.",
              "Proudly serving the New York/New Jersey area, the United States, and projects abroad.",
            ]}
            Icon={StarsIcon}
            imgName="birds-eye-view.jpg"
          />
          <ListWithHeader
            header="Unmatched Expertise"
            bullets={[
              "Specialists in HVAC-R and dehumidification since 1959.",
              "Union and EPA Certified Technicians with an average of 15 years of hands-on experience.",
              "Trusted to deliver solutions both locally and globally.",
            ]}
            Icon={EngineeringIcon}
            imgName="ship-worker.jpg"
          />
          <ListWithHeader
            header="Experience-Oriented Approach"
            bullets={[
              "Faster, better service tailored to your unique needs.",
              "Proven track record of success across a wide range of industries.",
            ]}
            Icon={SettingsSuggestIcon}
            imgName="ship-side-view.jpg"
          />
          <ListWithHeader
            header="Global Reach, Local Commitment"
            bullets={[
              "Serving customers nationwide and worldwide with the same dedication to quality.",
            ]}
            Icon={PublicIcon}
            imgName="ship-night.jpg"
          />
        </div>
      </div>
    </div>
  );
}
