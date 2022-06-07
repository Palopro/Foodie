import { TypedUseSelectorHook, useSelector } from 'react-redux';

import type { RootState } from '../domain/stores/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
