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
     inputName:"",
     inputHarga:"",
     inputBerat:"",
     indexOfForm:-1    
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleEdit(event) {
      let index = event.target.value
      let dataBuah = this.state.dataBuah[index]
      this.setState({
        inputName: dataBuah.nama,
        inputHarga: dataBuah.harga,
        inputBerat: dataBuah.berat,
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
   let typedOfInput = event.target.name
   switch (typedOfInput) {
     case "nama":
       {
         this.setState({inputName: event.target.value})
         break
       }
       case "harga":
         {
          this.setState({inputHarga: event.target.value})
          break
         }
         case "berat":
           {
             this.setState({inputBerat: event.target.value})
             break
           }
   
     default:
       break;
   }
  }

  handleSubmit(event){
    event.preventDefault()

    let nama = this.state.inputName
    let harga = this.state.inputHarga
    let berat = this.state.inputBerat

    if(nama.replace(/\s/g, '')!== "" && harga.replace(/\s/g,'')!== "") {
      let newDaftarBuah = this.state.dataBuah
      let index = this.state.indexOfForm

      if(index === -1){
        newDaftarBuah = [...newDaftarBuah,{nama,harga,berat}]
      } else {
        newDaftarBuah[index] = {nama,harga,berat}
      }
      this.setState({
        dataBuah: newDaftarBuah,
        inputName: "",
        inputHarga: "",
        inputBerat: 0
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
          <input type="text" name="nama" value={this.state.inputName} onChange={this.handleChange} /><br></br>
          <label>Masukkan Harga Buah : </label>
          <input type="text" name="harga" value={this.state.inputHarga}onChange={this.handleChange} /><br></br>
          <label>Masukkan Berat Buah :  </label>
          <input type="text" name="berat" value={this.state.inputBerat} onChange={this.handleChange} /><br></br>
          <button>submit</button>
        </form>
      </>
    )
  }
}

export default Lists