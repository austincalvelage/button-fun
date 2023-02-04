import { NextPage } from 'next'
import { useState } from 'react'

import ClapperBoard from '@/pages/components/ClapperBoard'
import Button from '@/pages/components/Button'
import SwitchButton from '@/pages/components/SwitchButton'
import ToggleButton from '@/pages/components/ToggleButton'

const ButtonFun: NextPage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center bg-[#F9F9F9]'>
      <div className='space-y-2'>
        <div className='flex items-center justify-center gap-2'>
          <Button leadingIcon={<ClapperBoard />}>Add media</Button>
          <SwitchButton />
        </div>
        <div className='flex items-center justify-between'>
          <ToggleButton isStickyButton />
          <ToggleButton isStickyButton />
        </div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Button iconOnly>
              <ClapperBoard />
            </Button>
            <Button iconOnly isStickyButton>
              <ClapperBoard />
            </Button>
          </div>
          <SwitchButton isOn />
        </div>
      </div>
    </div>
  )
}

export default ButtonFun
