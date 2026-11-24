
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/lift-ledger-logo.png"
      alt="Lift Ledger Club"
      className={cn("h-9 w-9 rounded-md object-contain", className)}
    />
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-display text-lg font-bold tracking-tight">
        Lift Ledger Club
      </span>
    </span>
  );
}
