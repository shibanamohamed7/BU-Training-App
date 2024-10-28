import React from "react";
import ProductsCardExpandable from "../components/ProductsCardExpandable";
import ProductsCard from "../components/ProductsCard";
import productsJSONData from "./ProductData.json";
import BeamerLogo from "../assets/images/beamerLogo.svg";
import UserflowLogo from "../assets/images/userflowLogo.svg";
import changelogImage from "../assets/images/changelog.png";
import pushnotificationImage from "../assets/images/pushnotification.png";
import inappnotificationImage from "../assets/images/inappnotification.png";
import FlowImage from "../assets/images/FlowImage.png";
import ChecklistImage from "../assets/images/ChecklistImage.png";
import LanucherImage from "../assets/images/LanucherImage.png";
import BannerImage from "../assets/images/BannerImage.png";
import AnnouncementImage from "../assets/images/AnnouncementImage.png";
import ResourceCenterImage from "../assets/images/ResourceCenterImage.png";
import EventTrackerImage from "../assets/images/EventTrackerImage.png";
import AIAssistantImage from "../assets/images/AIAssistantImage.png";
import "../assets/styles/Products.css";

const imageMapping = {
  beamer: {
    changelogImage,
    pushnotificationImage,
    inappnotificationImage,
  },
  userflow: {
    FlowImage,
    ChecklistImage,
    LanucherImage,
    BannerImage,
    AnnouncementImage,
    ResourceCenterImage,
    EventTrackerImage,
    AIAssistantImage,
  },
};

const ProductsSection = ({ logo, title, products, productType }) => (
  <div className={`${productType}Container`}>
    <div className="productHeader">
      <img src={logo} alt={`${title} logo`} />
      <span className="productTitle">
        <p>{title}</p>
      </span>
    </div>
    <div className="productCards">
      {products.map((product) => {
        const { id, imageValue, subProducts, ...otherProps } = product;
        const ImageComponent =
          productType === "beamer" ? ProductsCardExpandable : ProductsCard;
        return (
          <ImageComponent
            key={id}
            image={imageMapping[productType][imageValue]}
            subProducts={subProducts}
            {...otherProps}
          />
        );
      })}
    </div>
  </div>
);

const Products = () => {
  return (
    <div>
      <ProductsSection
        logo={BeamerLogo}
        title="Products"
        products={productsJSONData.beamer}
        productType="beamer"
      />
      <ProductsSection
        logo={UserflowLogo}
        title="Features"
        products={productsJSONData.userflow}
        productType="userflow"
      />
    </div>
  );
};

export default Products;
