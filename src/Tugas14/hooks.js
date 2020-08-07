import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Lists = () => {
  const [DataBuah, setDataBuah] = useState(null)
  const [InputName, setInputName] = useState("")
  const [InputHarga, setInputHarga] = useState("")
  const [InputBerat, setInputBerat] = useState("")
  const [IndexOfForm, setIndexOfForm] = useState(-1)
  const [statusForm, setStatusForm] = useState("create")
  const [ID_FRUIT, setID_FRUIT] = useState(0)

   useEffect(() => {
     if(DataBuah === null) {
       Axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
         .then(res => {
           // lakukan pengolahan data
           setDataBuah(res.data.map(el => {
             return {
               id: el.id,
               name: el.name,
               price: el.price,
               weight: el.weight
             }
           }))
         })
       console.log(DataBuah) 
     }
   },[DataBuah])

  const handleDelete = (event) => {
   let idDataBuah = parseInt(event.target.value)
   let newDaftarBuah = DataBuah.filter(el => {
     return el.id != idDataBuah
   })
    Axios.delete(`http://backendexample.sanbercloud.com/api/fruits/`,{id: idDataBuah})
      .then(res => {
        setDataBuah(res.data.map(el => {
          return {
            id: el.id,
            name: el.name,
            price: el.price,
            weight: el.weight
          }
        }))
      })

   setDataBuah ([...newDaftarBuah])

  }

  const handleEdit = (event) => {
    let idBuah = parseInt(event.target.value)
    let dataBuah = DataBuah.find(x=> x.id === idBuah)
    console.log(dataBuah)
    setInputName(dataBuah.name)
    setInputHarga(dataBuah.price)
    setInputBerat(dataBuah.weight)
  }

  const handleChange = (event) => {
     let typedOfInput = event.target.name
     switch (typedOfInput) {
       case "name": {
         setInputName(event.target.value)
         break
       }
       case "price": {
         setInputHarga(event.target.value)
         break
       }
       case "weight": {
         setInputBerat(event.target.value)
         break
       }
       default:
         break;
     }
  }

  const handleSubmit = (event) => {
   event.preventDefault()

   let name = InputName
   let price = InputHarga
   let weight = InputBerat

   if (name.replace(/\s/g, '') !== "" && price.replace(/\s/g, '') !== "") {
     if(statusForm === 'create') {
       Axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {
         name,
         price,
         weight
       })
         .then(res => {
           // lakukan pengolahan data
           setDataBuah([...DataBuah,{id:res.data.id,name:name,price:price,weight:weight}])
         })
     } else if(statusForm === 'edit') {
       Axios.put(`http://backendexample.sanbercloud.com/api/fruits/${ID_FRUIT}`,{name,price,weight})
       .then(res => {
         console.log(res)
         let dataBuah = DataBuah.find(el => el.id === ID_FRUIT)
         dataBuah.name = name
         dataBuah.price = price
         dataBuah.weight =weight
         setDataBuah([...DataBuah])
       })
     }
     setStatusForm("create")
     setID_FRUIT (0)
     setInputName("")
     setInputHarga("")
     setInputBerat("")
    }
  }
  return (
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
            DataBuah !== null && DataBuah.map((item, index) => {
              return (
                <tr key='value'>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td> {item.price} </td>
                  <td> {item.weight / 1000} Kg </td>
                  <td>
                    <button onClick={handleEdit} value={item.id}>Edit</button>
                    <button onClick={handleDelete} value={item.id}>Hapus</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      {/* Form */}
      <h1>Form Data Buah</h1>
      <form onSubmit={handleSubmit}>
        <label>Masukkan Nama Buah :  </label>
        <input type="text" name="name" value={InputName} onChange={handleChange} /><br></br>
        <label>Masukkan Harga Buah : </label>
        <input type="text" name="price" value={InputHarga} onChange={handleChange} /><br></br>
        <label>Masukkan Berat Buah :  </label>
        <input type="text" name="weight" value={InputBerat} onChange={handleChange} /><br></br>
        <button>submit</button>
      </form>
    
    </>
  )
}

export default Lists