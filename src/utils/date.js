export const formatDate = dateStr => {
  const [year, month, day] = dateStr.split("-");
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  return `${monthNames[parseInt(month) - 1]} ${parseInt(day)} ${year}`;
};
