

function Home() {
    const posts = [{
        id: 1,
        title: "Getting Started with React and Tailwind CSS",
        author: "Michael Chen",
        timeRead: "5 min read",
        postedOn: "2 hours ago ",
        content: "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.",
        image: "profilepic.jpg",
        profilePic: "profilepic.jpg"
    },
    {
        id: 2,
        title: "The Future of Web Development",
        author: "Emily Rodriguez",
        timeRead: "8 min read",
        postedOn: "5 hours ago ",
        content: "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's coming next in the ever-evolving landscape.",
        image: "profilepic.jpg",
        profilePic: "profilepic.jpg"
    },
    {
        id: 3,
        title: "Mindful Living in a Digital Age",
        author: "David Kim",
        timeRead: "6 min read",
        postedOn: "1 day ago",
        content: "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental well-being while staying productive.",
        image: "profilepic.jpg",
        profilePic: "profilepic.jpg "
    },
    {
        id: 4,
        title: "Building Scalable Node.js Applications",
        author: "Lisa Park",
        timeRead: " 12 min read",
        postedOn: "2 days ago",
        content: "Learn the best practices for building robust and scalable Node.js applications. This guide covers architecture patterns, performance optimization, and deployment strategies for production environments.",
        image: "profilepic.jpg",
        profilePic: "profilepic.jpg"
    },
    {
        id: 5,
        title: "Design Systems: A Complete Guide",
        author: "Alex Thompson",
        timeRead: "10 min read",
        postedOn: "3 days ago",
        content: "Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish design tokens, and maintain consistency across your products.",
        image: "profilepic.jpg",
        profilePic: "profilepic.jpg"
    },
    {
        id: 6,
        title: "Introduction to Machine Learning",
        author: "sarah Johnson",
        timeRead: " 15 min read",
        postedOn: "4 days ago",
        content: "A beginner-friendly introduction to machine learning concepts and applications. Explore different algorithms, understand data preprocessing, and learn how to implement your first ML model.",
        image: "profilepic.jpg",
        profilePic: "profilepic.jpg"
    }]
    return (
        <>
            <div className="min-h-screen flex flex-col items-center pt-5 bg-gray-50">
                <p className="text-4xl font-bold">Welcome back, Dev Astra</p>
                <p className="text-lg text-gray-500 mt-4"> Discover amazing stories, insights, and ideas from our community of writers.</p>
                <div className=" flex gap-10 justify-around mt-5 ">
                    <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md">Write a New Post</button>
                    <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md" >View My Posts</button>
                </div>
                <div className="mt-5 flex gap-10 flex-wrap justify-center w-full rounded-lg shadow-lg pb-5"></div>

                {
                    posts.map((item) => (
                        <div className="w-96 bg-white shadow-lg rounded-lg" key={item.id}>
                            <div className="relative">
                                <img src={item.image} className="rounded-t-lg  shadow-lg h-52 w-96" />
                                <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3">Save</button>
                            </div>
                            <div className="flex gap-5 mt-3 px-2">
                                <img src={item.profilePic} alt="writing" className="rounded-full shadow-lg h-12 w-12 " />
                                <div>
                                    <p className="font-semibold">{item.author}</p>
                                    <p className="text-gray-500">{item.postedOn}-{item.timeRead}</p>
                                </div>
                            </div>
                            <div className="mt-3 px-3 flex flex-col gap-3">
                                <p className="text-2xl font-bold ">{item.title}</p>
                                <p className="text-gray-600">{item.content}</p>
                            </div>
                            <div className="mt-3 mb-3  px-3 flex justify-end">
                                <button className="text-blue-500 hover:underline cursor-pointer">Read more</button>
                            </div>
                        </div>

                    ))

                }
            </div>
        </>
    )

}
export default Home;