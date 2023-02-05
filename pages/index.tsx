import { NextPage } from 'next'
import { useState } from 'react'

import ClapperBoard from '@/pages/components/ClapperBoard'
import Button from '@/pages/components/Button'
import SwitchButton from '@/pages/components/SwitchButton'
import ToggleButton from '@/pages/components/ToggleButton'
import Div100vh from 'react-div-100vh'
import { AnimatePresence, motion } from 'framer-motion'

const Home: NextPage = () => {
  const [isMaintained, setIsMaintained] = useState(true)
  return (
    <Div100vh className='flex items-center justify-center'>
      <div className='space-y-3'>
        <div className='flex justify-between font-medium'>
          <AnimatePresence mode='popLayout' initial={false}>
            {isMaintained ? (
              <motion.h3
                key={1}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24, transition: { duration: 0.1 } }}
              >
                Maintained
              </motion.h3>
            ) : (
              <motion.h3
                key={2}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 24, transition: { duration: 0.1 } }}
              >
                Momentary
              </motion.h3>
            )}
          </AnimatePresence>
          <SwitchButton handleToggle={(value) => setIsMaintained(value)} isDefaultChecked={isMaintained} />
        </div>
        <hr />
        <div className='flex gap-3'>
          <Button isMaintained={isMaintained} leadingIcon={<ClapperBoard />}>
            Add media
          </Button>
          <Button iconOnly isMaintained={isMaintained}>
            <ClapperBoard />
          </Button>
        </div>
        <div>
          <ToggleButton isMaintained={isMaintained} />
        </div>
      </div>
    </Div100vh>
  )
}

export default Home
