import {create} from "zustand"
import {StateStorage, createJSONStorage, persist} from "zustand/middleware"
import {z} from "zod"
import {productSchema} from "./validation"
import {decode, encode} from "./hash"

interface State {
  values: z.infer<typeof productSchema>
  update: (values: Partial<z.infer<typeof productSchema>>) => void
}

const getUrlSearch = () => {
  return window.location.search.slice(1)
}

const persistentStorage: StateStorage = {
  getItem: (key): string => {
    const searchParams = new URLSearchParams(getUrlSearch())
    const storedValue = searchParams.get(key)
    return typeof storedValue === "string"
      ? JSON.parse(decode(storedValue) || "{}")
      : null
  },
  setItem: (key, newValue): void => {
    const searchParams = new URLSearchParams(getUrlSearch())
    searchParams.set(key, encode(newValue))
    window.history.replaceState(null, "", `?${searchParams.toString()}`)
  },
  removeItem: (key): void => {
    const searchParams = new URLSearchParams(getUrlSearch())
    searchParams.delete(key)
    window.location.search = searchParams.toString()
  },
}

export const useProductFormStore = create<State>()(
  persist(
    (set) => ({
      values: {
        amount: "",
        currency: "USD",
        stripeAccountId: "",
        description: "",
        title: "",
        imageSrc: "",
      },
      update: (values) => {
        return set((state) => ({values: {...state.values, ...values}}))
      },
    }),
    {
      name: "form",
      storage: createJSONStorage(() => persistentStorage),
    }
  )
)
