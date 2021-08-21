import { createAction, createReducer, on } from "@ngrx/store";

export const flightReducer = createReducer({
        flights: [{
            flightName: "Air India",
            flightDestination: "Mumbai"
        }, {
            flightName: "Sahara",
            flightDestination: "Delhi"
        }] 
    },
    on(createAction("Clear Flight Data"), (state: any) => {
        debugger;
        state = {
            flights: []
        };
        return state
    }),
    on(createAction("Add Flight Data"), (state: any) => {
        return {
            flights: [{
                flightName: "Air India",
                flightDestination: "Mumbai"
            }, {
                flightName: "Sahara",
                flightDestination: "Delhi"
            }, {
                flightName: "Air Sahara",
                flightDestination: "Banglore"
            }] 
        }
    })
)