import { FaCartPlus } from "react-icons/fa";
import ImageZoom from "./Parital/ImageZoom/ImageZoom";
import ads from "../../assets/Banner/banner_3.jpg";
import product from "../../assets/watch.png";
import { button } from "@/Utils/Class/button";
import DetailsTab from "./Parital/Tab/DetailsTab";
import RelatedProducts from "./Parital/RelatedProduct/RelatedProducts";


const SingleProduct = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Product Details */}
        <div className="lg:w-10/12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Section */}
            <div className="items-center w-full lg:w-4/12">
              <div className="border-2 rounded-md hover:border-green_color w-full h-80 overflow-hidden">
                <ImageZoom
                  className="rounded-md w-full h-full object-contain"
                  image={product}
                  // ${imgUrl.product}${mainImg}
                />
              </div>

              <div className="flex items-center justify-center m-3 gap-3 flex-row">
                {/* {singleProduct.images.map((img, idx) => ( */}
                <button
                  //   onClick={() => setMainImg(img)}
                  //   key={idx}
                  className={`h-20 w-20 border-2 rounded-md`}
                >
                  <img
                    className="h-full w-full object-contain"
                    // src={`${imgUrl.product}${img}`}
                    alt=""
                  />
                </button>
                {/* ))} */}
              </div>
            </div>
            {/* Details Section */}
            <div className="flex items-start flex-col w-full lg:w-8/12">
              <div className="w-full">
                {/* <p className=''>{singleProduct?.singleProductData?.category_data?.category_name}</p> */}
                <p className="font-bold text-2xl text-color_1">
                  {"singleProduct?.name"}
                </p>

                <div>
                  <hr className="my-3" />
                  <div className="w-full mb-3">
                    <h2 className="text-lg font-medium">Delivery Charge:</h2>
                    <div className="font-medium">
                      {/* {delivery.map((charge, idx) => ( */}
                      <div className="flex gap-2">
                        <span>{"charge.name"}-</span>
                        <span>{"charge.amount"}৳</span>
                      </div>
                      {/* ))} */}
                    </div>
                  </div>
                </div>
                <hr className="my-3" />
                <h2 className="text-lg font-semibold">Product Price:</h2>
                <div className="mt-1 flex flex-col lg:flex-row lg:justify-between">
                  <span className="font-medium text-lg">
                    Select Unit*
                    <div className="font-bold text-red-800 grid grid-cols-2 lg:grid-cols-4 gap-2">
                      {/* {singleProduct?.price?.map((item, idx) => ( */}
                      <button
                        // onClick={() => setWeight(item)}
                        className={`border border-color_1 px-2 `}
                        // key={idx}
                      >
                        {/* {item.count} = {item.countPrice}৳ */}500
                      </button>
                      {/* ))} */}
                    </div>
                  </span>
                  <span className="font-medium text-lg mt-2 lg:mt-0">
                    Total Price:{" "}
                    <span className="font-bold text-red-800">
                      {/* {weight?.countPrice * quantity} */}
                    </span>{" "}
                    BDT
                  </span>
                </div>
                <hr className="my-3" />
                <h2 className="text-lg font-semibold">Quantity</h2>
                <div className="flex items-center gap-10 w-full">
                  <div className="flex">
                    <div className="border">
                      <button
                        className="px-4 font-bold font_standard my-1.5"
                        //   onClick={handleDecrement}
                      >
                        -
                      </button>
                    </div>
                    <div className="border-y">
                      <input
                        type="number"
                        className="font-bold font_standard pl-2 w-[60px] lg:w-[100px] text-center mx-auto h-full"
                        //   value={quantity}
                        //   onChange={(e) => handleQuantityChange(e.target.value)}
                        min="1"
                      />
                    </div>
                    <div className="border">
                      <button
                        className="px-4 font-bold font_standard my-1.5"
                        //   onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full my-3">
                  {/* <button
                  //   onClick={handleBuyNow}
                  className="button_primary flex items-center gap-2 w-full justify-center"
                >
                  <span className="font-bold">
                    <MdShoppingCart />{" "}
                  </span>{" "}
                  Buy Now
                </button> */}
                  <button
                    //   disabled={weight?.countPrice <= 0}
                    className={button.form}
                    //   onClick={() => handleAddToCart(singleProduct)}
                  >
                    <FaCartPlus />
                    Add to Cart
                  </button>
                </div>
                <div className="flex items-center justify-between w-full border-y py-p_8px text-text_standard font-semibold">
                  <p className="text-text_standard font-semibold">
                    {/* <span className="hover:underline">
                    Category: {singleProduct.category?.name || "..."}
                  </span> */}
                  </p>
                </div>
                {/* <div
                dangerouslySetInnerHTML={{
                  __html: singleProduct?.details,
                }}
                className="text-text_standard font-medium mt-2"
              ></div> */}
              </div>
            </div>
          </div>
          {/* Details Tab */}
          <DetailsTab />
        </div>

        {/* Ads Section */}
        <div className="lg:w-2/12">
          <img src={ads} className="h-full w-full object-contain" alt="" />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts />
    </div>
  );
};

export default SingleProduct;
