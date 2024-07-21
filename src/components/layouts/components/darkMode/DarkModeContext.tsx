import React, {createContext, useContext, useState, ReactNode} from 'react';

// Tạo kiểu cho context
interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

// Tạo context mặc định
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Tạo provider cho context
export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

// Hook để sử dụng context
export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (context === undefined) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};
