"use client"

import {ThemeCustomizer} from "@/features/Customizer/ThemeCustomizer"
import {Button} from "@/components/ui/button"
import {cn} from "@/lib/utils"
import {AnimatePresence, motion, useCycle} from "framer-motion"
import {PencilRulerIcon, XIcon} from "lucide-react"

export function CustomizerFloatingMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed bottom-6 right-6 z-50 flex flex-col gap-4"
      )}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
            transition={{duration: 0.2, ease: "anticipate"}}
            className="pointer-events-auto"
          >
            <ThemeCustomizer />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-end">
        <Button
          onClick={() => {
            toggleOpen()
          }}
          size="icon"
          className="pointer-events-auto h-auto w-auto rounded-full p-4"
        >
          {isOpen ? (
            <XIcon className="h-7 w-7" />
          ) : (
            <PencilRulerIcon className="h-7 w-7" />
          )}
        </Button>
      </div>
    </motion.div>
  )
}
