// for

// foreach
// map

// let x = [0, 1, 2, 3];

let x = [
  {
    nama: "ilham",
    umur: 12,
  },
  {
    nama: "asep",
    umur: 10,
  },
];

// console.log(x);

// let y = x.forEach((data) => {
//   console.log(data.nama);
//   return data.nama;
// });

let y = x.map((data) => {
  //   console.log(data.nama);
  return data.umur;
});
console.log(y);
