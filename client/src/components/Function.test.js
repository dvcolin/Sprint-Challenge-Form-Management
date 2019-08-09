import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import { add } from './Function'

describe('add()', () => {
    it('should return the values of two numbers', () => {
        expect(add(2,3)).toBe(5)
        expect(add(8,3)).toBe(11)
        expect(add(3,-8)).toBe(-5)
    })
})