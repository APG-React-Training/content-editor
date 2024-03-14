import React from 'react'
import { render, screen } from "@testing-library/react"
import HeadingMock from './Heading.mock'
import Heading  from './Heading'

const testID = "Heading-" + Math.floor(Math.random()*90000) + 10000

describe("Heading", () => {

    it("Can render Heading", () => {
        render(<Heading testID={ testID } { ...HeadingMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})