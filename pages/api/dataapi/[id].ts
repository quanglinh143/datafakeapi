import {bookdata} from "../../../data/bookdata";

export default function handler(req:any,res:any){
    
    if (req.method === 'GET') {
         
        const {id}=req.query
        const book =bookdata.find((item)=>{
              return item.id===parseInt(id)
        })

        const newBook=[];
        newBook.push(book)
        res.status(200).json(newBook) 
    }


  
}