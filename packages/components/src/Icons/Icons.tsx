import * as ioIcons from 'react-icons/io5';
import { IconType } from 'react-icons';
import React from 'react';

interface IconProps {
  icon: string;
  className?: string;
}

const GetIcon = ({ icon, className }: IconProps) => {
  const getIcon = (iconName: string) => {
    const iconsMap = new Map();
    iconsMap.set('Io', ioIcons);
    return iconsMap.get(iconName.substring(0, 2)) as unknown;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icons: any = getIcon(icon);
  if (icons) {
    const TheIcon: IconType = icons[icon] as IconType;
    return <TheIcon className={className} />;
  }
  return null;
};

export default GetIcon;
