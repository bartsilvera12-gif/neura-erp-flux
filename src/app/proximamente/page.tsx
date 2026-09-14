"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Sparkles, ArrowLeft } from "lucide-react";

const LABELS: Record<string, { titulo: string; descripcion: string }> = {
  tableros: {
    titulo: "Tableros",
    descripcion:
      "Vistas de tablero por rol (ejecutivo, PM, SLA). Este módulo depende del módulo Proyectos, que se portará en una fase posterior.",
  },
  gerencia: {
    titulo: "Gerencia",
    descripcion:
      "Panel gerencial con revenue mensual, MRR, cuentas por cobrar y top clientes. Requiere que se creen las vistas SQL de reporting (v_revenue_mensual, v_mrr, v_top_clientes, etc.) sobre el modelo de FLUX Nutrition.",
  },
  contabilidad: {
    titulo: "Contabilidad",
    descripcion:
      "Libro Diario, Libro Mayor, Libro de Ventas / Compras, Estado de cuenta, Conciliación bancaria y Cuentas por pagar. Requiere migrar las tablas contables (asientos, plan de cuentas, configuración contable) al schema fluxerp.",
  },
  pagos: {
    titulo: "Pagos",
    descripcion:
      "Circuito de pagos a proveedores. En esta versión el módulo Cobranzas cubre los cobros a clientes.",
  },
};

function ProximamenteContent() {
  const params = useSearchParams();
  const modulo = (params?.get("m") ?? "").toLowerCase();
  const info =
    LABELS[modulo] ?? {
      titulo: "Módulo en desarrollo",
      descripcion: "Este módulo forma parte del roadmap de FLUX Nutrition y aún no está disponible.",
    };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4FAEB2]/15 text-[#4FAEB2]">
        <Sparkles className="h-8 w-8" />
      </div>
      <div>
        <h1 className="text-3xl font-black text-slate-900">{info.titulo}</h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.24em] text-[#4FAEB2]">Próximamente</p>
      </div>
      <p className="max-w-lg text-sm leading-relaxed text-slate-600">{info.descripcion}</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-[#4FAEB2]/60 hover:text-[#3F8E91]"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver al Dashboard
      </Link>
    </div>
  );
}

export default function ProximamentePage() {
  return (
    <Suspense fallback={<div className="p-8 text-sm text-slate-500">Cargando…</div>}>
      <ProximamenteContent />
    </Suspense>
  );
}
