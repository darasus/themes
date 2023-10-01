import {
  Cherry_Bomb_One,
  Inter,
  Roboto,
  Open_Sans,
  Noto_Sans,
} from "next/font/google"

const cherryBombOne = Cherry_Bomb_One({subsets: ["latin"], weight: ["400"]})
const inter = Inter({subsets: ["latin"]})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
})
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
})
const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
})

export const fonts = {
  Roboto: roboto,
  Inter: inter,
  "Open Sans": openSans,
  "Noto Sans": notoSans,
}

export const logoFont = cherryBombOne
export const bodyFont = inter
