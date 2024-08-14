import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  image?: string;
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  className = "",
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 50,
  image,
}) => {
  return (
    <div
      className={cn(
        "absolute size-16 rounded-full flex items-center justify-center text-white animate-orbit",
        reverse && "animation-direction:reverse",
        className
      )}
      style={{
        "--duration": duration,
        "--delay": `${delay}s`,
        "--radius": radius,
      } as React.CSSProperties}
    >
      {image ? (
        <Image
          src={image}
          alt="Orbiting logo"
          width={64}
          height={64}
          className="rounded-full object-contain"
        />
      ) : (
        <div className="size-16 rounded-full bg-[#111] flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export default OrbitingCircles;