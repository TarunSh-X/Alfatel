type FlagProps = {
  /** ISO 3166-1 alpha-2 country code, e.g. "us", "gb", "hk" */
  code: string
  /** Country name, used for the alt text */
  name?: string
  className?: string
}

/**
 * Renders a real country flag image (via flagcdn.com) instead of an emoji,
 * because flag emojis do not render on Windows / many Chrome installs.
 */
export function Flag({ code, name, className }: FlagProps) {
  const cc = code.toLowerCase()
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w80/${cc}.png`}
      srcSet={`https://flagcdn.com/w160/${cc}.png 2x`}
      width={24}
      height={18}
      loading="lazy"
      alt={name ? `${name} flag` : ""}
      aria-hidden={name ? undefined : true}
      className={className}
    />
  )
}
