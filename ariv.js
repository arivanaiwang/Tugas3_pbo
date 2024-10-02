class kapal {
    constructor(nama, jenis, kecepatan, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kecepatan = kecepatan;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `nama kapal : ${this.nama} <br>
                jenis : ${this.jenis} <br>
                kecepatan : ${this.kecepatan} knot <br>
                kapasitas : ${this.kapasitas} orang <br>
                panjang : ${this.panjang} meter <br>
                lebar : ${this.lebar} meter`;
    }
}

class kapalPesiar extends kapal {
    constructor(nama, kecepatan, kapasitas, panjang, lebar, fasilitas) {
        super(nama, 'Kapal Pesiar', kecepatan, kapasitas, panjang, lebar);
        this.fasilitas = fasilitas;
    }

    infoFasilitas() {
        return `Kapal ini memiliki fasilitas: ${this.fasilitas.join(', ')}`;
    }
}

class kapalPerang extends kapal {
    constructor(nama, kecepatan, kapasitas, panjang, lebar, persenjataan) {
        super(nama, 'Kapal Perang', kecepatan, kapasitas, panjang, lebar);
        this.persenjataan = persenjataan;
    }

    infoPersenjataan() {
        return `Kapal ini memiliki persenjataan: ${this.persenjataan.join(', ')}`;
    }
}

const titanic = new kapalPesiar("Titanic", 30, 3600, 260, 26, ["Kolam Renang", "Bioskop", "Biliard", "Restoran"]);
const kriBungTomo = new kapalPerang("KRI Bung Tomo (357)", 28, 90, 90, 11, ["Meriam", "Rudal Exocet MM40", "Sistem Peluncur Roket", "RIM-7 Sea Sparrow"]);

document.getElementById("ariv1").innerHTML = `
<h2>Informasi Kapal Pesiar</h2>
<p>${titanic.infoKapal()}</p>
<p>${titanic.infoFasilitas()}</p>
<h2>Informasi Kapal Perang</h2>
<p>${kriBungTomo.infoKapal()}</p>
<p>${kriBungTomo.infoPersenjataan()}</p>`;
