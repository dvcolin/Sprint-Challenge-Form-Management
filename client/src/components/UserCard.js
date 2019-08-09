import React, { Component } from 'react'
import styled from 'styled-components'

const UserCardContainer = styled.div`
    height: 300px;
    width: 300px;
    background: green;
`;

const UserName = styled.h2``;

const UserPassword = styled.p``


export default class UserCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <UserCardContainer>
                <UserName>{this.props.name}</UserName>
                <UserPassword>{this.props.password}</UserPassword>
            </UserCardContainer>
        )
    }
}
