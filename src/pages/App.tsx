import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import routes from "../routes";
import { IState } from "../states/reducers";
import { initTags } from "../states/reducers/tagReducer";
import { initTasks } from "../states/reducers/taskReducer";
import { initUser } from "../states/reducers/userReducer";

interface AppProps {
  isAuthenticated: boolean;
}

function App({ isAuthenticated }: AppProps): JSX.Element {
  const dispatch = useDispatch();
  const RoutesToRender = () => useRoutes(routes(isAuthenticated));

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    dispatch(initUser());
    if (isAuthenticated) {
      dispatch(initTasks());
      dispatch(initTags());
    }
    setIsLoading(false);
  }, [isAuthenticated, initUser, initTasks]);

  return (
    <>
      {isLoading && <Spinner color={"indigo"} height={150} width={150} />}
      <RoutesToRender />
    </>
  );
}

const mapStateToProps = (state: IState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
