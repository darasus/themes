import {ProductForm} from "@/features/ProductForm/ProductForm"
import {parseHash} from "@/lib/hash"

interface Props {
  searchParams: {
    form: string | undefined | null
  }
}

export default function CreatePage(props: Props) {
  return (
    <ProductForm
      initialData={parseHash(props.searchParams.form)?.state.values}
    />
  )
}
