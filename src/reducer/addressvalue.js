export default function(prevState={addressValue: []}, action) {
  const { type, data } = action
  switch(type) {
    case 'changeAddressValue':
      return { addressValue: data }
    default:
      return prevState
  }
}