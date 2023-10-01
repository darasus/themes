import {useAtom} from "jotai"
import {atomWithStorage} from "jotai/utils"

import {Theme} from "@/lib/themes"
import {fonts} from "./fonts"

type Config = {
  theme: Theme["name"]
  radius: number
  font: keyof typeof fonts
}

const configAtom = atomWithStorage<Config>("config", {
  theme: "zinc",
  radius: 0.5,
  font: "Inter",
})

export function useConfig() {
  return useAtom(configAtom)
}
