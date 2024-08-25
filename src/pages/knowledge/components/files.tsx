import FilesItem from "./files-item";
import FilesUpload from "./files-upload";

function Files() {
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
          <FilesUpload/>
        </div>
        <div className="space-y-2">
          <FilesItem name="remox.pdf"/>
          <FilesItem name="risk.pdf"/>
        </div>
      </div>
    </section>
  );
}

export default Files;
