import '../../tailwind/index.css';
import { Button, Image } from 'react-bootstrap';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='flex justify-center'>
            <div className='w-[820px] h-[550px] flex m-[5%] bg-[#7ed6df] rounded-full'>
                <div className='gap-5 flex flex-row justify-between'>
                    <div className='flex justify-center'>
                        <Image
                            className='m-5 rounded-l-full'
                            src='https://cdn.leonardo.ai/users/e2cd5463-8fab-415d-9ed2-3c4a0a8dcc59/generations/5ff4490d-d2ac-44f5-87c8-a7cf60aae1f6/Leonardo_Diffusion_XL_color_orange_and_blue_portrait_technolog_0.jpg'
                        />
                    </div>
                    <div>
                        <div className='grid grid-rows-3 gap-2 mt-[60px]'>
                            <h1 className='text-[32px] text-black text-center mb-2 w-[250px]'>SIGN IN</h1>
                            <input className='p-4 rounded-lg' type="email" placeholder='Username'/>
                            <input className='p-4 rounded-lg' type="password" placeholder='Password'/>
                            <a
                                className='text-[12px] text-[#ff4500] mt-1 text-right transition ease-in-out delay-150 hover:text-[#ff8243] duration-250'
                                href='http://localhost:3000'>
                                <Link to="/forgot">
                                    Forgot Password?
                                </Link>
                            </a>
                            <p className='text-[12px] mt-1 text-right' href='http://localhost:3000'>Not a Member?
                                <a
                                    className='text-[12px] text-[#ff4500] mt-1 ml-1 text-right transition ease-in-out delay-150 hover:text-[#ff8243] duration-250'
                                    href='http://localhost:3000'>
                                    <Link to="/register">
                                        Register now
                                    </Link>
                                </a>
                            </p>
                            <Button
                                className='text-white mt-2 bg-[#ff4500] w-full h-10 rounded-lg transition ease-in-out delay-150 hover:bg-[#ff8243] duration-250'
                            >
                                Sign in
                            </Button>
                            <p className='text-[12px] mt-2 text-center'>Or continue with</p>
                            <div className='flex flex-row justify-evenly mt-3'>
                                <Button className='flex justify-center place-items-center bg-white w-[60px] h-[60px] rounded-full transition ease-in-out delay-150 hover:bg-[#c0c0c0] duration-250'>
                                    <FcGoogle size={38}/>
                                </Button>
                                <Button className='flex justify-center place-items-center bg-white w-[60px] h-[60px] rounded-full transition ease-in-out delay-150 hover:bg-[#c0c0c0] duration-250'>
                                    <FaApple className='mb-1' size={42}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;