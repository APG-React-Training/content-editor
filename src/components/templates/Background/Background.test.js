import React from 'react'
import { render, screen } from "@testing-library/react"
import BackgroundMock from './Background.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultBackground } from './Background.stories'

const testID = "Background-" + Math.floor(Math.random()*90000) + 10000

describe("Background", () => {

    it("Can render Background", () => {
        render(<DefaultBackground testID={ testID } { ...BackgroundMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})