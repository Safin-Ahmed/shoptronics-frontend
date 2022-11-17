import Image from 'next/image';
import { useRouter } from 'next/router';
import staticImg from '../../public/static/category/department-category-2.jpg';
import { convertArrayToQueryParams } from '../../utils/queryParams';
import { formatString } from '../../utils/string';
import classes from './DepartmentCard.module.css';

const DepartmentCard = ({ category }) => {
  const router = useRouter();

  const {
    attributes: {
      name,
      Image: {
        data: {
          attributes: { url:imgUrl },
        },
      },
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
        <Image src={staticImg ?? imgUrl } alt="img" width="100" height="100"></Image>
      </div>
      <div className={classes.title}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};
export default DepartmentCard;
