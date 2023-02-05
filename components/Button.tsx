import { useState } from 'react'
import cn from 'classnames'
import useSound from 'use-sound'

type Props = {
  children: React.ReactNode
  leadingIcon?: React.ReactNode
  iconOnly?: boolean
  isMaintained?: boolean
}

const Button = ({ children, leadingIcon, iconOnly, isMaintained }: Props) => {
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
          'relative h-[38px] items-center justify-center rounded-[10px] bg-gradient-to-b from-[#FFFFFF] to-[#ECECEC] px-3.5 text-sm font-semibold transition',
          'before:absolute before:rounded-[6px] before:bg-[#FFFFFF] before:transition-[inset]',
          'after:absolute after:bg-gradient-to-b after:from-[#EAEAEA] after:to-[#F8F8F8] after:transition-[inset]',
          { 'w-[38px]': iconOnly },
          {
            'shadow-[0px_-1px_1px_rgb(0_0_0_/_0.02),_0px_0px_0px_0.5px_rgb(0_0_0_/_0.02),_0px_1px_2px_rgb(0_0_0_/_0.25),_0px_1px_2px_1px_rgb(0_0_0_/_0.2)] before:inset-1 after:inset-1 after:rounded-[6px] after:opacity-60':
              !clicked || !isMaintained,
            'shadow-[0px_0px_0px_0.5px_rgb(0_0_0_/_0.015),_0px_1px_2px_rgb(0_0_0_/_0.2)] before:inset-0.5 before:rounded-[9px] after:inset-0.5 after:rounded-[9px] after:opacity-100':
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
        <span className='relative z-[1] flex items-center justify-center gap-2'>
          {leadingIcon}
          <span>{children}</span>
        </span>
      </button>
    </div>
  )
}

export default Button
