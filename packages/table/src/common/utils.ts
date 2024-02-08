export function byteLength(str: string) {
  let length = 0
  Array.from(str).forEach((c) => {
    if (c.charCodeAt(0) > 255) {
      // 字符编码大于255，说明是双字节字符
      length += 2
    } else {
      length += 1
    }
  })

  return length
}
