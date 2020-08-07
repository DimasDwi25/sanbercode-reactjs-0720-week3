import React, {useContext, useState} from "react"
import {BuahContext} from "./Tugas15Context"
import axios from 'axios'

const BuahForm = () =>{
    const [inputName, setInputName]  =  useState("")
    const [inputPrice, setInputPrice] = useState("")
    const [inputWeight, setInputWeight] = useState(0)
    const [selectedId, setSelectedId]  =  useState(0)
    const [statusForm, setStatusForm]  =  useState("create")
    const [dataHargaBuah, setDataHargaBuah] = useContext(BuahContext)

    const handleDelete = (event) => {
        let idBuah = parseInt(event.target.value)
    
        let newDataHargaBuah = dataHargaBuah.filter(el => el.id != idBuah)
    
        axios.delete(`http://backendexample.sanbercloud.com/fruits/${idBuah}`)
        .then(res => {
          console.log(res)
        })
              
        setDataHargaBuah([...newDataHargaBuah])
        
      }
      
      const handleEdit = (event) =>{
        let idBuah = parseInt(event.target.value)
        let buah = dataHargaBuah.find(x=> x.id === idBuah)
        setInputName(buah.name)
        setInputPrice(buah.price)
        setInputWeight(buah.weight)
        setSelectedId(idBuah)
        setStatusForm("edit")
      }
    
      const handleNameChange = (event) => {
        setInputName(event.target.value);
      }
    
      const handlePriceChange = (event) =>{
        setInputPrice(event.target.value);
      }
    
      const handleWeightChange = (event) =>{
        setInputWeight(event.target.value);
      }

      const handleSubmit = (event) =>{
        event.preventDefault()
    
        let name = inputName
        let price = inputPrice
        let weight = inputWeight
    
        if ((name.replace(/\s/g,'') !== "") && (price.toString().replace(/\s/g,'') !== "") && (weight.toString().replace(/\s/g,'') !== "")){      
          if (statusForm === "create"){        
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, {name, price, weight})
            .then(res => {
                setDataHargaBuah([...dataHargaBuah, {id: res.data.id, name: name, price: price, weight: weight}])
            })
          } else if(statusForm === "edit"){
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${selectedId}`, {name, price, weight})
            .then(res => {
                let dataBuah = dataHargaBuah.find(el=> el.id === selectedId)
                dataBuah.name = name
                dataBuah.price = price
                dataBuah.weight = weight
                setDataHargaBuah([...dataHargaBuah])
            })
          }
          
          setStatusForm("create")
          setSelectedId(0)
          setInputName("")
          setInputPrice("")
          setInputWeight("")
        }
      }

    return(
        <>
            <div style={{textAlign: "center", fontFamily: "Times New Roman"}}>
                <h1>Tabel Harga Buah</h1>
            </div>
            <table style={{border: "1px solid", width: "600px", margin: "0 auto", fontFamily: "Times New Roman"}}>
                <thead style={{background: "#aaa"}}>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody style={{background: "coral"}}>
                    {
                    dataHargaBuah !== null && dataHargaBuah.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.weight/1000 + " kg"}</td>
                            <td>
                            <button onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            {/* Form */}
            <div>
                <h1 style={{textAlign: 'center', fontFamily: "Times New Roman"}}>Formulir</h1>
                <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
                <label style={{marginRight: "59px", fontFamily: "Times New Roman", fontWeight: "bold"}}>
                    Masukkan name buah:
                </label>          
                <input type="text" name='name' value={inputName} onChange={handleNameChange}/>
                <br />
                <label style={{marginRight: "57px", fontFamily: "Times New Roman", fontWeight: "bold"}}>
                    Masukkan harga buah:
                </label>          
                <input type="text" name='price' value={inputPrice} onChange={handlePriceChange}/>
                <br />
                <label style={{marginRight: "10px", fontFamily: "Times New Roman", fontWeight: "bold"}}>
                    Masukkan berat buah (gram):
                </label>          
                <input type="text" name='weight' value={inputWeight} onChange={handleWeightChange}/>
                <br />
                <br />
                <button>submit</button>
                </form>
            </div>
        </>
    )

}

export default BuahForm
