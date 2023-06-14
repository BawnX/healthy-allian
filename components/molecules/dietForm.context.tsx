'use client'
import { useState, createContext, useContext, type ReactElement } from 'react'

export const FormContext = createContext({})

export default function DietFormProvider ({ children }: any): ReactElement {
  const [data, setData] = useState({})

  const setFormValues = (values: any): void => {
    setData((prevValues) => ({
      ...prevValues,
      ...values
    }))
  }

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormData = (): any => useContext(FormContext)
