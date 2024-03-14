import React from 'react'
import { render, screen } from "@testing-library/react"
import NewsTitleMock from './NewsTitle.mock'
import NewsTitle from './NewsTitle'

const testID = "NewsTitle-" + Math.floor(Math.random()*90000) + 10000

describe("NewsTitle", () => {

    it("Can render NewsTitle", () => {
        render(<NewsTitle testID={ testID } { ...NewsTitleMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})