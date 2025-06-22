import { useDispatch } from "react-redux";
import { AppDispatch } from "../../provider";


export const useAppDispatch = () => useDispatch<AppDispatch>()