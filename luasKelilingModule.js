exports.luasPersegi = (sisi) => {
    return sisi * sisi
}

exports.kelilingPersegi = (sisi) => {
    return 4 * sisi
}

exports.luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar
}

exports.kelilingPersegiPanjang = (panjang, lebar) => {
    const hitung = (2*panjang) + (2*lebar)
    return hitung
}