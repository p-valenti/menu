import { useEffect, useState } from "react"

const Home = () => {
    const [menus, setMenus] = useState(null)
    useEffect(() => {
        const fetchMenus = async () => {
            const response = await fetch('http://localhost:4000/api/menus')
            const json = await response.json()
            if (response.ok) {
                setMenus(json)
            }
        }
        fetchMenus()
    }, [])
    return (
        <div className="home">
            <div className="menus">
                {menus && menus.map((menu) => (
                    <p key={menu.date}>{menu.date}</p>
                ))}
            </div>
        </div>
    )
}

export default Home