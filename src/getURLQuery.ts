export function getURLQuery(paramName: string): string {
  return (new URL(window.location.href)).searchParams.get(paramName);
}