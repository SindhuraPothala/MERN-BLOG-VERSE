import NavBar from "./NavBar";
function Home1() {

    const object = [{
        id: 1,
        name: 'Sarah johnson',
        img: 'profilepic.jpg',
        time: '2 hours ago ',
        head: 'Getting Started with React and Tailwind CSS',
        para: 'Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup to advanced techniques for modern web development.',
        read: '7 min read'
    }, {
        id: 2,
        name: 'Michael Chen',
        img: 'profilepic.jpg',
        time: '2 hours ago ',
        head: 'The Future of Web Development',
        para:"Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's coming next in the ever-evolving landscape.",
        read: '7 min read'
    }, {
        id: 3,
        name: 'Emily Rodriguez',
        img: 'profilepic.jpg',
        time: '2 hours ago ',
        head: 'Mindful Living in a Digital Age',
        para: 'In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental well-being while staying productive.',
        read: '7 min read'
    }, {
        id: 4,
        name: 'David Kim',
        img: 'profilepic.jpg',
        time: '2 hours ago',
        head: 'Building scalable node js applications',
        para: 'Learn the best practices for building robust and scalable Node.js applications. This guide covers architecture patterns, performance optimization, and deployment strategies for production environments.',
        read: '7 min read'
    }, {
        id: 5,
        name: 'Lisa Park',
        img: 'profilepic.jpg',
        time: '2 hours ago ',
        head: 'Design Systems: A Complete Guide',
        para: 'Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish design tokens, and maintain consistency across your products.',
        read: '7 min read'
    }, {
        id: 6,
        name: 'Alex Thompson',
        img: 'profilepic.jpg',
        time: '2 hours ago ',
        head: 'Introduction to Machine Learning',
        para: 'A beginner-friendly introduction to machine learning concepts and applications. Explore different algorithms, understand data preprocessing, and learn how to implement your first ML model.',
        read: '7 min read'
    }]
    return (
        <>
            <div className="flex min-h-screen flex-col justify-center items-center  py-2 ">
                <NavBar/>
                <h1 className="font-bold text-4xl mb-7 mt-4">Welcome to BlogVerse</h1>
                <h1 className="text-gray-500 text-xl text-center mb-7">Discover amazing stories, insights, and ideas from  our community of <br />writers.<button className="text-blue-500 hover:underline cursor-pointer">Sign in</button> to create your own posts and save your favorites.
                </h1>
                <div className="flex flex-wrap mt-5 w-full pb-5 gap-10 justify-center items-center ">
                    {/* </div><div className="w-1/3 h-1/3 border-1 border-gray-700 shadow-2xs flex  flex-col justify-center py-6"> */}
                    {object.map((item) => (
                        <div className="w-[26%] h-[27%] border-1 border-gray-300 shadow-2xs flex  flex-col justify-center items-center  rounded-2xl relative  hover:shadow-2xl ">

                            <div key={item.id}>
                                <img src={item.img} alt="Loading image" className="w-full h-1/3 rounded-t-2xl transition-transform duration-300  hover:scale-102 " />
                                <p className=" bg-blue-500 px-2 py-1 text-white m-auto rounded-xl text-center hover:bg-blue-800  absolute top-4 left-4 ">Technology</p>
                                <button  onClick={() => alert("This page has been saved")} className=" bg-white rounded-lg w-9 absolute top-4 right-4" >Save</button>
                                <div className="flex gap-3 py-5 px-3">
                                    <img src={item.img} alt="no profile" className="w-[50px] h-[50px] rounded-full object-cover " />
                                    <div>
                                        <p className="font-semibold sm:text-2xl">{item.name}</p>
                                        <div className="flex gap-3">
                                            <p>{item.time}</p>
                                            <p>{item.read}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-center justify-center flex-col items-center " >

                                    <h2 className="flex justify-center text-center flex-col font-bold text-1xl mb-4 ">{item.head}</h2>
                                    <p className="mb-4 px-5">{item.para}</p>
                                    <div className="border-1 border-gray-200 w-[90%] mb-4 "></div>
                                </div>
                                <div className="flex justify-between mb-4 px-4">
                                    <p>🕛{item.read}</p>
                                    <p className="text-blue-500 hover:cursor-pointer hover:underline">Read More</p>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
export default Home1;