interface TextareaProps {
  label: string;
  placeholder: string;
  children?: React.ReactNode;
}

export default function Textarea({ label, placeholder, children }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor="message" className="ml-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        {label}
      </label>
      <div className="relative">
        {children}
        <textarea
          id="message"
          rows={4}
          placeholder={placeholder}
          className="w-full pl-12 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg pr-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all duration-300 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 resize-none"
        ></textarea>
      </div>
    </div>
  );
};