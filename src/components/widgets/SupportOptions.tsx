import { useState } from 'react';
import SupportModal from './SupportModal';

interface Props {
  children: React.ReactNode;
}

const SupportOptions = ({ children }: Readonly<Props>) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SupportModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <button
        className="bg-[color:var(--color-primary)] hover:bg-[color:var(--color-secondary)] focus:outline-hidden focus:ring-2 focus:ring-[color:var(--color-primary)] focus:ring-offset-2 focus:ring-offset-orange-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-[color:var(--color-primary)] dark:highlight-white/20 dark:hover:bg-[color:var(--color-secondary)]"
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>
    </>
  );
};

export default SupportOptions;
