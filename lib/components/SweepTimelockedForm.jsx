import React from 'react'

import { Button } from 'lib/components/Button'
import { FormLockedOverlay } from 'lib/components/FormLockedOverlay'

export const SweepTimelockedForm = (props) => {
  const {
    disabled,
    handleSubmit,
  } = props

  return <>
    <form
      onSubmit={handleSubmit}
    >
      {disabled && <FormLockedOverlay
        topMarginClass='mt-0'
        title='Sweep Timelocked Funds'
      >
        <>
          You have no scheduled funds to sweep.
        </>
      </FormLockedOverlay>}
      
      <div
        className='font-bold mb-2 py-2 text-lg sm:text-xl lg:text-2xl'
      >
        Sweep Timelocked Funds:
      </div>
      
      <div
        className='my-5'
      >
        <Button
          color='green'
        >
          Sweep
        </Button>
      </div>
    </form>
  </>
}