import {generateHTML} from "@tiptap/html"
import {defaultExtensions} from "./extensions/defaultExtensions"
import {JSONContent} from "@tiptap/core"

export function renderToHTML(json: JSONContent) {
  return generateHTML(json, [...defaultExtensions])
}
