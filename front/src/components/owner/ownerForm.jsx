import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add } from "./ownerActions";

/* import { submit } from "./OwnerFormActions"; */

class OwnerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "2",
            cpf: "",
            birthDate: "1990-01-01",
            email: "",
            phone: "",
            plateNumber: "",
            brand: "",
            model: "",
            color: "",
            plateState: "66",
            manufYear: "",
            modelYear: "",
            next: false
        };
    }

    //VALIDACAO EXTRA

    /* formErrors: {
      fullName: "",
      cpf: "",
      birthDate: "",
      email: "",
      phone: ""
    },
    fullNameValid: true,
    cpfValid: true,
    birthDateValid: true,
    emailValid: true,
    phoneValid: true,
    formValid: true */

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        const { add } = this.props;

        e.preventDefault();

        const OwnerWithCar = {
            fullName: this.state.fullName,
            cpf: this.state.cpf,
            birthDate: this.state.birthDate,
            email: this.state.email,
            phone: this.state.phone,
            plateNumber: this.state.plateNumber,
            brand: this.state.brand,
            model: this.state.model,
            color: this.state.color,
            plateState: this.state.plateState,
            manufYear: this.state.manufYear,
            modelYear: this.state.modelYear
        };
        add(OwnerWithCar);
        /* axios
            .post("http://localhost:4000/api/owners", OwnerWithCar)
            .then(res => {
                window.location.href = "http://localhost:3000/list";
            }); */
    }

    nextStep(e) {
        e.preventDefault();
        this.setState({ next: true });
    }

    previousStep(e) {
        e.preventDefault();
        this.setState({ next: false });
    }

    renderOwnerForm() {
        const { ownerForm } = this.props;
        return (
            <div>
                <h1>Cadastro de responsável</h1>
                <p>{ownerForm.fullName}</p>
                <form onSubmit={this.nextStep.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="fullName">Nome completo</label>
                        <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            placeholder="Exemplo: Murilo Pereira Botelho"
                            value={this.state.fullName}
                            onChange={this.handleUserInput.bind(this)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            className="form-control .cpf-mask"
                            name="cpf"
                            placeholder="Ex.: 732.708.491-68"
                            value={this.state.cpf}
                            onChange={this.handleUserInput.bind(this)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthDate">Data de nascimento</label>
                        <input
                            type="date"
                            className="form-control"
                            name="birthDate"
                            value={this.state.birthDate}
                            onChange={this.handleUserInput.bind(this)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="exemplo@exemplo.com"
                            value={this.state.email}
                            onChange={this.handleUserInput.bind(this)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefone</label>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Exemplo: (61) 9-9265-7978"
                            value={this.state.phone}
                            onChange={this.handleUserInput.bind(this)}
                            required
                        />
                    </div>
                    <input
                        /* disabled={!this.state.formValid} */
                        type="submit"
                        className="btn btn-primary"
                        value="Próxima etapa"
                    />
                </form>
            </div>
        );
    }

    renderCarForm() {
        const { ownerForm } = this.props;
        return (
            <div>
                <h1>Cadastro de veículo</h1>
                <p>{ownerForm.plateNumber}</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="plateNumber">Número da placa</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            name="plateNumber"
                            placeholder="Exemplo: JJJ-9999"
                            value={this.state.plateNumber}
                            onChange={this.handleUserInput.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="brand">Marca</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            name="brand"
                            placeholder="Exemplo: Honda"
                            value={this.state.brand}
                            onChange={this.handleUserInput.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="model">Modelo</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            name="model"
                            placeholder="Exemplo: Civic"
                            value={this.state.model}
                            onChange={this.handleUserInput.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Cor</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            name="color"
                            placeholder="Exemplo: azul"
                            value={this.state.color}
                            onChange={this.handleUserInput.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="plateState">Estado</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            name="plateState"
                            placeholder="Exemplo: DF"
                            value={this.state.plateState}
                            onChange={this.handleUserInput.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="manufYear">Ano de fabricação</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            name="manufYear"
                            placeholder="Exemplo: 2018"
                            value={this.state.manufYear}
                            onChange={this.handleUserInput.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="modelYear">Ano do modelo</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            name="modelYear"
                            placeholder="Exemplo: DF"
                            value={this.state.modelYear}
                            onChange={this.handleUserInput.bind(this)}
                        />
                    </div>

                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Cadastrar"
                    />
                </form>
                <button
                    onClick={this.previousStep.bind(this)}
                    className="btn btn-danger m-2"
                >
                    Voltar
                </button>
            </div>
        );
    }

    render() {
        console.log(this.state.next);
        if (this.state.next === false)
            return <div>{this.renderOwnerForm()}</div>;

        return <div>{this.renderCarForm()}</div>;
    }
}

const mapStateToProps = state => ({
    ownerForm: state.owner.formData
});

const mapDispatchToProps = dispatchAction =>
    bindActionCreators(
        {
            add
        },
        dispatchAction
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OwnerForm);
