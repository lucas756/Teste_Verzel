export const nomeOnChange = function(event) {
    return {
        type: 'ATUALIZA_NOME',
        value: event.target.value
    }
}
export const entregaOnChange = function(event) {
    return {
        type: 'ATUALIZA_ENTREGA',
        value: event.target.value
    }
}
export const conclusaoOnChange = function(event) {
    return {
        type: 'ATUALIZA_CONCLUSAO',
        value: event.target.value
    }
}