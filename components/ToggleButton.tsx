import { useState } from 'react'
import cn from 'classnames'
import useSound from 'use-sound'

type Props = {
  isMaintained?: boolean
}
const ToggleButton = ({ isMaintained }: Props) => {
  const [clicked, setClicked] = useState(false)

  const [down] = useSound('./sounds/click1.mp3', {
    playbackRate: 0.5,
  })

  const [up] = useSound('./sounds/click1.mp3')

  const clickDown = () => {
    down()
    isMaintained && setClicked(!clicked)
  }
  return (
    <div className='inline-block rounded-[14px] bg-gradient-to-b from-[#EFEFEF] to-[#FFFFFF] p-1 shadow-[inset_0_1px_1px_rgb(0_0_0_/_0.02),_0_8px_16px_rgb(0_0_0_/_0.02)] select-none'>
      <button
        onMouseDown={clickDown}
        onMouseUp={() => up()}
        className={cn(
          'group relative flex h-[72px] w-[72px] items-center justify-center rounded-[10px] bg-gradient-to-b from-[#FFFFFF] to-[#ECECEC] text-sm font-semibold transition appearance-none',
          'before:absolute before:rounded-[6px] before:bg-[#FFFFFF] before:transition-[inset]',
          'after:absolute after:bg-gradient-to-b after:from-[#EAEAEA] after:to-[#F8F8F8] after:transition-[inset]',
          {
            'shadow-[0px_-1px_1px_rgb(0_0_0_/_0.02),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.2),_0px_1px_2px_1px_rgb(0_0_0_/_0.2)] before:inset-1 after:inset-1 after:rounded-[6px] after:opacity-60':
              !clicked || !isMaintained,
            'shadow-[0px_0px_0px_0.5px_rgb(0_0_0_/_0.015),_0px_1px_2px_rgb(0_0_0_/_0.25)] before:inset-0.5 before:rounded-[8px] after:inset-0.5 after:rounded-[9px] after:opacity-100':
              clicked && isMaintained,
          },
          {
            'active:!shadow-[0px_0px_0px_1px_rgb(220_220_220_/_1)] active:before:!inset-px active:before:!rounded-[10px] active:after:!inset-px active:after:!rounded-[10px] active:after:!opacity-100':
              isMaintained,
            'active:!shadow-[0px_0px_0px_0.5px_rgb(0_0_0_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.2)] active:before:!inset-0.5 active:before:!rounded-[9px] active:after:!inset-0.5 active:after:!rounded-[9px] active:after:!opacity-100':
              !isMaintained,
          }
        )}
      >
        <span
          className={cn(
            'absolute z-[3] inset-2 rounded-full bg-[#FFFFFF] flex items-center justify-center',
            'before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-[#F1F1F1] before:to-[#EEEEEE] before:shadow-[0px_1px_0px_rgb(255_255_255_/_0.8),_inset_0px_1px_0px_rgb(0_0_0_/_0.05),_inset_0px_0px_10px_rgb(0_0_0_/_0.025)]',
            'after:absolute after:h-2 after:w-2 after:rounded-full after:transition',
            'active:after:!bg-[#8EEECF] active:after:!saturate-150 active:after:!shadow-[0px_1px_0px_rgb(255_255_255_/_0.6),_inset_0px_1px_1px_rgb(0_0_0_/_0.1),_inset_0px_1px_0px_rgb(0_0_0_/_0.08),_inset_0px_0px_10px_rgb(0_0_0_/_0.025),_0px_0px_4px_rgb(110_229_187_/_0.75)]',
            {
              'after:bg-[#8EEECF] after:saturate-150 after:shadow-[0px_1px_0px_rgb(255_255_255_/_0.6),_inset_0px_1px_1px_rgb(0_0_0_/_0.1),_inset_0px_1px_0px_rgb(0_0_0_/_0.08),_inset_0px_0px_10px_rgb(0_0_0_/_0.025),_0px_0px_4px_rgb(110_229_187_/_0.75)]':
                clicked,
              'after:bg-[#EEEEEE] after:shadow-[0px_1px_0px_rgb(255_255_255_/_0.6),_inset_0px_3px_3px_rgb(0_0_0_/_0.25),_inset_0px_1px_0px_rgb(0_0_0_/_0.08),_inset_0px_0px_10px_rgb(0_0_0_/_0.025)]':
                !clicked,
            }
          )}
        ></span>
      </button>
    </div>
  )
}

export default ToggleButton
