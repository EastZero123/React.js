import Menuitem from "./Menuitem";

const Menu = (props) => {

    const filteredExpenses = props.items.filter((expense) => {
        return expense.nato === props.filterednato;
        
      });

    return (
        <>
        <Menuitem 
        country = {props.items.country}
        nato = {props.items.nato}/>
        </>
    )
}

export default Menu;