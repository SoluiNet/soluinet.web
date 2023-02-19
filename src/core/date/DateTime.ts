/**
 * Format the date.
 * @param date
 * @returns {string}
 */
export function formatDate(dateString: string)
{
  const date = new Date(dateString);

  const dateFormatter = new Intl.DateTimeFormat(
    'default',
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

  const timeFormatter = new Intl.DateTimeFormat(
    'default',
    {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

  return dateFormatter.format(date) + ' ' + timeFormatter.format(date);
}