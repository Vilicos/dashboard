import RemoveDialog from "@components/shared/remove-dialog";

function FilesItem({name,id}:{name:string;id:number;}) {
  return (
    <div className="flex items-center justify-between w-full py-1.5">
      <div className="flex items-center gap-x-2">
        <img src="/svg/files.svg" alt="Files" className="pointer-events-none size-5 shrink-0" />
        <span className="font-medium text-sm">{name}</span>
      </div>
      <RemoveDialog type="file" id={id}/>
    </div>
  );
}

export default FilesItem;
