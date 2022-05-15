import { render } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'
import App from '../components/App.jsx'

describe('bottom buttons', () => {
  test('should have a github button', () => {
    const { getByRole } = render(<App />)
    const button = getByRole('button', { name: 'Github Logo' })
    expect(button).toBeVisible() // The button always has to be visible
    expect(button).toBeEnabled() // The button always has to be enabledr
    expect(button).toHaveAttribute('href', 'https://github.com/guillermoSb/web-lab10') // The button should have an href
  })

  test('should have an audio button', () => {
    const { getByTestId } = render(<App />)
    const button = getByTestId('audio-button')
    expect(button).toBeVisible() // The button should be visible
    expect(button).toBeEnabled() // The button should be enabled
  })

  test('should have a theme button', () => {
    const { getByTestId } = render(<App />)
    const button = getByTestId('theme-button')
    expect(button).toBeVisible() // The button should be visible
    expect(button).toBeEnabled() // The button should be enabled
  })
})

test('should add number to display when clicked', async () => {
  const user = userEvent.setup()
  const { getByRole } = render(<App />)
  const button = getByRole('button', { name: /1/i })
  expect(button).toBeEnabled() // The button should be enabled
  await user.click(button) // Click the button
  const displayedNumber = getByRole('math') // Get the number displayed
  expect(displayedNumber).toHaveTextContent('1') // The display should have a 1
})

test('should have maximum 9 digits on display', async () => {
  const user = userEvent.setup()
  const { getAllByRole, getByRole } = render(<App />)
  const button = getByRole('button', { name: /1/i })
  expect(button).toBeEnabled() // The button should be enabled
  for (let i = 0; i < 20; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await user.click(button) // Click the button
  }
  // Get all the digits
  const displayedDigits = getAllByRole('math')
  expect(displayedDigits.length).toBe(9)
})

test('should display error if the number is greater than 999999999', async () => {
  const user = userEvent.setup()
  const { getAllByRole, getByRole } = render(<App />)
  const button = getByRole('button', { name: /9/i })
  const plusButton = getByRole('button', { name: '+' })
  const equalButton = getByRole('button', { name: '=' })
  expect(button).toBeEnabled() // The button should be enabled
  expect(plusButton).toBeEnabled() // The plus button should be enabled
  for (let i = 0; i < 9; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await user.click(button) // Click the button
  }
  await user.click(plusButton) // Click the plus button
  await user.click(button) // Add this
  await user.click(equalButton)
  const alertError = getByRole('alert')
  expect(alertError).toBeInTheDocument() // The alert error should display
  expect(alertError.innerHTML).toBe('ERROR') // The inner HTML displayed should be ERROR
})
