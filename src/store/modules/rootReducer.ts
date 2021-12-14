import { combineReducers } from "redux";

import home from "./home/reducers";
import general from "./general/reducers";
import deposit from "./deposit/reducers";
import user from "./user/reducers";
import sale from "./sale/reducers";

const reducers = combineReducers({
  home,
  general,
  deposit,
  user,
  sale,
});

export default reducers;
