import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebas";
import { useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { lOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {
  signOut(auth )
    .then(() => {
   
    })
    .catch((error) => {
     
  });
};
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
         
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return() => unsubscribe();
  }, [dispatch]);

  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src= {lOGO}
        alt="logo"
      />
      { user && (
      <div className="flex">
        <img
          className="w-12 h-12 p-2"
          alt="user Icon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">
          
          (Sign Out)
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;
