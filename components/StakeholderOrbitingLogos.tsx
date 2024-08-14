import React from "react";
import OrbitingCircles from "./magicui/orbiting-circles";

const stakeholderLogos = [
  "/stakeholders logos/ehdsi_logo_en_0.png",
  "/stakeholders logos/ihe-czech.png",
  "/stakeholders logos/ihe-logo.svg",
  "/stakeholders logos/logo_top.png",
  "/stakeholders logos/logo-uzis.svg",
  "/stakeholders logos/logo.png",
  "/stakeholders logos/Ministerstvo zdravotnictví_idlj4qD5bV_0.jpeg",
  "/stakeholders logos/Ministerstvo zdravotnictví_idStvjuw2U_1.png",
];

const StakeholderOrbitingLogos: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[300px]">
      {stakeholderLogos.map((logo, index) => (
        <OrbitingCircles
          key={logo}
          image={logo}
          radius={120}
          duration={30 + index * 5}
          delay={index * 2}
          reverse={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default StakeholderOrbitingLogos;