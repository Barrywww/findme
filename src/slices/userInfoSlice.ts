/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LocationUnit } from '@localtypes/LocationUnit'

export interface userInfoState {
  username: string | null
  userId: string | null
  locationUnits: Array<LocationUnit>
}

const initialState: userInfoState = {
  username: null,
  userId: null,
  locationUnits: [],
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
    setLocationUnits: (state, action: PayloadAction<Array<LocationUnit>>) => {
      state.locationUnits = action.payload
    },
  },
})

export const { setUsername, setUserId, setLocationUnits } = userInfoSlice.actions
export default userInfoSlice.reducer
