import { useMenusContext} from '../hooks/useMenusContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { format } from 'date-fns' 

const MenuDetails = ({menu}) => {
    const { dispatch } = useMenusContext()
    const { user } = useAuthContext()
    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('/api/menus/' + menu._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'DELETE_MENU', payload: json})
        }
    }
    return (
        <div className="menu-details">
            <h4>{format(new Date(menu.date), 'yyyy/MM/dd')}</h4>
            <p>{menu.title} - {menu.amount}</p>
            <p>{menu.createdAt}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div> 
    )
}

export default MenuDetails;