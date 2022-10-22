import { createContext, ReactNode } from "react"

interface AppProviderProps {
    children: ReactNode
}

const AppContext = createContext({})

const AppProvider = ({children}: AppProviderProps) => {
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider