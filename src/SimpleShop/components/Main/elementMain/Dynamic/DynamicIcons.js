import {
  DynButton,
  Icons,
  AuditProduct,
  getProduct,
  setProductLikeActions,
  setProductUnLikeActions,
} from "../../../indexReExport";
import { useDispatch, useSelector } from "react-redux";

const DynamicIcons = ({ item }) => {
  const { productLike } = useSelector(getProduct);
  const dispatch = useDispatch();

  // додаємо якщо немає в store, або віднімаємо //
  const LikeIn = (e) => {
    const idProduct = e.target.id
      ? parseInt(e.target.id)
      : parseInt(e.target.farthestViewportElement.id);

    const id = AuditProduct(idProduct, productLike);
    id === -1
      ? dispatch(setProductLikeActions(idProduct))
      : dispatch(setProductUnLikeActions(idProduct));
  };

  const LikesIco = Icons.like;
  return (
    <>
      {AuditProduct(parseInt(item.id), productLike) !== -1 ? (
        <DynButton
          id={item.id}
          color={"#ff6a00"}
          fill_activ={"#ff6a00"}
          fill={"#011627b0"}
          key={`likes`}
          onClick={(e) => LikeIn(e)}
        >
          <LikesIco id={item.id} />
        </DynButton>
      ) : (
        <DynButton
          id={item.id}
          fill_activ={"none"}
          key={`dislikes`}
          onClick={(e) => LikeIn(e)}
        >
          <LikesIco id={item.id} />
        </DynButton>
      )}
    </>
  );
};
export default DynamicIcons;
