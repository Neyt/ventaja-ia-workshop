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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            Para el Dueño de Negocio que Quiere Dominar su Mercado y el Emprendedor que Planea Robárselo...
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Aquí Está el Arma Secreta que Ambos Necesitan.
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
              Seamos directos. Ya sea que estés defendiendo un imperio o construyendo uno desde los cimientos, solo hay una cosa que importa: <strong>la velocidad de ejecución inteligente.</strong>
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              El que aprende más rápido, se adapta más rápido y actúa más rápido, <strong>GANA.</strong> El resto se convierte en una anécdota.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* The Threat */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">La Realidad que Nadie Quiere Admitir</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Durante años, la ventaja la tenían los que poseían más capital, más personal o más tiempo en el mercado. <strong>Esa era ha terminado.</strong>
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Hoy, una nueva fuerza está nivelando el campo de juego de la manera más brutal posible. Se llama Inteligencia Artificial. Y no, no es el juguete tecnológico del que hablan los "gurús". Es una herramienta de <strong>apalancamiento puro.</strong>
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Mientras usted lee esto, alguien en su industria (quizás un competidor directo, quizás un novato ambicioso en un garaje) está usando IA para generar clientes, descubrir oportunidades y tomar decisiones estratégicas basadas en datos puros.
            </p>
          </div>

          <div className="section-divider"></div>

          {/* What You'll Get */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Saldrá de esta Sala de Guerra con un Arsenal para:</h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">Construir su "Ejército de un Solo Hombre"</h3>
                <p className="text-lg leading-relaxed">
                  Cómo usar la IA para automatizar ventas, marketing, servicio al cliente y operaciones, permitiéndole (como emprendedor) competir con gigantes o (como dueño) liberar a su equipo para tareas de alto valor.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">El Sistema "Claridad Instantánea"</h3>
                <p className="text-lg leading-relaxed">
                  Transforme el caos de sus datos en un simple panel de control que le grita dónde está el dinero, dónde lo está perdiendo y qué hacer a continuación.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">La "Máquina de Contenido Persuasivo"</h3>
                <p className="text-lg leading-relaxed">
                  Genere en minutos todos los textos, correos, guiones y anuncios que necesita, con un poder de conversión que dejará en ridículo a la mayoría de las agencias de marketing.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold mb-2">El "Detector de Futuro"</h3>
                <p className="text-lg leading-relaxed">
                  Utilice modelos predictivos simples para anticipar las necesidades de sus clientes y las tendencias del mercado. Deje de seguir al mercado; póngase al frente de él.
                </p>
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Warning Box */}
          <div className="bg-red-50 border-2 border-primary p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">Sea Advertido: La Exclusividad es Real</h2>
            <p className="text-lg mb-4">Esto no es un evento masivo. Es para un grupo de élite.</p>
            <ul className="space-y-3 text-lg">
              <li>• Si busca una píldora mágica, <strong>no es para usted.</strong></li>
              <li>• Si cree que $299 es un "gasto" en lugar de una inversión minúscula en dominio de mercado, <strong>no es para usted.</strong></li>
              <li>• Si está satisfecho con su crecimiento actual y no tiene hambre de más, <strong>le ruego que no venga.</strong></li>
            </ul>
          </div>

          {/* Event Details */}
          <div className="bg-white border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">El Workshop de Apalancamiento "IA para Conquistadores"</h2>
            <div className="space-y-4 text-lg">
              <p><strong>Fecha:</strong> Miércoles (la fecha exacta se revelará solo a la lista prioritaria).</p>
              <p><strong>Horario:</strong> 4:00 PM a 8:00 PM. Inmersión total.</p>
              <p><strong>Ubicación:</strong> Un lugar privado y céntrico en Quito, lejos de las multitudes.</p>
              <p><strong>Inversión en su Arma Competitiva:</strong> $299.</p>
            </div>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-12">
            La ventana para ser un "early adopter" y cosechar las mayores recompensas se está cerrando. Pronto, esto será el estándar, y los que no lo tengan, simplemente desaparecerán.
          </p>
          <p className="text-2xl font-bold mb-12">
            <strong>Asegure su lugar en la cima de la cadena alimenticia.</strong>
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="bg-gray-100 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Solicite su Acceso a la Lista Prioritaria</h2>
          <p className="text-center text-lg mb-8 text-gray-700">
            Es su única oportunidad de asegurar un asiento antes de que se ofrezca al público general (si es que queda alguno).
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
              {isSubmitting ? "Enviando..." : "QUIERO MI VENTAJA. AHORA."}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6 italic">
            <strong>P.D.:</strong> En los negocios, o eres el disruptor o eres el que sufre la disrupción. No hay término medio. Cada día que pospone esta decisión, le está dando munición a su enemigo. La elección es simple. Actúe.
          </p>
        </div>
      </section>
    </div>
  );
}
