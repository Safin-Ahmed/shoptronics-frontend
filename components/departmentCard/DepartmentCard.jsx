import Image from 'next/image';
import { useRouter } from 'next/router';
import img from '../../public/static/product-38.png';
import { convertArrayToQueryParams } from '../../utils/queryParams';
import { formatString } from '../../utils/string';
import classes from './DepartmentCard.module.css';

const DepartmentCard = ({ category }) => {
  const router = useRouter();

  const {
      attributes: {
        name,
        sub_categories: { data },
      },
    } = category;

  const formattedSubCategory = data?.map((subCategory) => {
    return formatString(subCategory?.attributes?.Name);
  });

  const handleClick = () => {
    router.push({
      query: {
        ...router.query,
        filter_category: convertArrayToQueryParams(formattedSubCategory),
      },
      pathname: '/shop/',
    });
  };

  return (
    <div className={classes.cardWrapper} onClick={handleClick}>
      <div className={classes.imgWrapper}>
        <Image src={img} alt="img" width="100" height="100"></Image>
      </div>
      <div className={classes.title}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
export default DepartmentCard;
