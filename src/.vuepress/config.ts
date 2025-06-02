import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/VS-Code-Extension-Doc/",

  lang: "zh-CN",
  title: "VS Code 扩展文档",
  description: "苏木的 VS Code 扩展学习文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
