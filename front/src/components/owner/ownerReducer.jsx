const initialState = {
    listData: [],
    formData: {
        fullName: "tdasdasd",
        cpf: "",
        birthDate: "1990-01-01",
        email: "",
        phone: "",
        plateNumber: "56",
        brand: "6",
        model: "",
        color: "",
        plateState: "",
        manufYear: "",
        modelYear: ""
    }
};

export const ownerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LIST_LOADED":
            return {
                ...state,
                listData: action.payload.data
            };
        case "LIST_LOADED_ID":
            return {
                ...state,
                formData: action.payload.data
            };
        case "FORM_CLEAR":
            return {
                ...state,
                formData: {}
            };
        case "LIST_UPDATED":
            return {
                ...state,
                formData: {}
            };
        default:
            return state;
    }
};
