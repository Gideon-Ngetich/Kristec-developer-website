import React from 'react'
import Nav from '../components/Navbar'
import PageFooter from '../components/Footer'

const About = () => {
    const bgImg = 'https://wallpapers.com/images/hd/information-technology-1920-x-1080-background-l9e9h8wkj7c474fr.jpg'

    // const [loading, setLoading] = useState(true);

    // useEffect(() =>{
    //     const timer = setTimeout(() =>{
    //         setLoading(false)
    //     }, 3000)

    //     return () => clearTimeout(timer)
    // }, [])

    // if(loading){
    //     return <Loader />
    // }

    return (
        <>
            <div>
                <div>
                    <Nav />
                </div>
                <div>
                    <div
                        className="bg-contain bg-fixed bg-opacity-100 h-80 md:h-96 lg:h-120 xl:h-160 w-full flex justify-center items-center"
                        style={{ backgroundImage: `url(${bgImg})` }}
                    >
                        <p className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-extrabold text-white" style={{fontFamily: 'DM Serif Display'}}>
                            About Us
                        </p>
                    </div>
                </div>
                <div className='m-2 lg:m-10 xl:m-10 2xl:m-10 p-5 lg:p-10 xl:p-10 2xl:p-10'>
                    <div className='text-xl font-bold m-2 lg:m-5 xl:m-5 2xl:m-5 px-5 text-orange-600 border-l-4 border-blue-600'>WHO WE ARE</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid delectus doloribus ut fugit esse similique, iure dolorum at incidunt, ea pariatur iste, aut quas quod vitae eum repudiandae nihil officiis. Voluptatem laudantium commodi, in adipisci nisi optio doloremque reiciendis, reprehenderit voluptatibus hic voluptatum voluptate similique, est odit. Libero eligendi aliquam, eos possimus pariatur non voluptatibus quam, veritatis officia voluptates animi facilis harum at veniam? Aspernatur corporis, aperiam voluptas harum eum vel totam voluptatum iste ad eos nostrum veniam? Maiores iste, excepturi, blanditiis expedita ratione tempore eaque sequi ducimus nulla, et ipsum ullam facere fugit id voluptatum optio. Consequatur est praesentium nulla architecto adipisci sint similique esse harum unde voluptate, libero neque dolorum quam! Sapiente obcaecati iusto a facere harum!</div>
                </div>

                <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-10 m-2 lg:m-10 xl:m-10 2xl:m-10 p-3 lg:p-5 xl:p-5 2xl:p-5 rounded-md'>
                    <div className='shadow-xl p-5'>
                        <div className='text-xl font-bold px-5 m-2 lg:m-5 xl:m-5 2xl:m-5 border-l-4 border-blue-600'>Our Mission</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum mollitia numquam sit nisi minima quisquam inventore quos, pariatur optio? Libero magni unde minus sunt quo, iure voluptatem distinctio odio illum, repudiandae est voluptate nam cum nulla consequatur esse reprehenderit repellendus recusandae hic in suscipit rerum ab autem. Qui nisi quis dolor mollitia dolore deserunt numquam minima porro eveniet autem?</div>
                    </div>
                    <div className='shadow-xl p-5 rounded-md'>
                        <div className='text-xl font-bold px-5 m-5 border-l-4 border-blue-600'>Our Vission</div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat maiores amet a asperiores ratione? Veritatis rerum quos inventore, blanditiis quis provident corrupti ab praesentium soluta voluptate! Omnis perspiciatis, animi velit facere obcaecati, eaque magnam aut minima labore nostrum natus porro. Sed est ex consequatur numquam magnam esse nemo neque! Corrupti rerum vitae quaerat labore id ducimus alias deleniti possimus cumque!</div>
                    </div>
                </div>

                <div className='m-2 lg:m-10 xl:m-10 2xl:m-10 p-3 lg:p-5 xl:p-5 2xl:p-5'>
                    <div className='text-xl font-bold px-5 m-2 lg:m-5 xl:m-5 2xl:m-5 border-l-4 border-blue-600'>OUR TEAM</div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non expedita aliquam reprehenderit minima veniam optio nulla hic voluptas quod odit dicta ad, ullam ex mollitia, necessitatibus aliquid ipsa, sapiente voluptatem odio rerum cum voluptatibus. Ad, libero? Perspiciatis commodi praesentium autem, tempore ex illo vel, voluptatibus facere dicta deserunt, alias nobis modi sint aliquid reiciendis officiis harum sequi dignissimos a?
                    </div>
                </div>

                <div>
                    <PageFooter />
                </div>
            </div>
        </>
    )
}

export default About