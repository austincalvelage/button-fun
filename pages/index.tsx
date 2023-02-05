import { NextPage } from 'next'
import { useState } from 'react'

import { ClapperBoardIcon, GitHubIcon, TwitterIcon } from '@/components/Icons'
import Button from '@/components/Button'
import SwitchButton from '@/components/SwitchButton'
import ToggleButton from '@/components/ToggleButton'
import Div100vh from 'react-div-100vh'
import { AnimatePresence, motion } from 'framer-motion'

const Home: NextPage = () => {
  const [isMaintained, setIsMaintained] = useState(true)
  return (
    <Div100vh className='flex items-center justify-center'>
      <div className='space-y-12'>
        <div className='space-y-4'>
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
            <Button isMaintained={isMaintained} leadingIcon={<ClapperBoardIcon />}>
              Add media
            </Button>
            <Button iconOnly isMaintained={isMaintained}>
              <ClapperBoardIcon />
            </Button>
          </div>
          <div>
            <ToggleButton isMaintained={isMaintained} />
          </div>
        </div>
        <div className='space-y-4'>
          <div className='flex justify-center gap-4 items-center'>
            <a
              href='https://twitter.com/austincalvelage'
              className='text-gray-400 hover:text-gray-900 transition-colors'
            >
              <TwitterIcon />
            </a>
            <a
              href='https://github.com/austincalvelage/button-fun'
              className='text-gray-400 hover:text-gray-900 transition-colors'
            >
              <GitHubIcon />
            </a>
          </div>
          <div className='bg-gray-100 rounded-lg text-center text-sm py-3 text-gray-600'>
            <p>
              Hiring?{' '}
              <a href='mailto:austin.calvelage@icloud.com' className='text-blue-500'>
                Get in Touch!
              </a>
            </p>
          </div>
        </div>
      </div>
    </Div100vh>
  )
}

export default Home
