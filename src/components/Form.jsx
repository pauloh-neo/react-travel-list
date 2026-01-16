import { useState } from 'react'
import formStyle from './form.module.css'
import {Minus, Plus} from 'lucide-react'

export default function Form(){
    const[quantity, setQuantity] = useState(0);
    const[item, setItems] = useState("")

    console.log(item)

    function handleQuantityPlus(){
        setQuantity((num) => num + 1)
    }
    function handleQuantityMinus(){
        setQuantity(num => Math.max(0, num - 1))
    }

    return(
        <form className={formStyle.form}>
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
                <button>Create</button>
            </div>
        </form>
    )
}