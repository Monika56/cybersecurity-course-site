"use client";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

export const button = cva(
  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm transition border",
  { variants: { variant: { default: "bg-slate-900 text-white border-slate-900 hover:opacity-90",
                          secondary: "bg-white text-slate-900 border-slate-200 hover:bg-slate-50",
                          ghost: "bg-transparent border-transparent hover:bg-slate-100" } },
    defaultVariants: { variant: "default" }, }
);

export const Button = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: "default"|"secondary"|"ghost"}>(
  ({ className, variant = "default", ...props }, ref) => (
    <button ref={ref} className={twMerge(button({ variant }), className)} {...props} />
  )
);
Button.displayName = "Button";

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={twMerge("rounded-2xl border bg-white shadow-sm", props.className)} />;
}
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={twMerge("p-4 border-b", props.className)} />;
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={twMerge("p-4", props.className)} />;
}
export function CardFooter(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={twMerge("p-4 border-t", props.className)} />;
}
