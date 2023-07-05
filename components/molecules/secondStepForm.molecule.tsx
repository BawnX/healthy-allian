'use client'
import { type ReactElement } from 'react'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'
import { useFormData } from '@/components/molecules/dietForm.context'
// import { Button } from '@/components/ui/button'
import ButtonCardAtom from '@/components/atoms/check_card.atom'
import { Beef } from 'lucide-react'

export interface ISecondStepFormMolecule {
  wrapperClass: string
  formStep: number
  nextFormStep: () => void
  prevFormStep: () => void
}

const formSchema = z.object({
  meals: z
    .array(z.string())
    .refine((value) => value.some((item) => item), { message: 'Debes seleccionar al menos uno' })
})

const options = [
  {
    label: 'Carne Roja',
    icon: (<Beef size={32}/>)
  }
]

export default function SecondStepFormMolecule ({ prevFormStep, nextFormStep, wrapperClass }: ISecondStepFormMolecule): ReactElement {
  const { data, setFormValues } = useFormData()

  const meals = data.meals ?? []
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      meals: meals ?? []
    }
  })

  function onSubmit (values: z.infer<typeof formSchema>): void {
    setFormValues({ user: values })
    nextFormStep()
  }

  // function prevForm (values: z.infer<typeof formSchema>): void {
  //   setFormValues({ meals: values })
  //   prevFormStep()
  // }

  return (
    <Form {...form}>
      <form className={wrapperClass} onSubmit={form.handleSubmit(onSubmit)}>
        <ButtonCardAtom id="meals" control={form.control} options={options}/>
      </form>
      {/* <Button className="w-48" type="button" variant="secondary" onClick={prevForm}>volver</Button> */}
    </Form>
  )
}
