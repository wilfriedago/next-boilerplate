import type { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import { AppStore } from '@/shared/store'

export const StoreProvider = ({ children }: PropsWithChildren) => <Provider store={AppStore}>{children}</Provider>
