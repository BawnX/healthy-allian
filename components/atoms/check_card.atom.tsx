import { type ReactElement } from 'react'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'

export interface IButtonCardAtom {
  id: string
  control: any
  options: Array<{
    label: string
    icon: ReactElement
  }>
}

export default function ButtonCardAtom ({ id, control, options }: IButtonCardAtom): ReactElement {
  return (
    options.map(({ label, icon }, index) => {
      return (
        <FormField
          control={control}
          name={id}
          key={index}
          render={({ field }) => (
            <FormItem
              className="w-28 h-28 bg-secondary rounded-lg border-solid border-2 border-gray-100 hover:bg-gray-200 cursor-pointer"
            >
              <FormControl>
                <Checkbox
                  checked={field.value?.includes(index)}
                  onCheckedChange={(checked) => {
                    checked
                      ? field.onChange([...field.value, index])
                      : field.onChange(
                        field.value?.filter(
                          (value) => value !== index
                        )
                      )
                  }}
                  className="ml-2 mt-2"
                >
                </Checkbox>
              </FormControl>

              <FormLabel>
                <div className="text-center text-base">{label}</div>
                <div className="flex justify-center my-2">
                  {icon}
                </div>
              </FormLabel>
            </FormItem>
          )}
        />
      )
    })
  )
}
