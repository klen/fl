export function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let imul = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    imul = (imul + Math.imul(imul ^ (imul >>> 7), 61 | imul)) ^ imul
    return ((imul ^ (imul >>> 14)) >>> 0) / 4294967296
  }
}

export function getSeed(length = 12) {
  return Math.floor(Math.random() * Math.pow(10, length))
}
