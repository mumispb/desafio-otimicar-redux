//Dependência React
import React from "react";

//Dependências da Aplicação
import Bar from "./Bar";
import Menu from "./Menu";
import Routes from "../main/Routes";

// ---------------------Fim das Dependências--------------------------//

export default props => (
    <div className="container">
        <Bar />
        <Menu />
        <Routes />
    </div>
);
