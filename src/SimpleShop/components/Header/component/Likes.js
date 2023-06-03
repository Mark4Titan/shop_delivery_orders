import { useSelector } from "react-redux";
import { getProduct, Icons } from "../../indexReExport";
import { Link } from "../Styled/Link";

const Likes = () => {
  const { productLike } = useSelector(getProduct);
  const Dislike = Icons.dislike;
  const Like = Icons.like;
  return productLike.length > 0 ? (
    <Link
      to="/likes"
      key={`likes_`}
      color={"#ff6a00"}
      fill_activ={"#ff6a00"}
      fill={"#011627b0"}
    >
      <Like />
    </Link>
  ) : (
    <Link to="/likes" key={`dislikes_}`}>
      <Dislike />
    </Link>
  );
};
export default Likes;
