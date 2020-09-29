import React from 'react'
import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'
import { shallow } from 'enzyme'

let wrapped

beforeEach(() => {
  wrapped = shallow(<App />)
})
// React only correctly functions inside the browser, but Jest runs in the command line
// To solve this create-react-app installs the JSDOM dependency for testing
it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1)
})
