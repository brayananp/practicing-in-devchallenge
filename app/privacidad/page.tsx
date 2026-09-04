import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacidadPage() {
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
            <Shield className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Política de Privacidad</h1>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Última actualización: {new Date().toLocaleDateString("es-ES", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="space-y-8 text-foreground leading-relaxed">
        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">1. Información General</h2>
          <p className="text-muted-foreground">
            Bienvenido a <strong>DevPortfolio</strong> (creado por BANP). Respetamos tu privacidad y nos comprometemos a ser transparentes sobre el manejo de la información. Este sitio web es una plataforma de proyectos y demos interactivas desarrolladas con fines de portafolio técnico y aprendizaje.
          </p>
          <p className="text-muted-foreground">
            En general, <strong>no solicitamos, no recopilamos ni vendemos información personal de los usuarios</strong>. No es necesario registrarse ni proporcionar datos personales para explorar o utilizar el sitio web.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">2. Datos en Demostraciones Interactivas</h2>
          <p className="text-muted-foreground">
            Algunas aplicaciones y módulos del sitio (por ejemplo: la app de compartir código, el gestor de tareas o el cargador de imágenes) permiten al usuario ingresar texto, notas o subir archivos con el único propósito de probar la funcionalidad interactiva en tiempo real.
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-2">
            <li>
              Estos datos son procesados técnicamente por servicios de backend o bases de datos de prueba (como Supabase) únicamente para ejecutar la demo requerida.
            </li>
            <li>
              <strong>El desarrollador no revisa, monitorea, procesa comercialmente ni utiliza los datos o contenidos ingresados por los usuarios en las demos.</strong>
            </li>
            <li>
              Te sugerimos no ingresar información confidencial, contraseñas o datos personales sensibles dentro de los campos de texto de las demos.
            </li>
          </ul>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">3. Almacenamiento Local (LocalStorage)</h2>
          <p className="text-muted-foreground">
            Para mejorar tu experiencia de navegación o guardar preferencias del estado interactivo (por ejemplo, resultados en juegos, temas visuales o configuraciones locales), la aplicación puede utilizar el almacenamiento local de tu navegador (<code>localStorage</code>).
          </p>
          <p className="text-muted-foreground">
            Estos datos se guardan de forma privada e individual únicamente en tu dispositivo y no son transmitidos a servidores externos para rastreo personal.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">4. Enlaces a Servicios de Terceros</h2>
          <p className="text-muted-foreground">
            El sitio contiene enlaces externos a plataformas de terceros como GitHub, LinkedIn y DevChallenges. Esta política de privacidad aplica únicamente a este portafolio. Le recomendamos revisar las políticas de privacidad de los sitios web externos que visite.
          </p>
        </section>

        <section className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-3">
          <h2 className="text-xl font-semibold text-primary">5. Modificaciones</h2>
          <p className="text-muted-foreground">
            Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento para adaptarla a mejoras técnicas o requerimientos del proyecto.
          </p>
        </section>
      </div>
    </div>
  );
}
