import React from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ProviderProps } from "../types";

const queryCache = new QueryCache();

export const queryClient = new QueryClient({
    queryCache,
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            retry: 2,
        },
    },
});

/**
 * Use to provide the react-query context.
 * @param {ProviderProps} props
 * @returns {JSX.Element} QueryProvider
 * @example
 * import { QueryProvider } from "./context/theme";
 *
 * export default function App() {
 *  return (
 *      <QueryProvider>
 *          <Navigator>
 *      </QueryProvider>
 * );
 */
const QueryProvider = ({ children }: ProviderProps): JSX.Element => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryProvider;
