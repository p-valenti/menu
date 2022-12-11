import { useEffect } from "react"
import { useMenusContext } from "../hooks/useMenusContext"
import MenuDetails from '../components/MenuDetails'
import MenuForm from "../components/MenuForm"

const Home = () => {
    const {menus, dispatch} = useMenusContext()
    // const [menus, setMenus] = useState(null)
    useEffect(() => {
        const fetchMenus = async () => {
            const response = await fetch('/api/menus')
            const json = await response.json()
            if (response.ok) {
                // setMenus(json)
                dispatch({type: 'SET_MENUS', payload: json})
            }
        }
        fetchMenus()
    }, [dispatch])
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