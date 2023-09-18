import {EditorProps} from "@tiptap/pm/view"
import {proseClassName} from "../constants"

export const defaultEditorProps: EditorProps = {
  attributes: {
    class: proseClassName,
  },
  handleDOMEvents: {
    keydown: (_view, event) => {
      // prevent default event listeners from firing when slash command is active
      if (["ArrowUp", "ArrowDown", "Enter"].includes(event.key)) {
        const slashCommand = document.querySelector("#slash-command")
        if (slashCommand) {
          return true
        }
      }
    },
  },
  handlePaste: (view, event) => {
    if (
      event.clipboardData &&
      event.clipboardData.files &&
      event.clipboardData.files[0]
    ) {
      event.preventDefault()
      const file = event.clipboardData.files[0]
      const pos = view.state.selection.from

      return true
    }
    return false
  },
}
