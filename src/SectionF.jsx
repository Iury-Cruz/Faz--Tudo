import WhatsappBG from './icon/BG-riajulislam.png'
import EmailBG from './icon/BG-Pixel-perfect.png'
import LinkedinBG from './icon/BG-Ruslan-LKD.png'
import TelegramBG from './icon/BG-Ruslan-TLGM.png'
import FacebookBG from './icon/BG-Ruslan-FB.png'

function SectionF (){

    return (

        <>
            <section className="flex justify-center w-[100%]">
                <nav className="w-[100%]">
                    <ul className="flex flex-col justify-around w-[100%] h-[80vh] mt-3">
                        <li className="w-[100%] h-[12vh] bg-gray-900"><a href="" className='flex justify-around items-center h-full text-[30px] text-white font-mono underline hover:cursor-pointer hover:text-gray-500 ' ><img className='w-[50px]' src={WhatsappBG} alt="Whatsapp" />Acessar</a></li>
                        <li className="w-[100%] h-[12vh] bg-gray-900"><a href="" className='flex justify-around items-center h-full text-[30px] text-white font-mono underline hover:cursor-pointer hover:text-gray-500 ' ><img className='w-[50px]' src={LinkedinBG} alt="LinkedIn" />Acessar</a></li>
                        <li className="w-[100%] h-[12vh] bg-gray-900"><a href="" className='flex justify-around items-center h-full text-[30px] text-white font-mono underline hover:cursor-pointer hover:text-gray-500 ' ><img className='w-[50px]' src={FacebookBG} alt="Facebook" />Acessar</a></li>
                        <li className="w-[100%] h-[12vh] bg-gray-900"><a href="" className='flex justify-around items-center h-full text-[30px] text-white font-mono underline hover:cursor-pointer hover:text-gray-500 ' ><img className='w-[50px]' src={TelegramBG} alt="Telegram" />Acessar</a></li>
                        <li className="w-[100%] h-[12vh] bg-gray-900"><a href="" className='flex justify-around items-center h-full text-[30px] text-white font-mono underline hover:cursor-pointer hover:text-gray-500 ' ><img className='w-[50px]' src={EmailBG} alt="Email" />Acessar</a></li>
                    </ul>
                </nav>
            </section>

        </>



    )
}

export default SectionF