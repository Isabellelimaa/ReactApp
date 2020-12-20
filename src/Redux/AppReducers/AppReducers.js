//types
const Types = {
  LISTA_CADASTRO: "app/LISTA_CADASTRO",
};

//Reducers
const INITIAL_STATE = {
  listaCadastro: [],
};

export const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LISTA_CADASTRO:
      return {
        ...state,
        listaCadastro: [...state.listaCadastro, action.cadastro],
      };
    default:
      return state;
  }
};

//Actions

export const setListaCadastro = (cadastro) => {
  return async (dispatch) => {
    dispatch({
      type: Types.LISTA_CADASTRO,
      cadastro,
    });
  };
};
