import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { type ReactElement } from 'react'

export interface ISelectAtom {
  wrapperClass: string
  placeholder: string
  label: string
  id: string
  options: Array<{ name: string, value: string }>
  control: any
}

export default function SelectAtom ({ id, label, placeholder, options, wrapperClass, control }: ISelectAtom): ReactElement {
  return (
    <div className={'grid w-full items-center gap-1.5 ' + wrapperClass}>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  {
                    options.map(({ name, value }) => {
                      return (<SelectItem value={name} key={name}>{value}</SelectItem>)
                    })
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
