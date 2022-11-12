import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import useVariation from "./useVariation";

const useProduct = (product) => {
  const {
    id,
    attributes: {
      title,
      description,
      imgUrl,
      price,
      discountPrice,
      averageRating,
      brand,
      variations,
      relatedProducts,
      reviews,
    },
  } = product;

  const [mainImage, setMainImage] = useState(imgUrl);
  const [productGallery, setProductGallery] = useState([]);
  const [allProductImages, setAllProductImages] = useState([]);
  const [counter, setCounter] = useState(1);
  const {
    variantSelectOptions,
    chosenAttributes,
    setChosenAttributes,
    variantData,
  } = useVariation(id, title);

  const changeTheImage = (item) => {
    return setMainImage(item);
  };

  const handleVariantClick = (payload) => {
    setChosenAttributes((prev) => ({
      ...prev,
      [payload.name]: payload.value,
    }));
  };

  const navigateProductGallery = (action) => {
    if (action === "down") {
      console.log({ allProductImages });
      const lastIndex = allProductImages.findIndex(
        (item) => item === productGallery[productGallery.length - 1]
      );
      if (lastIndex < allProductImages.length - 1) {
        const remainingItems = allProductImages.slice(lastIndex + 1);
        const newItems =
          remainingItems.length > 4
            ? remainingItems.slice(0, 4)
            : remainingItems;

        setProductGallery(newItems);
        return;
      } else {
        return;
      }
    } else {
      const firstIndex = allProductImages.findIndex(
        (item) => item === productGallery[0]
      );
      if (firstIndex > 0) {
        const remainingItems =
          firstIndex > 4
            ? allProductImages.slice(firstIndex - 4, firstIndex)
            : allProductImages.slice(0, firstIndex);

        console.log("Remaining Items for up: ", {
          remainingItems,
          firstIndex,
        });
        setProductGallery([...remainingItems]);
        return;
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    let productImages = [];
    if (variations.data.length > 0) {
      const variationImages = variations.data.reduce((acc, cur) => {
        acc.push(cur.attributes.imgUrl);
        return acc;
      }, []);

      productImages = [imgUrl, ...variationImages];
    } else {
      productImages = [imgUrl];
    }
    setAllProductImages(productImages);
    setProductGallery(
      productImages.length > 4 ? productImages.slice(0, 4) : productImages
    );
  }, [product]);

  useEffect(() => {
    if (!variantData) {
      return;
    }
    console.log({ variantData });
    setMainImage(variantData?.variations.data[0].attributes.imgUrl);
  }, [variantData]);

  const addItem = useStoreActions((action) => action.cart.addItem);
  const notify = useStoreActions((action) => action.snackbar.setMessage);

  const handleAddToCart = async () => {
    let payload = {};
    if (variantSelectOptions?.length > 0) {
      if (
        !chosenAttributes ||
        Object.keys(chosenAttributes).length < variantSelectOptions.length
      ) {
        notify({
          message: "You need to choose the required variants",
          type: "error",
        });
        return;
      }
      payload = {
        id: +id,
        title: variantData?.variations?.data[0]?.attributes?.title,
        imgUrl: variantData?.variations?.data[0]?.attributes?.imgUrl,
        variantId: +variantData?.variations?.data[0]?.id,
        price: +variantData?.variations?.data[0]?.attributes?.price,
        discountPrice:
          +variantData?.variations?.data[0]?.attributes?.discountPrice,
        quantity: counter,
      };
    } else {
      payload = {
        id: +id,
        title,
        imgUrl,
        variantId: null,
        price,
        discountPrice,
        quantity: counter,
      };
    }

    addItem(payload);
    notify({
      message: "Product Added To Cart",
      type: "success",
    });
  };

  return {
    title,
    navigateProductGallery,
    productGallery,
    changeTheImage,
    averageRating,
    reviews,
    id,
    description,
    brand,
    price,
    discountPrice,
    variantSelectOptions,
    handleVariantClick,
    setCounter,
    handleAddToCart,
    relatedProducts,
    mainImage,
    counter,
    chosenAttributes,
  };
};

export default useProduct;
