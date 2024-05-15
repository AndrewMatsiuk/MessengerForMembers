export type BasicInputProps = {
  id: string
  placeholder: string
  type: string
  style?: object
  showPassword?: boolean
  disabled?: boolean
  value: string
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

export type OtpInputProps = {
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}
