import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { loadList, remove, add, submit } from "./ownerActions";

class OwnerList extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { loadList } = this.props; //extrai

        loadList();
    }
    render() {
        const { listData, remove } = this.props;
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th scope="col">Placa do veículo</th>
                            <th scope="col">Marca do veículo</th>
                            <th scope="col">Modelo do veículo</th>
                            <th scope="col">Cor do veículo</th>
                            <th scope="col">Deseja Editar?</th>
                            <th scope="col">Deseja Apagar?</th>
                        </tr>
                        {listData.map(res => (
                            <tr key={res._id}>
                                <td>{res.fullName}</td>
                                <td>{res.cpf}</td>
                                <td>{res.email}</td>
                                <td>{res.phone}</td>
                                <td>{res.brand}</td>
                                <td>{res.plateNumber}</td>
                                <td>{res.model}</td>
                                <td>{res.color}</td>
                                <td>
                                    <Link to={`/edit/${res._id}`}>
                                        <button
                                            value={res._id}
                                            key={res._id}
                                            className="btn btn-info m-2"
                                        >
                                            Editar
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        value={res._id}
                                        key={res._id}
                                        className="btn btn-danger m-2"
                                        onClick={() => remove(res._id)}
                                    >
                                        Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </thead>
                </table>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    // listData vira propriedade cujos valores são do
    // estado listState
    listData: store.owner.listData
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            loadList,
            remove
        },
        dispatch
    );
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OwnerList);
