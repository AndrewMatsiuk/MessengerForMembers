export const PasswordShow = ({ showLine }: { showLine: boolean }) => (
  <svg width={24} height={25} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 5.1c-4.296 0-7.783 2.413-10.406 7.135l-.202.364.202.364C4.217 17.686 7.704 20.1 12 20.1s7.782-2.413 10.405-7.136l.203-.364-.203-.364C19.782 7.513 16.295 5.099 12 5.099Zm.24 1.502c3.435.085 6.267 1.995 8.54 5.816l.106.181-.106.181c-2.326 3.91-5.237 5.82-8.78 5.82l-.241-.004c-3.434-.085-6.267-1.995-8.54-5.816l-.106-.18.106-.182c2.326-3.91 5.238-5.819 8.78-5.819l.241.003Z'
      fill='#464646'
    />
    <path d='M12 16.35a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z' fill='#464646' />
    {showLine && (
      <path
        d='M2.376 6.183a.75.75 0 0 1 .965-.252l.075.044 18 12a.75.75 0 0 1-.756 1.292l-.076-.044-18-12a.75.75 0 0 1-.208-1.04Z'
        fill='#464646'
      />
    )}
  </svg>
)
