export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: "nutricion" | "entrenamiento" | "salud-mental"
  categoryLabel: string
  author: string
  date: string
  readTime: string
  image: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mito-carbohidratos-nocturnos",
    title: "El Mito de los Carbohidratos Nocturnos",
    excerpt:
      "Analizamos la evidencia científica sobre el timing de nutrientes y su impacto real en la composición corporal.",
    category: "nutricion",
    categoryLabel: "Nutrición",
    author: "Dr. Carlos Mendoza",
    date: "2025-12-15",
    readTime: "8 min",
    image: "/filling-breakfast-oats-dark-moody-food-photography.jpg",
    tags: ["Carbohidratos", "Timing de Nutrientes", "Pérdida de Grasa", "Mitos"],
    content: `
      <h2>¿Los carbohidratos por la noche engordan más?</h2>
      <p>Durante años, el mundo del fitness ha perpetuado la idea de que comer carbohidratos por la noche lleva inevitablemente al aumento de grasa corporal. Este mito se basa en la lógica simplista de que "como estamos menos activos por la noche, esos carbohidratos se almacenarán como grasa". Pero, ¿qué dice realmente la ciencia?</p>

      <h3>La evidencia científica</h3>
      <p>Múltiples estudios controlados han demostrado que el timing de los carbohidratos tiene un impacto mínimo en la composición corporal cuando las calorías totales y los macronutrientes se mantienen constantes. Un estudio publicado en el <strong>Journal of Obesity</strong> comparó dos grupos con la misma ingesta calórica: uno consumía la mayoría de carbohidratos en el desayuno y otro en la cena.</p>

      <p><strong>Los resultados fueron sorprendentes:</strong> El grupo que consumió carbohidratos por la noche no solo perdió una cantidad similar de peso, sino que también mostró mejores marcadores de saciedad y menor resistencia a la insulina.</p>

      <h3>¿Por qué persiste el mito?</h3>
      <p>La confusión viene de malinterpretar cómo funciona el metabolismo. Tu cuerpo no reinicia a medianoche. El balance energético se mide en períodos de 24 horas o más, no en ventanas arbitrarias de tiempo. Si comes 2000 calorías divididas de cualquier manera durante el día y gastas 2200, perderás peso independientemente del timing.</p>

      <h3>Consideraciones prácticas</h3>
      <p>Dicho esto, hay razones individuales por las que podrías querer ajustar tu timing de carbohidratos:</p>
      <ul>
        <li><strong>Rendimiento deportivo:</strong> Los carbohidratos antes del entrenamiento pueden mejorar el desempeño</li>
        <li><strong>Calidad del sueño:</strong> Algunos estudios sugieren que los carbohidratos nocturnos pueden mejorar la producción de serotonina y melatonina</li>
        <li><strong>Adherencia:</strong> Si comer carbohidratos por la noche te ayuda a seguir tu plan, hazlo</li>
        <li><strong>Control del apetito:</strong> Algunas personas se sienten más saciadas distribuyendo carbohidratos de manera uniforme</li>
      </ul>

      <h3>Conclusión basada en evidencia</h3>
      <p>El timing de nutrientes puede optimizar el rendimiento y la adherencia, pero no es un factor determinante para la pérdida de grasa. <strong>Las calorías totales y la calidad de tu dieta importan mucho más que el reloj.</strong></p>

      <p>En lugar de obsesionarte con no comer carbohidratos después de las 6 PM, enfócate en:</p>
      <ul>
        <li>Mantener un déficit calórico consistente</li>
        <li>Consumir suficiente proteína (1.6-2.2g por kg de peso corporal)</li>
        <li>Elegir fuentes de carbohidratos nutritivas y saciantes</li>
        <li>Crear hábitos alimenticios sostenibles a largo plazo</li>
      </ul>

      <p><em>Referencias: Sofer et al. (2011) Journal of Obesity; Goldstein et al. (2007) Chronobiology International</em></p>
    `,
  },
  {
    slug: "no-pain-no-gain-analisis",
    title: "No Pain No Gain: Análisis Científico",
    excerpt:
      "¿Es necesario el dolor muscular para el crecimiento? Desmontamos este mito del fitness con estudios recientes.",
    category: "entrenamiento",
    categoryLabel: "Entrenamiento",
    author: "Lic. María Torres",
    date: "2025-12-10",
    readTime: "6 min",
    image: "/home-workout-setup-minimal-equipment.jpg",
    tags: ["DOMS", "Hipertrofia", "Recuperación", "Entrenamiento"],
    content: `
      <h2>¿Dolor muscular = Crecimiento muscular?</h2>
      <p>El "dolor" post-entrenamiento, conocido científicamente como <strong>DOMS (Delayed Onset Muscle Soreness)</strong>, ha sido durante mucho tiempo considerado como el indicador definitivo de un buen entrenamiento. Pero la ciencia moderna cuenta una historia muy diferente.</p>

      <h3>¿Qué es realmente el DOMS?</h3>
      <p>El DOMS es el dolor muscular que aparece 24-72 horas después del ejercicio intenso o no familiar. Se debe principalmente a:</p>
      <ul>
        <li>Microtraumas en las fibras musculares</li>
        <li>Inflamación localizada</li>
        <li>Acumulación de productos metabólicos</li>
        <li>Daño al tejido conectivo</li>
      </ul>

      <h3>La desconexión entre dolor y crecimiento</h3>
      <p>Aquí está el dato crucial: <strong>La hipertrofia muscular puede ocurrir sin DOMS significativo.</strong> Un estudio de 2019 publicado en el <em>Journal of Strength and Conditioning Research</em> encontró que la correlación entre DOMS y el crecimiento muscular es débil en el mejor de los casos.</p>

      <p>Los mecanismos principales del crecimiento muscular son:</p>
      <ul>
        <li><strong>Tensión mecánica:</strong> La carga aplicada al músculo durante la contracción</li>
        <li><strong>Estrés metabólico:</strong> La acumulación de metabolitos durante el ejercicio</li>
        <li><strong>Daño muscular:</strong> Solo uno de los tres factores, y el menos importante</li>
      </ul>

      <h3>¿Por qué algunas personas tienen más DOMS que otras?</h3>
      <p>La susceptibilidad al DOMS varía enormemente entre individuos debido a:</p>
      <ul>
        <li>Genética y composición de fibras musculares</li>
        <li>Nivel de adaptación al entrenamiento</li>
        <li>Tipo de ejercicio (los excéntricos causan más DOMS)</li>
        <li>Estado de recuperación y nutrición</li>
      </ul>

      <h3>El problema de entrenar siempre al límite del dolor</h3>
      <p>Buscar constantemente el DOMS máximo puede ser contraproducente:</p>
      <ul>
        <li>Mayor riesgo de lesiones por sobreentrenamiento</li>
        <li>Recuperación más lenta entre sesiones</li>
        <li>Menor frecuencia de entrenamiento óptima</li>
        <li>Posible burnout físico y mental</li>
      </ul>

      <h3>Indicadores reales de progreso</h3>
      <p>En lugar de enfocarte en el dolor, monitorea estos marcadores:</p>
      <ul>
        <li><strong>Progresión de carga:</strong> ¿Estás levantando más peso o haciendo más repeticiones?</li>
        <li><strong>Mejora en la técnica:</strong> ¿Ejecutas los movimientos con mejor control?</li>
        <li><strong>Medidas corporales:</strong> Circunferencias, fotos, peso corporal</li>
        <li><strong>Rendimiento deportivo:</strong> ¿Mejora tu capacidad funcional?</li>
      </ul>

      <h3>Conclusión práctica</h3>
      <p>El DOMS ocasional es normal y no es preocupante, pero no debe ser tu objetivo primario. <strong>Enfócate en la progresión consistente, recuperación adecuada y técnica correcta.</strong> Un músculo puede crecer perfectamente sin sentirse destruido al día siguiente.</p>

      <p><em>Referencias: Schoenfeld (2010) J Strength Cond Res; Damas et al. (2016) Eur J Appl Physiol</em></p>
    `,
  },
  {
    slug: "cortisol-estres-conexion",
    title: "Cortisol y Estrés: La Conexión Real",
    excerpt: "Cómo el estrés crónico afecta tu metabolismo, tu sueño y tu capacidad para perder grasa.",
    category: "salud-mental",
    categoryLabel: "Salud Mental",
    author: "Dra. Ana Jiménez",
    date: "2025-12-05",
    readTime: "10 min",
    image: "/persona-meditando-en-naturaleza.jpg",
    tags: ["Cortisol", "Estrés", "Metabolismo", "Sueño", "Recuperación"],
    content: `
      <h2>El estrés invisible que sabotea tus resultados</h2>
      <p>Puedes tener la dieta perfecta y el mejor programa de entrenamiento, pero si tu estrés está descontrolado, tus resultados se verán severamente comprometidos. El cortisol, conocido como la "hormona del estrés", juega un papel mucho más complejo de lo que la mayoría piensa.</p>

      <h3>¿Qué es el cortisol y por qué lo necesitas?</h3>
      <p>El cortisol no es el enemigo. Es una hormona esencial que:</p>
      <ul>
        <li>Regula el metabolismo de glucosa</li>
        <li>Controla la presión arterial</li>
        <li>Reduce la inflamación</li>
        <li>Te despierta por la mañana</li>
        <li>Te da energía en situaciones de estrés agudo</li>
      </ul>

      <p>El problema surge cuando el cortisol permanece elevado crónicamente.</p>

      <h3>Estrés agudo vs. estrés crónico</h3>
      <p><strong>Estrés agudo:</strong> Tu cuerpo diseñado para manejarlo. Es la respuesta de "lucha o huida" que te salva en emergencias. El cortisol se eleva brevemente y luego vuelve a la normalidad.</p>

      <p><strong>Estrés crónico:</strong> Tu cuerpo NO está diseñado para esto. Es el estrés constante de:</p>
      <ul>
        <li>Trabajo demandante sin descanso</li>
        <li>Preocupaciones financieras persistentes</li>
        <li>Relaciones conflictivas</li>
        <li>Déficit calórico extremo prolongado</li>
        <li>Sobreentrenamiento sin recuperación</li>
        <li>Privación crónica de sueño</li>
      </ul>

      <h3>Cómo el cortisol crónico sabotea tu físico</h3>
      
      <h4>1. Almacenamiento de grasa visceral</h4>
      <p>El cortisol elevado promueve el almacenamiento de grasa específicamente en el área abdominal. Esto no es solo estético: la grasa visceral es metabólicamente activa y aumenta el riesgo de enfermedades cardiovasculares.</p>

      <h4>2. Pérdida de masa muscular</h4>
      <p>El cortisol es catabólico. En estados crónicamente elevados, tu cuerpo descompone proteína muscular para convertirla en glucosa. Estás literalmente perdiendo músculo que trabajaste duro por construir.</p>

      <h4>3. Resistencia a la insulina</h4>
      <p>El cortisol elevado reduce la sensibilidad a la insulina, lo que dificulta que tus células absorban glucosa. Resultado: más almacenamiento de grasa y menos energía disponible.</p>

      <h4>4. Disrupción del sueño</h4>
      <p>El cortisol alto por la noche interfiere con la melatonina, haciendo difícil conciliar el sueño. Y la falta de sueño eleva aún más el cortisol. Es un círculo vicioso.</p>

      <h4>5. Aumento del apetito y antojos</h4>
      <p>El cortisol estimula el apetito, especialmente por alimentos altos en azúcar y grasa. Es la razón biológica por la que "comes emocionalmente" cuando estás estresado.</p>

      <h3>Señales de que tu cortisol está descontrolado</h3>
      <ul>
        <li>Dificultad para perder grasa abdominal a pesar de dieta y ejercicio</li>
        <li>Fatiga constante pero dificultad para dormir</li>
        <li>Antojos intensos de azúcar y carbohidratos</li>
        <li>Infecciones frecuentes (sistema inmune comprometido)</li>
        <li>Cambios de humor, ansiedad o irritabilidad</li>
        <li>Pérdida de libido</li>
        <li>Dificultad para recuperarte de entrenamientos</li>
      </ul>

      <h3>Estrategias basadas en evidencia para manejar el cortisol</h3>

      <h4>1. Prioriza el sueño (no negociable)</h4>
      <p>7-9 horas de sueño de calidad. El sueño insuficiente puede elevar el cortisol hasta un 45%.</p>

      <h4>2. Reduce la restricción calórica extrema</h4>
      <p>Los déficits calóricos mayores al 20-25% elevan significativamente el cortisol. Sé paciente con tu pérdida de grasa.</p>

      <h4>3. Incorpora días de descanso activo</h4>
      <p>No entrenes duro 7 días a la semana. Tu cuerpo necesita recuperación real.</p>

      <h4>4. Practica técnicas de gestión del estrés</h4>
      <p>La meditación, respiración profunda y yoga han demostrado reducir los niveles de cortisol en estudios controlados.</p>

      <h4>5. Pasa tiempo en la naturaleza</h4>
      <p>20 minutos en espacios verdes reducen significativamente los marcadores de estrés.</p>

      <h4>6. Mantén relaciones sociales de calidad</h4>
      <p>El aislamiento social aumenta el cortisol. Las conexiones humanas genuinas lo reducen.</p>

      <h4>7. Considera la suplementación estratégica</h4>
      <ul>
        <li><strong>Ashwagandha:</strong> Reduce el cortisol en un 27-30% según estudios</li>
        <li><strong>Magnesio:</strong> Esencial para la respuesta al estrés</li>
        <li><strong>Omega-3:</strong> Reduce la inflamación y modera la respuesta al estrés</li>
      </ul>

      <h3>El balance es la clave</h3>
      <p>No puedes (ni debes) eliminar todo el estrés. El objetivo es desarrollar <strong>resiliencia al estrés</strong> y crear períodos consistentes de recuperación. Tu cuerpo necesita tanto la activación (simpático) como la relajación (parasimpático).</p>

      <p><strong>Mensaje final:</strong> Si estás haciendo "todo bien" pero no ves resultados, el estrés oculto podría ser tu mayor enemigo. Abordarlo no es debilidad, es estrategia inteligente.</p>

      <p><em>Referencias: Hewagalamulage et al. (2016) Front Endocrinol; Chandola et al. (2006) Obesity; Adam et al. (2017) Psychoneuroendocrinology</em></p>
    `,
  },
  {
    slug: "ayuno-intermitente-para-quien",
    title: "Ayuno Intermitente: ¿Para Quién Funciona?",
    excerpt:
      "Revisión objetiva de protocolos de ayuno basada en tu estilo de vida, metabolismo y objetivos personales.",
    category: "nutricion",
    categoryLabel: "Nutrición",
    author: "Dr. Carlos Mendoza",
    date: "2025-11-28",
    readTime: "12 min",
    image: "/healthy-protein-bowl-dark-moody-food-photography.jpg",
    tags: ["Ayuno Intermitente", "Metabolismo", "Pérdida de Grasa", "Protocolos"],
    content: `
      <h2>La verdad sobre el ayuno intermitente</h2>
      <p>El ayuno intermitente (AI) se ha convertido en una de las estrategias nutricionales más populares. Pero más allá del hype, ¿funciona para todos? La respuesta corta: <strong>depende completamente de tu contexto individual.</strong></p>

      <h3>¿Qué es el ayuno intermitente?</h3>
      <p>El AI no es una dieta en el sentido tradicional, sino un <strong>patrón alimenticio</strong> que alterna entre períodos de ayuno y alimentación. Los protocolos más comunes incluyen:</p>
      <ul>
        <li><strong>16/8:</strong> 16 horas de ayuno, 8 horas de alimentación (el más popular)</li>
        <li><strong>18/6:</strong> 18 horas de ayuno, 6 horas de alimentación</li>
        <li><strong>20/4 (Warrior Diet):</strong> 20 horas de ayuno, 4 horas de alimentación</li>
        <li><strong>5:2:</strong> Comer normalmente 5 días, restricción severa 2 días</li>
        <li><strong>Ayuno en días alternos:</strong> Alternar entre días de alimentación normal y ayuno</li>
      </ul>

      <h3>La ciencia: ¿Qué dice realmente la evidencia?</h3>
      
      <h4>Pérdida de grasa</h4>
      <p>Los estudios muestran que el AI <strong>puede ser efectivo para la pérdida de grasa, PERO no es superior a la restricción calórica tradicional</strong> cuando las calorías totales son iguales. Un metaanálisis de 2020 concluyó que el AI funciona principalmente porque facilita un déficit calórico, no por "magia metabólica".</p>

      <h4>Salud metabólica</h4>
      <p>El AI puede mejorar:</p>
      <ul>
        <li>Sensibilidad a la insulina</li>
        <li>Marcadores de inflamación</li>
        <li>Perfil lipídico (colesterol y triglicéridos)</li>
        <li>Autofagia celular (limpieza de células dañadas)</li>
      </ul>

      <h4>Preservación de masa muscular</h4>
      <p>Aquí es donde se pone interesante. Mientras consumas suficiente proteína y entrenes con resistencia, el AI <strong>no causa pérdida muscular significativa</strong> comparado con dietas tradicionales. Pero tampoco es superior para construir músculo.</p>

      <h3>¿Para quién funciona mejor el AI?</h3>

      <h4>✅ Candidatos ideales:</h4>
      <ul>
        <li><strong>Personas que no tienen hambre por la mañana:</strong> Si naturalmente no desayunas, el AI es perfecto</li>
        <li><strong>Individuos con horarios ocupados:</strong> Menos comidas = menos preparación y decisiones</li>
        <li><strong>Quienes prefieren comidas grandes:</strong> AI permite comidas más satisfactorias</li>
        <li><strong>Personas con tendencia a picotear:</strong> La estructura ayuda a controlar el "grazing"</li>
        <li><strong>Profesionales con horarios irregulares:</strong> La flexibilidad del AI es útil</li>
      </ul>

      <h4>❌ No recomendado para:</h4>
      <ul>
        <li><strong>Personas con historial de desórdenes alimenticios:</strong> Puede desencadenar patrones restrictivos</li>
        <li><strong>Atletas de alto rendimiento:</strong> Necesitan timing óptimo de nutrientes</li>
        <li><strong>Mujeres con ciclos menstruales irregulares:</strong> El AI puede afectar hormonas femeninas</li>
        <li><strong>Personas con trabajo físico intenso:</strong> Necesitan energía constante</li>
        <li><strong>Individuos con diabetes tipo 1:</strong> Requiere supervisión médica estricta</li>
        <li><strong>Embarazadas o lactando:</strong> Necesidades nutricionales específicas</li>
      </ul>

      <h3>Consideraciones por género</h3>
      
      <h4>Mujeres y ayuno intermitente</h4>
      <p>Las mujeres tienden a ser más sensibles a la restricción calórica y temporal. El AI puede afectar:</p>
      <ul>
        <li>Regulación hormonal (estrógeno, progesterona)</li>
        <li>Función tiroidea</li>
        <li>Fertilidad</li>
      </ul>
      <p><strong>Recomendación:</strong> Las mujeres suelen responder mejor a protocolos más suaves (14/10 o 12/12) y evitar el AI durante la fase lútea del ciclo.</p>

      <h4>Hombres y ayuno intermitente</h4>
      <p>Los hombres generalmente toleran mejor el AI sin efectos hormonales negativos significativos. Pueden usar protocolos más agresivos (16/8, 18/6) con menos preocupaciones.</p>

      <h3>Errores comunes del ayuno intermitente</h3>
      <ol>
        <li><strong>Romper el ayuno con alimentos de baja calidad:</strong> Tu primera comida importa. Prioriza proteína y nutrientes</li>
        <li><strong>No consumir suficiente proteína:</strong> Necesitas 1.6-2.2g por kg de peso en tu ventana de alimentación</li>
        <li><strong>Ignorar las calorías totales:</strong> El AI no cancela las leyes de la termodinámica</li>
        <li><strong>Entrenar en ayuno sin adaptación:</strong> El rendimiento puede sufrir inicialmente</li>
        <li><strong>Usar el AI como excusa para atracones:</strong> "Tengo que comer todo en 8 horas" no funciona</li>
      </ol>

      <h3>Cómo implementar el AI correctamente</h3>

      <h4>Paso 1: Empieza gradualmente</h4>
      <p>No saltes directamente a 16/8. Comienza con 12/12 y aumenta progresivamente.</p>

      <h4>Paso 2: Mantén la hidratación</h4>
      <p>Agua, café negro, té sin azúcar están permitidos durante el ayuno.</p>

      <h4>Paso 3: Planifica tu primera comida</h4>
      <p>Incluye proteína de calidad, vegetales, carbohidratos complejos y grasas saludables.</p>

      <h4>Paso 4: Escucha a tu cuerpo</h4>
      <p>Si experimentas mareos, fatiga extrema, irritabilidad severa o problemas menstruales, ajusta o detén el protocolo.</p>

      <h3>Alternativas al AI tradicional</h3>
      <p>Si el AI no encaja contigo, considera:</p>
      <ul>
        <li><strong>Distribución calórica estratégica:</strong> Comidas más pequeñas temprano, más grandes tarde</li>
        <li><strong>Sin snacks:</strong> 3 comidas sólidas sin picoteo</li>
        <li><strong>Ayuno circadiano:</strong> Come con luz natural, ayuna de noche</li>
      </ul>

      <h3>Conclusión: Herramienta, no religión</h3>
      <p>El AI es una <strong>herramienta</strong>, no la única solución. Funciona excepcionalmente bien para algunas personas y es miserable para otras. La mejor dieta es la que puedes mantener a largo plazo mientras disfrutas tu vida.</p>

      <p><strong>Pregúntate:</strong> ¿El AI facilita o complica tu vida? ¿Te sientes bien física y mentalmente? ¿Puedes mantenerlo indefinidamente? Si la respuesta es sí, adelante. Si no, hay infinitas formas de alcanzar tus objetivos.</p>

      <p><em>Referencias: Tinsley & La Bounty (2015) J Int Soc Sports Nutr; Moro et al. (2016) J Transl Med; Harris et al. (2018) JAMA</em></p>
    `,
  },
  {
    slug: "entrenar-casa-equipo-minimo",
    title: "Entrenar en Casa: Equipo Mínimo",
    excerpt: "Cómo lograr resultados reales con inversión mínima. Ciencia del entrenamiento de resistencia progresiva.",
    category: "entrenamiento",
    categoryLabel: "Entrenamiento",
    author: "Lic. María Torres",
    date: "2025-11-20",
    readTime: "7 min",
    image: "/home-workout-setup-minimal-equipment.jpg",
    tags: ["Entrenamiento en Casa", "Calistenia", "Equipo Mínimo", "Progresión"],
    content: `
      <h2>No necesitas un gimnasio completo para transformar tu físico</h2>
      <p>La industria del fitness quiere que creas que necesitas miles de dólares en equipo. La verdad: <strong>puedes construir un físico increíble con menos de $200 en equipo</strong>. Lo que necesitas es conocimiento sobre progresión y consistencia.</p>

      <h3>El equipo esencial (inversión: ~$150-200)</h3>
      <ul>
        <li><strong>Par de mancuernas ajustables (10-25kg):</strong> $80-120 - La mejor inversión</li>
        <li><strong>Banda de resistencia (conjunto):</strong> $20-30 - Versátil y portátil</li>
        <li><strong>Barra de dominadas de puerta:</strong> $25-40 - Para la espalda</li>
        <li><strong>Tapete de yoga:</strong> $15-25 - Comodidad en ejercicios de suelo</li>
        <li><strong>Opcional: TRX o anillas:</strong> $30-60 - Excelente para variedad</li>
      </ul>

      <h3>El principio que lo hace funcionar: Sobrecarga progresiva</h3>
      <p>No importa si usas barras olímpicas o botellas de agua. <strong>Si no progresas, no creces.</strong> La sobrecarga progresiva significa aumentar consistentemente la demanda en tus músculos mediante:</p>
      <ul>
        <li>Más peso (intensidad)</li>
        <li>Más repeticiones (volumen)</li>
        <li>Mejor técnica (calidad)</li>
        <li>Menos descanso (densidad)</li>
        <li>Mayor rango de movimiento (ROM)</li>
        <li>Tempo más lento (tiempo bajo tensión)</li>
      </ul>

      <h3>Rutina completa con equipo mínimo (3-4 días/semana)</h3>

      <h4>Día 1: Empuje (Pecho, Hombros, Tríceps)</h4>
      <ul>
        <li><strong>Flexiones con variaciones:</strong> 3-4 sets de 12-20 reps
          <ul>
            <li>Progresión: regulares → declinadas → arqueras → explosivas</li>
          </ul>
        </li>
        <li><strong>Press de hombros con mancuernas:</strong> 3 sets de 8-12 reps</li>
        <li><strong>Elevaciones laterales:</strong> 3 sets de 12-15 reps</li>
        <li><strong>Extensiones de tríceps:</strong> 3 sets de 12-15 reps</li>
        <li><strong>Fondos en silla:</strong> 3 sets al fallo</li>
      </ul>

      <h4>Día 2: Jalón (Espalda, Bíceps)</h4>
      <ul>
        <li><strong>Dominadas o negativas:</strong> 4-5 sets de 5-10 reps
          <ul>
            <li>Usa banda para asistencia si necesario</li>
          </ul>
        </li>
        <li><strong>Remo con mancuernas:</strong> 3 sets de 10-12 reps cada brazo</li>
        <li><strong>Remo invertido (si tienes TRX/anillas):</strong> 3 sets de 12-15 reps</li>
        <li><strong>Curl de bíceps con mancuernas:</strong> 3 sets de 10-12 reps</li>
        <li><strong>Pullover con mancuerna:</strong> 3 sets de 12-15 reps</li>
      </ul>

      <h4>Día 3: Piernas y Core</h4>
      <ul>
        <li><strong>Sentadillas búlgaras con mancuernas:</strong> 4 sets de 10-12 reps cada pierna</li>
        <li><strong>Peso muerto rumano con mancuernas:</strong> 4 sets de 10-12 reps</li>
        <li><strong>Zancadas caminando:</strong> 3 sets de 12 reps cada pierna</li>
        <li><strong>Elevaciones de pantorrilla a una pierna:</strong> 4 sets de 15-20 reps</li>
        <li><strong>Plancha (progresiones):</strong> 3-4 sets de 30-60 segundos</li>
        <li><strong>Rueda abdominal o rollout:</strong> 3 sets de 10-15 reps</li>
      </ul>

      <h3>Estrategias de progresión sin más peso</h3>

      <h4>1. Tempo controlado</h4>
      <p>Usa un tempo de 3-1-1-1 (3 segundos bajada, 1 segundo pausa, 1 segundo subida, 1 segundo contracción). Esto aumenta el tiempo bajo tensión sin peso adicional.</p>

      <h4>2. Series de pausas</h4>
      <p>Haz una serie hasta el fallo, descansa 15 segundos, continúa hasta el fallo otra vez. Repite 2-3 veces.</p>

      <h4>3. Entrenamiento unilateral</h4>
      <p>Ejercicios a una pierna o un brazo son significativamente más difíciles y permiten progresión.</p>

      <h4>4. Variaciones avanzadas</h4>
      <p>Flexión → Flexión diamante → Flexión en pica → Flexión en parada de manos. Cada variación es un nuevo nivel de dificultad.</p>

      <h3>Entrenamiento sin equipo: Calistenia efectiva</h3>
      <p>¿Ni siquiera tienes $50 para invertir? Puedes entrenar efectivamente con CERO equipo:</p>

      <h4>Empuje:</h4>
      <ul>
        <li>Todas las variaciones de flexiones</li>
        <li>Pino contra pared (progresión a flexión vertical)</li>
        <li>Fondos en paralelas (usa dos sillas)</li>
      </ul>

      <h4>Jalón:</h4>
      <ul>
        <li>Remo invertido bajo una mesa resistente</li>
        <li>Dominadas en parque o marco de puerta reforzado</li>
        <li>Isométricos de espalda</li>
      </ul>

      <h4>Piernas:</h4>
      <ul>
        <li>Sentadillas pistol (a una pierna)</li>
        <li>Sentadillas jump</li>
        <li>Zancadas caminando con peso corporal</li>
        <li>Hip thrusts a una pierna</li>
      </ul>

      <h3>La verdad sobre las limitaciones</h3>
      <p>¿Puedes construir el físico de un culturista profesional en casa con equipo mínimo? Probablemente no. Pero puedes:</p>
      <ul>
        <li>Perder toda la grasa que desees</li>
        <li>Construir un físico atlético y funcional</li>
        <li>Ganar 10-15kg de músculo en tus primeros 2-3 años</li>
        <li>Ser más fuerte y más saludable que el 90% de la población</li>
      </ul>

      <h3>Errores comunes del entrenamiento en casa</h3>
      <ol>
        <li><strong>No registrar progreso:</strong> Lleva un diario de entrenamiento. Si no lo mides, no mejora</li>
        <li><strong>Hacer siempre lo mismo:</strong> Cambia variables cada 4-6 semanas</li>
        <li><strong>Ignorar la nutrición:</strong> No puedes entrenar una mala dieta fuera de existencia</li>
        <li><strong>No descansar suficiente:</strong> El músculo crece durante la recuperación, no durante el entrenamiento</li>
      </ol>

      <h3>Plan de acción</h3>
      <ol>
        <li><strong>Semana 1-2:</strong> Aprende la técnica correcta de cada ejercicio</li>
        <li><strong>Semana 3-8:</strong> Enfócate en aumentar repeticiones y sets</li>
        <li><strong>Semana 9-12:</strong> Incorpora variaciones más difíciles</li>
        <li><strong>Mes 4+:</strong> Periodización: alterna bloques de fuerza, hipertrofia y resistencia</li>
      </ol>

      <h3>Conclusión</h3>
      <p>El equipo no te transforma. <strong>El esfuerzo consistente y progresivo te transforma.</strong> Un programa simple ejecutado perfectamente supera a un programa perfecto ejecutado mal. Empieza donde estás, usa lo que tienes, haz lo que puedas.</p>

      <p><em>El mejor equipo de gimnasio es el que usas regularmente.</em></p>
    `,
  },
  {
    slug: "sueno-recuperacion-muscular",
    title: "Sueño y Recuperación Muscular",
    excerpt: "Por qué dormir bien es tu mejor suplemento. Impacto del sueño en síntesis proteica y rendimiento.",
    category: "salud-mental",
    categoryLabel: "Salud Mental",
    author: "Dra. Ana Jiménez",
    date: "2025-11-15",
    readTime: "9 min",
    image: "/peaceful-bedroom-dark-cozy-sleep-environment.jpg",
    tags: ["Sueño", "Recuperación", "Hormonas", "Rendimiento", "Hipertrofia"],
    content: `
      <h2>El suplemento más poderoso que ignoras</h2>
      <p>Pasas horas investigando el mejor pre-entreno, la proteína perfecta, los suplementos más efectivos. Pero hay un "suplemento" gratuito que es más potente que todos esos juntos: <strong>el sueño de calidad.</strong></p>

      <p>No dormir suficiente es sabotear activamente tus resultados, sin importar cuán perfecta sea tu dieta o rutina de entrenamiento.</p>

      <h3>¿Qué sucede durante el sueño?</h3>
      <p>El sueño no es tiempo perdido. Es cuando ocurre la magia:</p>

      <h4>Fase NREM (sueño profundo)</h4>
      <ul>
        <li>Liberación máxima de hormona de crecimiento (GH)</li>
        <li>Reparación de tejido muscular</li>
        <li>Síntesis proteica acelerada</li>
        <li>Restauración del sistema nervioso central</li>
      </ul>

      <h4>Fase REM (sueño paradójico)</h4>
      <ul>
        <li>Consolidación de la memoria motora (aprendizaje de movimientos)</li>
        <li>Regulación emocional</li>
        <li>Creatividad y resolución de problemas</li>
      </ul>

      <h3>La ciencia del sueño y el músculo</h3>

      <h4>1. Síntesis proteica</h4>
      <p>Un estudio de 2011 publicado en <em>Medicine & Science in Sports & Exercise</em> encontró que la privación del sueño reduce la síntesis de proteína muscular en hasta un <strong>18%</strong>. Estás entrenando duro pero no le das a tu cuerpo el tiempo necesario para reparar y construir.</p>

      <h4>2. Hormonas anabólicas vs. catabólicas</h4>
      <p><strong>Con sueño adecuado (7-9 horas):</strong></p>
      <ul>
        <li>Hormona de crecimiento: Pico durante sueño profundo</li>
        <li>Testosterona: Se restaura durante la noche</li>
        <li>IGF-1: Optimizado para crecimiento</li>
        <li>Cortisol: Bajo y controlado</li>
      </ul>

      <p><strong>Con sueño insuficiente (<6 horas):</strong></p>
      <ul>
        <li>GH reducida en 70%</li>
        <li>Testosterona disminuye 10-15% (equivalente a envejecer 10 años)</li>
        <li>Cortisol elevado crónicamente (catabólico)</li>
      </ul>

      <h4>3. Pérdida de grasa</h4>
      <p>Estudio fascinante: Dos grupos en déficit calórico idéntico. Grupo A durmió 8.5 horas, Grupo B solo 5.5 horas.</p>
      <p><strong>Resultados:</strong></p>
      <ul>
        <li>Ambos perdieron peso similar</li>
        <li>Grupo A: 50% de la pérdida fue grasa</li>
        <li>Grupo B: Solo 25% fue grasa, el resto fue músculo</li>
      </ul>
      <p>Dormir poco = perder músculo en lugar de grasa.</p>

      <h4>4. Rendimiento deportivo</h4>
      <p>La falta de sueño afecta:</p>
      <ul>
        <li>Fuerza máxima: -10-20%</li>
        <li>Velocidad de sprint: -5-10%</li>
        <li>Tiempo de reacción: +300ms</li>
        <li>Resistencia cardiovascular: -15%</li>
        <li>Riesgo de lesión: +60%</li>
      </ul>

      <h3>El sueño y tu metabolismo</h3>

      <h4>Leptina y Grelina: Las hormonas del hambre</h4>
      <p><strong>Leptina:</strong> Te dice "estoy satisfecho, deja de comer"</p>
      <p><strong>Grelina:</strong> Te dice "tengo hambre, necesito comer"</p>

      <p>Una noche de mal sueño:</p>
      <ul>
        <li>Leptina ↓ 18%</li>
        <li>Grelina ↑ 28%</li>
        <li>Resultado: 300-400 calorías extra consumidas al día siguiente</li>
      </ul>

      <p>Además, prefieres alimentos altos en carbohidratos y grasas. No es falta de fuerza de voluntad, es biología.</p>

      <h4>Sensibilidad a la insulina</h4>
      <p>Una semana de sueño insuficiente puede reducir la sensibilidad a la insulina en un 30%, comparable a estados prediabéticos. Esto significa:</p>
      <ul>
        <li>Más grasa almacenada</li>
        <li>Menos músculo construido</li>
        <li>Mayor inflamación</li>
        <li>Más fatiga</li>
      </ul>

      <h3>Optimización del sueño: Estrategias prácticas</h3>

      <h4>1. Higiene del sueño (fundamentales)</h4>
      <ul>
        <li><strong>Horario consistente:</strong> Acuéstate y despierta a la misma hora TODOS los días (sí, incluidos fines de semana)</li>
        <li><strong>Temperatura fresca:</strong> 16-19°C es óptimo para la mayoría</li>
        <li><strong>Oscuridad total:</strong> Usa cortinas blackout o antifaz</li>
        <li><strong>Sin ruido:</strong> Tapones para oídos o ruido blanco</li>
        <li><strong>Colchón y almohada de calidad:</strong> Pasas 1/3 de tu vida aquí, invierte</li>
      </ul>

      <h4>2. Luz y ritmo circadiano</h4>
      <ul>
        <li><strong>Mañana:</strong> Exponerte a luz natural brillante en los primeros 30-60 minutos (regula cortisol)</li>
        <li><strong>Noche:</strong> Reduce luz azul 2-3 horas antes de dormir (usa lentes bloqueadores o modo nocturno)</li>
        <li><strong>Evita:</strong> Pantallas brillantes justo antes de dormir</li>
      </ul>

      <h4>3. Timing de comidas y ejercicio</h4>
      <ul>
        <li><strong>Última comida:</strong> 2-3 horas antes de dormir</li>
        <li><strong>Carbohidratos nocturnos:</strong> Pueden ayudar (aumentan serotonina → melatonina)</li>
        <li><strong>Ejercicio intenso:</strong> Termina al menos 3 horas antes de dormir</li>
        <li><strong>Caminata ligera:</strong> Post-cena puede ayudar con la digestión</li>
      </ul>

      <h4>4. Cafeína y estimulantes</h4>
      <p>La vida media de la cafeína es 5-6 horas. Si te acuestas a las 10 PM:</p>
      <ul>
        <li>Última taza de café: No después de 2 PM</li>
        <li>Pre-entreno: Solo si entrenas por la mañana</li>
      </ul>

      <h4>5. Alcohol: El destructor del sueño</h4>
      <p>El alcohol puede ayudarte a dormirte más rápido, pero:</p>
      <ul>
        <li>Fragmenta el sueño en la segunda mitad de la noche</li>
        <li>Reduce significativamente el sueño REM</li>
        <li>Disminuye la hormona de crecimiento</li>
        <li>Deshidrata y causa despertares</li>
      </ul>

      <h4>6. Suplementos basados en evidencia</h4>
      <ul>
        <li><strong>Magnesio (glicinato o treonato):</strong> 300-400mg, 1-2 horas antes de dormir</li>
        <li><strong>Glicina:</strong> 3g, mejora calidad del sueño profundo</li>
        <li><strong>L-teanina:</strong> 200mg, promueve relajación</li>
        <li><strong>Melatonina:</strong> 0.5-3mg (menos es más efectivo a largo plazo)</li>
        <li><strong>Ashwagandha:</strong> 300-600mg, reduce cortisol nocturno</li>
      </ul>

      <h3>Señales de que no estás recuperando bien</h3>
      <ul>
        <li>Despertarte cansado a pesar de 7-8 horas en cama</li>
        <li>Dependencia del café para funcionar</li>
        <li>Progreso estancado en el gimnasio</li>
        <li>Lesiones frecuentes o dolor persistente</li>
        <li>Cambios de humor, irritabilidad</li>
        <li>Sistema inmune débil (resfriados frecuentes)</li>
        <li>Antojos constantes de azúcar y carbohidratos</li>
      </ul>

      <h3>Medición y tracking</h3>
      <p>Considera usar:</p>
      <ul>
        <li><strong>Diario de sueño:</strong> Horas en cama, calidad subjetiva, despertares</li>
        <li><strong>Wearables:</strong> Oura Ring, Whoop, Garmin (miden fases del sueño, HRV)</li>
        <li><strong>HRV matutino:</strong> Indicador de recuperación del sistema nervioso</li>
      </ul>

      <h3>Conclusión: Prioridad número uno</h3>
      <p>Si tuviera que elegir entre:</p>
      <ul>
        <li>A) Entrenar 6 días/semana y dormir 5 horas</li>
        <li>B) Entrenar 3 días/semana y dormir 8 horas</li>
      </ul>
      <p><strong>Opción B gana siempre.</strong></p>

      <p>El sueño no es negociable. No es un lujo, es una necesidad fisiológica tan importante como la comida y el agua. Si quieres:</p>
      <ul>
        <li>Construir músculo</li>
        <li>Perder grasa</li>
        <li>Mejorar rendimiento</li>
        <li>Vivir más tiempo</li>
        <li>Sentirte mejor</li>
      </ul>

      <p><strong>Empieza por dormir bien.</strong> Es el fundamento sobre el cual todo lo demás se construye.</p>

      <p><em>Referencias: Dattilo et al. (2011) Med Sci Sports Exerc; Leproult & Van Cauter (2011) JAMA; Nedeltcheva et al. (2010) Ann Intern Med</em></p>
    `,
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
