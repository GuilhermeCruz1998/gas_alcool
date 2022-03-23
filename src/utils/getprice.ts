export function getPercentual(gas: number, alcohol: number) {
  return (alcohol / gas) * 100;
}

export function getPrice(gas: number, alcohol: number) {
  const price = getPercentual(gas, alcohol);
  if (price <= 70) {
    return true;
  } else {
    return false;
  }
}