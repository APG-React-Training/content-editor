import React from 'react'
import { render, screen } from "@testing-library/react"
import HeadingMock from './Heading.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultHeading } from './Heading.stories'

const testID = "Heading-" + Math.floor(Math.random()*90000) + 10000

describe("Heading", () => {

    it("Can render Heading", () => {
        render(<DefaultHeading testID={ testID } { ...HeadingMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})