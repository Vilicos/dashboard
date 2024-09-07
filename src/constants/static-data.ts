import type { AuthData } from "@custom-types/index";
import { z } from "zod";

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

export const loginFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Invalid email address",
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Invalid password",
    })
    .min(5, { message: "Minimum 5 characters" })
    .max(40, { message: "Maximum 40 characters" })
    .trim(),
});
export const registerFormSchema = loginFormSchema.extend({
  fullName: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Invalid full name",
    })
    .min(3, { message: "Minimum 3 characters" })
    .max(40, { message: "Maximum 40 characters" })
    .trim(),
  agreement:z.boolean().refine((value)=> value === true,{message:"Agreement must be accepted"}),
});

export const authData: AuthData = {
  "/login": {
    title: "Log In",
    description: "Don't have an account?",
    urlTitle: "Create Now",
    urlPath: "/register",
    submitName: "Log In",
    googleName: "Login with Google",
    formSchema: loginFormSchema,
    defaultValues: {
      email: "",
      password: "",
    },
  },
  "/register": {
    title: "Sign Up",
    description: "Already have an account?",
    urlTitle: "Log in",
    urlPath: "/login",
    submitName: "Next",
    googleName: "Continue with Google",
    formSchema: registerFormSchema,
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      agreement:false
    },
  },
};

export const conversationData = {
  discord: {
    logo: "/img/discord-two.png",
    title: "Discord",
    isActive: true,
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
