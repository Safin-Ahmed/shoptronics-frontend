import React, { useState } from 'react';
import ProductCard from '../../components/Shared/ProductCard';
import HomeStyled from '../../public/Styles/home.module.css';
import module from '../../public/Styles/product_details.module.css'
import star from '../../public/static/stars/5.png'
import share from '../../public/static/share.png'
import heart from '../../public/static/heart.png'
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';
const shortid = require('shortid');
import product1 from "../../public/static/product/iphone12_1.jpg"
import product2 from "../../public/static/product/iphone12_2.jpg"
import product3 from "../../public/static/product/iphone12_3.jpg"

const fakeData = [{
    image: [product1, product2, product3],
    brand: 'HP',
    id: shortid.generate(),
    title: "Flexible WareLess Head Phone",
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or',
    price: 500,
    discount: 10,
}]

const ProductDetails = () => {
    const [data, setData] = useState(fakeData)
    const [currentImage, setCurrentImage] = useState(data[0].image[0])

    console.log(data)
    const notify = () => toast.success('Product added successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
    });

    const changeImage = (img) => {
        setCurrentImage(img)
    }

    return (
        <div>
            <div className={module.product_details_sec_wrapper}>
                <div className={module.product_details_sec}>
                    <div className={module.product_image_section}>
                        <div className={module.product_gallery}>
                            {
                                data.map((item) => item.image.map(im => <Image src={im} onClick={() => changeImage(im)} width={"100px"} height="100px" alt='product gallery' />))
                            }
                        </div>
                        <div className={module.view_image}>
                            <Image src={currentImage} width="500px" height={"500px"} alt='main image' />
                        </div>
                        <br />
                    </div>
                    <div className={module.product_full_dec}>
                        <div className="review_sec">
                            <span>Review :</span> <Image src={star} style={{ marginBottom: "-5px" }} width="100px" height={"20px"} alt="Review" /> <span>(99)</span>
                        </div>
                        <div className={module.social_icon}>
                            <Image src={share} style={{ marginBottom: "-5px", marginRight: "2px" }} width="17px" height={"17px"} alt="shareIcon" />
                            <Image src={heart} style={{ marginBottom: "-5px", }} width="17px" height={"17px"} alt="heart" />
                        </div>

                        <br />

                        {
                           data.map(pd => <div>
                           <h1>{pd.title}</h1>
                        <b>Product Id : {pd.id}</b>
                        <div className="dec">
                            <p>{pd.desc}</p>
                        </div>
                        <b>Brand: {pd.brand}</b>
                        <b>Quick Overview</b>
                        <ul>
                            <li>Ram - 32 GB</li>
                            <li>Procesor Type Apple M1 Chip</li>
                            <li>Graphics Memory - Shared</li>
                            <li>Display Size (Inch ) - 13.3</li>
                            <li>Procesor Type Apple M1 Chip</li>
                        </ul>
                        <h3 >$ {pd.price} | <span style={{ position: "relative" }}><del>599</del> <span style={{
                            position: 'absolute', fontSize: "13px", top: '0', fontWeight: '400', fontWeight: "400",
                            right: "-34px"
                        }}>-{pd.discount}%</span></span> </h3>
                        <div className={module.add_to_cart}>
                            <input type="number" className={module.input_box} />
                            <button onClick={notify} className={module.card_btn}>Add to Card</button>
                            <ToastContainer />
                        </div>
                           </div>)
                        }
                    </div>
                </div>

                <div className={module.product_details_note}>
                    <p>N.B. Image may differ with actual product's layout, color, size & dimension. No claim will be accepted for image mismatch.</p>
                </div>

            </div>

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