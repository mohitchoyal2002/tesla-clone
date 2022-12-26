import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section
            title='Model S'
            discription='Order Online for Touchless Dilevery'
            image = 'model-s.jpg'
            leftBtnText = 'Custom Order'
            rightBtnText = 'Existing Inventory'
        />
        <Section
            title='Model Y'
            discription='Order Online for Touchless Dilevery'
            image = 'model-y.jpg'
            leftBtnText = 'Custom Order'
            rightBtnText = 'Existing Inventory'
        />
        <Section
            title='Model 3'
            discription='Order Online for Touchless Dilevery'
            image = 'model-3.jpg'
            leftBtnText = 'Custom Order'
            rightBtnText = 'Existing Inventory'
        />
        <Section
            title='Model X'
            discription='Order Online for Touchless Dilevery'
            image = 'model-x.jpg'
            leftBtnText = 'Custom Order'
            rightBtnText = 'Existing Inventory'
        />
        <Section
            title='Lowest Cost Solar Panels in America'
            discription='Money-back guarantee'
            image = 'solar-panel.jpg'
            leftBtnText = 'Order Now'
            rightBtnText = 'Learn More'
        />
        <Section
            title='Solar for New Roofs'
            discription='Solar Roof Costs Less Than a New Roof'
            image = 'solar-roof.jpg'
            leftBtnText = 'Order Now'
            rightBtnText = 'Learn More'
        />
        <Section
            title='Accessories'
            discription=''
            image = 'accessories.jpg'
            leftBtnText = 'Shop Now'
            rightBtnText = ''
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`