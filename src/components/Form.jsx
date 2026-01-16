import { useState } from 'react'
import formStyle from './form.module.css'
import {Minus, Plus} from 'lucide-react'


export default function Form({itemsList, setItemsList, done}){
    const[quantity, setQuantity] = useState(0);
    const[item, setItems] = useState("")
    // const[itemsList, setItemsList] = useState([]); 

    console.log(itemsList)

    function handleQuantityPlus(){
        setQuantity((num) => num + 1)
    }
    function handleQuantityMinus(){
        setQuantity(num => Math.max(0, num - 1))
    }

    function handleCreate(e){

        if(!item || quantity == 0) return

        e.preventDefault()
        setItemsList(prev => [
            ...prev, {
                id: crypto.randomUUID(),
                name: item, quantity, done: false}
        ])

        setItems("")
        setQuantity(0)
    }

    

    return(
        <form className={formStyle.form} onSubmit={handleCreate}>
            <div className={formStyle.itemAmountBox}>
                <span onClick={quantity === 0 ? null : handleQuantityMinus} role='button'  style={{ opacity: quantity === 0 ? 0.4 : 1 }} className={formStyle.itemIcons}><Minus size={48}/></span>
                <span className={formStyle.itemAmount}>{quantity}</span>
                <span onClick={handleQuantityPlus} role='button' className={formStyle.itemIcons}><Plus size={48}/></span>
            </div>

            <div className={formStyle.itemInputBox}>
                <input
                    name="item"
                    type="text" placeholder="e.g: battery.."
                    maxLength={14}
                    value={item}
                    onChange={(e) => setItems(e.target.value)}
                    />
                <button 
                    type='submit'
                    disabled={!item || quantity == 0}
                    style={{ opacity: quantity === 0 ? 0.4 : 1 }}>Create</button>
            </div>
        </form>
    )
}