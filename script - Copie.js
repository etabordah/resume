/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  window:'Estiven Taborda',
  firstName: 'Estiven',
  lastName: 'Taborda',
  jobTitle: 'Mechanical Engineer',
  city: 'Medellín',
  postalCode: '',
  country: 'Colombia', 
  phone: '+573225595950',
  email: 'etabordah@gmail.com',
  t_education:'Education',
  education: [
    {
      school: 'Universidad Nacional de Colombia, Sede Medellín',
      degree: 'College',
      graduationDate: '2022',
      description: 'Mechanical Engineering'
    }
  ],
  t_links:'Links',
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
  t_skills: 'Skills',
  skills: [
    'Python',
    'Data Analysis',
    'Excel',
    'Business Administration',
    'Leadership'
  ],
  t_languages:'Languages',
  languages: ['English', 'Spanish'],
  t_aboutme:'ABOUT ME',
  professionalSummary: 
    'Ingeniero Mecánico con 1 año y medio en el campo de la gestión del mantenimiento, electrónica y software. Más de 5 años de experiencia encabezando negocios. Con habilidad para garantizar el avance de los proyectos, generar compromiso en proveedores y equipos de trabajo y generar el cierre de ventas. Líder en la creación de proyectos para el mejoramiento y automatización de procesos en las organizaciones.',
  t_workexp:'WORK EXPERIENCE',
  employmentHistory: [
    {
      jobTitle: 'Junior Consultant',
      startDate: 'Jul 2021',
      endDate: 'Now',
      employer: 'Mántum S.A.S.',
      city: 'Medellín, Col',
      achievements: [
        'Coding web-Automatization codes with Selenium, Python and http requests',
        '"Integration" Mántum CMMS with Google calendar APIs',
        'Usage of Google cloud services',
        'Bussiness inteligence panels in datastudio',
        'Automatization of process and administrative documents with AppsScript',
        'MQTT server configuration',
        'APP developing to coordinate and document all the installation, troubleshooting and automatic generation of costumers delivery certificate',
        'Management of an IoT project with more than 400 devices',
        'Designing CAD, ECAD, coding and management of the fabrication of IoT Products',
        'Closing deals worldwide',
        'Installation of IoT products around the county',
        'Consulting maintenance managers about the use of an CMMS and the best practices in Maintenance'
      ]
    },
    {
      jobTitle: 'Co-Founder and CEO',
      startDate: 'Sep 2019',
      endDate: 'Jun 2021',
      employer: 'Latincueros',
      city: 'Medellín, Col',
      achievements: [
        'I co-founded a business in leather distribution',
        'Leather articles production.',
        'App developing to accountability',
        'Software developing to Measuring leather Area using computer vision',
        'Costumers service in Spanish and English',
        'Community manager',
      ]
    },
    {
      jobTitle: 'Administrative Assistant',
      startDate: 'Nov 2016',
      endDate: 'Sep 2019',
      employer: 'Pielesynegocios SAS',
      city: 'Medellín, Col',
      achievements: [
        'Leather articles production.',
        'Delivery final products and materials',
        'Administrative assistant',
        'Introducing process improving projects into the company'
      ]
    }
  ],
  photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQEm4gujFwz_IQ/profile-displayphoto-shrink_800_800/0/1658476044678?e=1664409600&v=beta&t=Jlbw0og_5QBjiSeTIQwpEtTw0TubWnFrRHsYpX43wjA',
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