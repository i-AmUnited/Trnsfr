import Navbar from "../components/nav";
import logoBlack from "../Media/logoBlack.svg";
import { Link } from "react-router-dom";

const TermsOfService = () => {

    return ( 
        <div>
          <Navbar bgClass={"bg-white shadow-sm"} logo={logoBlack} />
          <div className="grid grid-cols-1 md:grid-cols-3 px-5 md:px-10 mt-8 gap-6 mb-20">
            <div className="md:col-span-2">
             <div>
              <p className="mb-1 crimson-font text-2xl">Simple speak introduction for Terms of Service</p>
              <p className="text-sm mt-3 mb-5">You’re busy. We get it. So we’ve summed up our Terms of Service in a few simple sentences. They don’t replace the official legal stuff, but they will give you an idea of what’s in there. Any questions or concerns – please contact us.</p>
              <p className="text-sm mb-5 font-medium">Here are the headlines (imagine them with a clock bonging in the background if you like):</p>
              
              <ul className="list-disc text-sm space-y-2 text-[13px] ms-8">
                <li>You have to be 16 to use our tools.</li>
                <li>Your content is yours – you own it, and you are responsible for it. We’ll only do what’s needed for our services to work properly...</li>
                <li>...unless you are doing something illegal, in which case we can block and/or delete your stuff, and suspend your accounts.</li>
                <li>We may make changes to our terms, service and/or fees from time to time. If you have an account and don’t like something we change, you can always cancel at any time</li>
                <li>And we should mention that you use our service at your own risk; we are not liable for any damages if things go wrong.</li>
              </ul>

              <p className="text-sm mb-5 font-medium mt-5">And that’s it. Seems fair right? You do you, we’ll do us and everything will be fine.</p>
             </div>

            <hr  className="my-6"/>
            
            <div>
              <p className="crimson-font text-2xl">Terms of service</p>
              <span className="text-xs font-semibold mb-8">December 2023</span>

              <p className="text-sm my-5 font-medium">TransferMelon offers tools to move ideas, such as:</p>
              
              <ul className="list-disc text-sm space-y-2 text-[13px] ms-8">
                <li>a service to share files (“TransferMelon File Sharing”);</li>
                <li>a free (online) magazine;</li>
                <li>a service that allows you to store, organize, share and receive content from multiple sources (“Collect”);</li>
              </ul>

              <p className="text-sm mt-8">
              Your use of and access to our services, software, websites (including browser extensions) and/or applications (together: “Services”) are governed by these Terms of Service (“Terms”).
              <br /> <br />
              The Services may be provided to you online, in the form of a mobile and/or desktop application(s) and/or may be integrated in a third party service.
              <br /> <br />
              The Services allow you to upload, submit, store, share, receive, collect, capture and/or visualize your ideas, texts, graphics, videos, data, information, files, presentation decks or other content, including third party content used by you (together: “Content”). You retain all rights in- and responsibility and liability for all Content.
              <br /> <br />
              TransferMelon does not claim ownership of your Content. The Services are provided to you as the user of the Services by TransferMelon.
              </p>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">1. Applicability</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>You are only allowed to use the Services when aged 16 or older.</li>
                <li>Please read the Terms carefully. By using the Services (directly with us or through a third party application, plug-in, extension or integration) you agree and accept these Terms and our Notice and Take Down Policy (“NTD Policy”). To the use of personal data and cookies in relation to the Services our Privacy & Cookie Statement applies.</li>
                <li>If the Services include, are used in connection with, or are integrated in the services of third parties, the terms and conditions, notice and take down policies and/or privacy and cookie policies of those third parties may apply in addition to these Terms. If you are using the Services on behalf of your employer or another organization, you are agreeing to the terms of that organization and you represent and warrant that you have the authority to do so. TransferMelon is not responsible for any third party services, terms and/or policies.</li>
                <li>If you want to file a complaint or notice about unlawful Content being stored or shared via the Services or the TransferMelon API, please contact us</li>
                <li>If you become aware of a vulnerability in any of the Services, please contact us.</li>
                <li>If you want to use the TransferMelon API (as described in the API Terms of Use) our API Terms of Use apply in addition to these Terms.</li>
                <li>TransferMelon can amend the Terms from time to time. The amended Terms will become effective upon them being posted on the TransferMelon website(s) or at such later date as may be stated on the amended Terms. Therefore, we recommend that you review the Terms from time to time and take note of any changes. By continuing your use of the Services you accept the amended Terms. In case of material changes to the Terms, you will be informed prior to the change: (i) at the moment you use the Services, or (ii) by a message to the contact details you provided to us, or (iii) by a posting of the notice of the change on TransferMelon's website(s) In the event you don’t accept a change you can cancel your subscription.</li>
                <li>These Terms supersede any and all prior oral and written quotations, terms, communications, agreements and understandings between you and TransferMelon.</li>
                </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">2. TransferMelon File Sharing</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>TransferMelon File Sharing allows you to share your Content with others.</li>
                <li>To share your Content you need to upload it and provide us with (a limited number of) email addresses of recipient(s) (“email transfer”) or choose to distribute a download link yourself (“link transfer”). If you use link transfer you will not be informed of any downloads by others.</li>
                <li>TransferMelon File Sharing provides the possibility to share Content up to a maximum total capacity. Uploaded Content is stored on TransferMelon's servers for a limited period of time after which the ability to download expires. Depending on the transfer type some limitations apply</li>
                <li>After the expiry period TransferMelon will permanently delete the uploaded files. These files will not be available nor retrievable anymore.</li>
                <li>The basic functionality of TransferMelon File Sharing is (currently) free from registration and charge.</li>
                <li>TransferMelon treats Content as confidential and does not control the use of download links, regardless of whether they are originally distributed by us or by you. Recipients can forward the links and allow others to use them. You are solely responsible for the Content you upload and share.</li>
              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">3. TransferMelon Present</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>TransferMelon Present is an (online) magazine that presents creative stories and showcases art, photography, music and more from around the world. Any content included on TransferMelon Present is owned by or licensed to TransferMelon and can only be used with express prior written permission from TransferMelon.</li>
                <li>TransferMelon offers TransferMelon Present as a free service. Although care and attention is devoted to the content of our (online) magazine, TransferMelon cannot warrant that it is always complete and accurate. TransferMelon disclaims any liability in relation to the use of such content.</li>

              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">4. Content ownership, permissions and responsibility</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>TransferMelon does not claim any ownership of the Content you create, use, store or share through the Services and you are solely responsible for it. Also you are solely responsible for sharing it with the correct recipients. Any liability for damages relating to the Content lies with the individual that creates, uses, stores and/or shares it within the Services. You acknowledge that download and/or access links can be forwarded and that recipients having access to such links, can access the Content it’s connected with.</li>
                <li>By using the Services you warrant that you have, for any Content you create, use, store or share using the Services, all required permissions (including from copyright and other intellectual property rights owners) to distribute, sub-license, transfer, store and/or make the Content online available as part of the Services.</li>
                <li>TransferMelon is not liable to you or any third party for any damages arising out of or in relation to the Content created, used, stored or shared by you within the Services, including but not limited to, copyright protected works and/or trademarks.</li>
                <li>TransferMelon does not provide any public search function, catalogue or listing to find Content.</li>
                <li>TransferMelon may show you ads from advertisers and artists selected by TransferMelon (such as full-page wallpaper ads) when you use the Services.</li>
                <li>More information on the use of your personal data and cookies (including for performance marketing) is available in our Privacy Statement.</li>
              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">5. Restrictions</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>TransferMelon respects your rights and expects that you respect those of others, including TransferMelon, its artists, advertisers and third parties. This includes respecting the right to privacy, corporate intelligence, business secrets and intellectual property rights, such as trademarks, copyrights, trade names and logos. You agree not to use the Services to commit, promote, enable or facilitate any unlawful or criminal acts or breach of these Terms or facilitate or promote others to do so.</li>
                <li>As a condition to make use of the Services you agree not to create, use, store or share any Content that:
                  <br />
                  <ul className=" list-disc ms-4 mt-3 space-y-3">
                    <li>features CSAI (child sexual abuse imagery);</li>
                    <li>is obscene, defamatory, libelous, slanderous, profane, indecent, discriminating, threatening, abusive, harmful, lewd, vulgar, or unlawful;</li>
                    <li>promotes racism, violence or hatred;</li>
                    <li>is factually inaccurate, false, misleading, misrepresenting or deceptive; you don’t hold the rights to;</li>
                    <li>infringes, violates or misappropriates intellectual property rights, privacy rights, including data protection rights, and/or any other kind of rights;</li>
                    <li>infringes on or violates any applicable law or regulation; and/or</li>
                    <li>constitutes ‘hate speech’, whether directed at an individual or a group, and whether based upon the race, sex, creed, national origin, religious affiliation, sexual orientation, language or another characteristic of such individual or group.</li>
                  </ul>
                </li>
                <li>In addition, you agree not to:
                  <br />
                  <ul className=" list-disc ms-4 mt-3 space-y-3">
                    <li>abuse, harass, stalk, intimidate, threaten, commit violence, or otherwise act unlawful, or encourage anyone else to do so;</li>
                    <li>impersonate or falsely pretend affiliation with any person or entity;</li>
                    <li>access any non-public areas of the Services;</li>
                    <li>interfere with any access or use restrictions;</li>
                    <li>use any data mining or data gathering or extraction methods, or otherwise collect information about the users of the Services;</li>
                    <li>send viruses, worms, malware, ransomware, junk email, spam, chain letters, phishing emails, unsolicited messages, promotions or advertisements of any kind and for any purpose;</li>
                    <li>interfere with, damage or disrupt the Services or act in a way that may do so;</li>
                    <li>attempt to probe, scan, compromise or test the vulnerability of the Services or any related service, system or network or breach any security or authentication, unless you do so in accordance with our Responsible Disclosure Policy;</li>
                    <li>use automated means to access or use the Services without our permission;</li>
                    <li>reverse engineer or decompile any (part) of the Services;</li>
                    <li>resell, sublicence, rent, lease, offer or otherwise commercialize the Services without our permission; and/or</li>
                    <li>allow others to use your account.</li>
                    </ul>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">6. Violation of the Terms of Service</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>TransferMelon reserves the right to investigate, provide to third parties, (temporarily) block and/or permanently delete from it servers, without prior notice or liability, any Content and/or account information or to block anyone from accessing any part of the Services, when TransferMelon ascertains, at its sole discretion or after receiving substantiated and valid complaints, that you breach these Terms or act in violation of any applicable law or regulation.</li>
              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">7. Intellectual property rights</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>All intellectual property rights and/or similar rights on the Services (including the software, wallpapers, photography, graphic design, typography, portraits, logos, trademarks, trade names, domain names, copyrights and patents) are vested in TransferMelon and/or its licensors and you are not allowed to use, remove, modify, copy, mirror, distribute, decompile, or reverse engineer any of it in any way.</li>
                <li>TransferMelon is not responsible or liable for third party content published within the Services, in-ad links to external websites or the content, products or services offered on external websites. You acknowledge and accept that all use outside the Services is at your own risk.</li>
                <li>You will always respect and observe the good name and reputation of TransferMelon and ensure that your use of the Services will in no way prejudice any rights and/or the good name and reputation of TransferMelon and its licensors</li>
              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">8. Indemnity and Liability</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>You will defend, indemnify and hold harmless TransferMelon (including its employees and affiliates) from and against any claims, incidents, liabilities, procedures, damages, losses and expenses (including legal and accounting fees), arising out of or in any way connected with your access to or use of the Services or your breach of these Terms, including any third party claims that Content created, used, stored or shared using the Services by you or through your account, infringe or violate any third party rights.</li>
                <li>The Services may provide integration with third-party services. You acknowledge that: (i) TransferMelon is not responsible for any acts or omissions of such third-party services; (ii) that TransferMelon is not an agent of such third-party services; and (iii) your use of those services is subject to any applicable terms and conditions between you and the providers of such services.</li>
                <li>To the extent permissible under local mandatory law, TransferMelon is not liable for any damage or personal injury resulting from any use of the Services, including any (temporary) unavailability or (accidental) removal of your Content or account. The limitation of liability referred to in this clause shall not apply if the liability for damage caused by intent or gross negligence on the part of TransferMelon. In the event TransferMelon is liable for damage under mandatory law, TransferMelon’s aggregate liability to you - to the extent permissible under local mandatory law - for any and all claims arising out of or in connection with the use of the Services will in no event exceed the amount of one hundred euro (€100) per incident.</li>
              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">9. Waiver, Severability & Assignment</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>TransferMelon’s failure to enforce a provision is not a waiver of its right to do so later.</li>
                <li>If any (part of a) provision of these Terms is found to be illegal, unenforceable or otherwise invalid, then (i) the rest of the Terms will remain in full force and effect to the extent permissible under or consistent with the relevant laws; and (ii) that part will be deemed to be deleted and substituted by a valid one which in its economic effect comes closest to the invalid part.</li>
                <li>You may not assign any of your rights under these Terms. TransferMelon is at any time entitled to assign its rights to any of its affiliates or subsidiaries, or to any successor in interest of any business associated with the Services without your consent or any other restriction.</li>
              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">10. Applicable law and Jurisdiction</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>These Terms and any non-contractual obligations arising out of or in connection with it will be governed by and construed and interpreted in accordance with Dutch law, including mandatory consumer law. These Terms will not limit any consumer protection rights that you may be entitled to under the mandatory laws of your country of residence.</li>
                <li>Any disputes regarding these Terms will be submitted to the exclusive jurisdiction of the competent court in the Netherlands (with the exception of Dutch private international law).</li>
              </ul>
            </div>

            <div>
              <p className="mb-5 crimson-font text-2xl mt-8">11. Contact</p>
              <ul className=" list-decimal text-sm space-y-2 text-[13px] ms-8">
                <li>You can contact TransferMelon at legal@transfermelon.com or by using our Help Center If you have any questions, just send us an email in English.</li>
              </ul>
            </div>
           
            
            </div>
           
            <div className="ps-16 hidden md:block">
              <div className="grid gap-3 text-sm">
                <div className="cursor-default">Terms of Service</div>
                <div className="opacity-50">
                  <Link to={"/privacy"}>Privacy policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
     );
}
 
export default TermsOfService;