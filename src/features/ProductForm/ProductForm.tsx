"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {useForm} from "react-hook-form"
import {Button} from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
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
import {useEffect} from "react"
import {productSchema} from "@/lib/validation"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {LinkStripeAccountButton} from "./features/LinkStripeAccountButton/LinkStripeAccountButton"

interface Props {
  onUpdate: (value: string) => void
  defaultValue?: z.infer<typeof productSchema> | null
}

export function ProductForm({onUpdate, defaultValue}: Props) {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: defaultValue ?? {
      title: "",
      description: "",
      amount: "0",
      currency: "USD",
      stripeAccountId: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof productSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  const value = form.watch()

  useEffect(() => {
    onUpdate(JSON.stringify(value))
  }, [value, onUpdate])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create product page</CardTitle>
        <CardDescription>
          Fill in this form to create your product link
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                    <LinkStripeAccountButton />
                  </div>
                  <FormDescription>
                    This is public title of your product.
                  </FormDescription>
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
                  <FormDescription>
                    This is public title of your product.
                  </FormDescription>
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
                  <FormDescription>
                    This is public description of your product.
                  </FormDescription>
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
                  <FormDescription>
                    This is public price of your product.
                  </FormDescription>
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
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
