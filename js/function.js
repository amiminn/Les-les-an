// default
function kali(a, b) {
  return a * b;
}

// anonimus function
let bagi = function (a, b) {
  return a / b;
};

// console.log(bagi(4, 2));

// arrow funtion
let tambah = (a, b) => {
  return a + b;
};

// console.log(tambah(4, 2));
// console.log(kali(2, 5));

// arrow minimalis
let kurang = (a, b) => a - b;

// console.log(kurang(5, 2));

// with param
function alamat(name = "semarang") {
  //   name = "bandung";
  //   console.log(name);
  return name;
}

console.log(alamat("surabaya"));

// sync
