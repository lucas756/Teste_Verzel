const INITIAL_STATE = {
    name: '',
    date_entrega: '',
    date_conclusao: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'ATUALIZA_NOME': return {...state, name: action.value }
        case 'ATUALIZA_ENTREGA': return {...state,  date_entrega: action.value }
        case 'ATUALIZA_CONCLUSAO': return {...state,  date_conclusao: action.value }
        default: return state
    }
}