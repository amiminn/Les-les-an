obj = {
  nama: "ilham",
  alamat: {
    kota: "jogja",
    kecamatan: {
      desa: "trini",
      id: {
        asda: "",
      },
    },
  },
  sekolah: (lks) => {
    return lks;
  },
};

console.log(obj.alamat.kecamatan.desa);
