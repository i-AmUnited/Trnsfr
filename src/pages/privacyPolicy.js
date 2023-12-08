import Navbar from "../components/nav";
import logoBlack from "../Media/logoBlack.svg";
import { Link } from "react-router-dom";
import AccordionFAQ from "./accordion";

const PrivacyPolicy = () => {

    return ( 
        <div>
          <Navbar bgClass={"bg-white shadow-sm"} logo={logoBlack} />
          <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-10 mt-8 gap-6 mb-20">
            <div className="md:col-span-2">
              <p className="mb-1 crimson-font text-2xl">Privacy Policy</p>
              <p className="text-sm mt-3 mb-5">Since day one, TransferMelon has cared about privacy and respecting our users. Protecting the data of our users is of the highest importance to us, and we go to great lengths to make sure we keep it safe</p>
              <p className="text-sm mt-3 mb-5">We take your trust and right to privacy seriously and work continuously to keep your digital footprint small and in your control. Nevertheless, to enable you in your flow and to improve and secure our service, we need to process some personal information.</p>
              <p className="text-sm mt-3 mb-5">This statement covers the processing activities of the TransferMelon services, software, websites (including browser extensions) and/or applications (together: “Services”). The Services allow you to create, share, collect, capture and/or visualize your ideas, texts, graphics, videos, data, information, files, decks or other content (together: “Content”). The Services may be provided to you online, in the form of a mobile and/or desktop application(s) and/or may be integrated in a third party service. By using any of the Services you agree to have read and understood our Privacy and Cookie Statement as below.</p>
              <p className="text-sm mt-3 mb-5">To make sure this Statement is easy to read, each question has a drop down with a short explanation, followed by a more formal statement.</p>

              <AccordionFAQ
                Title={"What information do we collect?"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"Why do we use your personal information?"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"What parties do we share personal information with?"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"Why and how are cookies used?"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"Can you use TransferMelon for private and sensitive files"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"What retention procedures are in place?"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"How safe is it to use our services?"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"Can minors use our service?"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"What are your rights as a user?"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"How to contact TransferMelon"}
                Content={"..."}
              />

<AccordionFAQ
                Title={"Revisions to privacy and Terms os Service?"}
                Content={"..."}
              />


            </div>
            <div className="ps-16 hidden md:block">
              <div className="grid gap-3 text-sm">
                <div className="opacity-50">
                  <Link to={"/terms"}>Terms of Service</Link>
                </div>
                <div className="cursor-default">Privacy policy</div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default PrivacyPolicy;