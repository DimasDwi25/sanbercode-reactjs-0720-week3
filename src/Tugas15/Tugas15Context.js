import React, { useEffect, useState, createContext } from "react";
import axios from 'axios'

export const BuahContext = createContext();

export const BuahProvider = props => {
    const [dataHargaBuah, setDataHargaBuah] =  useState(null)

    useEffect( () => {
        if (dataHargaBuah === null){
          axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
          .then(res => {
            setDataHargaBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight}} ))
          })
        }
      }, [dataHargaBuah])

  return (
    <BuahContext.Provider value={[dataHargaBuah, setDataHargaBuah]}>
      {props.children}
    </BuahContext.Provider>
  );
};


