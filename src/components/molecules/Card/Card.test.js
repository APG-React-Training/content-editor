import React from 'react'
import { render, screen } from "@testing-library/react"
import CardMock from './Card.mock'

import Card from './Card'
import NewsTitle from '../../atoms/NewsTitle'
import NewsTitleMock
  from '../../atoms/NewsTitle/NewsTitle.mock'

const testID = "Card-" + Math.floor(Math.random()*90000) + 10000

describe("Card", () => {

    it("Can render Card", () => {
        render(<Card testID={ testID } { ...CardMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

  it("Can contains the text 'Title'", () => {
    render(<Card testID={ testID } { ...CardMock } />)
    let defaultCreated = screen.getByTestId(testID)
    expect(defaultCreated).toHaveTextContent('Achtergrond')
  })


})