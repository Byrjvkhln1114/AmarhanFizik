import { Link } from "react-router-dom"

export const Footer = () => {
    return <div className="w-[100vw] h-[400px] bg-[#181837]">
        <div className="flex justify-evenly h-[300px]">
            <div className="flex flex-col items-center gap-5 mt-[6vh]">


            <Link to="/"><img className="h-[12vh] w-[5.5vw]" src="Logo.png" alt="" /></Link>
            <div style={{transition:".4s"}} className="w-[17vw] h-[60px] flex justify-center items-center text-[#f3573c] text-[22px] border-[5px] border-[#f3573c] hover:bg-[#f3573c] hover:text-white">
                Contact Us
            </div>
            </div>
            <div className="ml-[10vw] mt-[3vh] gap-5 flex flex-row justify-evenly w-[37vw]">
                 <div className="flex flex-row mt-[3vh]">
                    <div className="w-[2px] h-[300px] bg-[#f3573c]"></div>
                    <div className="flex flex-col justify-evenly h-[300px]" >
                       <Link to="/"> <div style={{transition:".4s"}} className="no-underline w-[100px] text-[#f3573c] flex justify-start ml-[2vw] items-center text-[20px] pt-1 pb-1 hover:bg-[#f3573c] hover:text-white">HOME</div> </Link>
                       <Link to="/Formula"> <div style={{transition:".4s"}} className="no-underline w-[100px] text-[#f3573c] flex justify-start ml-[2vw] items-center text-[20px] pt-1 pb-1 hover:bg-[#f3573c] hover:text-white">FORMULA</div> </Link>
                       <Link to="/Definition"> <div style={{transition:".4s"}} className="no-underline w-[120px] text-[#f3573c] flex justify-start ml-[2vw] items-center text-[20px] pt-1 pb-1 hover:bg-[#f3573c] hover:text-white">DEFINITION</div> </Link>
                       <Link to="/Circuit"> <div style={{transition:".4s"}} className="no-underline w-[100px] text-[#f3573c] flex justify-start ml-[2vw] items-center text-[20px] pt-1 pb-1 hover:bg-[#f3573c] hover:text-white">CIRCUIT</div   > </Link>

                    </div>
                 </div>
                <div className="flex flex-row mt-[3vh]">
                    <div className="w-[2px] h-[300px] bg-[#f3573c]"></div>
                    <div className="flex flex-col justify-evenly h-[300px] ml-[2vw]">
                        <a href="https://www.instagram.com/tmjn_nasa/" target="_blank"><img className="w-[50px]" src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="" /></a>
                        <a href="https://www.facebook.com/lbrl.elberel" target="_blank"><img className="w-[50px]" src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100071565174747" target="_blank"><img className="w-[50px]" src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="" /></a>
                        <a href="https://www.facebook.com/chinbolor.enkhjargal" target="_blank"><img className="w-[50px]" src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="" /></a>
                    </div>
                 </div>
            </div>
    </div> 
    </div>
}