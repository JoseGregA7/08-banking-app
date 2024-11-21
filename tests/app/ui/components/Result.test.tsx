import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import { Result } from '../../../../src/app/ui/components/Result';

describe('Pruebas en el componente Results', () => {
  test('Match snapshot', () => {
    render(<Result currentPlayer={1} draw={false} onResetGame={() => {}} winner={1} />)
    expect(document.body).toMatchSnapshot();
  })
  test('Match snapshot', () => {
    render(<Result currentPlayer={2} draw={false} onResetGame={() => {}} winner={2} />)
    expect(document.body).toMatchSnapshot();
  })
})