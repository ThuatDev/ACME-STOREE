import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'
import type { TypedUseSelectorHook } from 'react-redux'
import exp from 'constants'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
