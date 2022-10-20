
import HomeStyle from '../../public/Styles/home.module.css'
function HomeHeader({subHomeHeader,homeHeader}) {
  return (
    <div className={HomeStyle.HomeHeader}>
        <span>{subHomeHeader}</span>
        <h2>{homeHeader} <span>Product</span></h2>
    </div>
  )
}

export default HomeHeader