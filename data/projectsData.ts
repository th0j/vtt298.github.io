interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Fancy screenshot',
    description: 'Make your screenshot fancy in seconds',
    href: 'https://fancyscreenshot.com',
    imgSrc: '/static/images/projects/fancyscreeenshot.png',
  }
]

export default projectsData
