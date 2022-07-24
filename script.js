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
    'Business Administration',
    'Leadership'
  ],
  languages: ['English', 'Spanish'],
  professionalSummary: `I am a last semester Mechanical Engineering student, who has cursed part of the Maintenance Specialization and is passionate about using software and automatization. I have 5 years of experience with applying and inspecting SMAW and GMAW welds, oxi-fuel welding and other machinery and tools of metallurgy and building. I have lead groups of up to 49 people. Founder and C.E.O of Latincueros Leather Shop, were I implement LEAN manufacturing and Kaizen. I will also work to use technology to improve the customers’ buying experience at the store.`,
  employmentHistory: [
    {
      jobTitle: 'Co-Founder and COO',
      startDate: 'Sep 2019',
      endDate: 'Jan 2022',
      employer: 'Latincueros',
      city: 'Cozumel, MX',
      achievements: [
        'I co-founded a business in leather distribution',
        'Leather articles production.'
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