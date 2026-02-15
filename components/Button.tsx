import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'neon';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-wider transition-all duration-300 transform group active:scale-95 text-sm md:text-base";
  
  const variants = {
    primary: "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] shadow-[0_0_15px_rgba(34,211,238,0.3)] border border-cyan-400",
    secondary: "bg-white text-black hover:bg-neutral-200",
    outline: "bg-transparent border border-neutral-700 text-neutral-300 hover:border-cyan-400 hover:text-cyan-400",
    neon: "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.8)] shadow-[0_0_20px_rgba(34,211,238,0.5)] border border-cyan-400"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {(variant === 'primary' || variant === 'neon') && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />}
      </span>
      {/* Decorative scanline effect for primary/neon button */}
      {(variant === 'primary' || variant === 'neon') && (
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-white to-transparent animate-scan" />
        </div>
      )}
    </button>
  );
};