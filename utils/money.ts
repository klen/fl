export function money(copper: number) {
  const gold = Math.floor(copper / 100)
  const silver = Math.floor((copper % 100) / 10)
  const copperRemainder = copper % 10
  return {
    gold,
    silver,
    copper: copperRemainder,
  }
}

export function moneyText(copperCoins: number) {
  const { gold, silver, copper } = money(copperCoins)
  let res = ""
  if (gold > 0) res += `${gold}з `
  if (silver > 0) res += `${silver}с `
  if (copper > 0) res += `${copper}м`
  return res.trim()
}
