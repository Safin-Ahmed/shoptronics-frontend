import Image from "next/image"
import img from '../../public/static/product-38.png';
import classes from './DepartmentCard.module.css';

const cardInfo = [
  {
    id: 1, 
    name: 'Headphone',
    imgLink: img,
  },
  {
    id: 2, 
    name: 'Headphone',
    imgLink: img,
  },
  {
    id: 3, 
    name: 'Headphone',
    imgLink: img,
  },
  {
    id: 4, 
    name: 'Headphone',
    imgLink: img,
  },
  {
    id: 5, 
    name: 'Headphone',
    imgLink: img,
  },
  {
    id: 6, 
    name: 'Headphone',
    imgLink: img,
  },
  {
    id: 7, 
    name: 'Headphone',
    imgLink: img,
  },
  {
    id: 8, 
    name: 'Headphone',
    imgLink: img,
  },
  {
    id: 9, 
    name: 'Headphone',
    imgLink: img,
  },
]

const cardItem = cardInfo.map(item =>  <div key={item.id} className={classes.cardWrapper}>
  <div className={classes.imgWrapper}>
  <Image src={item.imgLink} alt="img" width="100" height="100"></Image>
  </div>
  <div className={classes.title}>
    <h3>{item.name}</h3>
  </div>
</div>)


const DepartmentCard = () => {
  return (
    
      <div className={classes.cardContainer}>
        {cardItem}
      
    </div>
   
  )
}
export default DepartmentCard

