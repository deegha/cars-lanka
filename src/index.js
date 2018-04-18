/**
 * Created by Deegha on 05/12/2018
 */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import thunkMiddleware from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"

import { rootReducer } from "./reducers/rootReducer"


// const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware))
// const persistor = persistStore(store)

ReactDOM.render(<Provider store={store}>
                    
                        <MuiThemeProvider>
                            <App />
                        </MuiThemeProvider>
     
                </Provider>, document.getElementById('root'))

registerServiceWorker()
