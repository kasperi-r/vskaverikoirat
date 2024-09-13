export function formatDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero indexed, so we add 1
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}