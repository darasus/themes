"use client"

import React from "react"
import {MediaOutlet, MediaPlayButton, MediaPlayer} from "@vidstack/react"
import {Play} from "lucide-react"

export default function Player() {
  return (
    <MediaPlayer
      autoplay
      muted
      loop
      title="Payla introduction video"
      src="https://customer-yo4f815njdmvai2k.cloudflarestream.com/3bbdc4b01a7e87f90db1e338b804f64e/manifest/video.m3u8"
    >
      <div className="absolute left-0 right-0 top-0 bottom-0 hidden paused:flex items-center justify-center z-10">
        <MediaPlayButton>
          <div slot="play">
            <Play className="w-7 h-7" />
          </div>
        </MediaPlayButton>
      </div>
      <MediaOutlet />
    </MediaPlayer>
  )
}
