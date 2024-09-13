import { useGetFiles } from "@/api/use-get-files";
import FilesItem from "./files-item";
import FilesUpload from "./files-upload";
import { useCookies } from "react-cookie";

function Files() {
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data, isPending, isSuccess } = useGetFiles(cookies.refreshToken);
  return (
    <section className="border p-5 bg-card rounded-lg flex items-start gap-x-3 my-8">
      <img src="/svg/files.svg" alt="Files" className="pointer-events-none size-7 shrink-0" />
      <div className="w-full">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-bold text-xl">Files</h2>
            <p className="font-medium text-sm mt-1">
              Let AI agent use your files.{" "}
              <span className="font-normal text-xs text-brand-fifth">(Upload a text PDF (25MB max) for text extraction; images and columns not supported.)</span>
            </p>
          </div>
          <FilesUpload />
        </div>
        <div className="space-y-2">{!isPending && isSuccess && data && data.results.length > 0 && data.results.map((item) => <FilesItem name={item.name} id={item.id} key={item.id} />)}</div>
      </div>
    </section>
  );
}

export default Files;
