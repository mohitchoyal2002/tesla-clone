import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: [
        {
            title:'Model S',
            discription:'Order Online for Touchless Dilevery',
            image : 'model-s.jpg',
            leftBtnText : 'Custom Order',
            rightBtnText : 'Existing Inventory'
        },
        {
            title:'Model Y',
            discription:'Order Online for Touchless Dilevery',
            image : 'model-y.jpg',
            leftBtnText : 'Custom Order',
            rightBtnText : 'Existing Inventory'
        },
        {
            title:'Model 3',
            discription:'Order Online for Touchless Dilevery',
            image : 'model-3.jpg',
            leftBtnText : 'Custom Order',
            rightBtnText : 'Existing Inventory'
        },
        {
            title:'Model X',
            discription:'Order Online for Touchless Dilevery',
            image : 'model-x.jpg',
            leftBtnText : 'Custom Order',
            rightBtnText : 'Existing Inventory'
        },
        {
            title:'Lowest Cost Solar Panels in America',
            discription:'Money-back guarantee',
            image : 'solar-panel.jpg',
            leftBtnText : 'Order Now',
            rightBtnText : 'Learn More'
        },
        {
            title:'Solar for New Roofs',
            discription:'Solar Roof Costs Less Than a New Roof',
            image : 'solar-roof.jpg',
            leftBtnText : 'Order Now',
            rightBtnText : 'Learn More'
        },
        {
            title:'Accessories',
            discription:'',
            image : 'accessories.jpg',
            leftBtnText : 'Shop Now',
            rightBtnText : ''
        }
    ]
}

const CarSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {

  }
});

// export const {} = CarSlice.actions

export const SelectCars = state=>state.car.cars

export default CarSlice.reducer