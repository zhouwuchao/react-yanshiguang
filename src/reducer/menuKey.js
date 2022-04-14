export default function(prevState={key: 'home'}, action) {
  const { type, data } = action
  switch(type) {
    case 'changeMenuKey':
      return { key: data }
    default:
      return prevState
  }
}