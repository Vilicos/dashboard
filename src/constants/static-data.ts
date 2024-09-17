
export const navList = [
  {
    id: 0,
    name: "Help Desk",
    img: "/svg/nav/help-desk.svg",
    path: "helpdesk/discord",
    parent: true,
    disabled: false,
    children: [
      {
        id: 1,
        name: "Discord",
        path: "helpdesk/discord",
        disabled: false,
      },
      {
        id: 2,
        name: "Telegram",
        path: "helpdesk/telegram",
        disabled: true,
      },
      {
        id: 3,
        name: "Web chat",
        path: "helpdesk/webchat",
        disabled: true,
      },
    ],
  },
  {
    id: 4,
    name: "Knowledge",
    img: "/svg/nav/knowledge.svg",
    path: "/",
    parent: false,
    disabled: false,
    children: [],
  },
  {
    id: 5,
    name: "Insights",
    img: "/svg/nav/insight.svg",
    path: "insights",
    parent: false,
    disabled: false,
    children: [],
  },
  {
    id: 6,
    name: "Settings",
    img: "/svg/nav/settings.svg",
    path: "settings/general",
    parent: true,
    disabled: false,
    children: [
      {
        id: 7,
        name: "General",
        path: "settings/general",
        disabled: false,
      },
      {
        id: 8,
        name: "Bots",
        path: "settings/bots",
        disabled: false,
      },
      {
        id: 9,
        name: "Team",
        path: "settings/team",
        disabled: false,
      },
      {
        id: 10,
        name: "Billing",
        path: "settings/billing",
        disabled: true,
      },
    ],
  },
];

export const botList = [
  {
    id: 0,
    name: "Discord Bot",
    slug: "discord",
    img: "/img/discord.png",
    active: true,
    enable: true,
  },
  {
    id: 1,
    name: "Telegram Bot",
    slug: "telegram",
    img: "/img/telegram.png",
    active: false,
    enable: true,
  },
  {
    id: 2,
    name: "Web Chatbot",
    slug: "webchat",
    img: "/img/webchat.png",
    active: false,
    enable: false,
  },
];

export const uploadSize = 1024 * 1024 * 1.5;
export const fileTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/jpg"]);
export const companyFileType = "application/pdf";
export const companyFileSize = 25 * 1024 * 1024;


export const conversationData = {
  discord: {
    logo: "/img/discord-two.png",
    title: "Discord",
    isActive: false,
  },
  telegram: {
    logo: "/img/telegram-two.png",
    title: "Telegram",
    isActive: false,
  },
  webchat: {
    logo: "/img/webchat-two.png",
    title: "Webchat",
    isActive: false,
  },
};

export const agentWelcome = [
  "👋 Hi, I am your support agent.",
  "Please keep in mind that the quality of my answers directly correlates with the information you provide.",
  "I'd love to chat with you.",
];

