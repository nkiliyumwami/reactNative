import React from 'react'
import {useFormikContext} from 'formik'

import AppPicker from './AppPicker'
import ErrorMessage from './forms/ErrorMessage'



function AppFormPicker({
  items, 
  name, 
  numberOfColumns, 
  placeholder,
  PickerItemComponent, 
  width}) {
    const {errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
    <AppPicker
      items={items}
      onSelectedItem={(item)=> setFieldValue(name, item)}
      placeholder={placeholder}
      numberOfColumns={numberOfColumns}
      selectedItem={values[name]}
      PickerItemComponent={PickerItemComponent} 
      width={width}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker