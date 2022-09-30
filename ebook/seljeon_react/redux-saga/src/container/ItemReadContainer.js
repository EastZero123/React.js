import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ItemRead from "../components/ItemRead"
import { fetchItem, FETCH_ITEM } from "../modules/item"

const ItemReadContainer = ({ match }) => {
  const { itemId } = match.params
  const dispatch = useDispatch()

  const { item, isLoading } = useSelector(({ item, loading }) => ({
    item: item.item,
    isLoading: loading[FETCH_ITEM],
  }))

  useEffect(() => {
    dispatch(fetchItem(itemId))
  }, [dispatch, itemId])
  return <ItemRead itemId={itemId} item={item} isLoading={isLoading} />
}

export default ItemReadContainer
