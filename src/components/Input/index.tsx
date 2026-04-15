interface InputProps {
  label: string;
  children?: React.ReactNode;
  placeholder: string;
  type?: string;
  id: string;
}

export default function Input({ label, children, placeholder, type = "text", id }: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={id} className="ml-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        {label}
      </label>
      <div className="relative">
        {children}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="
            w-full pl-12 pr-4 py-3 rounded-lg text-sm transition-all duration-300
            bg-zinc-50 dark:bg-zinc-900 
            border border-zinc-200 dark:border-zinc-800 
            text-zinc-900 dark:text-zinc-100 
            placeholder:text-zinc-400 dark:placeholder:text-zinc-500
            focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 
            
            /* Correção do Autocomplete no Light Mode */
            [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_var(--color-zinc-50)] 
            [&:-webkit-autofill]:[-webkit-text-fill-color:var(--color-zinc-900)]
            
            /* Correção do Autocomplete no Dark Mode */
            dark:[&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_var(--color-zinc-900)] 
            dark:[&:-webkit-autofill]:[-webkit-text-fill-color:var(--color-zinc-100)]
          "
        />
      </div>
    </div>
  );
}
