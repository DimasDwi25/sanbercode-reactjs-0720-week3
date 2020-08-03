import React from 'react';
import './DaftarBuah.css';


let dataHargaBuah = [{
    nama: "Semangka",
    harga: 10000,
    berat: 1000
  },
  {
    nama: "Anggur",
    harga: 40000,
    berat: 500
  },
  {
    nama: "Strawberry",
    harga: 30000,
    berat: 400
  },
  {
    nama: "Jeruk",
    harga: 30000,
    berat: 1000
  },
  {
    nama: "Mangga",
    harga: 30000,
    berat: 500
  }
]

class TabelDaftarBuah extends React.Component {
  render() {
    return (
      <>
        <h1>Tabel Harga Buah</h1>
        <table border="1px solid">
            <tr>
                <th>Nama</th>
                <th>Harga</th>
                <th>Berat</th>
            </tr>
        </table>
        {dataHargaBuah.map(x=> {
          return (
            <div class="DaftarBuah">
                <table border="1px solid">
                    <tr>
                        <td> {x.nama} </td>
                        <td> {x.harga} </td>
                        <td> {x.berat/1000} Kg</td>
                    </tr>
                </table>
            </div>
          )
        })}
      </>
    )
  }
}

export default TabelDaftarBuah;


