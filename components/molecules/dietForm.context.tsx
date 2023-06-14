'use client'
import { useState, createContext, useContext } from 'react'

export const FormContext = createContext()

export default function DietFormProvider ({ children }): ReactNode {
  const [data, setData] = useState({})

  const setFormValues = (values): void => {
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
