"use client"

import {Button} from "@/components/ui/button"
import {Logo} from "@/features/Logo/Logo"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-6 h-screen px-4">
        <div className="flex items-center border p-2 rounded-full bg-muted dark:bg-muted/20 px-4 text-sm gap-1">
          Powered by <Stripe />
        </div>
        <Logo />
        <span className="text-xl text-center">
          Simplest and quickest way to sell online. It literally takes{" "}
          <span className="underline">seconds</span>.
          <span className="text-gray-600">*</span>
        </span>
        <Button size="lg" asChild>
          <Link href={"/create"}>Start selling</Link>
        </Button>
        <span className="text-gray-600">
          * if you already have Stripe account.
        </span>
      </main>
    </>
  )
}

function Stripe() {
  const ratio = 0.6
  const height = 35 * ratio
  const width = 84 * ratio

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 84 35`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-[1px]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M83.547 17.94C83.547 12.055 80.697 7.40999 75.247 7.40999C69.777 7.40999 66.465 12.054 66.465 17.893C66.465 24.813 70.373 28.307 75.982 28.307C78.718 28.307 80.787 27.687 82.35 26.813V22.215C80.787 22.997 78.994 23.479 76.718 23.479C74.488 23.479 72.511 22.697 72.258 19.985H83.498C83.498 19.685 83.544 18.491 83.544 17.939L83.547 17.94ZM72.2 15.757C72.2 13.159 73.786 12.079 75.235 12.079C76.637 12.079 78.132 13.159 78.132 15.757H72.2ZM57.603 7.41199C55.35 7.41199 53.903 8.46899 53.097 9.20499L52.797 7.77999H47.73V34.585L53.477 33.367L53.5 26.861C54.328 27.459 55.546 28.309 57.57 28.309C61.685 28.309 65.432 25.009 65.432 17.711C65.409 11.044 61.616 7.41099 57.592 7.41099L57.603 7.41199ZM56.223 23.252C54.867 23.252 54.063 22.769 53.51 22.172L53.487 13.642C54.085 12.975 54.912 12.516 56.223 12.516C58.315 12.516 59.763 14.861 59.763 17.872C59.763 20.952 58.338 23.252 56.223 23.252ZM39.823 6.05599L45.593 4.81599V0.149994L39.823 1.36799V6.05599ZM39.823 7.80299H45.593V27.918H39.823V7.80299ZM33.638 9.50299L33.27 7.80299H28.304V27.92H34.051V14.286C35.407 12.516 37.706 12.838 38.419 13.091V7.804C37.683 7.528 34.994 7.02199 33.637 9.50399L33.638 9.50299ZM22.144 2.80299L16.535 3.99999L16.512 22.414C16.512 25.816 19.064 28.322 22.466 28.322C24.351 28.322 25.73 27.977 26.489 27.562V22.895C25.753 23.195 22.121 24.251 22.121 20.849V12.7H26.489V7.80299H22.119L22.144 2.80299ZM6.604 13.631C6.604 12.734 7.34 12.391 8.558 12.391C10.5462 12.4333 12.4973 12.9365 14.258 13.861V8.46999C12.35 7.70999 10.465 7.41299 8.558 7.41299C3.891 7.41299 0.788002 9.85 0.788002 13.919C0.788002 20.264 9.524 19.252 9.524 21.989C9.524 23.046 8.604 23.391 7.317 23.391C5.409 23.391 2.972 22.609 1.041 21.551V27.021C3.179 27.941 5.341 28.321 7.317 28.321C12.099 28.321 15.387 25.953 15.387 21.838C15.364 14.988 6.604 16.206 6.604 13.631Z"
        fill="currentColor"
      />
    </svg>
  )
}
