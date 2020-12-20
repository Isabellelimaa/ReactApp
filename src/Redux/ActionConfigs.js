export const handleApiSuccess = (response, type, dispatch) => {
  dispatch({
    type,
    payload: { isLoading: false, response, error: null },
  });
};

export const handleApiError = (error, type, dispatch) => {
  dispatch({
    type,
    payload: { isLoading: false, response: null, error: error.data },
  });
};

export const handleApi = (isLoading, type, dispatch) => {
  dispatch({
    type,
    payload: { isLoading: isLoading, response: null, error: null },
  });
};

export const handleNetworkError = (type, dispatch) => {
  dispatch({
    type,
    error: null,
  });
};
