import type { ReactNode } from 'react'
import ButtonSvg from '@components/ButtonSvg'

interface Props {
  link?: string
  text?: string
  className?: string
  px?: boolean
  white?: boolean
  children?: ReactNode
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  link,
  text,
  className,
  px,
  white,
  children,
  onClick,
}) => {
  const classes = `relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    className ? className : ''
  } ${px ? 'px-7' : 'px-3'} ${white ? 'text-n-8' : 'text-n-1'}`

  return (
    <>
      {!link && !children && (
        <button className={classes}>
          <span className='relative z-10'>{text}</span>
          <ButtonSvg />
        </button>
      )}

      {link && !children && (
        <a href={link} className={classes}>
          <span className='relative z-10'>{text}</span>
          <ButtonSvg />
        </a>
      )}
      {children && !link && (
        <button onClick={onClick} className={`${classes} mx-8 cursor-pointer`}>
          {children}
          <ButtonSvg />
        </button>
      )}
      {children && link && (
        <a href={link} className={`${classes} mx-8 cursor-pointer`}>
          {children}
          <ButtonSvg />
        </a>
      )}
    </>
  )
}

export default Button
