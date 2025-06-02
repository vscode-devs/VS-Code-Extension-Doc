import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/portfolio",
  "/demo/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "VS Code参考文档",
    icon: "book",
    children: [
		{ text: "VS Code官方文档", link: "https://vscode.js.cn/api" },
		{ text: "VS Code插件开发文档-中文版", link: "https://liiked.github.io/VS-Code-Extension-Doc-ZH/#/" }
	]
  },
]);
