export const throwErrorReducer = (state = '', action) => {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case 'THROW_ERROR':
      return payload.error;
    default:
      return state;
  }
}