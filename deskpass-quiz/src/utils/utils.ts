export function QuoteStrip(input: string): string {
    // This function removes double quotation marks (") from the entire string
    return (input.replace(/"/g, ''))
}
