import React from "react";
import HireRorDevelopers from "../../../components/hire/HireRorDevelopers";
import HireReactJsDevelopers from "../../../components/hire/HireReactJsDevelopers";
import HireNodeJsDevelopers from "../../../components/hire/HireNodeJsDevelopers";
import HireFullStackDevelopers from "../../../components/hire/HireFullStackDevelopers";
import AWSDevelopment from  "../../../components/services/AWSDevelopment";
import HerokuDevelopment from "../../../components/services/HerokuDevelopment";
import UiDevelopment from "../../../components/services/UiDevelopment";
const Page = ({ params }) => {
  if (params?.slug === "ror") {
    return <HireRorDevelopers />;
  } else if (params?.slug === "reactjs"){
    return <HireReactJsDevelopers/>
  }else if (params?.slug === "fullstackdevelopment"){
    return <HireFullStackDevelopers/>
  }else if (params?.slug === "nodejs"){
    return <HireNodeJsDevelopers/>
  }else if (params?.slug === "fullstackdevelopment"){
    return <FullStackDevelopment/>
  }else if (params?.slug === "uiuxdevelopment"){
     return <UiDevelopment/>
  }else if (params?.slug === "aws"){
    return <AWSDevelopment/>
  }else if (params?.slug === "heroku"){
    return <HerokuDevelopment/>
  }
};
export default Page;
