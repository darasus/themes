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
      title="Agent 327: Operation Barbershop"
      src="https://customer-yo4f815njdmvai2k.cloudflarestream.com/ea1af7d33c39aebe181b82409944a280/manifest/video.m3u8"
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
