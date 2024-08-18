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
        path: "dashboard/helpdesk/discord",
      },
      {
        id: 2,
        name: "Telegram",
        path: "dashboard/helpdesk/telegram",
      },
      {
        id: 3,
        name: "Web chat",
        path: "dashboard/helpdesk/webchat",
      },
    ],
  },
  {
    id: 4,
    name: "Knowledge",
    img: "/svg/nav/knowledge.svg",
    path: "dashboard/knowledge",
    parent: false,
    children: [],
  },
  {
    id: 5,
    name: "Insights",
    img: "/svg/nav/insight.svg",
    path: "dashboard/insight",
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
        name: "Bots",
        path: "dashboard/settings/bots",
      },
      {
        id: 8,
        name: "Team",
        path: "dashboard/settings/team",
      },
      {
        id: 9,
        name: "Billing",
        path: "dashboard/settings/billing",
      },
    ],
  },
];
