export function getPrice(gas: number, alcool: number) {
  if (gas * 0.7 <= alcool) {
    return true
  }
  else {
    return false
  }
}


