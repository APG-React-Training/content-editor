import React from 'react'
import { render, screen } from "@testing-library/react"
import ParagraphMock from './Paragraph.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultParagraph } from './Paragraph.stories'

const testID = "Paragraph-" + Math.floor(Math.random()*90000) + 10000

describe("Paragraph", () => {

    it("Can render Paragraph", () => {
        render(<DefaultParagraph testID={ testID } { ...ParagraphMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})