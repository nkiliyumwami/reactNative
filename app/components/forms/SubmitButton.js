import React from 'react'
import {useFormikContext} from 'formik'

import AppButton from '../AppButton'

function SubmitButton({title}) {
    //Function to get the handleSubmit we use formik context
    const {handleSubmit} = useFormikContext()
    
  return (
    <AppButton title={title} onPress={handleSubmit} />
  )
}

export default SubmitButton