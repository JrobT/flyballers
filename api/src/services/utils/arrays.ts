export const onlyOne = (...booleans: boolean[]): boolean =>
  booleans.filter((boolean) => !!boolean).length === 1
