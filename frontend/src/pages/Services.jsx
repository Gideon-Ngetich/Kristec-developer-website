import React from 'react'
import Nav from '../components/Navbar'
import PageFooter from '../components/Footer'
import Content from '../../Data/Content.json'

const Services = () => {
    const bgImg = 'https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148865393.jpg'
    const bckImg = 'https://wallpapers.com/images/hd/abstract-soft-lines-white-screen-fb9bbohx0315k4d1.jpg'

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
                <Nav />
            </div>
            <div className='bg-repeat-y' style={{ backgroundImage: `url(${bckImg})` }}>
                <div
                    className="bg-cover bg-fixed bg-opacity-100 h-80 md:h-96 lg:h-120 xl:h-160 w-full flex justify-center items-center"
                    style={{ backgroundImage: `url(${bgImg})` }}
                >
                    <p className="text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-extrabold text-white" style={{fontFamily: 'DM Serif Display'}}>
                        Services
                    </p>
                </div>

                <div className='my-24'>
                    {
                        Content && Content.map((content, index) => {
                            return (
                                <div key={content.id}>
                                    <div className='mx-3 md:mx-16 lg:mx-16 xl:mx-16 2xl:mx-16 border-l-4 p-2 text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-bold border-blue-600'>{content.title}</div>
                                    <div className={`flex ${index % 2 === 0 ? 'md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse 2xl:flex-row-reverse' : 'md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'} flex-col md:flex-row w-full gap-10 h-1/4 my-10`}>
                                        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2'>
                                            <img src={content.image} alt="" className={`${index % 2 === 0 ? 'md:rounded-tl-full lg:rounded-tl-full xl:rounded-tl-full 2xl:rounded-tl-full md:rounded-bl-full lg:rounded-bl-full xl:rounded-bl-full 2xl:rounded-bl-full' : 'md:rounded-tr-full lg:rounded-tr-full xl:rounded-tr-full 2xl:rounded-tr-full md:rounded-br-full lg:rounded-br-full xl:rounded-br-full 2xl:rounded-br-full' }  h-full w-full`} />
                                        </div>
                                        <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col gap-10 m-0 md:m-5 lg:m-5 xl:m-5 2xl:m-5 px-5 md:px-12 lg:px-12 xl:px-12 2xl:p-12'>
                                            <span className='text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl'>{content.body}</span>
                                            <span className='text-blue-700 font-bold font tracking-wide cursor-pointer hover:text-blue-800 duration-200 md:px-10 px-5 lg:px-10 xl:px-10 2xl:px-10'>
                                                Get Service
                                                <i class="fa fa-long-arrow-right pl-2" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div>
                    <PageFooter />
                </div>
            </div>

        </>
    )
}

export default Services