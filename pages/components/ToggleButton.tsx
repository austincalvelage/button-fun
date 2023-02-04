import { useState } from 'react'
import cn from 'classnames'
import useSound from 'use-sound'

type Props = {
  isStickyButton?: boolean
}
const ToggleButton = ({ isStickyButton }: Props): JSX.Element => {
  const [clicked, setClicked] = useState(false)

  const [down] = useSound('./sounds/click1.mp3', {
    playbackRate: 0.5,
  })

  const [up] = useSound('./sounds/click1.mp3')

  const clickDown = () => {
    down()
    isStickyButton && setClicked(!clicked)
  }
  return (
    <div className='rounded-[14px] bg-gradient-to-b from-[#EFEFEF] to-[#FFFFFF] p-1 shadow-[inset_0_1px_1px_rgb(0_0_0_/_0.02),_0_8px_16px_rgb(0_0_0_/_0.02)] select-none'>
      <button
        onMouseDown={clickDown}
        onMouseUp={() => up()}
        className={cn(
          'group relative flex h-[72px] w-[72px] items-center justify-center rounded-[10px] bg-gradient-to-b from-[#FFFFFF] to-[#ECECEC] text-sm font-semibold transition',
          'before:absolute before:rounded-[6px] before:bg-[#FFFFFF] before:transition-[inset]',
          'after:absolute after:bg-gradient-to-b after:from-[#EAEAEA] after:to-[#F8F8F8] after:transition-[inset]',
          {
            'shadow-[0px_-1px_1px_rgb(0_0_0_/_0.02),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.2),_0px_1px_2px_1px_rgb(0_0_0_/_0.2)] before:inset-1 after:inset-1 after:rounded-[6px] after:opacity-60':
              !clicked,
            'shadow-[0px_0px_0px_0.5px_rgb(0_0_0_/_0.015),_0px_1px_2px_rgb(0_0_0_/_0.2)] before:inset-0.5 before:rounded-[8px] after:inset-[1px] after:rounded-[9px] after:opacity-100':
              clicked,
          },
          {
            'active:!shadow-[0px_0px_0px_1px_rgb(220_220_220_/_1)] active:before:!inset-px active:before:!rounded-[10px] active:after:!inset-px active:after:!rounded-[10px] active:after:!opacity-100':
              isStickyButton,
            'active:!shadow-[0px_0px_0px_0.5px_rgb(0_0_0_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.2)] active:before:!inset-0.5 active:before:!rounded-[9px] active:after:!inset-0.5 active:after:!rounded-[9px] active:after:!opacity-100':
              !isStickyButton,
          }
        )}
      >
        <span
          className={cn(
            'relative z-[3] flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-b from-[#E0E0E0] to-[#FFFFFF] p-px',
            'before:relative before:h-full before:w-full before:rounded-full before:bg-[#EAEAEA]',
            'after:absolute after:h-[6px] after:w-[6px] after:rounded-full after:bg-gradient-to-b after:from-[#26b793] after:via-[#50efc8] after:to-[#FFFFFF]',
            {
              'after:bg-gradient-to-b after:from-[#26b793] after:via-[#50efc8] after:to-[#FFFFFF]': clicked,
              'after:bg-gradient-to-b after:from-[#919191] after:via-[#b3b3b3] after:to-[#FFFFFF]': !clicked,
            }
          )}
        ></span>
      </button>
    </div>
  )
}

export default ToggleButton
