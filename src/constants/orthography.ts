import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'á',
  'aa',
  'e',
  'é',
  'ee',
  'i',
  'í',
  'ii',
  'o',
  'ó',
  'oo,
  'u',
  'ú',
  'uu',
  "'",
  'ch',
  'h',
  'k',
  'kw',
  'l',
  'm',
  'n',
  'ng',
  'p',
  'q',
  'qw',
  'r',
  's',
  '$',
  'sh',
  't',
  'th',
  'v',
  'w',
  'x',
  'xw',
  'y',
  
  
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
