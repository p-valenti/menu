import { useState } from "react"

const MenuForm = () => {
    const [date, setDate] = useState('')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        // e.preventDefalt()
        const menu = {date, title, amount}
        const response = await fetch('/api/menus', {
            method: 'POST',
            body: JSON.stringify(menu),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setDate('')
            setTitle('')
            setAmount('')
            setError(null)
            console.log('new menu added', json)
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
            />
            <label>Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Amount:</label>
            <input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
            />
            <button>Add Menu</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default MenuForm;