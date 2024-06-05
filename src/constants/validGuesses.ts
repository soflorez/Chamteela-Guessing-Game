import { CONFIG } from './config'

export const VALIDGUESSES = [
"'awáal",
"'á$wut",
'lóoviq',
"hilá'i",
"pa'ásh",
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
