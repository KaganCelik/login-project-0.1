import { Link } from 'react-router-dom';
import '../../tailwind/index.css';
import { Image, Button } from 'react-bootstrap';

function Forgot() {

    const recoverSuccess= () => {
        window.alert("Password recovery link has been sent to your email address");
    }

    return (
        <div className='flex justify-center'>
            <div className='w-[820px] h-[550px] flex m-[5%] bg-[#7ed6df] rounded-full'>
                <div className='gap-2 flex flex-row justify-between'>
                    <div className='flex justify-center'>
                        <Image
                            className='m-5 rounded-l-full'
                            src='https://cdn.leonardo.ai/users/e2cd5463-8fab-415d-9ed2-3c4a0a8dcc59/generations/5ff4490d-d2ac-44f5-87c8-a7cf60aae1f6/Leonardo_Diffusion_XL_color_orange_and_blue_portrait_technolog_0.jpg'
                        />
                    </div>
                    <div>
                        <div className='grid grid-rows-3 gap-2 mt-[180px]'>
                            <h1 className='text-[26px] text-black text-center mb-2 w-[250px]'>RECOVER PASSWORD</h1>
                            <input className='p-3 rounded-lg' type="email" placeholder='Email'/>
                            <Button onClick={recoverSuccess}
                                className='text-white mt-2 bg-[#ff4500] w-full h-10 rounded-lg transition ease-in-out delay-150 hover:bg-[#ff8243] duration-250'
                            >
                                Send
                            </Button>
                            <Link to={"/"}>
                                <Button
                                    className='text-white mt-1 bg-[#ff4500] w-full h-10 rounded-lg transition ease-in-out delay-150 hover:bg-[#ff8243] duration-250'
                                >
                                    Go Back
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forgot;