import { ListWithHeader } from "@/components/listWithHeader/ListWithHeader";
import EngineeringIcon from "@mui/icons-material/Engineering";
import StarsIcon from "@mui/icons-material/Stars";
import PublicIcon from "@mui/icons-material/Public";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 px-6 lg:px-12">
      {/* Header Section */}
      <div className="flex flex-col gap-4 text-left fade-text">
        <h1 className="text-3xl md:text-4xl font-bold">
          Bailey Refrigeration Co.
        </h1>
        <h4 className="text-secondary md:text-xl font-medium">
          Your Trusted Partner in HVAC-R and Dehumidification for Over 65 Years
        </h4>
      </div>

      {/* Why Choose Section */}
      <div className="w-full flex flex-col gap-8">
        <h2 className="fade-text delay-1000 text-2xl md:text-3xl font-semibold">
          Why Choose Bailey Refrigeration?
        </h2>
        <div className="fade-text flex flex-col md:flex-row gap-8">
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
