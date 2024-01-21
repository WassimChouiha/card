

interface CardProps {
  id: number;
  name: string;
  price: number;
  description: string
  onDelete:(id:number) => void
}



const Card: React.FC<CardProps> = ({ id,description, name, price, onDelete }) => {


  return (
    <div className="flex flex-col gap-2 border border-white rounded-lg px-3 py-2  " key={id}>
    <div><h3 className="font-bold text-lg "> {name}</h3></div>
     <div> {description}</div> 
     <div> price: {price}</div> 
     <button className="bg-red-600 font-bold hover:bg-red-700 border-none w-32  mx-auto" onClick={() => onDelete (id)}> Delete </button>
     </div>
  );
};

export default Card;