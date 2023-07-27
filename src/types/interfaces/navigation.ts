import {Routes} from '../enums/routes';

export type StackParamsList = {
  [Routes.EDIT_TASK]: {
    id: number;
  };
  [Routes.TAB_NAVIGATION]: undefined;
  [Routes.LIST]: undefined;
  [Routes.ADD_TASK]: undefined;
};
