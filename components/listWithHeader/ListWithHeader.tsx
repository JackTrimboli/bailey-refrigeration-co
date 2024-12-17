import PropTypes from "prop-types";
import React, { Key } from "react";
import Image from "next/image";

interface Props {
  header: String;
  bullets: String[];
  Icon: typeof PropTypes.elementType;
  imgName: String;
}

export const ListWithHeader: React.FC<Props> = ({
  header,
  bullets,
  Icon,
  imgName,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-red-100">
      <Image src={`/image/${imgName}`} alt="img" width={1000} height={2000} />
      <div className="inline-flex items-center gap-2">
        {Icon && <Icon className="text-primary" />}{" "}
        {/* Display the icon if provided */}
        <h2 className="text-xl font-semibold whitespace-nowrap">{header}</h2>
      </div>
      <ul className="list-disc pl-5 space-y-1">
        {bullets.map((bullet: String, index: Key) => (
          <li key={index} className="text-secondary">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};
