import { Input } from '@/components/ui/input'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { type ReactElement } from 'react'

export interface IInputAtom {
  type: 'text' | 'number' | 'email'
  wrapperClass: string
  placeholder: string
  label: string
  id: string
  control: any
}

export default function InputAtom ({ type, placeholder, label, id, wrapperClass, control }: IInputAtom): ReactElement {
  return (
    <div className={'grid w-full items-center gap-1.5 ' + wrapperClass}>
      <FormField
        control={control}
        name={id}
        render={
          ({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input type={type} placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
          )
        }
      />
    </div>
  )
}
