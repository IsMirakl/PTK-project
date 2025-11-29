export const formatShortName = (fullName: string): string => {
  if (!fullName) return '';
  
  const parts = fullName.split(' ');
  if (parts.length === 0) return '';
  
  const lastName = parts[0];
  const initials = parts
    .slice(1)
    .map(name => name.charAt(0) + '.')
    .join(' ');
  
  return `${lastName} ${initials}`.trim();
};