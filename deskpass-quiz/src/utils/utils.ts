export function RemoveAllQuotes(input: string): string {
    // This function removes double quotation marks (") from the entire string
    return (input.replace(/"/g, ''))
}
