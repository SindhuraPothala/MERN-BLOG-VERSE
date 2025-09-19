 
import NavBar from './NavBar'
import './App.css'
import SignUp from './SignUp'
import SignIn from './SingIn'
import Home from './Home.jsx'

function App() {

  const posts = [{
    id: 1,
    title: "Getting Started with React and Tailwind CSS",
    author: "Michael Chen",
    timeRead: "5 min read",
    postedOn: "2 hours ago ",
    content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.",
    image: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg",
    profilePic: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg"
  },
  {
    id: 2,
    title: "The Future of Web Development",
    author: "Emily Rodriguez",
    timeRead: "8 min read",
    postedOn: "5 hours ago ",
    content: "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's coming next in the ever-evolving landscape.",
    image: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg",
    profilePic: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg"
  },
  {
    id: 3,
    title: "Mindful Living in a Digital Age",
    author: "David Kim",
    timeRead: "6 min read",
    postedOn: "1 day ago",
    content: "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental well-being while staying productive.",
    image: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg",
    profilePic: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg"
  },
  {
    id: 4,
    title: "Building Scalable Node.js Applications",
    author: "Lisa Park",
    timeRead: " 12 min read",
    postedOn: "2 days ago",
    content: "Learn the best practices for building robust and scalable Node.js applications. This guide covers architecture patterns, performance optimization, and deployment strategies for production environments.",
    image: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg",
    profilePic: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg"
  },
  {
    id: 5,
    title: "Design Systems: A Complete Guide",
    author: "Alex Thompson",
    timeRead: "10 min read",
    postedOn: "3 days ago",
    content: "Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish design tokens, and maintain consistency across your products.",
    image: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg",
    profilePic: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg"
  },
  {
    id: 6,
    title: "Introduction to Machine Learning",
    author: "sarah Johnson",
    timeRead: " 15 min read",
    postedOn: "4 days ago",
    content: "A beginner-friendly introduction to machine learning concepts and applications. Explore different algorithms, understand data preprocessing, and learn how to implement your first ML model.",
    image: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg",
    profilePic: "C:\Users\Sindhura\OneDrive\Desktop\MERN-BLOG-VERSE\frontend\public\profilepic.jpg"
  }]
  return (
    <div>
      <NavBar />
      {/*<SignUp/>*/}
      {/*<SignIn />*/}
      <Home/>

    </div>
  )
}

export default App
