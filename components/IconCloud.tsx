import React from 'react';
import Image from 'next/image';

interface Icon {
  name: string;
  src: string;
}

interface IconCloudProps {
  icons?: Icon[];
}

const IconCloud: React.FC<IconCloudProps> = ({ icons = [] }) => {
  return (
    <div>
      {/* Placeholder for IconCloud component */}
      <p>IconCloud component (placeholder)</p>
      <div className="flex flex-wrap">
        {icons.map((icon, index) => (
          <div key={index} className="m-1">
            <Image
              src={icon.src}
              alt={icon.name}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconCloud;