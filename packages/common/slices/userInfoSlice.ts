/* eslint-disable no-param-reassign */
import { Device, LocationUnit, People } from '@p/common/types/LocationUnit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface IUserInfoState {
  username: string | null
  userId: string | null
  people: Array<People>
  devices: Array<Device>
}

const initialState: IUserInfoState = {
  username: null,
  userId: null,
  people: [],
  devices: [],
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },
    setDevices: (state, action: PayloadAction<Array<Device>>) => {
      state.devices = action.payload
    },
    setPeople: (state, action: PayloadAction<Array<People>>) => {
      state.people = action.payload
    },
  },
})

export const { setUsername, setUserId, setDevices, setPeople } =
  userInfoSlice.actions
export default userInfoSlice.reducer
