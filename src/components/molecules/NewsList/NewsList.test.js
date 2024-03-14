import React from 'react'
import { render, screen } from "@testing-library/react"
import NewsListMock from './NewsList.mock'
import NewsList  from './NewsList'

const testID = "NewsList-" + Math.floor(Math.random()*90000) + 10000

describe("NewsList", () => {

    it("Can render NewsList", () => {
        render(<NewsList testID={ testID } { ...NewsListMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})