import { useState } from 'react'
import cn from 'classnames'
import useSound from 'use-sound'

type Props = {
  isOn?: boolean
}

const SwitchButton = ({ isOn }: Props): JSX.Element => {
  const [switchState, setSwitchState] = useState(isOn)

  function sliderHandler(event: React.MouseEvent<HTMLElement>) {
    setSwitchState((prevState) => !prevState)
    switchState ? on() : off()
  }

  const [on] = useSound('./sounds/click1.mp3', {})

  const [off] = useSound('./sounds/click1.mp3', {
    playbackRate: 0.5,
  })

  return (
    <div className='rounded-full bg-gradient-to-b from-[#EFEFEF] to-[#FFFFFF] p-1 shadow-[inset_0_1px_1px_rgb(0_0_0_/_0.02),_0_8px_16px_rgb(0_0_0_/_0.02)]'>
      <button
        onClick={sliderHandler}
        className={cn(
          'relative flex h-[16px] w-[30px] items-center justify-center rounded-full p-px',
          // 'before:h-full before:w-1/2 before:bg-gradient-to-br before:from-[#28bf98] before:via-[#25e8b9] before:to-[#FFFFFF] before:rounded-tl-full before:rounded-bl-full',
          // 'after:h-full after:w-1/2 after:bg-gradient-to-bl after:from-[#999999] after:via-[#afafaf] after:to-[#FFFFFF] after:rounded-tr-full after:rounded-br-full'
          {
            'bg-gradient-to-b from-[#28bf98] via-[#25e8b9] to-[#FFFFFF]': switchState,
            'bg-gradient-to-b from-[#999999] via-[#afafaf] to-[#FFFFFF]': !switchState,
          }
        )}
      >
        <span
          className={cn(
            'absolute z-[3] flex h-[17px] w-[17px] items-center justify-center rounded-full bg-gradient-to-b from-[#E0E0E0] to-[#FFFFFF] p-px shadow-lg transition-transform ease-linear',
            { 'translate-x-[-7px]': switchState },
            { 'translate-x-[7px]': !switchState },
            'before:relative before:h-full before:w-full before:rounded-full before:bg-[#EAEAEA]'
          )}
        />
      </button>
    </div>
  )
}

export default SwitchButton
