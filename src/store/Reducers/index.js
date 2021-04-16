import { combineReducers } from 'redux'
import tarefaReducer from './tarefaReducer';

const reducers = combineReducers({
    fomTask: tarefaReducer
});

export default reducers;