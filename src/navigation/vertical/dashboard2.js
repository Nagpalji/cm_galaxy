// import { Home, Circle, Facebook, Linkedin, Youtube, Chrome, Globe, Settings, Command, Twitter, Package, Play, Atsign, AtSign, Filter, Users  } from 'react-feather'
import { FaHome, Circle, FaFacebook, FaLinkedin, FaYoutube, FaChrome, Globe, Settings, Command, FaTwitter, Package, FaPlay, FaAmazon, FaFilter, FaUserAlt  } from 'react-icons/fa'
// function heading(e) {
//   alert("hello")
//   e.preventDefault()
//   session.storage.setItem('label', 'test')
  
// }
export default [
  {
    id: 'eCommerceDash',
    title: 'Dashboard',
    // icon: <Home size={20} />,
    icon: <FaHome size={20} />,
    navLink: '/overall-snapshot'
  },
  {
    id: 'eCommerceDash',
    title: 'Google Performance',
    // icon: <Chrome size={12} />,
    icon: <FaChrome size={12} />,
    navLink: '/dashboard/ecommerce',
    // hits: sessionStorage.setItem("test", "test"),
    onChange: {heading}
  },
  {
    id: 'eCommerceDash',
    title: 'Facebook Performance',
    // icon: <Facebook size={12} />,
    icon: <FaFacebook size={12} />,
    navLink: '/facebook-performance'
  },
  {
    id: 'eCommerceDash',
    title: 'Linkedin Performance',
    // icon: <Linkedin size={12} />,
    icon: <FaLinkedin size={12} />,
    navLink: '/linkedin-performance'
  },
  {
    id: 'eCommerceDash',
    title: 'Youtube Performance',
    // icon: <Youtube size={12} />,
    icon: <FaYoutube size={12} />,
    navLink: '/youtube-performance'
  },
  {
    id: 'eCommerceDash',
    title: 'Amazon Performance',
    // icon: <AtSign size={12} />,
    icon: <FaAmazon size={12} />,
    navLink: '/amazon-performance'
  },
  {
    id: 'eCommerceDash',
    title: 'Twitter Performance',
    // icon: <Twitter size={12} />,
    icon: <FaTwitter size={12} />,
    navLink: '/twitter-performance'
  },
  {
    id: 'eCommerceDash',
    title: 'DV360 Performance',
    // icon: <Play size={12} />,
    icon: <FaPlay size={12} />,
    navLink: '/dv360-performance'
  },
  {
    id: 'eCommerceDash',
    title: 'Lead Management',
    // icon: <Filter size={12} />,
    icon: <FaFilter size={12} />,
    navLink: '/lead-management'
  },
  {
    id: 'eCommerceDash',
    title: 'Manage Users',
    // icon: <Users size={12} />,
    icon: <FaUserAlt size={12} />,
    navLink: '/manage-user/user/list'
  }
  // {
  //   id: 'eCommerceDash',
  //   title: 'Lead Management System',
  //   icon: <Command size={20} />,
  //   externalLink: true,
  //   newTab: true,
  //   color: '#fff',
  //   badge: 'light-danger badgedesignremove',
  //   badgeText: 'Lead Management System',
  //   navLink: 'http://cmgalaxy.com/'
  // }
  // {
  //   header: 'Cm Galaxy'
  // }
  // {
  //   id: 'dashboards',
  //   title: 'Dashboards',
  //   icon: <Home size={20} />,
  //   badge: 'light-warning',
  //   badgeText: '6',
  //   children: [
  //     {
  //       id: 'analyticsDash',
  //       title: 'Analytics',
  //       icon: <Circle size={12} />,
  //       navLink: '/dashboard/analytics'
  //     }
  //   ]
  // }
]
