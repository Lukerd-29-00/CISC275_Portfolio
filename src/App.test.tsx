import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {CheckersBoard} from "./Checkers/components/CheckersBoard"
describe('CheckersBoard', () => {
  beforeEach(() => {
    render(<CheckersBoard/>)
  })
  it('there should be 64 squares', () => {
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(64);
  })

  it("there should be 24 pieces", () => {
    const pieces = screen.getAllByRole
  })
})


