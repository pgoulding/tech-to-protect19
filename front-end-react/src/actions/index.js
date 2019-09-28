export const signIn = user => ({
  type: 'SIGN_IN',
  payload: {
    ...user
  }
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const throwError = error => ({
  type: 'THROW_ERROR',
  payload: {
    error
  }
});

export const isLoading = isLoading => ({
  type: 'IS_LOADING',
  payload: {
    isLoading
  }
});
