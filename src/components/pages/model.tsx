
import React from 'react'
import { adidasArr, AdidasItem } from './adidas'
import { useParams } from 'react-router-dom';
import { pumaArr } from './puma';


type FirmType = "adidas" | "puma";

interface Params {
  id: string;
  cross: FirmType;
}

interface Cross {
  id: string;
}

export function Model() {
  const params = useParams()
  console.log(params);

const crossList: Record<FirmType, AdidasItem[]> = {
  adidas: adidasArr,
  puma: pumaArr,
} 

const firma = params.cross as FirmType

// console.log(crossList[firma]);
const item = (crossList[firma]).find(m => m.id === params.id)

  return (
    <div style={{ textAlign: "center" }}>
      {item ? (<>
      
        <h2>{`model: ${item.model}`}</h2>
        <h4>{`collection: ${item.collection}`}</h4>
        <h3>{`price: ${item.price}`}</h3>
        <img
          src={item.picture}
          alt={item.model}
          style={{ width: "400px", margin: "50px" }}/> 
          </>
      ) : <h3>Модель отсутствует</h3>}
    </div>
  )
}

