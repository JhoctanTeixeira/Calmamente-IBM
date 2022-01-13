import { createContext } from 'react';

const CalmamenteContext = createContext({
    token: null,
    setToken: () => {},
})

export default CalmamenteContext