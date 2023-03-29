import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `- 特感谢 [OpenAI API(gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](https://vercel.com) 提供支持。

- 本站由 [累小兴](https://www.kdocs.cn/l/comnfhWp01Gl) 搭建。

- 想要部署的朋友，可关注公众号：开源圈 回复关键字j009，添加我个人微信获取保姆级部署文档。

- 关注公众号：开源圈，回复关键字j009,获取到最新的AppKey。

- Shift+Enter 换行。开头输入 / 或者 空格 搜索 Prompt 预设。点击输入框滚动到底部。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
