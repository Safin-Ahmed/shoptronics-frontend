import React, { useState } from 'react';
import ProductCard from '../../components/Shared/ProductCard';
import HomeStyled from '../../public/Styles/home.module.css';
import module from '../../public/Styles/product_details.module.css'
import product from '../../public/static/product.png'
import { ToastContainer, toast } from 'react-toastify';
const shortid = require('shortid');

const fakeData = [
    {
        id: shortid.generate(),
        title: 'Flexible WareLess Head Phone',
        desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or',
        price: 500,
        discount: 10,
        image: ["/static/product.png", "/static/product.png", "/static/product.png",],
        brand: 'HP',
    }
]




const ProductDetails = () => {
    const [data, setData] = useState(fakeData)
    const [currentImage, setCurrentImage] = useState(data?.image?.[0])

    const notify = () => toast.success('Product added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });

    const changeImage = (img)=> {
        setCurrentImage(img)
    }

    return (
        <div>
            <div className={module.product_details_sec}>
                <div className={module.product_image_section}>
                    <div className='product_gallery'>
                        {
                            data?.image?.map((item)=> <img src={item} onClick={changeImage} width={"105px"} alt='MAIN IMAGE' />)
                        }
                    </div>
                    <div className='view_image'>
                        <img src={'/static/product.png'} alt='MAIN IMAGE' />
                    </div>
                    <br />
                </div>

                <div className="product_full_dec">
                    {/* <p>Review :</p> <img src={rating} alt="" /> */}
                    <title>Flexible WareLess Head Phone</title>
                    <b>Product Id : 545sdfsdf</b>
                    <div className="dec">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or</p>
                    </div>
                    <b>Brand: HP</b>
                    <b>Quick Overview</b>
                    <ul>
                        <li>Ram - 36 GB</li>
                        <li>Procesor Type Apple M1 Chip</li>
                        <li>Graphics Memor - Shared</li>
                        <li>Ram - 36 GB</li>
                    </ul>
                    <h3>$ 356 | <del>599</del> </h3>
                    <div className={module.add_to_cart}>
                        <input type="number" value={2} className={module.input_box} />
                        <button onClick={notify} className={module.butt}>Add to Card</button>
                        <ToastContainer />
                    </div>

                </div>



            </div>
            N.B. Image may differ with actual product's layout, color, size & dimension. No claim will be accepted for image mismatch.
            <br />
            <br />
            <br />
            <p>Products</p>
            <h2>Related Products</h2>


            <div className={HomeStyled.customContainer}>
                <div className={HomeStyled.bestSellingProduct}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;