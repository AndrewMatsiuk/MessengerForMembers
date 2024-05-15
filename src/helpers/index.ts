export const getAbbreviation = (name: string): string => {
  const splitName = name.split(' ')
  if (splitName.length === 1) {
    return (name[0] + name[1]).toUpperCase()
  }
  return (splitName[0][0] + splitName[1][0]).toUpperCase()
}

export const getRandomHexColor = (): string => {
  const letters = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
