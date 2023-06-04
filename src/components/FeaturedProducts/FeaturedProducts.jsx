import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import React from "react";
import Categories from "../Categories/Categories";

function FeaturedProducts() {
  return (
    <div className="featuredProducts">
      <div className="trending">
        <div className="top">
          <h1>trending products</h1>
          <p>
            Our trending products section is filled with the latest and greatest
            in fashion. From stylish dresses to comfortable loungewear, we have
            something for everyone. Our collection of trendy tops and bottoms
            are perfect for any occasion, whether it's a night out with friends
            or a casual day at home. Our accessories section is also a must-see,
            with statement jewelry and chic handbags to complete any outfit.
            Shop our trending products today and stay ahead of the fashion game!
          </p>
        </div>

        <div className="bottom">
          <Link to="/products/2">
            <img src="http://assets.myntassets.com/v1/assets/images/2529852/2018/3/12/11520832694042-SKD-4691520832693916-1.jpg" alt="" />
          </Link>
          <Link to="/products/2">
            <img src="http://assets.myntassets.com/v1/assets/images/2289520/2017/12/12/11513080094279-W-Women-Peach-Coloured--Gold-Toned-Printed-Wide-Leg-Palazzos-2271513080094131-1.jpg" alt="" />
          </Link>
          <Link to="/products/1">
            <img src="https://m.media-amazon.com/images/I/31+xVXkLrKL.jpg" alt="" />
          </Link>
          <Link to="/products/1">
            <img src="http://assets.myntassets.com/v1/assets/images/productimage/2019/1/18/ab752d89-0524-47ff-8d14-f7d2f974533d1547834203753-5.jpg" alt="" />
          </Link>
          <Link to="/products/3">
            <img src="http://assets.myntassets.com/v1/assets/images/productimage/2019/7/19/73ee1aab-69a5-41be-9d5e-e60051b6704c1563518441981-1.jpg" alt="" />
          </Link>
          <Link to="/products/3">
            <img src="http://assets.myntassets.com/v1/assets/images/productimage/2019/1/29/7b8aa752-5e40-4552-adec-a8c4fda109ac1548764318088-1.jpg" alt="" />
          </Link>
        </div>
        <div className="bottom">
          <Link to="/products/2">
            <img src=" http://assets.myntassets.com/v1/assets/images/9088717/2019/4/4/06d1b05f-644e-4f83-b1a9-ad131284a8191554368784250-Libas-Women-Green-Yoke-Design-Straight-Kurta-736155436878294-5.jpg" alt="" />
          </Link>
          <Link to="/products/2">
            <img src="http://assets.myntassets.com/v1/assets/images/9088717/2019/4/4/44b1df0a-a198-4191-bbb1-bebc5755edeb1554368784269-Libas-Women-Green-Yoke-Design-Straight-Kurta-736155436878294-4.jpg" alt="" />
          </Link>
          <Link to="/products/1">
            <img src="http://assets.myntassets.com/v1/assets/images/7432044/2018/9/19/57db9f68-169e-4f37-86c1-a72c70c485d31537337663202-India-2241537337663123-5.jpg" alt="" />
          </Link>
          <Link to="/products/1">
            <img src="http://assets.myntassets.com/v1/assets/images/9261413/2019/5/31/28e6ef00-b155-4208-bfdb-d698295c5be41559297491211-Freehand-Men-Coral-Pink-Solid-Straight-Kurta-447155929748974-5.jpg" alt="" />
          </Link>
          <Link to="/products/3">
            <img src="http://assets.myntassets.com/v1/assets/images/4879689/2018/5/4/11525438181230-Girls-Kurta-Leggings-set-7771525438181121-1.jpg" alt="" />
          </Link>
          <Link to="/products/3">
            <img src="http://assets.myntassets.com/v1/assets/images/7533652/2018/10/5/736593b1-ae50-4743-89ef-a2b93d79a4b31538736791995-KU-Girls-designer-fashion-premium--Blue-and-Peach-Printed-Lehenga-Choli-2941538736791797-1.jpg" alt="" />
          </Link>
        </div>
        <Categories />
        <div className="bottom">
          <Link to="/products/2">
            <img src="http://assets.myntassets.com/v1/assets/images/7098789/2018/8/20/dad722b8-f2c0-4e7e-aa5f-a3814856f8581534741627049-Libas-Women-Blue--White-Striped-Pathani-Kurta-6431534741626884-1.jpg" alt="" />
          </Link>
          <Link to="/products/2">
            <img src="http://assets.myntassets.com/v1/assets/images/6551403/2018/12/19/1ab6bfba-4825-4e59-ac0e-21e1ebb63aeb1545212392273-Anouk-Women-Maroon-Solid-A-Line-Kurta-8341545212391512-1.jpg " alt="" />
          </Link>
          <Link to="/products/1">
            <img src="http://assets.myntassets.com/v1/assets/images/4706922/2018/4/12/11523519278172-TAG-7-Blue-Printed-Short-Kurta-9691523519278094-5.jpg" alt="" />
          </Link>
          <Link to="/products/1">
            <img src="http://assets.myntassets.com/v1/assets/images/productimage/2019/7/12/cfea3733-1964-4c16-91e2-8169d9b2d40f1562932307000-5.jpg" alt="" />
          </Link>
          <Link to="/products/3">
            <img src="http://assets.myntassets.com/v1/assets/images/8223825/2018/12/21/a11f015f-1490-4616-bb87-77ce5813c2b21545390204614-YK-Girls-Kurta-Sets-9721545390202454-1.jpg" alt="" />
          </Link>
          <Link to="/products/3">
            <img src="http://assets.myntassets.com/v1/assets/images/9122641/2019/4/8/6e83af48-4aea-40d9-9f21-1ab44b54415d1554727980825-BownBee-Boys-White-Solid-Kurta-with-Pyjamas-521554727980401-2.jpg" alt="" />
          </Link>
        </div>
        <div className="bottom">
          <Link to="/products/2">
            <img src="http://assets.myntassets.com/v1/assets/images/7766518/2018/11/12/ec7ea490-1f0a-47a2-952d-830bf7db95591542012680302-Geroo-Women-Green-cotton-hand-block-print-skirt-9351542012680161-1.jpg" alt="" />
          </Link>
          <Link to="/products/2">
            <img src="http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/88c6ad02-eab9-42c8-8b8e-cbcd8f015d361535627393491-IMARA-Women-Black-Solid-Top-7471535627393374-1.jpg" alt="" />
          </Link>
          <Link to="/products/1">
            <img src="http://assets.myntassets.com/v1/assets/images/2439603/2018/2/21/11519206551462-British-Club-Men-Kurtas-4531519206551318-1.jpg" alt="" />
          </Link>
          <Link to="/products/1">
            <img src="http://assets.myntassets.com/v1/assets/images/4608754/2018/4/7/11523096601243-Vastramay-Men-Maroon-Cotton-Silk-Kurta-and-Dhoti-Pant-Set-7101523096601024-1.jpg" alt="" />
          </Link>
          <Link to="/products/3">
            <img src="http://assets.myntassets.com/v1/assets/images/2397434/2018/4/24/11524561009414-YK-Girls-Lehenga-Choli-1401524561009281-1.jpg " alt="" />
          </Link>
          <Link to="/products/3">
            <img src="http://assets.myntassets.com/v1/assets/images/7099320/2018/12/12/0bf6b4e9-701c-4baf-a25d-afa96aa4fb811544612681156-YK-Girls-Kurtas-7601544612680474-1.jpg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
