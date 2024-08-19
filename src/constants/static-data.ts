export const navList = [
  {
    id: 0,
    name: "Help Desk",
    img: "/svg/nav/help-desk.svg",
    path: "",
    parent: true,
    children: [
      {
        id: 1,
        name: "Discord",
        path: "helpdesk/discord",
      },
      {
        id: 2,
        name: "Telegram",
        path: "helpdesk/telegram",
      },
      {
        id: 3,
        name: "Web chat",
        path: "helpdesk/webchat",
      },
    ],
  },
  {
    id: 4,
    name: "Knowledge",
    img: "/svg/nav/knowledge.svg",
    path: "knowledge",
    parent: false,
    children: [],
  },
  {
    id: 5,
    name: "Insights",
    img: "/svg/nav/insight.svg",
    path: "insight",
    parent: false,
    children: [],
  },
  {
    id: 6,
    name: "Settings",
    img: "/svg/nav/settings.svg",
    path: "",
    parent: true,
    children: [
      {
        id: 7,
        name: "General",
        path: "settings/general",
      },
      {
        id: 8,
        name: "Bots",
        path: "settings/bots",
      },
      {
        id: 9,
        name: "Team",
        path: "settings/team",
      },
      {
        id: 10,
        name: "Billing",
        path: "settings/billing",
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
    enable:true,
  },
  {
    id: 1,
    name: "Telegram Bot",
    slug: "telegram",
    img: "/img/telegram.png",
    active: false,
    enable:true,
  },
  {
    id: 2,
    name: "Web Chatbot",
    slug: "webchat",
    img: "/img/webchat.png",
    active: false,
    enable:false,
  },
];
