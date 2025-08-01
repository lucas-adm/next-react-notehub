import { Element } from "./elements";
import { Note } from "@/core";
import { Toggle } from "@/components/buttons";

interface AsideProps extends React.HTMLAttributes<HTMLElement> {
    triggerRef: React.RefObject<HTMLButtonElement>;
    note: Note;
    author: string | null;
    currentUser: string | null;
}

export const Aside = ({ triggerRef, note, author, currentUser, ...rest }: AsideProps) => {

    const isAuthor = author === currentUser;

    const { Settings, Time, Author, Tags, Comments } = Element;

    return (
        <aside className="max-w-[275px] inlg:max-w-full w-full inmd:dark:bg-darker inmd:bg-lighter" {...rest}>
            <header className="px-4 flex items-center justify-between border-y border-transparent dark:border-b-middark/50 border-b-midlight/50">
                <h3 className="py-3 inlg:py-2">Sobre</h3>
                {isAuthor && <Settings ref={triggerRef} />}
            </header>
            <section className="px-4 pt-4 flex flex-col gap-4">
                <Time note={note} />
                {note.user && <Author note={note} />}
                {note.description && <p>{note.description}</p>}
                {note.tags.length > 0 && <Tags note={note} />}
            </section>
            <footer className="px-4 py-6 flex flex-col inlg:flex-row gap-4">
                <Toggle.Flame size={20} note={note} useCount />
                <Comments note={note} />
            </footer>
        </aside>
    )

}