

export const fetchRandom = (state) => async (dispatch) => {

    dispatch({ type: "view-loading" });

    const response = await fetch(`http://localhost:8080/r`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ list: state }) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    dispatch({ type: "random-result", data: json });
    dispatch({ type: "view-loaded" });
}

export const fetchRandomNumber = (state) => async (dispatch) => {

    dispatch({ type: "view-loading" });

    const response = await fetch(`http://localhost:8080/r/random`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number1: state.number1, number2: state.number2 }) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    dispatch({ type: "random-result", data: json });
    dispatch({ type: "view-loaded" });
}
