import React, { useState } from 'react';
import Card from './Card';


export interface CardData {
  id: number;
  name: string;
  price: number;
  description: string
}
interface CardProps {
  title: string;
  setState: React.Dispatch<React.SetStateAction<CardData[]>>;
  state: CardData[];

}
const CardsShower: React.FC<CardProps> = ({ title, setState, state }) => {
  
  const [name,setName]=useState ('')

  const [description,setDescription]=useState ('')

  const [price,setPrice]=useState ('')

  const reset= () => {
    setName('')
    setDescription('')
    setPrice('')
  }

  const addCard = () => {
    if(name==='' ||price==='' || description==='') return
    const newCard: CardData = {
      id: state.length + 1,
      description ,
      price:parseInt(price,10)|| 0 ,
      name
    };

    setState((prevCards) => [...prevCards, newCard]);
    reset()
  };

  const deleteOne=(id:number) => {
    setState((prevCards) => prevCards.filter(p => p.id !== id))
  }
  const deleteAll =() => {   
    setState([]);
  }

  return (
    <div>

      <h2 className='text-3xl my-3'>{title}</h2>
      <div className='flex flex-col  content-center items-center my-5'>
      <input className='w-full my-1 px-2 py-1 rounded-sm' type="text" value={name} placeholder='name' onChange={(e) => {setName(e.target.value)}}/>
      <input className='w-full my-1 px-2 py-1 rounded-sm' type="text" value={description} placeholder='description' onChange={(e) => {setDescription(e.target.value)}}/>
      <input className='w-full my-1 px-2 py-1 rounded-sm' type="number" value={price} placeholder='price' onChange={(e) => {setPrice(e.target.value)}}/>

      
      <div className='flex gap-2 my-3 '>
      <button className='bg-green-600 font-bold hover:bg-green-700 border-none' onClick={addCard}>Add Card</button>
      <button className='bg-red-700 font-bold hover:bg-red-900 border-none' onClick={deleteAll }> Delete All</button>
      </div>
      </div>
      <div className='flex flex-col gap-4 '>
        {state.map(({ description, id, price, name }) => (
          <Card id={id} description={description} price={price} name={name} onDelete={deleteOne} />

        ))}

      </div>

    </div>

  );
};

export default CardsShower;