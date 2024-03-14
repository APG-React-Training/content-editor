import React from 'react'
import { render, screen } from "@testing-library/react"
import ParagraphMock from './Paragraph.mock'
import Paragraph  from './Paragraph'

const testID = "Paragraph-" + Math.floor(Math.random()*90000) + 10000

describe("Paragraph", () => {

    it("Can render Paragraph", () => {
        render(<Paragraph testID={ testID } { ...ParagraphMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})