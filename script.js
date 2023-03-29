/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  window:'Estiven Taborda',
  firstName: 'Estiven',
  lastName: 'Taborda',
  jobTitle: 'Mechanical Engineeer',
  city: 'Medellín',
  postalCode: '',
  country: 'Colombia', 
  phone: '+573225595950',
  email: 'etabordah@gmail.com',
  t_education:'Education',
  education: [
    {
      school: 'Universidad Nacional de Colombia Sede Medellín',
      degree: "Bachelor's Degree",
      graduationDate: '2022',
      description: 'Mecanical Engineer'
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
    'Coding with Python, C++, Java and C#.',
    'Data Analysis.',
    'Web Scraping',
    'Advanced use of MS Excel.',
    'SolidWorks.',
    'SMAW, GMAW and Oxyfuel welding.'
  ],
  t_languages:'Languages',
  languages: ['English', 'Spanish'],
  t_aboutme:'Profile',
  professionalSummary: 
    'Mechanical Engineer with 1.5 years in the field of maintenance management, electronics and software. More than 5 years of experience leading businesses. With the ability to ensure the progress of projects, generate commitment in suppliers, work teams and generate closing of sales. Leader in the creation of projects for the improvement and automation of processes in organizations.',
  t_workexp:'Work Experience',
  employmentHistory: [
    {
      jobTitle: 'Junior Consultant',
      startDate: 'July 2021',
      endDate: 'Present',
      employer: 'Mantum S.A.S.',
      city: 'Medellin, Col',
      achievements: [
        'Analize data and use it to help our customers make the best decisions for their company',
        'Advise Maintenance Managers in the use of Mantum CMMS and about best maintenance practices.',
        'Program web automations using Python and Selenium.',
  'Automated administrative processes and document generation using AppsScript.',
        'Connected Google Calendar Api with Mántum CMMS',
  'Supported the management and development of IoT projects where more than 400 devices were installed throughout the country.',
        'Managed purchases with international suppliers in Europe and Asia.',
        'Programmed and developed the mechanical and electrical design of IoT devices as well as managing their manufacturing.',
        'Developed an APP for the coordination and registration of IoT installations and automatic generation of Delivery Certificates.',
        'Configured a MQTT server for device communication',


      ]
    },
    {
      jobTitle: 'Co-Founder y CEO',
      startDate: 'September 2019',
      endDate: 'June 2021',
      employer: 'Latincueros',
      city: 'Medellin, Col',
      achievements: [
        'In charge of commercial and administrative tasks.',
        'Developed an APP for accounting.',
        'Deeloped a software for measuring leather area using Computer Vision.',
        'Community manager.',
       ]
    },
    {
      jobTitle: 'Operations Assistant',
      startDate: 'November 2016',
      endDate: 'September 2019',
      employer: 'Pielesynegocios SAS',
      city: 'Medellin, Col',
      achievements: [
        'Production of leather goods.',
        'Administrative assistant.',
        'Assembly and welding of metal structures',
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