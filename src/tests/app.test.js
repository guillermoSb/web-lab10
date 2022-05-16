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
  const clearButton = getByRole('button', { name: /C/i })
  for (let i = 0; i < 10; i += 1) {
    const button = getByRole('button', { name: `${i}` })
    expect(button).toBeEnabled() // The button should be enabled
    await user.click(button) // Click the button
    const displayedNumber = getByRole('math') // Get the number displayed
    expect(displayedNumber).toHaveTextContent(`${i}`) // The display should have the number
    await user.click(clearButton)
  }
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
  const { getByRole } = render(<App />)
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

test('should change theme when clicking the change theme button', async () => {
  const user = userEvent.setup()
  const { getByTestId } = render(<App />)
  const button = getByTestId('theme-button')
  expect(button).toBeVisible() // The button should be visible
  expect(button).toBeEnabled() // The button should be enabled
  await user.click(button) // Click the theme button
  const calculatorContainer = getByTestId('calculator') // Get the calculator container
  expect(calculatorContainer.classList.contains('calculator--dark')).toBeTruthy() // Expect the calculator to have the dark theme
})

test('should do math operations correctly', async () => {
  const user = userEvent.setup()
  const { getByRole, getAllByRole } = render(<App />)
  const four = getByRole('button', { name: /4/i })
  const two = getByRole('button', { name: /2/i })
  const plusButton = getByRole('button', { name: '+' })
  const multButton = getByRole('button', { name: 'x' })
  const subButton = getByRole('button', { name: '-' })
  const revButton = getByRole('button', { name: '+/-' })
  const divButton = getByRole('button', { name: '/' })
  const modButton = getByRole('button', { name: '%' })
  const equalButton = getByRole('button', { name: '=' })
  const clearButton = getByRole('button', { name: 'C' })
  // Test sum
  await user.click(four)
  await user.click(plusButton)
  await user.click(four)
  await user.click(equalButton)
  let displayedNumber = getByRole('math') // Get the number displayed
  expect(displayedNumber).toHaveTextContent(8) // The display should have the number
  await user.click(clearButton)
  // Test sub
  await user.click(four)
  await user.click(subButton)
  await user.click(four)
  await user.click(equalButton)
  displayedNumber = getByRole('math') // Get the number displayed
  expect(displayedNumber).toHaveTextContent(0) // The display should have the number
  await user.click(clearButton)
  // Test div
  await user.click(four)
  await user.click(divButton)
  await user.click(two)
  await user.click(equalButton)
  displayedNumber = getByRole('math') // Get the number displayed
  expect(displayedNumber).toHaveTextContent(2) // The display should have the number
  await user.click(clearButton)
  // Test mod
  await user.click(four)
  await user.click(modButton)
  await user.click(two)
  await user.click(equalButton)
  displayedNumber = getByRole('math') // Get the number displayed
  expect(displayedNumber).toHaveTextContent(0) // The display should have the number
  await user.click(clearButton)
  // Test mult
  await user.click(four)
  await user.click(multButton)
  await user.click(two)
  await user.click(equalButton)
  displayedNumber = getByRole('math') // Get the number displayed
  expect(displayedNumber).toHaveTextContent(8) // The display should have the number
  await user.click(clearButton)
  // Test inverse
  await user.click(four)
  await user.click(revButton)
  displayedNumber = getAllByRole('math') // Get the items displayed
  expect(displayedNumber[0]).toHaveTextContent('-') // The display should have the -
  await user.click(clearButton)
})

test('should add . to display', async () => {
  const user = userEvent.setup()
  const { getByRole, getAllByRole } = render(<App />)
  const dot = getByRole('button', { name: '.' })
  await user.click(dot)
  const displayed = getAllByRole('math') // Get the items displayed
  expect(displayed[1]).toHaveTextContent('.')
})
