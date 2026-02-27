import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    rol: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, rol: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.rol) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("¡Gracias! Te hemos añadido a la lista prioritaria. Recibirás un email pronto.");
      setFormData({ nombre: "", email: "", rol: "" });
    } catch (error) {
      toast.error("Hubo un error. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex items-center py-20 px-4 md:px-8"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/dHsOTtPEeEF3AGFRjyBf6b/sandbox/dix2NiN0yxEIgSwDgiEZ8N-img-1_1772155402000_na1fn_aGVyby1iYWNrZ3JvdW5k.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEhzT1R0UEVlRUYzQUdGUmp5QmY2Yi9zYW5kYm94L2RpeDJOaU4weXhFSWdTd0RnaUVaOE4taW1nLTFfMTc3MjE1NTQwMjAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kUFCl45lIer1~2WWOGvwxeJrjxoSqGzgl36fGJVX~A4ohoSp1Ofj2ctJLSikRWW8a3wUjRMA1pL7SPLLCVZjxWdTTFF-KI9RufpYL4KKHP-MsOgJdduNod3VwoaHUjFqYIxGUPxlGikP1CMMai1FKKenkpja4pZy2NEtFiQq4wgWtggJv1w4QWQGZw72hYAE7Ib5934lz8OTkve9AGZoJdghd3X~9D~DgpbvvbBNxJAVKGAsYpx4CzG184ulu~hOgJ8rhtdo~~~6G91o7ULc3mg29pfFw4s6oQb58Hm2KVBclPFPLqekd0Yf9S-Z6GuOr1lL7zrK2Qoo8JY6cVzBKw__')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-4 inline-block bg-primary px-4 py-2">
            <p className="text-white font-bold text-sm uppercase tracking-wider">
              Curso de Inteligencia Artificial • Inicio a Avanzado
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Domina la Inteligencia Artificial y Reemplaza 10 Empleados con Plugins de IA
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Aprende a usar Inteligencia Artificial para automatizar Ventas, Marketing, Finanzas, Atención al Cliente y más. Todo en una sola tarde.
          </p>
          <div className="flex gap-4">
            <a href="#form" className="inline-block">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white text-lg px-8 py-6">
                Asegurar mi Lugar
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Opening */}
          <div className="mb-12">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              <strong>Amigo/a Emprendedor/a,</strong>
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Seamos directos. Ya sea que estés defendiendo un imperio o construyendo uno desde los cimientos, solo hay una cosa que importa: <strong>la velocidad de ejecución inteligente con Inteligencia Artificial.</strong>
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              El que aprende más rápido a usar Inteligencia Artificial, se adapta más rápido y actúa más rápido, <strong>GANA.</strong> El resto se convierte en una anécdota.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* The Threat */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">La Realidad que Nadie Quiere Admitir Sobre la Inteligencia Artificial</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Durante años, la ventaja la tenían los que poseían más capital, más personal o más tiempo en el mercado. <strong>Esa era ha terminado.</strong>
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Hoy, una nueva fuerza está nivelando el campo de juego de la manera más brutal posible. Se llama <strong>Inteligencia Artificial.</strong> Y no, no es el juguete tecnológico del que hablan los "gurús". Es una herramienta de <strong>apalancamiento puro.</strong>
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Mientras usted lee esto, alguien en su industria (quizás un competidor directo, quizás un novato ambicioso en un garaje) está usando Inteligencia Artificial para generar clientes, descubrir oportunidades y tomar decisiones estratégicas basadas en datos puros.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* Course Overview */}
          <div className="mb-12 bg-white border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Tu Curso de Inteligencia Artificial: De Cero a Experto en Una Tarde</h2>
            <p className="text-lg leading-relaxed mb-6">
              Este es un curso intensivo de Inteligencia Artificial diseñado para llevarte desde el nivel <strong>Inicio</strong> (sin experiencia previa) hasta el nivel <strong>Avanzado</strong> (implementación inmediata en tu negocio). En solo 4 horas, aprenderás a dominar los plugins de Inteligencia Artificial que están transformando industrias.
            </p>
            <p className="text-lg leading-relaxed">
              No necesitas ser un experto en tecnología. Este curso de Inteligencia Artificial está diseñado para profesionales ambiciosos que quieren resultados tangibles, no teoría aburrida.
            </p>
          </div>

          {/* AI Plugins Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Los 10 Plugins de Inteligencia Artificial que Reemplazarán Empleados en tu Negocio</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">1. Plugin de Productividad de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu asistente personal. Automatiza tareas, gestiona calendarios, organiza flujos de trabajo y elimina el 80% del trabajo administrativo que consume tu tiempo.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">2. Plugin de Búsqueda Empresarial de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu investigador. Encuentra información crítica en segundos dentro de todos tus documentos, correos y sistemas. Es como tener un motor de búsqueda personal para tu empresa.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">3. Plugin de Ventas de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu gerente de ventas. Investiga prospectos, prepara resúmenes de clientes, automatiza seguimientos y cierra más tratos sin que tengas que hacer el trabajo manual.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">4. Plugin de Finanzas de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu analista financiero. Analiza estados financieros, crea modelos predictivos, identifica oportunidades de ahorro y monitorea métricas clave en tiempo real.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">5. Plugin de Datos de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu científico de datos. Consulta, visualiza e interpreta grandes volúmenes de datos complejos. Descubre patrones y tendencias ocultas en minutos, no en semanas.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">6. Plugin Legal de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu asesor legal junior. Revisa contratos, identifica riesgos legales, asegura cumplimiento normativo y te ahorra miles en honorarios de abogados.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">7. Plugin de Marketing de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu agencia de marketing. Genera ideas de campañas, redacta contenido persuasivo, planifica lanzamientos y crea estrategias que convierten en horas, no en semanas.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">8. Plugin de Atención al Cliente de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu equipo de soporte. Clasifica problemas, redacta respuestas personalizadas, propone soluciones y resuelve tickets 10 veces más rápido que un humano.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">9. Plugin de Gestión de Productos de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu product manager. Define especificaciones, prioriza funcionalidades, crea roadmaps estratégicos y asegura que cada lanzamiento sea un éxito.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">10. Plugin de Investigación Científica de IA</h3>
                <p className="text-lg leading-relaxed">
                  Reemplaza a tu investigador académico. Busca en miles de artículos científicos, analiza resultados de experimentos y planifica los próximos pasos de tu investigación en minutos.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Course Level */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Niveles del Curso de Inteligencia Artificial</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-border p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Nivel Inicio</h3>
                <p className="text-lg leading-relaxed">
                  Aprenderás los fundamentos de Inteligencia Artificial, cómo funcionan los plugins, y cómo empezar a usarlos sin experiencia técnica previa. Perfecto si es tu primer contacto con estas herramientas.
                </p>
              </div>
              <div className="bg-white border border-border p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Nivel Avanzado</h3>
                <p className="text-lg leading-relaxed">
                  Dominarás tácticas avanzadas de Inteligencia Artificial para automatizar procesos complejos, generar ingresos y crear ventajas competitivas que tus rivales no podrán igualar.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Warning Box */}
          <div className="bg-red-50 border-2 border-primary p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Sea Advertido: La Exclusividad es Real</h2>
            <p className="text-lg mb-4">Este curso intensivo de Inteligencia Artificial no es un evento masivo. Es para un grupo de élite.</p>
            <ul className="space-y-3 text-lg">
              <li>• Si busca una píldora mágica de Inteligencia Artificial, <strong>no es para usted.</strong></li>
              <li>• Si cree que $299 es un "gasto" en lugar de una inversión minúscula en dominio de mercado con Inteligencia Artificial, <strong>no es para usted.</strong></li>
              <li>• Si está satisfecho con su crecimiento actual y no tiene hambre de aprender Inteligencia Artificial, <strong>le ruego que no venga.</strong></li>
            </ul>
          </div>

          {/* Event Details */}
          <div className="bg-white border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">El Curso Intensivo de Inteligencia Artificial "IA para Conquistadores"</h2>
            <div className="space-y-4 text-lg">
              <p><strong>Tipo:</strong> Curso Intensivo de Inteligencia Artificial (Inicio a Avanzado)</p>
              <p><strong>Contenido:</strong> 10 Plugins de Inteligencia Artificial que reemplazan empleados en tu negocio</p>
              <p><strong>Fecha:</strong> Miércoles (la fecha exacta se revelará solo a la lista prioritaria).</p>
              <p><strong>Horario:</strong> 4:00 PM a 8:00 PM. Inmersión total en Inteligencia Artificial.</p>
              <p><strong>Ubicación:</strong> Un lugar privado y céntrico en Quito, lejos de las multitudes.</p>
              <p><strong>Inversión en tu Dominio de Inteligencia Artificial:</strong> $299.</p>
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-12">
            La ventana para ser un "early adopter" de Inteligencia Artificial y cosechar las mayores recompensas se está cerrando. Pronto, esto será el estándar, y los que no dominen Inteligencia Artificial, simplemente desaparecerán.
          </p>
          <p className="text-2xl font-bold mb-12">
            <strong>Asegure su lugar en la cima de la cadena alimenticia. Domine Inteligencia Artificial ahora.</strong>
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="bg-gray-100 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Solicite su Acceso al Curso de Inteligencia Artificial</h2>
          <p className="text-center text-lg mb-8 text-gray-700">
            Es su única oportunidad de asegurar un asiento en este curso intensivo de Inteligencia Artificial antes de que se ofrezca al público general (si es que queda alguno).
          </p>

          <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold mb-2">
                Nombre Completo
              </label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Principal
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="rol" className="block text-sm font-semibold mb-2">
                Selecciona tu Rol
              </label>
              <Select value={formData.rol} onValueChange={handleRoleChange}>
                <SelectTrigger className="w-full px-4 py-3 border border-border rounded-none focus:outline-none focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Selecciona tu rol..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dueño de Negocio">Dueño de Negocio</SelectItem>
                  <SelectItem value="Emprendedor">Emprendedor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-red-700 text-white font-bold text-lg py-4 rounded-none uppercase tracking-wider"
            >
              {isSubmitting ? "Enviando..." : "QUIERO DOMINAR INTELIGENCIA ARTIFICIAL. AHORA."}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6 italic">
            <strong>P.D.:</strong> En los negocios, o eres el disruptor que domina Inteligencia Artificial o eres el que sufre la disrupción de quienes sí la dominan. No hay término medio. Cada día que pospone aprender Inteligencia Artificial, le está dando munición a su enemigo. La elección es simple. Actúe.
          </p>
        </div>
      </section>
    </div>
  );
}
