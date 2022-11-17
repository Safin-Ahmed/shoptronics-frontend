import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';
import img from '../../../../../public/static/category/department-category-2.jpg';
import { convertArrayToQueryParams } from '../../../../../utils/queryParams';
import { formatString } from '../../../../../utils/string';

const CategoryCard = ({ setOpen, category }) => {
  console.log(category);
  const router = useRouter();

  const formattedSubCategory = category?.attributes?.sub_categories?.data?.map(
    (subCategory) => {
      return formatString(subCategory?.attributes?.Name);
    }
  );

  const handleClick = ({click}) => {
    router.push({
      query: {
        ...router.query,
        filter_category: convertArrayToQueryParams(formattedSubCategory),
      },
      pathname: '/shop/',
    });

    setOpen(false)
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        cursor: 'pointer',
        textAlign: 'center',
        mx: 1,
      }}
      key={category.id}
      onClick={handleClick}
    >
      <Box
        sx={{
          minWidth: '30%',
          p: 3,
          boxShadow: '0 0 0.5px 0.5px rgba(0, 0, 0, 0.17)',
          m: 1,
          '&:hover': {
            boxShadow: '0 0 0.5px 0.5px rgba(0, 0, 0, 0.50)',
          },
        }}
      >
        <Box>
          <Image width="100" height="100" src={img ?? imgUrl} alt="img" />
        </Box>
        <Typography variant="h6" sx={{ fontSize: '16px' }}>
          {category?.attributes?.name}
        </Typography>
      </Box>
    </Box>
  );
};
export default CategoryCard;
