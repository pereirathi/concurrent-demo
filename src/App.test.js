/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { render } from '@testing-library/react'
import { App } from './App'

test('Render App', () => {
  const { getByText } = render(
    <App />,
  )
  expect(getByText('Stella Artois')).toBeInTheDocument()
})
