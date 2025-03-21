function sortStringsIgnoringSpaces(strings) {
    return strings.sort((a, b) => a.replace(/\s+/g, '').localeCompare(b.replace(/\s+/g, '')));
  }
  
  module.exports = sortStringsIgnoringSpaces;
  