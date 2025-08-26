/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  window:'Estiven Taborda',
  firstName: 'Estiven',
  lastName: 'Taborda',
  jobTitle: 'Data Analyst',
  city: 'Medellín',
  postalCode: '',
  country: 'Colombia', 
  phone: '+573226696950',
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
    'Programming Languages: Python, SQL, C++, C#, Java, JavaScript, PHP',
    'Databases & Storage: MySQL, PostgreSQL, Firestore, SQLite',
    'Data Tools: Pandas, NumPy, Pydantic',
    'Visualization Tools: Google Data Studio, Looker, Matplotlib',
    'Cloud: AWS, GCP',
    'ML Frameworks & Tools: Beautiful Soup, OpenCV, TensorFlow',
    'Others: Azure DevOps, FastAPI, Git, Jinja, Microsoft Excel'
  ],
  t_languages:'Languages',
  languages: ['English', 'Spanish'],
  t_aboutme:'Profile',
  professionalSummary: 
    "Data analyst with over 4 years of experience focusing on data integration, analysis, and visualization. Skilled in SQL, Python, and RestAPI, with a proven track record of designing efficient data pipelines and building dashboards for real-time decision-making. Industry expertise includes services, industrial operations, and IoT solutions for property management. Built a Python-powered web application and implemented a relational database to centralize and analyze sales and customer data, resulting in improved decision-making and a 10% boost in production capacity.",
  t_workexp:'Work Experience',
  employmentHistory: [
    {
      jobTitle: 'Consultant',
      startDate: 'February 2025',
      endDate: 'Present',
      employer: 'Latincueros',
      city: 'Medellin, Col',
      achievements: [
        'Analyzed company performance over the past 5 years and adjusted the business plan, resulting in improved production and more efficient budgeting.',
        'Build an ETL using Databricks and SQL.',
        'Developed a web application for tracking product costs and resolving production logistics problems, resulting in greater efficiency.'
      ]
    },
    {
      jobTitle: 'Consultant',
      startDate: 'July 2021',
      endDate: 'February 2025',
      employer: 'Mantum S.A.S.',
      city: 'Medellin, Col',
      achievements: [
        'Built an ETL using SQL and JavaScript, leveraging RestAPI and Looker Studio to enable real-time access to up-to-date information for decision-making for all the company\'s clients.',
        'Built descriptive Looker Studio dashboards using SQL to track key performance indicators and metrics in real-time for clients around the country.',
        'Analyzed data and guided maintenance and operations executives in implementing TPM, RCM, and RBM methodologies to improve performance by data-driven decision making for companies of services, industry and condominium management.',
        'Performed data cleaning processes using Excel, Python, and SQL to ensure data accuracy and consistency for clients.',
        'Developed web applications and microservices using Python, FastAPI, and Selenium, leveraging on RestAPI and GCP APIs to automate processes and integrate data across platforms, improving the effectiveness of the team for the company.',
        'Managed projects, gathered, defined, and prioritized product requirements, as a Product Owner using Agile methodologies SCRUM and Kanban with Azure DevOps to create detailed user stories, acceptance criteria, and maintained the product backlog maintaining effective communication with the stakeholders and the team.',
        'Experienced IoT MQTT interfaces using C++, Arduino, and GCP to enhance remote monitoring and provide early alerts. Designed and managed logistics to install over 400 devices throughout the country for the largest Colombian malls company.'
      ]
    },
    {
      jobTitle: 'EDUCATION',
      startDate: '2015',
      endDate: '2022',
      employer: 'Mechanical Engineer',
      city: 'Universidad Nacional De Colombia, Medellin',
      achievements: [
        'Used statistical methods using ImageJ and Python to improve business processes and performance of welding procedures for the naval industry.',
        'Built linear regression models using C++, Arduino, and GCP to analyze relationships between variables gathered by IoT sensors through MQTT for the largest Colombian malls company.'
    ]
    },
    {
      jobTitle: 'PROJECTS',
      startDate: '2020',
      endDate: 'July 2024',
      employer: 'Freelance',
      city: 'Medellin, Col',
      achievements: [
        'Designed optimization model using Python leveraging on PuLP to minimize costs and maximize profits, reaching an accuracy of 97.62% for the largest Colombian Bank dataton competition.',
        "Built a mobile app using Unity and C# to provide a convenient way for dentists to see dental scans of their patients on their smartphones for the Faculty of Mathematics's research project at the National University of Colombia.",
        'Developed a computer vision solution using Python and OpenCV to improve efficiency and accuracy in the measurement of leather hides for a leather shop business.',
        'Developed different simulation models and visualizations using Python and Matplotlib to explore different scenarios and outcomes in a research of online computation for a German University.',
        'Developed a web application using Python and SQL leveraging on FastAPI, Pydantic, Jinja, and AWS Lambda to manage the production, logistics, finance, and marketing for a leather shop company.'
    ]
    }
  ],
  photo: 'profile.jpg',
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