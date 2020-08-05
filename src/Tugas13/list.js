import React from 'react'

class Lists extends React.Component{

  constructor(props){
    super(props)
    this.state ={
     dataBuah: [{
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
     ],
     input:{
         nama:"",
         harga:"",
         berat:""
     },
    indexOfForm:-1    
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit(event) {
      let index = event.target.value
      let buah = this.state.dataBuah[index]
      this.setState({
        input:{
          nama: buah.nama,
          harga: buah.harga,
          berat: buah.berat
        },
        indexOfForm: index
      })
  }

  handleDelete(event) {
    let index = event.target.value
    let newDaftarBuah = this.state.dataBuah
    let editDaftarBuah = newDaftarBuah[this.state.indexOfForm]
    newDaftarBuah.splice(index, 1)

    if(editDaftarBuah !== undefined) {
      var newIndex = newDaftarBuah.findIndex((el) => el === editDaftarBuah)
      this.setState({dataBuah: newDaftarBuah,indexOfForm:newIndex})
    } else{
      this.setState({dataBuah: newDaftarBuah})
    }
  }

  handleChange(event){
    let input = {...this.state.input}
    input[event.target.name] = event.target.value
    this.setState({
        input
    })
  }

  handleSubmit(event){
    event.preventDefault()

    let input = this.state.input
    if(input['nama'].replace(/\s/g, '') !== "" && input['harga'].toString().replace(/\s/g,'') !== "" && input['berat'].toString().replace(/\s/g,'')!== "") {
        let newDaftarBuah = this.state.dataBuah
        let index = this.state.indexOfForm
        console.log(index)
        if (index === -1) {
            newDaftarBuah = [...newDaftarBuah, input]
        } else {
            newDaftarBuah[index] = input
        }
        this.setState({
            dataBuah: newDaftarBuah,
            input: {
                nama: "",
                harga: "",
                berat: "",
            },
            indexOfForm: -1
        })
    }
  }

  render(){
    return(
      <>
        <h1>Daftar Peserta Lomba</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.dataBuah.map((value,index)=>{
                  return(                    
                    <tr key='value'>
                      <td>{index+1}</td>
                      <td>{value.nama}</td>
                      <td> {value.harga} </td>
                      <td> {value.berat/1000} Kg </td>
                      <td>
                          <button onClick={this.handleEdit} value={index}>Edit</button>
                          <button onClick={this.handleDelete} value={index}>Hapus</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Data Buah</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Masukkan Nama Buah :  </label>       
          <input type="text" name="nama" value={this.state.input.nama} onChange={this.handleChange} /><br></br>
          <label>Masukkan Harga Buah : </label>
          <input type="text" name="harga" value={this.state.input.harga}onChange={this.handleChange} /><br></br>
          <label>Masukkan Berat Buah :  </label>
          <input type="text" name="berat" value={this.state.input.berat} onChange={this.handleChange} /><br></br>
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default Lists