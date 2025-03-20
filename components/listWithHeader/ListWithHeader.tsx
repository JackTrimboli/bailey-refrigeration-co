import React, { Key } from "react";
import Image from "next/image";
import { SvgIconComponent } from "@mui/icons-material";

interface Props {
  header: string;
  bullets: string[];
  Icon?: SvgIconComponent; // Correct type for MUI icons
  imgName: string;
}

export const ListWithHeader: React.FC<Props> = ({
  header,
  bullets,
  Icon,
  imgName,
}) => {
  return (
    <div className="flex flex-col gap-4  p-4">
      <div className="w-full h-[300px] overflow-hidden rounded-2xl relative">
        <Image
          className="zoom-effect"
          src={`/image/${imgName}`}
          alt="img"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="inline-flex items-center gap-2">
        {Icon && <Icon className="text-primary text-foreground" />}
        <h4 className="font-semibold whitespace-nowrap">{header}</h4>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        {bullets.map((bullet: string, index: Key) => (
          <li key={index} className="text-secondary text-lg">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};
