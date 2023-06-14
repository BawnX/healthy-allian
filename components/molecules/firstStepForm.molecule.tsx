/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import InputAtom from '@/components/atoms/input.atom'
import SelectAtom from '@/components/atoms/select.atom'
import { Button } from '@/components/ui/button'
import { useFormData } from '@/components/molecules/dietForm.context'
import { Form } from '@/components/ui/form'
import { type ReactElement } from 'react'

export interface IFirstStepFormMolecule {
  wrapperClass: string
  formStep: number
  nextFormStep: () => void
}

const formSchema = z.object({
  name: z.string()
    .min(4, { message: 'El nombre debe tener un minimo de 4 largo' })
    .max(50, { message: 'El nombre debe tener un minimo de 50 largo' }),
  email: z.string()
    .email({ message: 'El correo debe tener formato correspondiente' })
    .min(10, { message: 'El correo debe tener un minimo de 15 largo' })
    .max(100, { message: 'El correo debe tener un maximo de 100 largo' }),
  age: z.string()
    .min(1, { message: 'La edad minima es de 1 año' })
    .max(2, { message: 'La edad maxima es de 99 Años' }),
  size: z.string()
    .min(3, { message: 'El tamaño minimo es de 100 CM' })
    .max(4, { message: 'El tamaño maximo es de 250 CM' }),
  weight: z.string()
    .min(2, { message: 'El peso minimo es de 30 KG' })
    .max(3, { message: 'El peso maximo es de 250 KG' }),
  sex: z.string({ required_error: 'Por favor selecione su sexo' }),
  physical_activity: z.string({ required_error: 'Por favor selecione su nivel de actividad' })
})

export default function FirstStepFormMolecule ({ wrapperClass, formStep, nextFormStep }: IFirstStepFormMolecule): ReactElement {
  const { setFormValues } = useFormData()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      age: '',
      size: '',
      weight: ''
    }
  })

  // 2. Define a submit handler.
  function onSubmit (values: z.infer<typeof formSchema>): void {
    setFormValues(values)
    nextFormStep()
  }

  return (
    <Form {...form}>
      <form className={wrapperClass} onSubmit={form.handleSubmit(onSubmit)}>
        <InputAtom
          type="text"
          placeholder="nombre ejemplo"
          id="name" label="Nombre Completo"
          control={form.control}
          wrapperClass=''
        />

        <InputAtom
          type="email"
          placeholder="nombre@dominio.com"
          id="email"
          label="Correo"
          control={form.control}
          wrapperClass=''
        />

        <InputAtom
          type="number"
          placeholder="25"
          id="age"
          label="Edad"
          control={form.control}
          wrapperClass=''
        />

        <InputAtom
          type="number"
          placeholder="180"
          id="size"
          label="Altura en CM"
          control={form.control}
          wrapperClass=''
        />

        <InputAtom
          type="number"
          placeholder="87"
          id="weight"
          label="Peso en KG"
          control={form.control}
          wrapperClass=''
        />

        <SelectAtom
          label="Sexo"
          id="sex"
          placeholder="Selecione"
          control={form.control}
          wrapperClass=''
          options={
            [
              { name: 'male', value: 'Masculino' },
              { name: 'female', value: 'Femenino' }
            ]
          }
        />

        <SelectAtom
          label="Actividad Fisica"
          id="physical_activity"
          placeholder="Selecione"
          control={form.control}
          wrapperClass=''
          options={
            [
              { name: 'sedentary', value: 'Sedentaria' },
              { name: 'light', value: 'Ligera' },
              { name: 'moderate', value: 'Moderada' },
              { name: 'intense', value: 'Intensa' },
              { name: 'very_intense', value: 'Muy Intensa' }
            ]
          }
        />

        <span />

        <Button className="w-48" type="submit">Siguiente</Button>
      </form>
    </Form>
  )
}
