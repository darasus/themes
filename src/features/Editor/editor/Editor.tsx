"use client"

import {useEffect, useState} from "react"
import {useEditor, EditorContent} from "@tiptap/react"
import {defaultEditorProps} from "./props"
import {defaultExtensions} from "./extensions/defaultExtensions"
import {EditorBubbleMenu} from "./components/EditorBubbleMenu/EditorBubbleMenu"
import {textFont} from "../fonts"
import {Card} from "@/components/ui/card"

export function Editor({
  value,
  onChange,
}: {
  value?: string
  onChange?: (value: string) => void
}) {
  const [hydrated, setHydrated] = useState(false)

  const editor = useEditor({
    extensions: defaultExtensions,
    editorProps: {
      ...defaultEditorProps,
    },
    onUpdate: ({editor}) => {
      onChange?.(JSON.stringify(editor.getJSON()) || "")
    },
  })

  useEffect(() => {
    if (editor && value && !hydrated) {
      editor.commands.setContent(JSON.parse(value))
      setHydrated(true)
    }
  }, [editor, value, hydrated])

  return (
    <Card className="w-full">
      <div className="flex flex-col gap-4">
        {editor && (
          <div className="sticky top-0 left-0 right-0 z-10 border-b bg-background rounded-t-lg">
            <EditorBubbleMenu editor={editor} />
          </div>
        )}
        <div
          onClick={() => {
            editor?.chain().focus().run()
          }}
          className={`relative min-h-[200px] w-full px-4 ${textFont.className}`}
        >
          <EditorContent editor={editor} />
        </div>
      </div>
    </Card>
  )
}
