import { clsx } from "clsx";
import { useCallback, useEffect } from "react";

interface MenuProps extends React.HTMLAttributes<HTMLUListElement> {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu = ({ isMenuOpen, setIsMenuOpen, className, children, ...rest }: MenuProps) => {

    const handleMenuPropagation = (e: React.MouseEvent) => e.stopPropagation();

    const handleKeydown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') return setIsMenuOpen(false);
    }, [setIsMenuOpen])

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown, { passive: false });
        return window.removeEventListener('keydown', handleKeydown);
    }, [handleKeydown])

    return (
        <ul
            role="menu"
            onClick={handleMenuPropagation}
            className={clsx(
                'cursor-default',
                'z-10 overflow-hidden whitespace-nowrap absolute top-[135%] right-0',
                'rounded',
                'flex flex-col',
                'dark:bg-dark bg-light',
                isMenuOpen
                    ? 'max-h-32 border dark:border-middark/50 border-midlight/50 transition-all duration-300'
                    : 'max-h-0 border-0',
                className
            )}
            {...rest}
        >
            {children}
        </ul>
    )

}