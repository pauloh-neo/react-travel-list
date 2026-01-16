import listStyle from './list.module.css'
import {Trash, Check, X} from 'lucide-react'

export function List({itemsList, setItemsList}){


    function handleDelete(id){
        setItemsList((item) => item.filter((item) => item.id != id))
    }

    function handleDone(id){
        setItemsList((prev) => prev.map((item) => item.id == id? {...item, done: !item.done}: item))
    }

    return(
        <ul className={listStyle.list}>
            {itemsList.map((item) => (
                <li className={listStyle.box} key={item.id} >
                    <span className={`${listStyle.itemName} ${item.done ? listStyle.done : ''}`}>
                        {item.name}
                    </span>

                    <div className={listStyle.icons}>
                        <button
                            type="button"
                            onClick={() => handleDone(item.id)}
                            >

                            {item.done?
                                <X size={32} /> : <Check size={32} /> 
                            }
                            
                        </button>

                        <button
                            type="button"
                            onClick={() => handleDelete(item.id)}
                            >
                            <Trash size={32} />
                        </button>
                    </div>
            </li>
            ))}
        </ul>
    )
}