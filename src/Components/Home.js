import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Section from './Section'
import { useSelector } from 'react-redux'
import {SelectCars} from '../features/CarSlice'

function Home() {

    const cars = useSelector(SelectCars)
    // console.log(cars);

    const renderSection = cars.map(({title, discription, image, leftBtnText, rightBtnText}, index)=>{
        return(
        <Section
            key = {index} 
            title={title}
            discription = {discription}
            image = {image}
            leftBtnText = {leftBtnText}
            rightBtnText = {rightBtnText}
        />
    )})

  return (
    <Container>
        <Header/>
        {renderSection}
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`