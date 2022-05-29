import AddMenuForm from "./AddMenuForm";

const AddMenu = (props) => {
  const saveMenuDataHandler = (event) => {
    const menuData = {
      ...event,
      id: Math.random().toString(),
    };
    props.onAddMenuList(menuData);
  };

  return (
    <div>
      <AddMenuForm onSaveMenuData={saveMenuDataHandler} />
    </div>
  );
};

export default AddMenu;
