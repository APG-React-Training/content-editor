import React from 'react'
import { render, screen } from "@testing-library/react"
import NewsTitleMock from './NewsTitle.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultNewsTitle } from './NewsTitle.stories'

const testID = "NewsTitle-" + Math.floor(Math.random()*90000) + 10000

describe("NewsTitle", () => {

    it("Can render NewsTitle", () => {
        render(<DefaultNewsTitle testID={ testID } { ...NewsTitleMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})