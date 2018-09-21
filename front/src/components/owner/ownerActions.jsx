import axios from "axios";

const URL = "http://localhost:4000/api/owners";

export const loadList = () => {
    const res = axios.get(`${URL}`);
    return {
        type: "LIST_LOADED",
        payload: res
    };
};

/* export const loadList = () => {
    const res = axios.get(`${URL}`);
    return dispatchAction => {
        dispatchAction([
            {
                type: "LIST_OK",
                payload: res
            }
        ]);
    };
}; */

export const remove = id => {
    return dispatchAction => {
        axios
            .delete(`${URL}/${id}`)
            .then(resp =>
                dispatchAction({
                    type: "LIST_DELETED"
                })
            )
            .then(resp => dispatchAction(loadList()));
    };
};

export const loadListId = id => {
    return dispatchAction => {
        axios.get(`${URL}/${id}`).then(resp =>
            dispatchAction({
                type: "LIST_LOADED_ID",
                payload: resp
            })
        );
    };
};

/* export const submit = e => {
    return dispatch => {
        axios
            .post(URL, { description })
            .then(resp =>
                dispatch({
                    type: "LIST_CLEAR",
                    payload: resp.data
                })
            )
            .then(resp => dispatch(search()));
    };
}; */

export const add = OwnerWithCar => {
    return dispatch => {
        axios
            .post(URL, OwnerWithCar)
            .then(resp =>
                dispatch({
                    type: "FORM_CLEAR",
                    payload: resp.data
                })
            )
            .then(resp => (window.location.href = "http://localhost:3000/list"))
            .then(resp => dispatch(loadList()));
    };
};

export const update = (OwnerWithCar, id) => {
    return dispatch => {
        axios
            .put(URL + "/" + id, OwnerWithCar)
            .then(resp =>
                dispatch({
                    type: "FORM_CLEAR",
                    payload: resp.data
                })
            )
            .then(resp => (window.location.href = "http://localhost:3000/list"))
            .then(resp => dispatch(loadList()));
    };
};
