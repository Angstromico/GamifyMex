interface Props {
  href: string
  text: string
  classes?: string
}

const DynamicLink = ({ href, text, classes }: Props) => {
  return (
    <a
      className={`text-n-1/50 transition-colors hover:text-n-1 lg:block ${
        classes ?? classes
      }`}
      href={href}
    >
      {text}
    </a>
  )
}

export default DynamicLink
