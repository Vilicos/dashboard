import RemoveDialog from "@components/shared/remove-dialog";
import { TableCell, TableRow } from "@components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ScrollArea } from "@components/ui/scroll-area";
function DetailsItem({ id }: { id: number }) {
  return (
    <TableRow className="*:font-medium *:text-sm border-none">
      <TableCell className="rounded-l-lg truncate">{`remox.io/about ${id}`}</TableCell>
      <TableCell className="">2 days ago</TableCell>
      <TableCell className="rounded-r-lg flex items-center gap-x-5">
        <Dialog>
          <DialogTrigger className="shrink-0 rounded bg-border size-6 flex items-center justify-center transition-colors hover:bg-brand-secondary">
            <img src="/svg/show.svg" alt="Show" className="pointer-events-none w-[18px] h-3 " />
          </DialogTrigger>
          <DialogContent className="py-4 px-6 max-w-[600px] max-h-[calc(100dvh-3.5rem)] bg-card">
            <DialogHeader className="after:absolute after:h-px after:w-full after:top-[52px] after:left-0 after:bg-border">
              <DialogTitle className="font-medium text-xl">Content Details</DialogTitle>
              <VisuallyHidden>
                <DialogDescription></DialogDescription>
              </VisuallyHidden>
            </DialogHeader>
            <ScrollArea className="overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/50 scrollbar-track-transparent pr-3">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ad dolore voluptatum, consectetur sint quasi quibusdam eveniet delectus molestias eos nostrum
                error ipsum optio, reiciendis odit? Minus aspernatur accusantium blanditiis beatae vel nobis sapiente facilis, repellat accusamus rem ipsam suscipit dolorum
                reiciendis qui non soluta vero nisi eaque repellendus. Perspiciatis, cumque. Laborum consectetur dolore rem quasi natus illo reiciendis! Et, hic fugit autem facilis
                quia qui nobis officia repudiandae doloribus, in nam praesentium ea? Iste eligendi enim perspiciatis? Accusantium cum, perferendis fuga repudiandae quos voluptate
                inventore at sit similique minus. Odio dolorum ipsa veniam dignissimos dolor cum, quas at recusandae. Laudantium, officiis! Numquam molestiae culpa non laudantium?
                Omnis illo inventore molestias amet numquam nesciunt explicabo iusto voluptatem fugit reprehenderit, iste animi repellat eligendi vitae, voluptatibus id doloribus
                vero quisquam quas dicta eius exercitationem excepturi eveniet facere. Illo ducimus fugit consectetur quaerat ratione, repellendus quas? Eveniet voluptates eos sed
                voluptate esse, harum natus. Facilis similique molestiae corrupti, nam saepe harum tempore perferendis quod repellendus aliquid? Quis cupiditate earum illo
                voluptates asperiores commodi fugiat hic, eaque quisquam fugit magni reiciendis exercitationem voluptate nihil at natus laudantium sequi totam enim repudiandae
                accusantium quidem! Iusto dicta nostrum cumque impedit? Natus nobis iusto est autem labore recusandae possimus amet aliquam sapiente fugit quis minima nulla quaerat
                doloremque quasi a eos non animi maxime, nam ratione architecto temporibus voluptatem. Maiores exercitationem fugit corrupti, cum ipsa reiciendis ipsam omnis veniam
                autem architecto totam sequi quam harum incidunt consequatur voluptatum repudiandae quis dignissimos iste eaque reprehenderit amet fuga, quidem iure? Vitae eligendi
                exercitationem asperiores quaerat cupiditate numquam fugiat, temporibus atque possimus, ex blanditiis ipsum, dolor voluptate quos aliquam accusantium. Nam saepe
                voluptates iusto dolor earum doloremque omnis facere! Saepe repudiandae natus laboriosam rem quis placeat repellat quae culpa perferendis voluptatem incidunt unde
                id sint accusamus, esse nisi iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aspernatur rem delectus numquam expedita, cumque voluptas
                ducimus quibusdam fugit similique iure earum eaque! Velit explicabo totam, mollitia molestias, culpa vero debitis saepe ullam reiciendis laudantium in. Iusto
                laborum, est perspiciatis modi incidunt ratione at nesciunt veniam consectetur, reprehenderit dicta deserunt necessitatibus beatae, sit natus? Adipisci ducimus
                cupiditate possimus impedit, eius quibusdam labore qui natus provident cumque commodi nisi. Repellat inventore magni maiores laborum et vitae sunt. Rem porro soluta
                laudantium voluptatum, laborum nam ad nulla consequatur voluptates nobis maiores facilis ullam ipsa illum! Repellat voluptatibus, necessitatibus recusandae non,
                quas atque assumenda maxime alias minima velit dolores. Dolores sunt aut aspernatur molestiae in laborum, sed atque voluptate quibusdam iste quaerat delectus fugit
                consequuntur maxime perferendis quidem commodi consectetur nemo. Hic animi veniam impedit voluptatum veritatis, consequatur fuga et debitis, cumque, accusamus
                assumenda consequuntur saepe fugiat. Blanditiis ut, temporibus voluptatem quis ipsum voluptates consequatur aspernatur debitis deleniti sit quae aliquam eveniet
                velit vel mollitia asperiores molestias deserunt dolorem, nesciunt quidem reprehenderit minus tenetur ipsam! Corporis delectus alias officia reiciendis, tenetur
                quas pariatur recusandae fugiat esse saepe natus, cupiditate magnam obcaecati autem consequatur architecto repellat voluptate eveniet dolores nobis? Voluptatum cum
                exercitationem non?
              </p>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <RemoveDialog type="website" />
      </TableCell>
    </TableRow>
  );
}

export default DetailsItem;
