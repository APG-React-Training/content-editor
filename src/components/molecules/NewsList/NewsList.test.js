import React from 'react'
import { render, screen } from "@testing-library/react"
import NewsListMock from './NewsList.mock'

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultNewsList } from './NewsList.stories'

const testID = "NewsList-" + Math.floor(Math.random()*90000) + 10000

describe("NewsList", () => {

    it("Can render NewsList", () => {
        render(<DefaultNewsList testID={ testID } { ...NewsListMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})