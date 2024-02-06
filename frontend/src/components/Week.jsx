import { Card, CardContent } from "@mui/material";

function Week() {
    return (
        <div className="grid grid-cols-7 grid-rows-1 h-1/2 w-full p-8 divide-x-4">
            
            <div className="sunday flex flex-col justify-center items-center bg-white">
                <p className="text-black">Sunday</p>
            </div>

            <div className="sunday flex flex-col justify-center items-center bg-white">
                <p className="text-black">Monday</p>
            </div>

            <div className="sunday flex flex-col justify-center items-center bg-white">
                <p className="text-black">Tuesday</p>
            </div>

            <div className="sunday flex flex-col justify-center items-center bg-white">
                <p className="text-black">Wednesday</p>
            </div>

            <div className="sunday flex flex-col justify-center items-center bg-white">
                <p className="text-black">Thursday</p>
            </div>

            <div className="sunday flex flex-col justify-center items-center bg-white">
                <p className="text-black">Friday</p>
            </div>

            <div className="sunday flex flex-col justify-center items-center bg-white">
                <p className="text-black">Saturday</p>
            </div>


        </div>
    )
}

export default Week;