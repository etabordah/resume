/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Estiven',
  lastName: 'Taborda',
  jobTitle: 'Mechanical Engineer',
  /* city: 'Medellín',
  postalCode: '',
  country: 'Colombia', */
  phone: '+573225595950',
  email: 'etabordah@gmail.com',
  education: [
    {
      school: 'Universidad Nacional de Colombia, Sede Medellín',
      degree: 'Bachelor',
      graduationDate: '2022',
      description: 'Mechanical Engineering'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/flegerto'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/etabordah/'
    },
  ],
  skills: [
    'Python',
    'Data Analysis',
    'Excel',
    'PostgreSQL',
    'Business Administration',
    'Leadership',
    'Communication',
    'Django',
    'JavaScript',
    'HTML',
    'CSS',
    'ReactJS',
    'Azure',
  ],
  languages: ['English', 'Spanish'],
  professionalSummary: `I am a young scientist with experience in Data Analysis, Academic Writing, Research, Business Administration, and recently, Machine Learning Algorithms (Python). My goal as a Data Analyst is to develop and provide solutions to improve data-driven decision-making.`,
  employmentHistory: [
    {
      jobTitle: 'Co-Founder and COO',
      startDate: 'Sep 2019',
      endDate: 'Jan 2022',
      employer: 'innLoop',
      city: 'Cozumel, MX',
      achievements: [
        'I co-founded a business in leather distribution',
        'Leather articles production.'
      ]
    },
    {
      jobTitle: 'Ph.D Scholar',
      startDate: 'Aug 2016',
      endDate: 'Dec 2022',
      employer: 'Tecnologico de Monterrey',
      city: 'Monterrey, MX',
      achievements: [
        'Joined as the first remote employee and worked with the founders to improve the performance and UX of the apps according to the business goals.',
        'Led team of 5 engineers and Coordinate with other teams to build a modular mobile app for iOS and Android with React Native.',
        'Developed native integrations to improve the UX of mobile apps, reaching more than 3 million downloads with Open Source side projects.',
      ]
    },
    {
      jobTitle: 'Visiting Scholar',
      startDate: 'Sep 2017',
      endDate: 'Mar 2018',
      employer: 'Massachusetts Institute of Technology',
      city: 'Cambridge, MA',
      achievements: [
        'Created the baseline for the development of reactive apps using new technologies such as MeteorJS and GraphQL for rapid prototyping.',
        'Contributed to configure continuous integration pipelines for new projects through cloud services with Azure and Visual Studio Team Services.'
      ]
    },
  ],
  photo: 'https://media-exp1.licdn.com/dms/image/C4E03AQEm4gujFwz_IQ/profile-displayphoto-shrink_200_200/0/1658476044678?e=1664409600&v=beta&t=lD2Lk3PnykmTT-MH_nbHlOUlT2gT9xCY693KVAUhmgA',
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