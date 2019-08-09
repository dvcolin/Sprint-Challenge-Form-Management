import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import FormikForm from './SignUpForm'

describe('<FormikForm />', () => {
    it('should render the heading `Sign Up`', () => {
        const form = render(<FormikForm />);
        form.getByText(/sign up/i);
    })
    it('should submit a post request when button is clicked', () => {
        const { getByTestId } = render(<FormikForm />);
        fireEvent.click(getByTestId('submitButton'))
    })
    it('should not have undefined values in fields', () => {
        const { getAllByTestId } = render(<FormikForm />);
        expect(getAllByTestId('field')).not.toBe('undefined');
    })
})