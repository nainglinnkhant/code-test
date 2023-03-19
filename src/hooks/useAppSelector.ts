import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../store'

// Redux doc recommends this approach to use useSelector throughout the app
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default useAppSelector
