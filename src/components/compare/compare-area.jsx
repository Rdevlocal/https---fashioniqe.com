import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
// internal
import { add_cart_product } from "@/redux/features/cartSlice";
import { remove_compare_product } from "@/redux/features/compareSlice";

const CompareArea = () => {
  const { compareItems } = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  // handle add product
  const handleAddProduct = (prd) => {
    dispatch(add_cart_product(prd));
  };
  // handle add product
  const handleRemoveComparePrd = (prd) => {
    dispatch(remove_compare_product(prd));
  };

  return (
    <>
      <section className="tp-compare-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {compareItems.length === 0 && (
                <div className="text-center pt-50">
                  <h3>No Compare Items Found</h3>
                  <Link href="/shop" className="tp-cart-checkout-btn mt-20">
                    Continue Shipping
                  </Link>
                </div>
              )}
              {compareItems.length > 0 && (
                <div className="tp-compare-table table-responsive text-center">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Product</th>
                        {compareItems.map(item => (
                          <td key={item._id} className="">
                            <div className="tp-compare-thumb">
                              <Image
                                src={item.img}
                                alt="compare"
                                width={205}
                                height={176}
                              />
                              <h4 className="tp-compare-product-title">
                                <Link href={`/product-details/${item._id}`}>
                                  {item.title}
                                </Link>
                              </h4>
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* Description */}
                      <tr>
                        <th>Description</th>
                        {compareItems.map(item => (
                          <td key={item._id}>
                            <div className="tp-compare-desc">
                              <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Ad, distinctio.
                              </p>
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* Price */}
                      <tr>
                        <th>Price</th>
                        {compareItems.map(item => (
                          <td key={item._id}>
                            <div className="tp-compare-price">
                              <span>${item.price.toFixed(2)}</span>
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* Add to cart*/}
                      <tr>
                        <th>Add to cart</th>
                        {compareItems.map(item => (
                          <td key={item._id}>
                            <div className="tp-compare-add-to-cart">
                              <button onClick={() => handleAddProduct(item)} type="button" className="tp-btn">
                                Add to Cart
                              </button>
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* brand */}
                      <tr>
                        <th>Product</th>
                        {compareItems.map(item => (
                          <td key={item._id} className="">
                            <div className="tp-compare-thumb">
                              <Image
                                src={item.img}
                                alt="compare"
                                width={205}
                                height={176}
                              />
                              <h4 className="tp-compare-product-title">
                                <Link href={`/product-details/${item._id}`}>
                                  {item.title}
                                </Link>
                              </h4>
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* Colour */}
                      <tr>
                        <th>color </th>
                        {compareItems.map(item => (
                          <td key={item._id} className="">
                            <div className="tp-compare-thumb">
                              <Image
                                src={item.img}
                                alt="compare"
                                width={205}
                                height={176}
                              />
                              <h4 className="tp-compare-product-title">
                                <Link href={`/product-details/${item._id}`}>
                                  {item.title}
                                </Link>
                              </h4>
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* Season and year */}
                      <tr>
                        <th>Season and Year</th>
                        {compareItems.map(item => (
                          <td key={item._id} className="">
                            <div className="tp-compare-thumb">
                              <Image
                                src={item.img}
                                alt="compare"
                                width={205}
                                height={176}
                              />
                              <h4 className="tp-compare-product-title">
                                <Link href={`/product-details/${item._id}`}>
                                  {item.title}
                                </Link>
                              </h4>
                            </div>
                          </td>
                        ))}
                      </tr>
                      {/* Remove */}
                      <tr>
                        <th>Remove</th>
                        {compareItems.map(item => (
                          <td key={item._id}>
                            <div className="tp-compare-remove">
                              <button onClick={()=>handleRemoveComparePrd({title:item.title,id:item._id })}>
                                <i className="fal fa-trash-alt"></i>
                              </button>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompareArea;
