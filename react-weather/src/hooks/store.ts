import { AppDispatch, RootState } from './../store/store';
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
