import * as OutlineIcons from "@heroicons/react/outline";

const HeroIcon = (props) => {
  const { IconName, color } = props;

  const { ...icons } = OutlineIcons;

  const Icon = icons[IconName];

  return (
    <Icon
      className="h-8 block  mx-auto w-8  mb-4 "
      style={{ color: `${color}` }}
    />
  );
};

export default HeroIcon;
