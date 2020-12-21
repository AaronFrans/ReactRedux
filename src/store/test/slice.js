const { createSlice } = require("@reduxjs/toolkit");

const testSlice = createSlice({
    name: 'test',
    initialState: [],
    reducers: {
        // Op een mutable manier een element toevoegen aan een array
        // dit mag in de createSlice methode, manueel mag dit niet natuurlijk
        // OPGELET dit is geen return waarde
        addOne: (state, action) => { state.push(action.payload) },
        // Dit kan ook, dus nog altijd via de immutable manier
        // addOne: (state, action) => [...state, action.payload]

        // MAAK HIER NOG EEN EXTRA REDUCER AAN
        // DEZE REDUCER ZAL HET LAATSTE ELEMENT UIT DE ARRAY VERWIJDEREN
        removeOne: (state, action) => { state.pop()},
    }
});

export const {actions, reducer} = testSlice;
export const { addOne, removeOne } = actions;