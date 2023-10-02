import {ComponentPreview} from "@/components/ComponentPreview"
import {Label} from "@/components/ui/label"

import {AccordionDemo} from "@/demos/components/AccordionDemo"
import {AlertDemo} from "@/demos/components/AlertDemo"
import {AlertDialogDemo} from "@/demos/components/AlertDialogDemo"
import {AspectRatioDemo} from "@/demos/components/AspectRatioDemo"
import {AvatarDemo} from "@/demos/components/AvatarDemo"
import {BadgeDemo} from "@/demos/components/BadgeDemo"
import {ButtonDemo} from "@/demos/components/ButtonDemo"
import {CalendarDemo} from "@/demos/components/CalendarDemo"
import {CardDemo} from "@/demos/components/CardDemo"
import {CheckboxDemo} from "@/demos/components/CheckboxDemo"
import {CollapsibleDemo} from "@/demos/components/CollapsibleDemo"
import {ComboboxDemo} from "@/demos/components/ComboboxDemo"
import {CommandDemo} from "@/demos/components/CommandDemo"
import {ContextMenuDemo} from "@/demos/components/ContextMenuDemo"
import {DataTableDemo} from "@/demos/components/DatatableDemo"
import {DatePickerDemo} from "@/demos/components/DatePicketDemo"
import {DialogDemo} from "@/demos/components/DialogDemo"
import {DropdownMenuDemo} from "@/demos/components/DropdownMenuDemo"
import {HoverCardDemo} from "@/demos/components/HoverCardDemo"
import {InputDemo} from "@/demos/components/InputDemo"
import {LabelDemo} from "@/demos/components/LabelDemo"
import {MenubarDemo} from "@/demos/components/MenubarDemo"
import {NavigationMenuDemo} from "@/demos/components/NavigationMenuDemo"
import {PopoverDemo} from "@/demos/components/PopoverDemo"
import {ProgressDemo} from "@/demos/components/ProgressDemo"
import {RadioGroupDemo} from "@/demos/components/RadioGroupDemo"
import {ScrollAreaDemo} from "@/demos/components/ScrollAreaDemo"
import {SelectDemo} from "@/demos/components/SelectDemo"
import {SeparatorDemo} from "@/demos/components/SeparatorDemo"
import {SheetDemo} from "@/demos/components/SheetDemo"
import {SkeletonDemo} from "@/demos/components/SkeletonDemo"
import {SliderDemo} from "@/demos/components/SliderDemo"
import {SwitchDemo} from "@/demos/components/SwitchDemo"
import {TableDemo} from "@/demos/components/TableDemo"
import {TabsDemo} from "@/demos/components/TabsDemo"
import {TextareaDemo} from "@/demos/components/TextareaDemo"
import {ToastDemo} from "@/demos/components/ToastDemo"
import {ToggleDemo} from "@/demos/components/ToggleDemo"
import {TooltipDemo} from "@/demos/components/TooltipDemo"

const items = [
  {name: "Accordion", demo: AccordionDemo},
  {name: "Alert", demo: AlertDemo},
  {name: "Alert dialog", demo: AlertDialogDemo},
  {name: "Aspect ratio", demo: AspectRatioDemo},
  {name: "Avatar", demo: AvatarDemo},
  {name: "Badge", demo: BadgeDemo},
  {name: "Button", demo: ButtonDemo},
  {name: "Calendar", demo: CalendarDemo},
  {name: "Card", demo: CardDemo},
  {name: "Checkbox", demo: CheckboxDemo},
  {name: "Collapsible", demo: CollapsibleDemo},
  {name: "Combobox", demo: ComboboxDemo},
  {name: "Command", demo: CommandDemo},
  {name: "Context menu", demo: ContextMenuDemo},
  {name: "Data table", demo: DataTableDemo},
  {name: "Date picker", demo: DatePickerDemo},
  {name: "Dialog", demo: DialogDemo},
  {name: "Dropdown menu", demo: DropdownMenuDemo},
  {name: "Hover card", demo: HoverCardDemo},
  {name: "Input", demo: InputDemo},
  {name: "Label", demo: LabelDemo},
  {name: "Menubar", demo: MenubarDemo},
  {name: "Navigation menu", demo: NavigationMenuDemo},
  {name: "Popover", demo: PopoverDemo},
  {name: "Progress", demo: ProgressDemo},
  {name: "Radio group", demo: RadioGroupDemo},
  {name: "Scroll area", demo: ScrollAreaDemo},
  {name: "Select", demo: SelectDemo},
  {name: "Separator", demo: SeparatorDemo},
  {name: "Sheet", demo: SheetDemo},
  {name: "Skeleton", demo: SkeletonDemo},
  {name: "Slider", demo: SliderDemo},
  {name: "Switch", demo: SwitchDemo},
  {name: "Table", demo: TableDemo},
  {name: "Tabs", demo: TabsDemo},
  {name: "Textarea", demo: TextareaDemo},
  {name: "Toast", demo: ToastDemo},
  {name: "Toggle", demo: ToggleDemo},
  {name: "Tooltip", demo: TooltipDemo},
]

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <main className="flex grow flex-col gap-6">
        <div className="grid grid-cols-1 justify-stretch gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {items.map(({name, demo: Demo}) => (
            <div className="flex flex-col gap-2">
              <Label className="text-lg">{name}</Label>
              <ComponentPreview
                verticalCenter
                horizontalCenter
                key={name}
                className="h-full"
              >
                <div className="flex w-full max-w-md items-center justify-center">
                  <Demo />
                </div>
              </ComponentPreview>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
