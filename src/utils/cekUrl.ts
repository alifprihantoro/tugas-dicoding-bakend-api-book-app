export default function cekUrlRegex(regex:any,txt:string) {
  const cek = regex.test(txt)
  return cek
}
