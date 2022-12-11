import { useEffect, useState } from "react"
import MenuDetails from '../components/MenuDetails'
import MenuForm from "../components/MenuForm"

const Home = () => {
    const [menus, setMenus] = useState(null)
    useEffect(() => {
        const fetchMenus = async () => {
            const response = await fetch('/api/menus')
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
                    <MenuDetails key={menu._id} menu={menu} />
                ))}
            </div>
            <MenuForm />
        </div>
    )
}

export default Home