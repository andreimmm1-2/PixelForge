import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className = "", id, ...props }: InputProps) => (
  <div className="space-y-2">
    {label && (
      <label htmlFor={id} className="text-sm font-medium text-white/90">
        {label}
      </label>
    )}
    <input
      id={id}
      className={`w-full rounded-xl px-4 py-3 bg-white/5 border border-border text-white placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/60 transition-all duration-200 ${className}`}
      {...props}
    />
  </div>
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea = ({ label, className = "", id, ...props }: TextareaProps) => (
  <div className="space-y-2">
    {label && (
      <label htmlFor={id} className="text-sm font-medium text-white/90">
        {label}
      </label>
    )}
    <textarea
      id={id}
      className={`w-full rounded-xl px-4 py-3 bg-white/5 border border-border text-white placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/60 transition-all duration-200 min-h-[140px] ${className}`}
      {...props}
    />
  </div>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export const Select = ({ label, className = "", id, children, ...props }: SelectProps) => (
  <div className="space-y-2">
    {label && (
      <label htmlFor={id} className="text-sm font-medium text-white/90">
        {label}
      </label>
    )}
    <select
      id={id}
      className={`w-full rounded-xl px-4 py-3 bg-white/5 border border-border text-white focus:outline-none focus:ring-2 focus:ring-accent/60 transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </select>
  </div>
);
