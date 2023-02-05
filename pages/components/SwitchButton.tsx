import { useState } from 'react'
import cn from 'classnames'
import useSound from 'use-sound'
import { motion } from 'framer-motion'

const SwitchButton = () => {
  const [isOn, setIsOn] = useState(false)

  const [on] = useSound('./sounds/click1.mp3', {})

  const [off] = useSound('./sounds/click1.mp3', {
    playbackRate: 0.5,
  })

  return (
    <div className='rounded-full bg-gradient-to-b from-[#EFEFEF] to-[#FFFFFF] p-1 shadow-[inset_0_1px_1px_rgb(0_0_0_/_0.02),_0_8px_16px_rgb(0_0_0_/_0.02)] select-none'>
      <button
        onClick={() => setIsOn(!isOn)}
        className={cn('relative flex h-[20px] w-[36px] items-center rounded-full transition-shadow', {
          'bg-gradient-to-b from-[#8EEECF] via-[#25e8b9] to-[#FFFFFF] justify-end shadow-[inset_0px_0px_8px_rgb(87_181_148_/_0.8),_inset_0px_1px_1px_0.5px_rgb(87_181_148_/_0.3),_0px_0px_4px_rgb(110_229_187_/_0.75)]':
            isOn,
          'bg-gradient-to-b from-[#AAAAAA] via-[#afafaf] to-[#FFFFFF] shadow-[inset_0px_0px_8px_rgb(0_0_0_/_0.2),_inset_0px_1px_1px_0.5px_rgb(0_0_0_/_0.1)] justify-start':
            !isOn,
        })}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          className={cn(
            'block -m-px absolute h-[21px] w-[21px] rounded-full bg-gradient-to-b from-[#FFFFFF] to-[#ECECEC] transition-shadow',
            'before:rounded-full before:absolute before:inset-0.5 before:bg-gradient-to-b before:from-[#E1E1E1] before:to-[#FBFBFB]',
            {
              'shadow-[inset_0px_-1px_3px_rgb(0_0_0_/_0.25),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.075),_0px_2px_4px_rgb(0_0_0_/_0.1)]':
                !isOn,
              'shadow-[inset_0px_-1px_3px_rgb(0_0_0_/_0.25),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.075),_0px_2px_4px_rgb(0_0_0_/_0.1),_inset_1px_0px_2px_-1px_rgb(110_229_187/_0.98)]':
                isOn,
            }
          )}
        />
      </button>
    </div>
  )
}

export default SwitchButton

// {momentary - pops back up after press and maintained - press it and stays in}
