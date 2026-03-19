import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const whatsappNumber = "593981872561";
  const whatsappMessage = "Hola, me interesa el curso intensivo de Inteligencia Artificial. Quiero más información.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const [countdown, setCountdown] = useState("");

  // Define phase dates
  const phase1Start = new Date(2026, 2, 17); // March 17, 2026
  const phase1End = new Date(2026, 2, 24); // March 24, 2026
  const phase2Start = new Date(2026, 2, 25); // March 25, 2026
  const phase2End = new Date(2026, 3, 1); // April 1, 2026
  const phase3Start = new Date(2026, 3, 2); // April 2, 2026
  const phase3End = new Date(2026, 3, 8); // April 8, 2026

  const today = new Date(2026, 2, 17); // March 17, 2026

  let currentPhase = 1;
  let price = 239;
  let discount = "20%";
  let phaseName = "Fase 1: Descuento Especial";
  let paymentLink = "https://ppls.me/7Ofge5FRKfZUVrFvYxAZCw";
  let phaseEnd = phase1End;
  let isPhaseActive = true;

  // Determine current phase
  if (today >= phase1Start && today <= phase1End) {
    currentPhase = 1;
    price = 239;
    discount = "20%";
    phaseName = "Fase 1: Descuento Especial";
    paymentLink = "https://ppls.me/7Ofge5FRKfZUVrFvYxAZCw";
    phaseEnd = phase1End;
    isPhaseActive = true;
  } else if (today >= phase2Start && today <= phase2End) {
    currentPhase = 2;
    price = 269;
    discount = "10%";
    phaseName = "Fase 2: Descuento Limitado";
    paymentLink = "https://ppls.me/glWw1cfI1R1iMmQSboCFw";
    phaseEnd = phase2End;
    isPhaseActive = true;
  } else if (today >= phase3Start && today <= phase3End) {
    currentPhase = 3;
    price = 299;
    discount = "Sin descuento";
    phaseName = "Fase 3: Precio Regular";
    paymentLink = "https://ppls.me/xxLHrw1kbkq1tsdueFvvHw";
    phaseEnd = phase3End;
    isPhaseActive = true;
  } else {
    isPhaseActive = false;
  }

  // Countdown effect
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date(2026, 2, 17); // Use fixed date for demo
      const diff = phaseEnd.getTime() - now.getTime();
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setCountdown("Fase terminada");
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [phaseEnd]);

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
            Domina la Inteligencia Artificial en una Tarde
          </h1>
          
          {/* Date and Location */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 mb-8">
            <div className="space-y-3 text-white">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <div>
                  <p className="font-bold text-lg">Miércoles, 8 de Abril 2026</p>
                  <p className="text-sm text-gray-100">4:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 13 8 13s8-7.75 8-13c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                </svg>
                <div>
                  <p className="font-bold text-lg">Club la Unión</p>
                  <p className="text-sm text-gray-100">Quito, Ecuador</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-white/20">
                <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
                <div>
                  <p className="font-bold text-lg">Código de Vestimenta</p>
                  <p className="text-sm text-gray-100">Smart Casual (Requerido por Club la Unión)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Tier Display */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-6 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider">Precio Actual</p>
                <p className="text-3xl md:text-4xl font-bold">${price}</p>
                <p className="text-sm font-semibold mt-1">{phaseName}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{discount}</p>
                <p className="text-sm font-semibold">Descuento</p>
                <p className="text-xs mt-2 font-mono bg-black/20 px-2 py-1 rounded">{countdown}</p>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
            Aprende a usar Inteligencia Artificial para automatizar Ventas, Marketing, Finanzas, Atención al Cliente y más. Todo en una sola tarde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#payment" className="inline-block">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                Asegurar mi Lugar - ${price}
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 flex items-center gap-2 w-full sm:w-auto justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.519.754-2.753 1.77-3.68 3.02C2.957 10.487 2.5 12.05 2.5 13.682c0 1.81.424 3.589 1.223 5.192l-1.313 4.805 4.945-1.297c1.524.923 3.32 1.411 5.204 1.411 5.414 0 9.776-4.363 9.776-9.776 0-2.606-.997-5.054-2.782-6.898-1.784-1.844-4.232-2.859-6.816-2.859"/>
                </svg>
                ¿Preguntas?
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Saldrá de esta Sala de Guerra con un Arsenal para:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Construir su "Ejército de un Solo Hombre"</h3>
                <p className="text-gray-600">Cómo usar Inteligencia Artificial para automatizar ventas, marketing, servicio al cliente y operaciones, permitiéndole competir con gigantes o liberar tiempo para lo que realmente importa.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Multiplicar Ingresos sin Multiplicar Esfuerzo</h3>
                <p className="text-gray-600">Implementar sistemas de Inteligencia Artificial que generan leads, cierran ventas y escalan su negocio mientras usted duerme.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reducir Costos Operacionales Drásticamente</h3>
                <p className="text-gray-600">Reemplazar empleados costosos con programas de Inteligencia Artificial que trabajan 24/7 sin vacaciones, enfermedades ni demandas laborales.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dominar 10 Programas de Inteligencia Artificial</h3>
                <p className="text-gray-600">Instalar y usar herramientas de IA para Productividad, Ventas, Marketing, Finanzas, Atención al Cliente, Análisis de Datos y más.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Programs Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Los 10 Programas de Inteligencia Artificial que Recibirá Instalados en su Computadora</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Productividad", desc: "Automatice tareas, gestione proyectos y mejore la eficiencia" },
              { title: "Búsqueda Empresarial", desc: "Investigue prospectos y competencia en segundos" },
              { title: "Ventas", desc: "Genere leads, cierre deals y escale su pipeline de ventas" },
              { title: "Finanzas", desc: "Analice números, cree modelos y tome decisiones basadas en datos" },
              { title: "Datos", desc: "Visualice, interprete y extraiga insights de sus bases de datos" },
              { title: "Legal", desc: "Revise documentos, identifique riesgos y cumpla regulaciones" },
              { title: "Marketing", desc: "Cree campañas, redacte contenido y planifique lanzamientos" },
              { title: "Atención al Cliente", desc: "Resuelva problemas 24/7 sin intervención humana" },
              { title: "Gestión de Productos", desc: "Escriba especificaciones, priorice roadmaps y acelere desarrollo" },
              { title: "Investigación Científica", desc: "Busque literatura, analice resultados y planifique experimentos" },
            ].map((program, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold mb-2 text-primary">{program.title}</h3>
                <p className="text-gray-600 text-sm">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Por Qué Esto Importa AHORA?</h2>
          <p className="text-xl text-gray-700 mb-8">
            La Inteligencia Artificial no es el futuro. Es el presente. Y los que no se adapten ahora, quedarán obsoletos en 18 meses.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Este no es un seminario teórico. Es una sesión de guerra práctica donde saldrá con herramientas listas para usar, programas instalados en su computadora, y un plan de acción para implementar desde el lunes.
          </p>
          <p className="text-lg font-bold text-primary">
            La pregunta no es si puede permitirse asistir. La pregunta es si puede permitirse NO asistir.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">¿Tienes Preguntas?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Contacta directamente por WhatsApp. Responderé personalmente tus dudas sobre el curso, el contenido, y cómo la Inteligencia Artificial puede transformar tu negocio.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-6 flex items-center gap-3 justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.519.754-2.753 1.77-3.68 3.02C2.957 10.487 2.5 12.05 2.5 13.682c0 1.81.424 3.589 1.223 5.192l-1.313 4.805 4.945-1.297c1.524.923 3.32 1.411 5.204 1.411 5.414 0 9.776-4.363 9.776-9.776 0-2.606-.997-5.054-2.782-6.898-1.784-1.844-4.232-2.859-6.816-2.859"/>
              </svg>
              Contactar por WhatsApp
            </Button>
          </a>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="bg-gray-100 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Asegura tu Lugar Ahora</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Solo 20 cupos disponibles. La inversión es <strong>${price}</strong> para acceso completo al curso intensivo de Inteligencia Artificial, incluyendo todos los programas instalados en tu computadora.
          </p>
          
          {/* Pricing Tiers Info */}
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold mb-6">Escala de Precios Dinámicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className={`p-4 rounded-lg ${currentPhase === 1 ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100'}`}>
                <p className="font-bold mb-2">Fase 1</p>
                <p className="text-2xl font-bold text-primary">$239</p>
                <p className="text-sm text-gray-600">20% Descuento</p>
                <p className="text-xs text-gray-500 mt-2">17-24 Marzo</p>
                {currentPhase === 1 && <p className="text-xs font-bold text-green-600 mt-2">ACTIVA AHORA</p>}
              </div>
              <div className={`p-4 rounded-lg ${currentPhase === 2 ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100'}`}>
                <p className="font-bold mb-2">Fase 2</p>
                <p className="text-2xl font-bold text-primary">$269</p>
                <p className="text-sm text-gray-600">10% Descuento</p>
                <p className="text-xs text-gray-500 mt-2">25 Marzo - 1 Abril</p>
                {currentPhase === 2 && <p className="text-xs font-bold text-green-600 mt-2">ACTIVA AHORA</p>}
              </div>
              <div className={`p-4 rounded-lg ${currentPhase === 3 ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100'}`}>
                <p className="font-bold mb-2">Fase 3</p>
                <p className="text-2xl font-bold text-primary">$299</p>
                <p className="text-sm text-gray-600">Precio Regular</p>
                <p className="text-xs text-gray-500 mt-2">2-8 Abril</p>
                {currentPhase === 3 && <p className="text-xs font-bold text-green-600 mt-2">ACTIVA AHORA</p>}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-lg font-bold mb-6">Formas de Pago Disponibles</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-3">Pago seguro a través de Payphone</p>
                {isPhaseActive ? (
                  <a href={paymentLink} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <Button size="lg" className="bg-primary hover:bg-red-700 text-white text-lg px-12 py-6">
                      Pagar ${price} con Payphone
                    </Button>
                  </a>
                ) : (
                  <Button size="lg" disabled className="bg-gray-400 text-white text-lg px-12 py-6">
                    Fase Terminada
                  </Button>
                )}
              </div>
              <div className="border-t pt-4">
                <p className="text-sm text-gray-600 mb-3">¿Prefieres hablar primero?</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-12 py-6">
                    Contactar por WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Después de pagar, recibirás confirmación. Contacta por WhatsApp si tienes preguntas.
          </p>
        </div>
      </section>

      {/* WhatsApp Floating Bubble */}
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50">
        <div className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.171c-1.519.754-2.753 1.77-3.68 3.02C2.957 10.487 2.5 12.05 2.5 13.682c0 1.81.424 3.589 1.223 5.192l-1.313 4.805 4.945-1.297c1.524.923 3.32 1.411 5.204 1.411 5.414 0 9.776-4.363 9.776-9.776 0-2.606-.997-5.054-2.782-6.898-1.784-1.844-4.232-2.859-6.816-2.859"/>
          </svg>
          <span className="font-bold">¿Preguntas?</span>
        </div>
      </a>
    </div>
  );
}
