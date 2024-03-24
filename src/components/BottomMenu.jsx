const BottomMenu = () => (
  <svg
    width='100%'
    height='94'
    viewBox='0 0 375 94'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='sm:rounded-b-2xl'
  >
    <g filter='url(#filter0_d_1022_517)'>
      <path
        d='M121.48 10C65.8011 10 -8 10.5039 -8 10.5039V94H382V10.5039C382 10.5039 307.129 10 248.88 10C220.8 10 214.04 46.2151 187 46.2151C159.96 46.2151 151.12 9.99999 121.48 10Z'
        fill='white'
      />
    </g>
    <defs>
      <filter
        id='filter0_d_1022_517'
        x='-16'
        y='0'
        width='406'
        height='100'
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy='-2' />
        <feGaussianBlur stdDeviation='4' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.0352941 0 0 0 0 0 0 0 0 0 0.364706 0 0 0 0.06 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_1022_517'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect1_dropShadow_1022_517'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default BottomMenu;