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

  it("there should be 12 red pieces", () => {
    const pieces = screen.getAllByRole("red-piece");
    expect(pieces.length).toBe(12);
  })
  it("will contain 12 black pieces", () => {
    const pieces = screen.getAllByRole("black-piece");
    expect(pieces.length).toBe(12);
  })


})


