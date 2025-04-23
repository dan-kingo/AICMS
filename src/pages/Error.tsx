import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import notFoundImg1 from "../assets/images/404 Error-rafiki.svg";
import { useTranslation } from "react-i18next";

const Error = () => {
  const error = useRouteError();
  const { t } = useTranslation();
  return (
    <div className="flex items-center flex-col min-h-screen justify-center">
      {isRouteErrorResponse(error) ? (
        <>
          <img className="w-96" src={notFoundImg1} alt="page not found" />
          <h1 className="lg:text-4xl sm: text-2xl mt-2">
            {t("Ohhh! Page Not Found")}
          </h1>
          <p className="mt-4">{t("It seems you have taken a wrong turn")}.</p>
        </>
      ) : (
        <h1>{t("Unexpected error occured")}</h1>
      )}

      <Link to="/" className="text-primary underline">
        {t("go to home")}
      </Link>
    </div>
  );
};

export default Error;
