import { useState } from "react"
import { useMenusContext } from "../hooks/useMenusContext"
import { useAuthContext } from "../hooks/useAuthContext"

const MenuForm = () => {
    const { dispatch } = useMenusContext()
    const { user } = useAuthContext()
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user) {
            setError('You must be logged in')
            return
        }
        const menu = {date, title, amount}
        const response = await fetch('/api/menus', {
            method: 'POST',
            body: JSON.stringify(menu),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setDate('')
            setTitle('')
            setAmount('')
            setError(null)
            setEmptyFields([])
            console.log('new menu added', json)
            dispatch({type: 'CREATE_MENU', payload: json})
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Menu</h3>
            <label>Date:</label>
            <input
                type="text"
                onChange={(e) => setDate(e.target.value)}
                value={date}
                className={emptyFields.includes('date') ? 'error' : ''}
            />
            <label>Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Amount:</label>
            <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                className={emptyFields.includes('amount') ? 'error' : ''}
            />
            <button>Add Menu</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default MenuForm