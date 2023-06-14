import { Input } from '@/components/ui/input'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

export interface IInputAtom {
  type: 'text' | 'number' | 'email'
  wrapperClass: string
  placeholder: string
  label: string
  id: string
  control: any
}

export default function InputAtom ({ type, placeholder, label, id, wrapperClass, control }: IInputAtom): ReactNode {
  return (
    <FormField
      control={control}
      name={id}
      className={'grid w-full items-center gap-1.5 ' + wrapperClass}
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
  )
}
