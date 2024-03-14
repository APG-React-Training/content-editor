import React from 'react'
import { render, screen } from "@testing-library/react"
import TagsMock from './Tags.mock'
import Tags from './Tags'

const testID = "Tags-" + Math.floor(Math.random()*90000) + 10000

describe("Tags", () => {

    it("Can render Tags", () => {
        render(<Tags testID={ testID } { ...TagsMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})