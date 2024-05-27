import { useDispatch, useSelector } from "react-redux";
import CheckInButton from "../components/ClockInButton";
import CheckOutButton from "../components/ClockOutButton";
import TimeCard from "../components/TimeCard";
import { UserInfo, selectUser, updateUserInfo } from "../redux/userSlice";
import WorkCard from "../components/WorkCard";
import { useEffect } from "react";
import { fetchClockIn, fetchClockOut, fetchUserInfo } from "../redux/fetch";
import { systemErrorToast } from "../../../util/toast";

function HrApp() {
  const userInfo: UserInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserInfo();
        dispatch(updateUserInfo(data));
      } catch (error) {
        systemErrorToast();
      }
    };
    fetchData();
  }, []);
  const handleClockIn = () => {
    const fetchData = async () => {
      try {
        const data = await fetchClockIn();
        dispatch(updateUserInfo(data));
      } catch (error) {
        systemErrorToast();
      }
    };
    fetchData();
  };
  const handleClockOut = () => {
    const fetchData = async () => {
      try {
        const data = await fetchClockOut();
        dispatch(updateUserInfo(data));
      } catch (error) {
        systemErrorToast();
      }
    };
    fetchData();
  };
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center space-y-4 p-4">
        <TimeCard />
        <WorkCard userInfo={userInfo} />
        {userInfo.user_id !== 0 && userInfo.work_shift.clock_in === 0 && (
          <CheckInButton onClick={handleClockIn} />
        )}
        {userInfo.user_id !== 0 &&
          userInfo.work_shift.clock_in > 0 &&
          userInfo.work_shift.clock_out === 0 && (
            <CheckOutButton onClick={handleClockOut} />
          )}
      </div>
    </>
  );
}

export default HrApp;
