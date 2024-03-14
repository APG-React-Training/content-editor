import React from 'react'
import { render, screen } from "@testing-library/react"
import BackgroundMock from './Background.mock'

import Background  from './Background'

const testID = "Background-" + Math.floor(Math.random()*90000) + 10000

describe("Background", () => {

    it("Can render Background", () => {
        render(<Background testID={ testID } { ...BackgroundMock } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})