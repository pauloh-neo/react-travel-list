import listStyle from './list.module.css'
import {Trash, Check} from 'lucide-react'

export function List(){

    const arr = Array.from({ length: 5 }, (_, i) => i + 1)
    console.log(arr)

    return(
        <ul className={listStyle}>
            {arr.map((num) => (
                <span key={num}>
                    <li>battery</li>
                    <div>
                        <Check size={32}/>
                        <Trash size={32}/>
                    </div>
                </span>
            ))}
        </ul>
    )
}