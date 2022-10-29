import { Box } from '@mui/material';
import DepartmentCard from '../departmentCard/DepartmentCard';
import classes from './DepartmentSection.module.css';

const DepartmentSection = ({ mouseEnter, mouseLeave, isShow }) => {
  return (
    <Box
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={classes.DepartmentSection}
      sx={{ display: { xs: 'none', md: 'block' } }}
      style={{
        transform: isShow ? 'translateY(0)' : 'translateY(100px)',
        opacity: isShow ? '1' : '0',
        zIndex: isShow ? '600' : '-1',
      }}
    >
      <DepartmentCard />
    </Box>
  );
};
export default DepartmentSection;
