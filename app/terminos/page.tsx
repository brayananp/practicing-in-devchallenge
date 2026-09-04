import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TerminosPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm" className="mb-4 gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            <FileText className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Términos y Condiciones</h1>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Última actualización: {new Date().toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="space-y-8 text-foreground leading-relaxed">
        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">1. Aceptación de los Términos</h2>
          <p className="text-muted-foreground">
            Al acceder y utilizar este sitio web (<strong>DevPortfolio - BANP</strong>), aceptas estar sujeto a los presentes Términos y Condiciones de Uso. Si no estás de acuerdo con alguno de estos términos, se te aconseja no utilizar el sitio.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">2. Propósito del Sitio y Uso Autorizado</h2>
          <p className="text-muted-foreground">
            DevPortfolio es una plataforma que reúne proyectos web con fines demostrativos, educativos y de exhibición profesional.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
            <li>El uso de las aplicaciones interactivas es de carácter totalmente voluntario.</li>
            <li>No se permite el uso del sitio o sus funcionalidades para actividades ilícitas, maliciosas o que atenten contra la disponibilidad del servicio.</li>
          </ul>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">3. Demos y Persistencia de Datos</h2>
          <p className="text-muted-foreground">
            Las aplicaciones interactivas provistas en el portafolio son prototipos y demos funcionales. No se garantiza la persistencia, copia de seguridad o almacenamiento indefinido de la información o archivos ingresados en dichas herramientas de prueba.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">4. Propiedad Intelectual</h2>
          <p className="text-muted-foreground">
            El código fuente, diseño de interfaz y desarrollos originales realizados en este portafolio son autoría de <strong>BANP</strong>. Los diseños base de desafíos pertenecen a sus respectivos autores (como devchallenges.io) y se reconocen adecuadamente.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">5. Limitación de Responsabilidad</h2>
          <p className="text-muted-foreground">
            El sitio se proporciona &quot;tal cual&quot; (as is) sin garantías de ningún tipo respecto a disponibilidad ininterrumpida o idoneidad para un fin específico ajeno al de demostración técnica.
          </p>
        </section>
      </div>
    </div>
  );
}
