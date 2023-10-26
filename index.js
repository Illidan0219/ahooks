const a = [{a: '1'}, 2]
const b = a.concat()
a[0].a = 3
console.info(b)