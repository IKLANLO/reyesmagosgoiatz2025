import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders Christmas animation GIF', () => {
  render(<App />)
  const gifElement = screen.getByAltText(/Christmas animation/i)
  expect(gifElement).toBeInTheDocument()
  expect(gifElement).toHaveAttribute(
    'src',
    expect.stringContaining('christmas500.gif')
  )
})

test('renders message "Vale por una comida para dos en Basuki"', () => {
  render(<App />)
  const messageElement = screen.getByText(
    /Vale por una comida para dos en Basuki/i
  )
  expect(messageElement).toBeInTheDocument()
})

test('renders emojis', () => {
  render(<App />)
  const emojisElement = screen.getByText(/😘😘😘/i)
  expect(emojisElement).toBeInTheDocument()
})
