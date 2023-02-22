/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  window:'Estiven Taborda',
  firstName: 'Estiven',
  lastName: 'Taborda',
  jobTitle: 'Ingeniero Mecánico',
  city: 'Medellín',
  postalCode: '',
  country: 'Colombia', 
  phone: '+573225595950',
  email: 'etabordah@gmail.com',
  t_education:'Educación',
  education: [
    {
      school: 'Universidad Nacional de Colombia, Sede Medellín',
      degree: 'Universitario',
      graduationDate: '2022',
      description: 'Ingeniero Mecánico'
    }
  ],
  t_links:'Enlaces',
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/etabordah'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/etabordah/'
    },
  ],
  t_skills: 'Habilidades',
  skills: [
    'Programación en Python, C++, Java, C#.',
    'Análisis de Datos.',
    'Web Scraping',
    'MS Excel Avanzado.',
    'Diseño en SolidWorks.',
    'Soldadura en SMAW, GMAW y Oxicorte.'
  ],
  t_languages:'Lenguajes',
  languages: ['Inglés', 'Español'],
  t_aboutme:'Perfil',
  professionalSummary: 
    'Ingeniero Mecánico con 1 año y medio en el campo de la gestión del mantenimiento, electrónica y software. Más de 5 años de experiencia encabezando negocios. Con habilidad para garantizar el avance de los proyectos, generar compromiso en proveedores, equipos de trabajo y generar el cierre de ventas. Líder en la creación de proyectos para el mejoramiento y automatización de procesos en las organizaciones.',
  t_workexp:'Experiencia Laboral',
  employmentHistory: [
    {
      jobTitle: 'Consultor Junior',
      startDate: 'Jul 2021',
      endDate: 'Actualidad',
      employer: 'Mántum S.A.S.',
      city: 'Medellín, Col',
      achievements: [
        'Apoyé la gestión y desarrollo de proyectos IoT donde se instalaron más de 400 dispositivos a lo largo del país.',
        'Gestioné compras con proveedores internacionales de Europa y Asia.',
        'Diseño mecánico, electrónico, programación y gestión de fabricación de dispositivos IoT.',
        'Desarrollé una APP para la coordinación y registro de las instalaciones IoT y generación automática de Actas de Entrega.',
        'Configuración de servidor MQTT para comunicación de dispositivos.',
        'Asesoro Directores de Mantenimiento en el uso de Mántum CMMS y acerca de las mejores prácticas de mantenimiento.',
        'Programo automatizaciones web usando Python y Selenium.',
        'Automatización de procesos administrativos y generación de documentos usando AppsScript.',
        'Conexión de la Api Google Calendar con Mántum CMMS'
      ]
    },
    {
      jobTitle: 'Co-Fundador y CEO',
      startDate: 'Sep 2019',
      endDate: 'Jun 2021',
      employer: 'Latincueros',
      city: 'Medellín, Col',
      achievements: [
        'Estoy a cargo de las labores comerciales y administrativas.',
        'Desarrollé una APP para la contabilidad.',
        'Desarrollé un software para la medición del Área del Cuero utilizando Visión Artificial.',
        'Community manager.',
      ]
    },
    {
      jobTitle: 'Auxiliar de Operaciones',
      startDate: 'Nov 2016',
      endDate: 'Sep 2019',
      employer: 'Pielesynegocios SAS',
      city: 'Medellín, Col',
      achievements: [
        'Producción de artículos de cuero.',
        'Asistente administrativo.',
        'Montaje y soldadura de estructuras metálicas.',
      ]
    }
  ],
  photo: 'https://media.licdn.com/dms/image/C4E03AQEm4gujFwz_IQ/profile-displayphoto-shrink_200_200/0/1658476044678?e=1682553600&v=beta&t=ROOpj4dS5PJuI_EDGzjDmf2rtDg7CrsezW_H-2ppErw',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()