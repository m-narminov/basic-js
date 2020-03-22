module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  let res = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {
      let trimmed = members[i].trim();
      res.push(trimmed[0].toUpperCase());
    }
  }

  return res.sort().join('');
};
