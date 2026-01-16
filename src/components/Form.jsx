import formStyle from './form.module.css'
import {Minus, Plus} from 'lucide-react'

export default function Form(){
    return(
        <form className={formStyle.form}>
            <div className={formStyle.itemAmountBox}>
                <span className={formStyle.itemIcons}><Minus size={48}/></span>
                <span className={formStyle.itemAmount}>100</span>
                <span className={formStyle.itemIcons}><Plus size={48}/></span>
            </div>

            <div className={formStyle.itemInputBox}>
                <input name="item" type="text" placeholder="Your item name.."/>
                <button>Create</button>
            </div>
        </form>
    )
}