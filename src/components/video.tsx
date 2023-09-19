"use client"

import React from "react"
import {MediaOutlet, MediaPlayer} from "@vidstack/react"

export default function Player() {
  return (
    <MediaPlayer
      autoplay
      muted
      loop
      title="Agent 327: Operation Barbershop"
      src="https://customer-yo4f815njdmvai2k.cloudflarestream.com/ea1af7d33c39aebe181b82409944a280/manifest/video.m3u8"
    >
      <MediaOutlet />
    </MediaPlayer>
  )
}
