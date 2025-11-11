import React from 'react'

export default function SectionDivider({ variant = 'top' }) {
  const common = 'pointer-events-none w-full h-24 md:h-32 lg:h-40 text-indigo-300/30'
  return (
    <svg
      className={common}
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      {variant === 'top' ? (
        <path
          fill="currentColor"
          d="M0,64L80,90.7C160,117,320,171,480,202.7C640,235,800,245,960,208C1120,171,1280,85,1360,42.7L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          opacity="0.6"
        />
      ) : (
        <path
          fill="currentColor"
          d="M0,288L80,261.3C160,235,320,181,480,149.3C640,117,800,107,960,144C1120,181,1280,267,1360,309.3L1440,352L1440,352L1360,352C1280,352,1120,352,960,352C800,352,640,352,480,352C320,352,160,352,80,352L0,352Z"
          opacity="0.6"
        />
      )}
    </svg>
  )
}
