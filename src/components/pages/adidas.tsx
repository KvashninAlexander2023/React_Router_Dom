import React from 'react';
import adidasModel1 from"./../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp"
import adidasModel2 from"./../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp"
import adidasModel3 from"./../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp"
import { Link, Route, Routes } from 'react-router-dom';
import { Model } from './model';

export type AdidasItem= {
    model: string;
    id: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr:AdidasItem[] = [
    {
        model: 'ADIDAS ADIFOM TRXN',
        id:"1",
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        model: 'ADIDAS ADIFOM SUPER',
        id:"2",
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        model: 'ADIDAS SUPER SUPERSKI',
        id:"3",
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]



export const Adidas = () => {
    return (
        <div>
           <h2> ADIDAS</h2>
            <div style={{display:"flex", justifyContent:"center"}}>
                {
                    adidasArr.map((m, index) => (
                        <Link to={`/adidas/${m.id}`} key={m.id}>
                        <img 
                        src={m.picture} 
                        alt={m.model}
                        style={{width:"200px", marginRight:"10px"}}/>
                        </Link>
                    ))
                }
            </div>
            <p>
                What is Lorem Ipsum? ADIDAS
    
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    );
};

