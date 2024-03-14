import React from 'react'
import { render, screen } from "@testing-library/react"
import TagsMock from './Tags.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultTags } from './Tags.stories'

const testID = "Tags-" + Math.floor(Math.random()*90000) + 10000

describe("Tags", () => {

    it("Can render Tags", () => {
        render(<DefaultTags testID={ testID } { ...TagsMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})