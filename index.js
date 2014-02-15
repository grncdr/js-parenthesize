module.exports = function parenthesize (string, delim) {
  delim = delim || '()'
  return delim[0] + string + delim[1]
}
