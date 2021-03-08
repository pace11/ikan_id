export const currency = (props) => {
  const rp = Number(props)
  return Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(rp)
}
