import { TechnologiesContent } from "./TechnologiesStyles";

export default function Technologies() {
  return (
    <TechnologiesContent>
      <h3>Nos especializamos en</h3>
      <div>
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/color/100/javascript--v1.png"
          alt="Javascript"
        />
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/100/external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo.png"
          alt="React"
        />
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/color/100/nextjs.png"
          alt="Next Js"
        />
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/color/100/nodejs.png"
          alt="Node Js"
        />
        <img
          width="100"
          height="100"
          src="https://static.cdnlogo.com/logos/a/62/analytics.svg"
          alt="Google Analitycs"
        />
        <img
          width="150"
          height="150"
          alt="Facebook Ads"
          src="https://static.cdnlogo.com/logos/f/16/facebook-ads.svg"
        />{" "}
      </div>
    </TechnologiesContent>
  );
}
