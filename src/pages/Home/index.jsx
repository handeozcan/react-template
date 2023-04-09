import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserInfo } from '../../features/user/userSlice';

function Home() {
  const user = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUserInfo());
  }, []);
  return (
    <div>
      {user?.map((x) => (
        <span key={x.id}>{x.title}</span>
      ))}
    </div>
  );
}

export default Home;
