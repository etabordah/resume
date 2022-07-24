/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Gustavo',
  lastName: 'Hernández Vargas',
  jobTitle: 'Data Engineer',
  /* city: 'Cozumel',
  postalCode: '77600',
  country: 'México', */
  phone: '+573113101122',
  email: 'gushdzv@gmail.com',
  education: [
    {
      school: 'Tecnológico de Monterrey',
      degree: 'Bachelor',
      graduationDate: '2014',
      description: 'Biotechnology Engineering'
    },
    {
      school: 'Tecnológico de Monterrey',
      degree: 'Ph.D.',
      graduationDate: '2020',
      description: 'Ph.D. in Biotechnology'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/gushdzv'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gushdzv/'
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
        'I co-founded a startup to produce biofuels from waste cooking oil.',
        'Led the production team to produce .'
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
  photo: 'https://drive.google.com/file/d/1gN02y1fvVNO3uDivj6J8_1ocacQ7GkE3/view',
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