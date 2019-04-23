const firstChar = ['A', 'E', 'O']

const gibberish = [
  "toy", "r g", "irb", "kwa", "o s",
  "fim", "p w", "osh", "flu", "a r",
  "vup", "d t", "imb", "tha", "i l",
  "cav", "s g", "ulp", "cho", "u n",
  "zit", "z z", "eft", "qui", "e h",
  "kon", "l m", "ork", "gry", "o t",
  "huv", "x j", "erl", "tru", "a b",
  "fud", "w c", "oll", "wro", "i s",
]

const pick = (a) => a[Math.floor(Math.random() * a.length)]

module.exports = {
  produceGibberish: (n) => {
    let output = pick(firstChar)
    for (i in [...Array(n).keys()]) {
      for (j in [...Array(10).keys()]) {
        output += pick(gibberish)
      }
      if (i != n - 1) {
        output += " o"
      }
    }
    output += "."
    return output
  }
}
