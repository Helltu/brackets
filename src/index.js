module.exports = function check(str, bracketsConfig) {
  const pairs = new Map(bracketsConfig); 
  let brackets = [];
  for (const char of str) {
    if(pairs.get(brackets.at(-1))===char) brackets.pop();
    else brackets.push(char);
  }
  return brackets.length == 0
}
