import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import Card from './Card'

describe('<Card />', () => {
    it('should trigger its `onClick` prop when clicked', () => {
        const onClick = sinon.spy()
        const wrapper = shallow(
            <Card card="😁" feedback="hidden" index={0} onClick={onClick} />
        )

        wrapper.simulate('click')
        expect(onClick).to.have.been.calledWith(0)
    })
})