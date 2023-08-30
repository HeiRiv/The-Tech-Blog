module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  get_emoji: () => {
    return `<span for="img" aria-label="laptop">💻</span>`;
  },
};
