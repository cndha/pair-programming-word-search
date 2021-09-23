const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map(row => row.join(''));
  for (horizontal of horizontalJoin) {
    if (horizontal.includes(word)) {
      return true;
    }
  }

  let flip = [];
  for (let i = 0; i < letters[0].length; i++) {
    flip.push([]);
  }

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters[i].length; j++) {
      flip[j].push(letters[i][j]);
    }
  }

  const verticalJoin = flip.map(column => column.join(''));
  for (vertical of verticalJoin) {
    if (vertical.includes(word)) {
      return true;
    }
  }

  return false;
};

wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SEINFELD');

//   [
//     'AWCFQUAL', 'SEINFELD',
//     'YFCFQUAL', 'HMJTEVRG',
//     'WHCSYERL', 'BFRENEYB',
//     'UBTWAPAI', 'ODCAKUAS',
//     'EZKFQUAL'
//   ]

module.exports = wordSearch;