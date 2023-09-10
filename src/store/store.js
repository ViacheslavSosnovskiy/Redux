import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { reducer } from './reducer'
import { pokemonApi } from './pokemon/pokemon'
import { contactsApi } from './contscts/contactsSlice'

const persistConfig = {
    key: 'root',
    storage,
    blackList: ['counter']
  }

const customMiddleware = (state) => {
  return (next) => {
    return (action) => {
      if(typeof action === 'function') {
        action(state.dispatch)
        return
      }
      return next(action)
    }
  }
}

const persistedReducer = persistReducer(persistConfig, reducer)
 
//  у нас редакс тулкит поэтому мы используем через ключ редюсер 
export const store = configureStore({ 
  reducer: persistedReducer,
  // middleware: [customMiddleware],
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    contactsApi.middleware,
  ],

})

export const perisitor = persistStore(store)
