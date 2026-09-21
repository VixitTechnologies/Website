import {
  Cloud,
  Database,
  Activity,
  ArrowRight,
  Check,
  Code2,
} from "lucide-react";

const CapabilityVisual = ({ serviceIndex }) => {
  // WEB DEVELOPMENT
  if (serviceIndex === 0) {
    return (
      <div className="relative flex h-[190px] w-full max-w-[360px] items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full bg-brand/10 blur-3xl" />

        <div className="relative w-full rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />

            <div className="ml-3 h-2 w-28 rounded-full bg-white/10" />
          </div>

          <div className="grid grid-cols-[1fr_1.4fr] gap-3 p-4">
            <div>
              <div className="h-3 w-20 rounded bg-brand/70" />
              <div className="mt-3 h-2 w-28 rounded bg-white/10" />
              <div className="mt-2 h-2 w-20 rounded bg-white/10" />

              <div className="mt-5 h-7 w-20 rounded-lg bg-brand/20" />
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
              <div className="h-16 rounded-lg bg-brand/10" />

              <div className="mt-3 flex gap-2">
                <div className="h-2 flex-1 rounded bg-white/10" />
                <div className="h-2 w-10 rounded bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CUSTOM SOFTWARE
  if (serviceIndex === 1) {
    return (
      <div className="relative flex h-[190px] w-full max-w-[360px] items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <Code2 size={28} className="text-brand" />
            <div className="mt-2 h-2 w-14 rounded bg-white/10" />
          </div>

          <ArrowRight size={18} className="text-slate-600" />

          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <Database size={28} className="text-accent" />
            <div className="mt-2 h-2 w-14 rounded bg-white/10" />
          </div>

          <ArrowRight size={18} className="text-slate-600" />

          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <Activity size={28} className="text-cyan-400" />
            <div className="mt-2 h-2 w-14 rounded bg-white/10" />
          </div>
        </div>
      </div>
    );
  }

  // DATA & BI
  if (serviceIndex === 2) {
    return (
      <div className="relative flex h-[190px] w-full max-w-[360px] items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full bg-brand/10 blur-3xl" />

        <div className="relative w-full rounded-2xl border border-white/10 bg-white/[0.06] p-5">
          <div className="flex items-center justify-between">
            <span className="text-[9px] tracking-[0.15em] text-slate-400">
              BUSINESS OVERVIEW
            </span>

            <BarChartIcon />
          </div>

          <div className="mt-5 flex h-20 items-end gap-3">
            <div
              className="w-full rounded-t bg-brand/30"
              style={{ height: "40%" }}
            />
            <div
              className="w-full rounded-t bg-brand/40"
              style={{ height: "65%" }}
            />
            <div
              className="w-full rounded-t bg-brand/60"
              style={{ height: "50%" }}
            />
            <div
              className="w-full rounded-t bg-brand/70"
              style={{ height: "85%" }}
            />
            <div
              className="w-full rounded-t bg-brand"
              style={{ height: "100%" }}
            />
          </div>

          <div className="mt-4 flex justify-between">
            <div>
              <p className="text-[9px] text-slate-500">Revenue</p>
              <p className="mt-1 text-sm font-semibold text-white">+24%</p>
            </div>

            <div>
              <p className="text-[9px] text-slate-500">Orders</p>
              <p className="mt-1 text-sm font-semibold text-white">+18%</p>
            </div>

            <div>
              <p className="text-[9px] text-slate-500">Growth</p>
              <p className="mt-1 text-sm font-semibold text-white">+31%</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // AUTOMATION
  if (serviceIndex === 3) {
    return (
      <div className="relative flex h-[190px] w-full max-w-[360px] items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <FlowBox label="INPUT" icon="01" />

          <ArrowRight size={18} className="text-slate-600" />

          <FlowBox label="PROCESS" icon="02" active />

          <ArrowRight size={18} className="text-slate-600" />

          <FlowBox label="OUTPUT" icon="03" />
        </div>
      </div>
    );
  }

  // CLOUD & INTEGRATIONS
  if (serviceIndex === 4) {
    return (
      <div className="relative flex h-[190px] w-full max-w-[360px] items-center justify-center">
        <div className="absolute h-40 w-40 rounded-full bg-brand/10 blur-3xl" />

        <div className="relative flex flex-col items-center">
          <Cloud size={52} strokeWidth={1.3} className="text-brand" />

          <div className="mt-4 flex items-center gap-3">
            <MiniNode label="API" />
            <MiniNode label="DB" />
            <MiniNode label="APP" />
          </div>

          <div className="mt-3 h-px w-44 bg-brand/30" />

          <p className="mt-3 text-[9px] tracking-[0.18em] text-slate-500">
            CONNECTED SYSTEMS
          </p>
        </div>
      </div>
    );
  }

  // SUPPORT & MAINTENANCE
  return (
    <div className="relative flex h-[190px] w-full max-w-[360px] items-center justify-center">
      <div className="absolute h-40 w-40 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative w-full rounded-2xl border border-white/10 bg-white/[0.06] p-5">
        <div className="flex items-center justify-between">
          <span className="text-[9px] tracking-[0.15em] text-slate-400">
            SYSTEM STATUS
          </span>

          <Activity size={15} className="text-brand" />
        </div>

        <div className="mt-4 space-y-3">
          <StatusRow label="Website" />
          <StatusRow label="API" />
          <StatusRow label="Database" />
          <StatusRow label="Integrations" />
        </div>

        <div className="mt-4 border-t border-white/10 pt-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-slate-500">UPTIME</span>
            <span className="text-sm font-semibold text-white">99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const FlowBox = ({ label, icon, active = false }) => (
  <div
    className={`rounded-xl border p-4 text-center ${
      active ? "border-brand/40 bg-brand/10" : "border-white/10 bg-white/[0.06]"
    }`}
  >
    <span className="text-[9px] font-semibold text-brand">{icon}</span>

    <p className="mt-2 text-[9px] font-semibold tracking-[0.12em] text-slate-300">
      {label}
    </p>
  </div>
);

const MiniNode = ({ label }) => (
  <div className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2">
    <span className="text-[9px] font-semibold text-slate-300">{label}</span>
  </div>
);

const StatusRow = ({ label }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[#60A5FA]" />

      <span className="text-[10px] text-slate-400">{label}</span>
    </div>

    <Check size={13} className="text-[#60A5FA]" />
  </div>
);

const BarChartIcon = () => (
  <div className="flex h-4 items-end gap-0.5">
    <span className="h-2 w-1 bg-brand/40" />
    <span className="h-3 w-1 bg-brand/60" />
    <span className="h-4 w-1 bg-brand" />
  </div>
);

export default CapabilityVisual;
