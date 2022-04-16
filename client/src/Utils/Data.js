const generateId = () =>
  `${performance.now()}${Math.random().toString().slice(5)}`.replace(".", "");

const featureData = [
  {
    id: generateId(),
    title: "Measure your performance",
    descripition:
      "Stay connected with your team and make quick decisions wherever you are.",
    color: "#493455",
    IconName: "HeartIcon",
  },
  {
    id: generateId(),
    title: "Custom analytics",
    descripition:
      "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
    color: "#e19c0d",
    IconName: "EmojiHappyIcon",
  },
  {
    id: generateId(),
    title: "Team Management",
    descripition:
      "Our calendar lets you know what is happening with customer and projects so you.",
    color: "#bada55",
    IconName: "DatabaseIcon",
  },
  {
    id: generateId(),
    title: "Build your website",
    descripition:
      "A tool that lets you build a dream website even if you know nothing about web design or programming.",
    color: "#0369a1",
    IconName: "DatabaseIcon",
  },
  {
    id: generateId(),
    title: "Connect multiple apps",
    descripition:
      "The first business platform to bring together all of your products from one place.",
    color: "#be123c",
    IconName: "BookmarkAltIcon",
  },
  {
    id: generateId(),
    title: "Easy setup",
    descripition:
      "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
    color: "#a21caf",
    IconName: "BadgeCheckIcon",
  },
  {
    id: generateId(),
    title: "Build your website",
    descripition:
      "A tool that lets you build a dream website even if you know nothing about web design or programming.",
    color: "#0369a1",
    IconName: "DatabaseIcon",
  },
  {
    id: generateId(),
    title: "Measure your performance",
    descripition:
      "Stay connected with your team and make quick decisions wherever you are.",
    color: "#493455",
    IconName: "HeartIcon",
  },
  {
    id: generateId(),
    title: "Custom analytics",
    descripition:
      "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
    color: "#e19c0d",
    IconName: "EmojiHappyIcon",
  },
  {
    id: generateId(),
    title: "Team Management",
    descripition:
      "Our calendar lets you know what is happening with customer and projects so you.",
    color: "#bada55",
    IconName: "DatabaseIcon",
  },
  {
    id: generateId(),
    title: "Build your website",
    descripition:
      "A tool that lets you build a dream website even if you know nothing about web design or programming.",
    color: "#0369a1",
    IconName: "DatabaseIcon",
  },
  {
    id: generateId(),
    title: "Connect multiple apps",
    descripition:
      "The first business platform to bring together all of your products from one place.",
    color: "#be123c",
    IconName: "BookmarkAltIcon",
  },
  {
    id: generateId(),
    title: "Easy setup",
    descripition:
      "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
    color: "#a21caf",
    IconName: "BadgeCheckIcon",
  },
  {
    id: generateId(),
    title: "Build your website",
    descripition:
      "A tool that lets you build a dream website even if you know nothing about web design or programming.",
    color: "#0369a1",
    IconName: "DatabaseIcon",
  },
  {
    id: generateId(),
    title: "Measure your performance",
    descripition:
      "Stay connected with your team and make quick decisions wherever you are.",
    color: "#493455",
    IconName: "HeartIcon",
  },
  {
    id: generateId(),
    title: "Custom analytics",
    descripition:
      "Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.",
    color: "#e19c0d",
    IconName: "EmojiHappyIcon",
  },
  {
    id: generateId(),
    title: "Team Management",
    descripition:
      "Our calendar lets you know what is happening with customer and projects so you.",
    color: "#bada55",
    IconName: "DatabaseIcon",
  },
  {
    id: generateId(),
    title: "Build your website",
    descripition:
      "A tool that lets you build a dream website even if you know nothing about web design or programming.",
    color: "#0369a1",
    IconName: "DatabaseIcon",
  },
  {
    id: generateId(),
    title: "Connect multiple apps",
    descripition:
      "The first business platform to bring together all of your products from one place.",
    color: "#be123c",
    IconName: "BookmarkAltIcon",
  },
  {
    id: generateId(),
    title: "Easy setup",
    descripition:
      "End to End Business Platform, Sales Management, Marketing Automation, Help Desk",
    color: "#a21caf",
    IconName: "BadgeCheckIcon",
  },
  {
    id: generateId(),
    title: "Build your website",
    descripition:
      "A tool that lets you build a dream website even if you know nothing about web design or programming.",
    color: "#0369a1",
    IconName: "DatabaseIcon",
  },
];

export const getFeatureData = (index) => {
  let newArr = [];
  for (let i = 0; i < index; i++) {
    newArr.push(featureData[i]);
  }
  return newArr;
};
