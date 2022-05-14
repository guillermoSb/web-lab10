import { render } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'
import App from '../components/App'

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
  const { getByRole, getAllByRole } = render(<App />)
  const button = getByRole('button', { name: /1/i })
  expect(button).toBeEnabled() // The button should be enabled
  await user.click(button) // Click the button
  const displayedNumber = getByRole('math') // Get the number displayed
  expect(displayedNumber).toHaveTextContent('1') // The display should have a 1
})
