const MenuDetails = ({menu}) => {
    return (
        <div className="menu-details">
            <h4>{menu.date}</h4>
            <p>{menu.title} - {menu.amount}</p>
            <p>{menu.createdAt}</p>
        </div> 
    )
}

export default MenuDetails;