import { useMenusContext} from '../hooks/useMenusContext'

const MenuDetails = ({menu}) => {
    const { dispatch } = useMenusContext()
    const handleClick = async () => {
        const response = await fetch('/api/menus/' + menu._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'DELETE_MENU', payload: json})
        }
    }
    return (
        <div className="menu-details">
            <h4>{menu.date}</h4>
            <p>{menu.title} - {menu.amount}</p>
            <p>{menu.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div> 
    )
}

export default MenuDetails;