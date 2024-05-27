import { timestampToHHMM } from "../../../util/time";
import { UserInfo } from "../redux/userSlice";

interface WorkCardProps {
  userInfo: UserInfo;
}
function WorkCard({ userInfo }: WorkCardProps) {
  return (
    <div className="w-[350px] h-[256px] rounded-[10px] border-[1px] border-sky-600">
      <div className="w-full h-[50px] bg-sky-600 flex items-center justify-center rounded-t-[10px] mt-[-2px]">
        <span className="text-white font-bold">KẾT QUẢ CHẤM CÔNG</span>
      </div>
      <div className="p-4 flex flex-col justify-around h-[200px]">
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <span className="text-green-500 text-3xl font-bold">
              {timestampToHHMM(userInfo.work_shift.clock_in)}
            </span>
            <span className="text-gray-600">Giờ vào</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-red-500 text-3xl font-bold">
              {timestampToHHMM(userInfo.work_shift.clock_out)}
            </span>
            <span className="text-gray-600">Giờ ra</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-3xl font-bold">
              {timestampToHHMM(userInfo.work_shift.total_time)}
            </span>
            <span className="text-gray-600">Công ngày</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-blue-500 text-3xl font-bold">
              {timestampToHHMM(userInfo.total_time)}
            </span>
            <span className="text-gray-600">Công tháng</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
