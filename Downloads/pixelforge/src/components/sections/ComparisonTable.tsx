import { Check, X } from "lucide-react";

const rows = [
  { label: "Custom design", starter: true, business: true, premium: true },
  { label: "Hosting & SSL", starter: true, business: true, premium: true },
  { label: "Monthly backups", starter: true, business: true, premium: true },
  { label: "Advanced SEO", starter: false, business: true, premium: true },
  { label: "Performance optimisation", starter: false, business: true, premium: true },
  { label: "Priority support", starter: false, business: true, premium: true },
  { label: "Custom development", starter: false, business: false, premium: true },
  { label: "Dedicated account manager", starter: false, business: false, premium: true },
];

const Cell = ({ value }: { value: boolean }) =>
  value ? <Check className="w-5 h-5 text-success mx-auto" /> : <X className="w-5 h-5 text-white/20 mx-auto" />;

export const ComparisonTable = () => (
  <div className="max-w-4xl mx-auto px-6 overflow-x-auto">
    <table className="w-full glass rounded-2xl overflow-hidden">
      <thead>
        <tr className="border-b border-border">
          <th className="text-left p-4 text-muted font-medium">Feature</th>
          <th className="p-4 text-white font-semibold">Starter</th>
          <th className="p-4 text-white font-semibold">Business</th>
          <th className="p-4 text-white font-semibold">Premium</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label} className="border-b border-border last:border-0">
            <td className="p-4 text-white/80 text-sm">{r.label}</td>
            <td className="p-4"><Cell value={r.starter} /></td>
            <td className="p-4"><Cell value={r.business} /></td>
            <td className="p-4"><Cell value={r.premium} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
