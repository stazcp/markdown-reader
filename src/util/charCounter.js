//regex
const header = /(^ {0,3}#{1,6} +)+/
const boldItalian = /(\*{3}?)(?!\s)(?:[\w\d@#$%\^\(\)\!\[\]\-\/\\]+)(?!\s)(\*{3})/gi
const bold = /(\*{2}?)(?!\s)(?:[\w\d@#$%\^\(\)\!\[\]\-\/\\]+)(?!\s)(\*{2})/gi
const italic = /(\*{1}?)(?!\s)(?:[\w\d@#$%\^\(\)\!\[\]\-\/\\]+)(?!\s)(\*{1})/gi

export const countMarkdownChars = (str) => {
  const lines = str.split('\n')
  let count = 0
  lines.forEach((line) => {
    count += findHeaders(line)
    count += findStars(line)
  })
  return count
}

const findHeaders = (line) => {
  let count = 0
  const h = line.match(header)
  if (h) count += h[0].match(/#/g).length
  return count
}

const findStars = (line) => {
  let count = 0
  const bi = line.match(boldItalian)
  const b = line.match(bold)
  const it = line.match(italic)
  if (bi) {
    count += countStars(bi)
  } else if (b) {
    count += countStars(b)
  } else if (it) {
    count += countStars(it)
  }
  return count
}

const countStars = (arr) => {
  let count = 0
  arr.forEach((x) => {
    count += x.match(/\*/g).length
  })
  return count
}
