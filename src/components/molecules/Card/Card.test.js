import React from 'react'
import { render, screen } from "@testing-library/react"
import CardMock from './Card.mock'

import Card from './Card'

const testID = "Card-" + Math.floor(Math.random()*90000) + 10000

describe("Card", () => {

    it("Can render Card", () => {
        render(<Card testID={ testID } { ...CardMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})