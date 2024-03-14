import React from 'react'
import { render, screen } from "@testing-library/react"
import CardMock from './Card.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultCard } from './Card.stories'

const testID = "Card-" + Math.floor(Math.random()*90000) + 10000

describe("Card", () => {

    it("Can render Card", () => {
        render(<DefaultCard testID={ testID } { ...CardMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})