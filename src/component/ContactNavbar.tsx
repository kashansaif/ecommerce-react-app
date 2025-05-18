import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import LazySlider from "./LazySlider";
function ContactNavbar() {
  return (
    <div className="bg-red-700 w-full text-gray-200 h-[30px] flex justify-between align-middle px-16">
      <p className="my-auto text-sm w-1/3">+92316235109 | support@splendidcart.com</p>
      <LazySlider />
      <div className="gap-2 flex justify-end mt-1 w-1/3">
        <FacebookOutlinedIcon />
        {/* <FacebookOutlinedIcon /> */}
        <SubscriptionsOutlinedIcon />
      </div>
    </div>
  );
}

export default ContactNavbar;
