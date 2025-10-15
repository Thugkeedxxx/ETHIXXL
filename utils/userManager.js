const bannedUsers = new Set();

function banUser(id) {
  bannedUsers.add(id);
}

function unbanUser(id) {
  bannedUsers.delete(id);
}

function isBanned(id) {
  return bannedUsers.has(id);
}

module.exports = { banUser, unbanUser, isBanned };
