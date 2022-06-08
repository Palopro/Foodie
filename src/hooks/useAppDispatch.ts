import { useDispatch } from 'react-redux';

import { AppDispatch } from '../domain/stores/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
