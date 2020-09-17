import React from 'react';
import { isInterfaceDeclaration } from 'typescript';

interface HeaderPropos {
    title: string; //title? (obrigatório)
}

const Header: React.FC<HeaderPropos> = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
        </header>
    );
}

export default Header;