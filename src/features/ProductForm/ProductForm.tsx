"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {useForm, useWatch} from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Textarea} from "@/components/ui/textarea"
import {productSchema} from "@/lib/validation"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {LinkStripeAccountButton} from "./features/LinkStripeAccountButton/LinkStripeAccountButton"
import {FileInput} from "@/components/file-input"
import {useProductFormStore} from "@/lib/useProductFormStore"
import {useEffect} from "react"
import {encode} from "@/lib/hash"
import {getBaseUrl} from "@/lib/utils"

interface Props {
  initialData?: z.infer<typeof productSchema> | undefined | null
}

export function ProductForm({initialData}: Props) {
  const {update, values: defaultValues} = useProductFormStore()
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || defaultValues,
  })

  function onSubmit(values: z.infer<typeof productSchema>) {}

  const values = useWatch({
    control: form.control,
  })

  useEffect(() => {
    update(values)
  }, [values, update])

  const url = `${getBaseUrl()}/p/${encode(
    JSON.stringify({state: {values: defaultValues}})
  )}`

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Create product page</CardTitle>
            <CardDescription>
              Fill in this form to create your product link
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Form {...form}>
              <FormField
                control={form.control}
                name="stripeAccountId"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Stripe account ID</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input {...field} disabled />
                      </FormControl>
                      <LinkStripeAccountButton
                        hash={encode(
                          JSON.stringify({state: {values: defaultValues}})
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageSrc"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>
                      Image{" "}
                      <span className="text-muted-foreground">(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <FileInput
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currency"
                render={({field}) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Preferred currency</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="USD" />
                          </FormControl>
                          <FormLabel className="font-normal">USD</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="EUR" />
                          </FormControl>
                          <FormLabel className="font-normal">EUR</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="GBP" />
                          </FormControl>
                          <FormLabel className="font-normal">GBP</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Form>
          </CardContent>
          {/* <CardFooter>
          <Button type="submit">Generate link</Button>
        </CardFooter> */}
        </Card>
      </form>
      <div className="bg-muted p-4 rounded-lg truncate">
        <a href={url} className="underline">
          {url}
        </a>
      </div>
    </div>
  )
}
