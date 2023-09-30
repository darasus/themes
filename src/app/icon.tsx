import {logoFont} from "@/lib/fonts"
import {ImageResponse} from "next/server"

export const runtime = "edge"

export const size = {
  width: 50,
  height: 50,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 30,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          ...logoFont.style,
        }}
      >
        T
      </div>
    ),
    {
      ...size,
    }
  )
}
