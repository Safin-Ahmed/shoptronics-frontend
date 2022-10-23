import classes from './BackDrop.module.css';

const BackDrop = ({show}) => {
  return show && <div className={classes.BackDrop}></div>;
};
export default BackDrop;
