export const autosuggestStyle = {
    container: {
        color: 'black',
        position: 'relative',
        margin: 'auto',
    },
    input: {
        width: '240px',
        height: '30px',
        padding: '10px 20px',
        fontWeight: '300',
        fontSize: '16px',
        border: '1px solid #aaa',
        borderRadius: '4px',
    },
    inputOpen: {
        outline: 'none',
    },
    inputFocused: {
        borderRadius: 0,
    },
    suggestionsContainer: {
        display: 'none',
    },
    suggestionsContainerOpen: {
        display: 'block',
        position: 'absolute',
        top: '51px',
        width: '280px',
        border: '1px solid #aaa',
        backgroundColor: '#fff',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: 300,
        fontSize: '16px',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        zIndex: 2,
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    suggestion: {
        cursor: 'pointer',
        padding: '10px 20px',
    },
    suggestionHighlighted: {
        backgroundColor: '#ddd',
    },
};