import { useContext, createContext } from 'react';

export const useReferencesContext = () => useContext(useReferencesContext);

const defaultValues = {};
const ReferencesContext = createContext(defaultValues);

export default ReferencesContext
