import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components'
import UserCard from './UserCard'

const FormHeader = styled.h1`
    color: white;
`

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #414a4c;
    width: 500px;
    height: 500px;
    margin: 0 auto;
`

const StyledField = styled(Field)`
    margin: 1rem;
`


const SubmitButton = styled.button``

const Error = styled.p`
    color: red;
`;

const SignUpForm = ({values, touched, errors, status}) => {
    const [users, setUsers] = useState([]);

    const logSomething = () => {
        console.log('HEYYYY!')
    }

    useEffect(() => {
        if(status) {
            setUsers(users => [...users, status])
        }
    }, [status])

        return (
            <div>
            <StyledForm>
                <FormHeader>Sign Up</FormHeader>
                <StyledField data-testid='field' type='text' name='username' placeholder='Enter username' />
                {touched.username && errors.username && (
                    <Error>{errors.username}</Error>
                )}
                <StyledField data-testid='field' type='password' name='password' placeholder='Enter password' />
                {touched.password && errors.password && (
                    <Error>{errors.password}</Error>
                )}
                <SubmitButton onClick={logSomething} data-testid='submitButton' type='submit'>Submit</SubmitButton>
            </StyledForm>
            {users.map((user, index) => <UserCard key={index} name={user.username} password={user.password} />)}
            </div>
        )
}


const FormikForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter a valid username'),
        password: Yup.string().min(6).required('Please enter a valid password')
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        axios
        .post('http://localhost:6000/api/register', values)
        .then(res => {
            console.log('post result', res);
            setStatus(res.data);
            resetForm();
        })
        .catch(err => {
            console.log(err.response)
        })
    }
})(SignUpForm)

export default FormikForm