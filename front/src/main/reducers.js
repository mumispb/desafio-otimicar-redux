import { combineReducers } from "redux";
import { ownerReducer } from "../components/owner/ownerReducer";

const rootReducer = combineReducers({
    owner: ownerReducer
    /* () => ({
    description: "Ler livro",
    list: [
      {
        _id: 1,
        description: "Pagar fatura do cartão",
        done: true
      },
      {
        _id: 2,
        description: "Reunião",
        done: false
      },
      {
        _id: 3,
        description: "Consulta médica",
        done: false
      }
    ]
  }) */
});

export default rootReducer;
