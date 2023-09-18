import Navbar from "../components/nav";
import logoBlack from "../Media/logoBlack.svg";
import downloadImg from "../Media/downloadFileIllustration.svg";
import Footer from "../components/footer";
import word from "../Media/wordIcon.svg"

const FileDownload = () => {
  return (
    <div className="bg-[#F6F6F6] min-h-screen">
      <Navbar bgClass={"bg-white shadow-sm"} logo={logoBlack} />

      <div className="min-h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-12 px-5 md:px-10 gap-4 pt-0 md:pt-10">
          <div className="col-span-12 md:col-span-3">
            <div className="bg-white border rounded-md p-5 text-center grid">
                <img src={downloadImg} alt="" className=" justify-self-center mb-5" />
                <p className="text-sm">Your download is ready.</p>
                <p className="text-xs opacity-50 font-semibold mt-2">
                   Files expire in 16Hrs
                </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 pb-16">
            <div className="bg-white border rounded-md p-5">
              <div className="grid md:flex justify-between space-y-6 md:space-y-0 items-center border-b pb-5 mb-5">
                <div>
                  <p className="text-lg font-medium">Download files.</p>
                  <p className="text-xs opacity-50">This download contains 4 files <span className="font-semibold">(356 MB)</span>, and these files will expire in 16Hrs</p>
                </div>
              <div>
                <button className="border text-sm md:text-xs rounded bg-[#71CB90] text-white px-16 py-5 md:py-3">Download</button>
              </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="bg-gray-50 p-4 rounded flex gap-4 w-full">
                <img src={word} alt="" />
                <div className="grid">
                  <p className="text-sm">testUploadedFile.pdf</p>
                  <span className="text-xs font-semibold opacity-50">3.5MB</span>
                </div>
               </div>
            </div>
            </div> 
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FileDownload;
